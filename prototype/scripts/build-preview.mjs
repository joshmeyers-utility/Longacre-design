// Packs each page into one self-contained HTML file: JS and CSS inline,
// images as data: URIs, fonts from Google Fonts with Material Symbols subset
// to the glyphs in use. Pages link to each other by relative filename
// (index.html ↔ workforce.html), so keep the files in one folder.
//
//   npm run build:preview            → dist/preview/{index,workforce}.html
//   node scripts/build-preview.mjs <dir>
//
// Each page is built on its own (PAGE=<name>, see vite.config.ts) so its
// bundle is a single file with nothing shared to stitch back together.
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const outDir = process.argv[2] ?? join(root, 'dist', 'preview');

const pages = [
  { id: 'index', title: 'Homer City Energy Campus', description: 'Facts, figures and construction updates from the Homer City Energy Campus in Indiana County, Pennsylvania.' },
  { id: 'workforce', title: 'Careers — Homer City Energy Campus', description: 'The trades, figures and hiring contact for the Homer City Energy Campus workforce.' },
];

// Icons in use across all pages — keep in sync when adding an <Icon name=…>.
// Alphabetical, as the Google Fonts API requires.
const icons = [
  'add', 'arrow_forward', 'carpenter', 'close', 'construction', 'electrical_services',
  'engineering', 'fact_check', 'front_loader', 'local_fire_department', 'local_shipping',
  'menu', 'photo_camera', 'plumbing', 'report', 'settings', 'view_in_ar',
].sort();
const fonts =
  'https://fonts.googleapis.com/css2?family=Geist:wght@300..700' +
  '&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..24,300,0,0' +
  `&icon_names=${icons.join(',')}&display=block`;

const mime = { webp: 'image/webp', jpg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml' };
mkdirSync(outDir, { recursive: true });

for (const page of pages) {
  execSync('npx vite build --logLevel error', { cwd: root, stdio: 'inherit', env: { ...process.env, PAGE: page.id } });
  const dist = join(root, `dist-${page.id}`, 'assets');
  const assets = readdirSync(dist);
  const read = (ext) => {
    const f = assets.find((a) => a.endsWith(ext));
    if (!f) throw new Error(`no ${ext} in ${dist}`);
    return readFileSync(join(dist, f), 'utf8');
  };

  let css = read('.css')
    // Self-hosted faces point at local files; Google Fonts replaces them.
    .replace(/@font-face\s*\{[^}]*\}/g, '')
    // tokens.css imports the full, unsubset icon font — drop it.
    .replace(/@import\s*(?:url\()?["']?[^;]*fonts\.googleapis[^;]*;/g, '');
  let js = read('.js');
  if (js.includes('</script')) js = js.replaceAll('</script', '<\\/script');

  for (const f of assets) {
    const ext = f.split('.').pop();
    if (!mime[ext]) continue;
    const uri = `data:${mime[ext]};base64,${readFileSync(join(dist, f)).toString('base64')}`;
    js = js.replaceAll(`/assets/${f}`, uri);
    css = css.replaceAll(`/assets/${f}`, uri);
  }

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fonts}">
<style>${css}</style>
</head>
<body>
<div id="root"></div>
<script type="module">${js}</script>
</body>
</html>
`;
  const out = join(outDir, `${page.id}.html`);
  writeFileSync(out, html);
  console.log(`wrote ${out} (${(html.length / 1024).toFixed(0)} KB)`);
}
