/**
 * Writes every page to the folder above as plain HTML. Run with
 * `node src/build.mjs` from `prototype-editorial/`. No dependencies.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as pages from './pages.mjs';

const out = join(dirname(fileURLToPath(import.meta.url)), '..');

const files = {
  'index.html': pages.home(),
  'campus.html': pages.campus(),
  'history.html': pages.history(),
  'workforce.html': pages.workforce(),
  'community.html': pages.community(),
  'faq.html': pages.faq(),
  'news.html': pages.news(),
  'news-workforce-1800.html': pages.newsItem(),
  'contact.html': pages.contact(),
  'partners.html': pages.redirect('Campus partners', 'community.html#partners'),
  'commitments.html': pages.redirect('Our commitments', 'community.html#commitments'),
  'voices.html': pages.redirect('Voices', 'community.html#voices'),
};

for (const [name, html] of Object.entries(files)) {
  writeFileSync(join(out, name), html);
  console.log(`${name}\t${(html.length / 1024).toFixed(1)} KB`);
}
