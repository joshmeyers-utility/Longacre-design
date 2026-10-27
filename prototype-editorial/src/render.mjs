/**
 * Shared parts: the document shell, header, menu, footer, and the small
 * components every page composes (figures, ledger, media frame, flags,
 * FAQ rows, milestone phases). Plain strings in, plain HTML out — no
 * runtime framework, so the output is what Webflow would hold.
 *
 * Class names are flat, Client-First style (`block_element`, `is-state`),
 * and every colour, size and duration is a token in site.css.
 */
import * as c from './content.mjs';

export const icons = [
  'add', 'arrow_back', 'arrow_downward', 'arrow_forward', 'arrow_outward', 'bolt', 'carpenter', 'close', 'construction',
  'content_copy', 'domain', 'electrical_services', 'engineering', 'front_loader', 'handshake', 'health_and_safety',
  'local_fire_department', 'local_shipping', 'menu', 'payments', 'plumbing', 'remove', 'school', 'search', 'settings',
  'shield', 'volunteer_activism', 'water_drop',
].sort();

export const icon = (name, lg = false) => `<span class="icon${lg ? ' is-lg' : ''}" aria-hidden="true">${name}</span>`;
export const srOnly = (text) => `<span class="sr-only">${text}</span>`;

/* ---------------------------------------------------------- Review flags */

/**
 * Provenance below canonical renders a flag. Hidden unless the page is
 * opened with ?notes=on, so published copy and production notes never
 * share a surface by accident (CLAUDE.md §7).
 */
export function flag(p) {
  if (!p || p.tier === 'canonical') return '';
  const label = p.tier === 'unsourced' ? 'Not sourced, cannot ship' : 'Confirm before launch';
  return `<p class="flag is-${p.tier}" hidden><span class="flag_label">${label}.</span> ${p.note}</p>`;
}

/* ----------------------------------------------------------- Media frame */

/**
 * A photograph in a frame. The production brief sits *inside* the frame
 * (where the real photograph will cover it) and only with notes on; the
 * caption, date and kind sit outside it. A slot with no photo renders a
 * labelled empty frame, never a wrong picture.
 */
export function picture(media, { sizes = '100vw', eager = false, cls = '' } = {}) {
  const n = media.photo;
  if (!n) return '';
  const p = c.photos[n];
  const style = p.focus ? ` style="object-position:${p.focus}"` : '';
  return `<img class="${cls}" src="img/${n}.webp" srcset="img/${n}-sm.webp 320w, img/${n}.webp ${p.w}w" sizes="${sizes}" width="${p.w}" height="${p.h}" alt="${p.alt}"${style}${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;
}

export function mediaFrame(media, { ratio = '4/3', sizes = '100vw', cls = '', caption = true, inner = '' } = {}) {
  const img = media.photo
    ? picture(media, { sizes })
    : `<span class="media_empty"><span class="eyebrow">No photograph yet</span></span>`;
  const brief = `<span class="media_brief" hidden><span class="flag_label">Image brief.</span> ${media.brief}</span>`;
  const cap = caption && (media.caption || media.date)
    ? `<figcaption class="caption">${media.caption ? `<span>${media.caption}</span>` : ''}${media.date ? `<span>${media.date}</span>` : ''}<span>${media.kind}</span></figcaption>`
    : '';
  return `<figure class="media ${cls}"><div class="media_frame" style="aspect-ratio:${ratio}">${img}${inner}${brief}</div>${cap}</figure>`;
}

/* --------------------------------------------------------------- Figures */

/** The navy (or light) stat ledger: qualifier above, figure, label, footnote beneath the label. */
export function figures(stats, { light = false, cls = '' } = {}) {
  const rows = stats
    .map((s) => {
      const q = s.qualifier ? `<p class="eyebrow figure_qualifier">${s.qualifier}</p>` : `<p class="eyebrow figure_qualifier" aria-hidden="true">&nbsp;</p>`;
      const unit = s.unit ? `<span class="figure_unit">${s.unit}</span>` : '';
      const fn = s.footnote ? `<p class="footnote">${c.footnotes[s.footnote]}</p>` : '';
      const asOf = s.asOf ? `<p class="eyebrow">${s.asOf}</p>` : '';
      return `<div class="figure" data-reveal><div class="figure_top">${q}<p class="figure_value">${s.figure}${unit}</p></div><div class="figure_bottom"><p class="figure_label">${s.label}</p>${asOf}${fn}${flag(s.provenance)}</div></div>`;
    })
    .join('');
  return `<div class="figures${light ? ' is-light' : ''} ${cls}">${rows}</div>`;
}

/** The workforce ledger: figure left, explanation hard right, hairline binding the row. */
export function ledger(stats, { flags = true } = {}) {
  return `<div class="ledger">${stats
    .map(
      (s) => `<div class="ledger_row" data-reveal><p class="ledger_value">${s.figure}</p><div class="ledger_text"><p>${s.label}</p>${s.asOf ? `<p class="eyebrow">${s.asOf}</p>` : ''}${s.footnote ? `<p class="footnote">${c.footnotes[s.footnote]}</p>` : ''}${flags ? flag(s.provenance) : ''}</div></div>`,
    )
    .join('')}</div>`;
}

/* ---------------------------------------------------------------- Giant */

export const giant = (word, fit = '') => `<div class="giant" aria-hidden="true"><p class="giant_word ${fit}" data-giant>${word}</p></div>`;

/* ------------------------------------------------------------------ FAQ */

export function faqRows(items, { withSource = false, idPrefix = 'faq' } = {}) {
  return items
    .map((f) => {
      const id = `${idPrefix}-${f.id}`;
      const answer = f.answer ? `<p>${f.answer}</p>` : `<p class="text-secondary">This answer has not been written yet.</p>`;
      const fn = f.footnote ? `<p class="footnote"><sup>${f.footnote}</sup> ${c.footnotes[f.footnote]}</p>` : '';
      const src = withSource && f.answer ? `<p class="eyebrow">Source: ${c.sourceNames[f.provenance.source]}</p>` : '';
      const draft = !f.answer ? ' is-draft' : '';
      return `<div class="faq_row${draft}" id="${f.id}" data-reveal data-q="${f.question.toLowerCase().replace(/"/g, '')}"${draft ? ' hidden' : ''}>
  <h3 class="faq_heading"><button class="faq_toggle" type="button" id="${id}-q" aria-expanded="false" aria-controls="${id}-a">${f.question} ${icon('add', true)}</button></h3>
  <div class="faq_body" id="${id}-a" role="region" aria-labelledby="${id}-q"><div class="faq_answer">${answer}${fn}${src}${flag(f.provenance)}</div></div>
</div>`;
    })
    .join('\n');
}

/* ------------------------------------------------------------- Timeline */

/** Key milestones, grouped by phase, on navy. The year label sticks while its rows pass. */
export function phases(milestones) {
  const years = ['2025', '2026', 'Upcoming'];
  return `<div class="phases">${years
    .map((y) => {
      const items = milestones.filter((m) => m.year === y);
      return `<div class="phase${y === 'Upcoming' ? ' is-upcoming' : ''}" data-rail>
  <div class="phase_label"><p class="phase_year">${y}</p><h3 class="phase_name">${c.milestonePhases[y]}</h3></div>
  <ol class="phase_list">${items
    .map((m) => `<li class="milestone-row" id="milestone-${m.id}" data-reveal><span class="milestone-row_when">${m.month}</span><p class="milestone-row_what">${m.title}</p></li>`)
    .join('')}</ol>
</div>`;
    })
    .join('')}</div>`;
}

/* ---------------------------------------------------------------- Shell */

function alertBar() {
  return `<div class="alert-bar" id="alert" role="status" data-alert-id="${c.alert.id}">
  <div class="container alert-bar_inner">
    ${icon('construction')}
    <p class="alert-bar_text"><span class="alert-bar_label">Construction update.</span> ${c.alert.message}</p>
    <button class="alert-bar_close" type="button" id="alert-close" aria-label="Dismiss construction update">${icon('close')}</button>
  </div>
  <div class="container">${flag(c.alert.provenance)}</div>
</div>`;
}

function header(page, onPhoto) {
  const cur = (p) => (p === page ? ' aria-current="page"' : '');
  const links = [
    ['The campus', 'campus.html', 'campus'], ['About', 'history.html', 'history'], ['Careers', 'workforce.html', 'workforce'],
    ['Community', 'community.html', 'community'], ['FAQs', 'faq.html', 'faq'], ['News &amp; resources', 'news.html', 'news'],
  ];
  return `<header class="site-header${onPhoto ? '' : ' is-plain'}" id="header">
  <div class="container site-header_bar">
    <a class="site-header_logo" href="index.html" aria-label="Homer City Energy Campus, home"><img class="site-header_logo-image" src="img/logo.webp" alt="" width="155" height="32"></a>
    <nav class="site-header_nav" aria-label="Primary">
      ${links.map(([l, h, p]) => `<a class="site-header_link" href="${h}"${cur(p)}>${l}</a>`).join('\n      ')}
    </nav>
    <a class="button is-inverse site-header_cta" href="contact.html"${cur('contact')}>Contact</a>
    <button class="menu-button" type="button" id="menu-open" aria-expanded="false" aria-controls="site-menu"><span class="menu-button_text">Menu</span><span class="menu-button_lines" aria-hidden="true"><span></span><span></span></span>${srOnly('Open menu')}</button>
  </div>
</header>`;
}

function menu(page) {
  return `<div class="site-menu" id="site-menu" role="dialog" aria-modal="true" aria-label="Menu" inert>
  <div class="container">
    <div class="site-menu_bar">
      <a class="site-header_logo" href="index.html" aria-label="Homer City Energy Campus, home"><img class="site-header_logo-image" src="img/logo.webp" alt="" width="155" height="32"></a>
      <button class="site-menu_close" type="button" id="menu-close">Close ${icon('close', true)}</button>
    </div>
    <ul class="site-menu_list">
      ${c.nav
        .map((n) => `<li class="site-menu_item"><a class="site-menu_link" href="${n.href}"${n.page === page ? ' aria-current="page"' : ''}><span>${n.label}</span>${icon('arrow_forward', true)}</a></li>`)
        .join('\n      ')}
    </ul>
    <div class="site-menu_foot">
      <a class="button is-primary" href="workforce.html#apply">Find work on the campus ${icon('arrow_forward')}</a>
      <a class="text-link" href="contact.html">Get in touch ${icon('arrow_forward')}</a>
    </div>
  </div>
</div>`;
}

export function footer(page) {
  return `<footer class="site-footer" id="contact">
  <div class="container">
    <p class="eyebrow footer_eyebrow">Get in touch</p>
    <p class="footer_lede" data-reveal>Four inboxes, so your question reaches the right people.</p>
    <ul class="contacts">
      ${c.contacts
        .map(
          (r) => `<li class="contact" data-reveal><span class="eyebrow">${r.audience}</span><span class="contact_row"><a class="contact_email" href="mailto:${r.email}">${r.email}</a><button class="copy-button" type="button" data-copy="${r.email}" aria-label="Copy the ${r.audience.replace('&amp;', 'and').toLowerCase()} address">${icon('content_copy')}</button></span></li>`,
        )
        .join('\n      ')}
    </ul>
    <div class="footer_grid">
      <div class="footer_col" data-reveal>
        <p class="eyebrow">Location</p>
        <address class="lede">${c.site.name}<br>${c.site.address.join('<br>')}</address>
      </div>
      <div class="footer_col" data-reveal>
        <p class="eyebrow">Pages</p>
        <nav class="footer_nav" aria-label="Footer">
          ${c.footerNav.map((n) => `<a href="${n.href}"${n.page === page ? ' aria-current="page"' : ''}>${n.label}</a>`).join('')}
        </nav>
      </div>
      <div class="footer_col" data-reveal>
        <p class="eyebrow">Sources</p>
        <p class="footnote footer_sources">Figures from the Homer City Energy Campus fact sheet (May 2026) and site tour deck (July 2026), unless dated otherwise.</p>
      </div>
    </div>
    <div class="footer_base"><span>© 2026 Homer City Generation</span><span>Design prototype, not the live site</span></div>
  </div>
  <p class="footer_word" aria-hidden="true" data-giant>Energy Campus</p>
</footer>`;
}

/**
 * The page shell. `onPhoto` says whether the header starts over a
 * photograph (white type, transparent bar) or over the white page.
 */
export function shell({ page, title, description, body, onPhoto = false, scripts = [] }) {
  const fullTitle = page === 'home' ? 'Homer City Energy Campus' : `${title} · Homer City Energy Campus`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${fullTitle}</title>
<meta name="description" content="${description}">
<meta name="view-transition" content="same-origin">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..700;1,300..500&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..24,300,0,0&icon_names=${icons.join(',')}&display=block">
<link rel="stylesheet" href="site.css">
</head>
<body class="page-${page}${onPhoto ? ' has-photo-hero' : ''}">
<a class="skip-link" href="#main">Skip to content</a>
${alertBar()}
${header(page, onPhoto)}
${menu(page)}
<main id="main">
${body}
</main>
${footer(page)}
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<script src="site.js"></script>
${scripts.map((s) => `<script src="${s}"></script>`).join('\n')}
</body>
</html>
`;
}

/* ------------------------------------------------------- Page hero parts */

/**
 * The inner-page opening: a short framed photograph carrying one giant
 * word, then the headline and intro on white. Pages with no photograph
 * that fits skip the frame and open on the white intro alone.
 */
export function pageHero({ word, media, headline, intro, actions = '', id = 'page-title', eyebrow = '' }) {
  const frame = media
    ? `<section class="hero" aria-label="${word}">
    <div class="hero_frame is-short on-photo">
      <div class="hero_media">${picture(media, { sizes: '100vw', eager: true })}<div class="hero_scrim"></div></div>
      <div class="hero_bottom"><p class="hero_word" aria-hidden="true" data-giant><span>${word}</span></p></div>
      ${media.brief ? `<p class="media_brief hero_brief" hidden><span class="flag_label">Image brief.</span> ${media.brief}</p>` : ''}
    </div>
  </section>`
    : '';
  return `${frame}
  <section class="page-intro${media ? '' : ' is-bare'}" aria-labelledby="${id}">
    <div class="container centred">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h1 class="statement" id="${id}" data-reveal>${headline}</h1>
      <p class="lede text-secondary page-intro_lede" data-reveal>${intro}</p>
      ${actions ? `<div class="button-row" data-reveal>${actions}</div>` : ''}
    </div>
  </section>`;
}

/** A closing "where next" band on near-white: statement, line, one action. */
export function closing({ id, heading, body, action, extra = '' }) {
  return `<section class="section is-subtle" aria-labelledby="${id}">
    <div class="container centred">
      <h2 class="statement" id="${id}" data-reveal>${heading}</h2>
      <p class="lede text-secondary" style="max-width:36rem" data-reveal>${body}</p>
      <div class="button-row" data-reveal>${action}</div>
      ${extra}
    </div>
  </section>`;
}

export const button = (href, label, tier = 'primary', ic = 'arrow_forward') => `<a class="button is-${tier}" href="${href}">${label} ${icon(ic)}</a>`;
export const textLink = (href, label, ic = 'arrow_forward', ext = false) =>
  `<a class="text-link" href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''}>${label} ${icon(ic)}${ext ? srOnly('(opens in a new tab)') : ''}</a>`;
