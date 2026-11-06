// Usage: node capture.js <list.json> <outDir>
// list.json: [{ "slug": "tideway-home", "url": "https://..." }, ...]
// Writes per slug: <slug>-desktop.jpg (1440x900), <slug>-desktop-full.jpg
// (full page, capped at 6000px), <slug>-mobile.jpg (375x812 @2x), and
// <slug>-styles.json (computed fonts/colours of key elements).
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const [, , listFile, outDir] = process.argv;
const list = JSON.parse(fs.readFileSync(listFile, 'utf8'));
fs.mkdirSync(outDir, { recursive: true });
const COOKIE = [/accept all/i, /^accept$/i, /allow all/i, /^agree$/i, /^i agree$/i, /^ok$/i, /got it/i, /accept cookies/i, /^close$/i];
async function dismiss(page) {
  for (const re of COOKIE) {
    const b = page.getByRole('button', { name: re }).first();
    try { if (await b.isVisible({ timeout: 300 })) { await b.click({ timeout: 1500 }); await page.waitForTimeout(500); return; } } catch {}
  }
}
async function styles(page) {
  return page.evaluate(() => {
    const pick = sel => { const el = document.querySelector(sel); if (!el) return null;
      const s = getComputedStyle(el); return { sel, text: (el.innerText || '').trim().slice(0, 80),
        fontFamily: s.fontFamily, fontSize: s.fontSize, fontWeight: s.fontWeight, letterSpacing: s.letterSpacing,
        textTransform: s.textTransform, color: s.color, background: s.backgroundColor }; };
    const loaded = [...document.fonts].filter(f => f.status === 'loaded').map(f => `${f.family} ${f.weight} ${f.style}`);
    return { title: document.title, body: pick('body'), h1: pick('h1'), h2: pick('h2'), h3: pick('h3'), p: pick('main p') || pick('p'),
      a: pick('main a') || pick('a'), button: pick('button, .button, .btn, a[class*=button]'), header: pick('header'), footer: pick('footer'),
      fontsLoaded: [...new Set(loaded)].slice(0, 30) };
  });
}
(async () => {
  const browser = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const results = [];
  for (const { slug, url } of list) {
    const r = { slug, url };
    try {
      const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
      const page = await ctx.newPage();
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      r.status = resp && resp.status();
      await page.waitForTimeout(3000); await dismiss(page);
      await page.screenshot({ path: path.join(outDir, `${slug}-desktop.jpg`), type: 'jpeg', quality: 72 });
      const h = await page.evaluate(() => document.body.scrollHeight);
      // scroll through to trigger lazy content, then full page capped
      for (let y = 0; y < Math.min(h, 6000); y += 800) { await page.evaluate(v => window.scrollTo(0, v), y); await page.waitForTimeout(250); }
      await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(outDir, `${slug}-desktop-full.jpg`), type: 'jpeg', quality: 60, fullPage: h <= 6000,
        clip: h > 6000 ? { x: 0, y: 0, width: 1440, height: 6000 } : undefined });
      r.styles = await styles(page);
      await ctx.close();
      const m = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' });
      const mp = await m.newPage();
      await mp.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }); await mp.waitForTimeout(3000); await dismiss(mp);
      await mp.screenshot({ path: path.join(outDir, `${slug}-mobile.jpg`), type: 'jpeg', quality: 72 });
      await m.close();
      r.ok = true;
    } catch (e) { r.ok = false; r.error = e.message.split('\n')[0]; }
    fs.writeFileSync(path.join(outDir, `${slug}-styles.json`), JSON.stringify(r, null, 2));
    results.push({ slug, url, ok: r.ok, status: r.status, error: r.error });
    console.log(JSON.stringify(results[results.length - 1]));
  }
  await browser.close();
})();
