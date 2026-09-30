// Packs the production build into one self-contained HTML page for sharing
// as a hosted preview: JS and CSS inline, fonts from Google Fonts (the only
// font host such previews allow) with Material Symbols subset to the glyphs
// the page uses. Run after `vite build`: `npm run build:preview`.
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const out = process.argv[2] ?? join(dist, 'preview.html');
const assets = readdirSync(join(dist, 'assets'));
const read = (ext) => {
  const f = assets.find((a) => a.endsWith(ext));
  if (!f) throw new Error(`no ${ext} in dist/assets — run vite build first`);
  return readFileSync(join(dist, 'assets', f), 'utf8');
};

// Icons in use — keep in sync when adding an <Icon name=…>. Alphabetical,
// as the Google Fonts API requires.
const icons = [
  'add', 'arrow_forward', 'carpenter', 'close', 'construction', 'electrical_services',
  'engineering', 'fact_check', 'front_loader', 'local_fire_department', 'local_shipping',
  'menu', 'photo_camera', 'plumbing', 'report', 'settings', 'view_in_ar',
].sort();

let css = read('.css')
  // Self-hosted faces point at local files; Google Fonts replaces them.
  .replace(/@font-face\s*\{[^}]*\}/g, '')
  // tokens.css imports the full, unsubset icon font — drop it.
  .replace(/@import\s*(?:url\()?["']?[^;]*fonts\.googleapis[^;]*;/g, '');
let js = read('.js');
if (js.includes('</script')) js = js.replaceAll('</script', '<\\/script');

// Images ship inside the page as data: URIs (previews allow no other host).
const mime = { webp: 'image/webp', jpg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml' };
for (const f of assets) {
  const ext = f.split('.').pop();
  if (!mime[ext]) continue;
  const uri = `data:${mime[ext]};base64,${readFileSync(join(dist, 'assets', f)).toString('base64')}`;
  js = js.replaceAll(`/assets/${f}`, uri);
  css = css.replaceAll(`/assets/${f}`, uri);
}

const fonts =
  'https://fonts.googleapis.com/css2?family=Geist:wght@300..700' +
  '&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..24,300,0,0' +
  `&icon_names=${icons.join(',')}&display=block`;

const html = `<title>Homer City Energy Campus</title>
<meta name="description" content="Homer City Energy Campus homepage.">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fonts}">
<style>${css}</style>
<div id="root"></div>
<script type="module">${js}</script>
`;
mkdirSync(join(out, '..'), { recursive: true });
writeFileSync(out, html);
console.log(`wrote ${out} (${(html.length / 1024).toFixed(0)} KB)`);
