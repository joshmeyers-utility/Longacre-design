# Prototype — editorial direction, every page

The second design direction (the 2 October "Homer City Editorial Homepage"
artifact) carried across the whole site: the same nine pages, copy,
figures, photographs and content rules as the T1-style prototype in
`prototype/`, reset in the editorial language. Plain HTML, CSS and JS.
No framework, no build dependencies. It ports to Webflow; it does not deploy.

## Run it

```sh
cd prototype-editorial
node src/build.mjs        # writes every *.html from src/
python3 -m http.server    # or any static server; then open index.html
```

Review notes (provenance flags, image briefs, FAQ questions with no sourced
answer, draft news items) are hidden by default. `?notes=on` shows them for
the rest of the tab; `?notes=off` hides them again.

## Pages

| File | Page | Opens with |
| --- | --- | --- |
| `index.html` | Home | Framed aerial, the positioning statement as headline |
| `campus.html` | The campus | Framed photo, the word *The campus* |
| `history.html` | Who we are (Our history) | Framed photo, *History* |
| `workforce.html` | Careers | Framed photo, *Careers* |
| `community.html` | Community, with Partners, Commitments and Voices as sections | Framed photo, *Community* |
| `faq.html` | FAQs | White intro only |
| `news.html`, `news-workforce-1800.html` | News and the one sourced item | White intro only |
| `contact.html` | Contact | White intro only |
| `partners.html`, `commitments.html`, `voices.html` | Redirect stubs into Community | — |

Seven top-level nav links, as the T1 artifact settled on. The header is the
editorial one: Menu on the left, the mark in the centre, Careers, FAQs and a
Contact pill on the right. The menu is full screen at every width and lists
all seven pages. Over a photograph the bar is white type on the frame; once
the frame has scrolled past, it docks as a white bar.

## How it is put together

| Path | What |
| --- | --- |
| `src/content.mjs` | Every string, figure and photo slot, ported field-for-field from `prototype/src/content/*.ts`. Each block is commented with its source in `docs/source/`. |
| `src/render.mjs` | The shell (head, alert, header, menu, footer) and the shared parts: figures, ledger, media frame, flags, FAQ rows, milestone phases, page hero. |
| `src/pages.mjs` | One function per page. |
| `src/build.mjs` | Writes the HTML files. |
| `site.css` | All styling. Flat Client-First class names; semantic tokens only. |
| `site.js` | Header docking, menu, accordions, copy buttons, reveals, rails, parallax, pinned pillars, stage strips. |
| `faq.js` | FAQ search and category filter. |
| `img/` | The seven supplied photographs (full and 320px), the logo. |

## The editorial language, applied

- **Framed photograph** with one giant word across its foot on every page
  that has a photograph that fits. FAQs, News and Contact open on white,
  since a photograph would be decoration there.
- **Giant cropped words** on navy introduce every ledger: *By the numbers*,
  *At a glance*, *Stage by stage*, *Key milestones*, *Who does what*,
  *Meeting the county*, *In this release*. A word that would lose more than
  a third of itself is sized to fit instead.
- **Centred statements** on white between sections; hairlines divide, nothing
  is boxed. Grounds alternate white / near-white / navy.
- **Stats are a ledger.** Qualifier above the figure, label beside or below,
  the two required footnotes under their labels, inside the rule.
- **Photographs drift** inside their frames as the page scrolls (±6%),
  from 768px up. Never on phones.

## Motion → Webflow Interactions 2.0

Every effect is CSS plus one scroll-progress number. No GSAP.

| Effect | Trigger | Targets |
| --- | --- | --- |
| Page fades up from navy (0.8s); hero headline rises in, intro follows | Page load | `body`, `hero_line`, `hero_intro`, `hero_word span` |
| Hero photograph settles from 1.06 to 1 over 2.4s | Page load | `hero_media img` |
| Cross-fade between pages | Native view transition (`meta name="view-transition"` in site-wide head code) | root |
| Fade and rise 28px (0.8s / 1.2s), 70ms sibling stagger | Scroll into view | every `[data-reveal]`: figures, ledger rows, tour stops, stages, milestones, FAQ rows, trades, partners, commitments, footer columns |
| Seven turbine units grow up in turn | Scroll into view | `unit` |
| Rails fill top to bottom | While scrolling in view | `tour_list`, `phase_list`, homepage `timeline` (`--rail-progress`) |
| Photographs drift inside their frame | While scrolling in view | `[data-parallax] img` (`--drift`) |
| Giant words slide 4vw leftwards as they pass | While scrolling in view | `[data-giant]` (`--shift`) |
| Growth chart bars draw | While scrolling in view | `chart_bar` (`--draw`) |
| Pillars pin for 3.6 screens; each opens over a quarter; photo cross-fades | While scrolling in view, sticky `pillars_stage` | `pillar`, `pillars_frame` |
| Pillar title jumps the page to its quarter | Click | `pillar_toggle` |
| Opened content fades in | Click | `faq_body`, `trade_body`, `pillar_panel` |
| Menu fades in; links rise 16px, 40ms apart | Click | `site-menu`, `site-menu_item` |
| Marquee of the four pillars | Always (paused on hover) | `marquee_track` |
| Link underline draws, icon nudges 3px; pills press to 0.985 | Hover / press | `text-link`, `button`, `round-button` |
| Stage card photo scales 1.03 | Hover | `stage_frame img` |

One ease-out curve for everything that appears, `cubic-bezier(.16,1,.3,1)`;
`cubic-bezier(.2,0,0,1)` for hover and press. Reduced motion collapses every
duration to 1ms, unpins the pillars (plain accordion), fills every rail and
stops the marquee.

Pinning needs height as well as width: the pillars pin only from 1024px wide
and 640px tall. Below that they stack and open on tap.

## Content rules it enforces

- Nothing unsourced ships silently: amber *Confirm before launch* and red
  *Not sourced, cannot ship* flags, image briefs inside the frame, captions
  outside it with Photograph / Rendering stated.
- 10,000+ and ~1,000 carry the fact sheet's footnotes under their labels.
- *Up to*, *Projected*, *Anticipated* sit above their figures.
- 1,800+ carries *As of September 2026*.
- The water question keeps its place with no answer (shown with notes on).
- "Coal" does not appear.

## Before this goes to Webflow

- **Icons:** load Material Symbols Rounded from Google Fonts with
  `&icon_names=` listing the 28 glyphs in `src/render.mjs`.
- **Giant words:** the fit-to-width is a six-line embed; or set per-word
  sizes by hand in the Designer.
- **FAQ search and chips:** `faq.js` as an embed, or Finsweet CMS Filter.
- **Stage strips:** a CMS list in a flex row with `overflow-x: auto` and
  scroll snap as custom properties; the arrows are a small embed.
- **Pillars:** `position: sticky` and `height: 360svh` are custom values;
  switching the open pillar from scroll position needs the embed in
  `site.js`; the click accordion works without it.
- **View transitions:** one line of site-wide head code.
- **Review flags:** a CMS switch per item; the `?notes=on` reading is
  prototype-only.
