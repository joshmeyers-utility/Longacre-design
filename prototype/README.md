# Prototype — every page in the nav

A React + TypeScript reference implementation of the homepage and every
page the nav links to (table below), laid out after
the Figma direction board (file `K7Mb6ksBE9it30ff9gb9CA`, Page 1) and styled
entirely from `../design-system/tokens.css`. It ports to Webflow; it does not
deploy.

## Run it

```sh
cd prototype
npm install
npm run dev        # http://localhost:5173, then /campus.html, /faq.html …
```

Each page is its own HTML file, as it will be in Webflow, so moving between
them is a real page load and the cross-page fade runs.

- Review notes (provenance flags, placeholder-image tags, and FAQ questions
  with no sourced answer) are hidden by default. `?notes=on` shows them.
- `npm run build:preview` writes every page to `dist/preview/`: each page as one self-contained file (JS and
  CSS inline, fonts from Google Fonts with the icon font subset to the glyphs
  in use) that opens straight from disk. They link to each other by filename,
  so keep them in one folder. `node scripts/build-preview.mjs <dir> --hosted`
  is the version for a shareable link: it adds a small "Design prototype · not
  the live site" corner tag, since a hosted page must never pass for the
  client's live site. Add any new icon name to the list in
  `scripts/build-preview.mjs`. A new page needs an HTML file, a
  three-line entry in `src/` (`mountPage(<ThePage />)`), and a line in both
  that script's page list and `vite.config.ts`.
- `npm run build` typechecks and builds to `dist/`.
- To bring the alert back after dismissing it, clear site data for
  `localhost:5173` (it is stored under `hcec-alert-dismissed`).

## How it is put together

| Path | What |
| --- | --- |
| `src/content/types.ts` | Content model. Mirrors the Webflow CMS collections (`docs/02-plan.md` §6). A `Stat` cannot exist without its provenance; footnotes and "as of" dates are fields, not strings. |
| `src/content/home.ts` | Every homepage string, each block commented with its source in `docs/source/`. Also the nav, and `pageHref`, which makes homepage-section links work from other pages. |
| `src/content/workforce.ts` | Every Careers-page string and figure, sourced the same way. Says what the page leaves out and why. |
| `src/components/primitives.tsx` | Icon, Button, Flag, MediaFrame, SectionHead. |
| `src/components/Header.tsx` | Alert banner, header, nav pill, mobile menu. |
| `src/components/Sections.tsx` | The homepage sections, plus `StatBlock` and `SiteFooter`, shared with other pages. |
| `src/content/campus.ts` | Every Campus-page string, sourced the same way. Says what the page leaves out (water source, fuel agreements, site map) and why. |
| `src/components/PageHero.tsx` | The inner-page hero, shared by The Campus and Careers. |
| `src/pages/Campus.tsx` | The Campus page: hero, figures, site tour, photo essay, timeline, questions. |
| `src/pages/Workforce.tsx` | The Careers page: hero, figures, growth chart, trade tiles, apprentices, long view, how to apply. |
| `src/content/{contact,faq,news,community,history}.ts` | The other pages' content, sourced the same way. Each file's header says what it leaves out and why. |
| `src/components/Page.tsx` | `PageShell` (skip link, alert, hero, main, footer, reveals) and `mountPage`, used by every inner page. |
| `src/components/LinkTile.tsx` | The trade tile, shared by Careers and Campus partners. |
| `src/pages/*.tsx` | One component per page. |
| `*.html`, `src/*.tsx` | One HTML file and entry per page. |
| `src/styles/site.css` | All styling. Flat Client-First class names, role tokens only. |

Fonts are self-hosted from npm (Geist, Material Symbols Rounded), so it runs
offline.

## Header and menu

One ink bar with the logo inside it (T1), on every ground: photo, white or
ink. At rest it sits at the top of the hero; scrolled past, it docks to the
top of the window and stays there, switching to raised grey so it stands off
ink sections too. A slot keeps its resting height, so docking never moves
the page, and anchor jumps stop below it (`scroll-padding-top`). Webflow:
Interactions 2.0 "page scrolled" adds `is-docked` to `site-header`.

**What is in it.** Five headings, as T1 has, from the sitemap in
`docs/02-plan.md` §2. Every entry is a page, never a jump to a section, and
every page in the prototype has a home in it:

| Heading | Pages |
| --- | --- |
| The campus | Overview (`campus.html`) |
| Who we are | Our history (`history.html`), Careers (`workforce.html`) |
| Community | Overview (`community.html`), Campus partners, Our commitments, Voices |
| Resources | FAQs (`faq.html`), News (`news.html`, and its item pages) |
| Contact | — a page of its own (`contact.html`); its column stays empty |

The heading a page sits under stays white while you are on it. A page with
no `href` in `content/home.ts` shows grey with a small "Soon", is not a link
and is skipped by Tab; none is left, but the state stays for the next page
the sitemap adds.

**Layout (from 1024px).** T1's, copied: one dark shape. The bar is 60px
with 24px corners; open, the solid ink panel drops behind it from its top
edge, so bar and panel read as one surface with the (raised grey) bar
sitting on it. Bar and panel share one grid: row 1 is the logo and the
five headings, spread with the same gap between every pair
(`justify-content: space-between`, the logo offset by a heading's side
padding so the ends match). Row 2 holds each heading's pages in its own
column, the first letter of each page under the first letter of its
heading. Columns have no width of their own, so a long page name never
pushes the headings apart. Row 3 is T1's two wide pills: Get in touch
(light, to Contact) and Careers (dark).

**Type and state.** Headings and pages share one size (`label-lg`, then
`heading-xs` from 1200 — T1's scale). Everything is grey at rest and turns full white on hover, for
the open heading and its column, and for the page you are on.

- **Mouse:** hover opens it; moving off closes it after 200ms.
- **Keyboard and touch:** click, tap or Enter opens and closes it. Tab moves
  from a heading into its pages and on to the next heading. Escape closes
  it and returns focus. Closed, the panel is `inert`.
- **Below 1024px:** a compact bar with the logo and the menu button. The
  full-screen menu fades in while its headings, pages and pills rise 12px
  into place 35ms apart; closing fades it all out together.

Webflow: a grid div with the same placement (each heading and column given
its column number), a hover/click interaction that adds `is-open` to
`nav-menu`, and one that sets `is-active` on the hovered heading's column.
The Designer's own Dropdown component is per-item and cannot share a panel.

## The Campus page

Built from `docs/02-plan.md` §5.2 ("What we're building" in the nav). Its
hero is the light variant: white ground, the headline a size down
(`heading-lg`) beside the intro, and the photograph in a rounded frame
under the copy, short enough (32svh) that the next section shows. Hero,
four site figures, the timeline and the footer are shared parts. Two new
components:

- **Site tour** (`tour`, `tour-stop`): the deck's four tour stops (Power
  Block, GIS, gas compressor station, water treatment facility), numbered,
  beside a heading that sticks from 1024px. A rail beside the stops fills
  with scroll, as the timeline's does. Each stop lists the dates it was
  photographed, from the photo essay. The plain-language "what it does"
  copy is general, not client copy, and carries a "confirm" flag.
- **Photo essay** (`essay`, `essay-card`): the deck's twelve dated stages,
  1969–2023 to July 2026, as a horizontal strip. Swipe, scroll, arrow
  buttons or keyboard (the strip is focusable); snap keeps a card at the
  left edge and a rail under it shows progress. In Webflow: a CMS list in a
  flex row with `overflow-x: auto` and scroll snap as custom properties;
  the arrows need a small embed script.

Left out until content exists: the water source and volume (CLAUDE.md §10
#14 — the water stop says only that the facility exists, with a red flag
under `?notes=on`), fuel supply agreements (the fact sheet lists them, the
newer deck doesn't), the labelled site map, and a before/after "then and
now" (needs the real photographs). Every essay frame shows the stand-in
photo for now, so its stage name sits under the frame as a label.

## Careers page

Built from `docs/02-plan.md` §5.3, reusing the homepage's hero, stat block,
split, media frame and footer classes. Two new components:

- **Growth chart** (`growth-chart`): the 2026 headcount by the date each figure
  was published — 1,000+ (Mar, IUP deck), ~1,300 (May, fact sheet), ~1,500
  (Jul, IUP deck), 1,800+ (Sep, press release), ~2,000 projected by year-end.
  The note under it says the September figure counts a slightly different
  group. Plain elements, not a charting library: in Webflow each column is a
  Stats collection item with its height bound from a CMS field. Direct labels
  on three columns; hover or focus any column for its source; "Show as a
  table" holds every value.
- **Trade tiles** (`trade-grid`, `trade-tile`): nine tiles, each a link out
  to its trade's union in a new tab. Hover or keyboard focus fills the tile
  with ink from the arrow well outward (one scaled circle, `trade-tile_wash`,
  so it never fades through grey), turns the text as the ink reaches it,
  inverts the well, turns the + into an outward arrow, then raises the
  description — 800ms, on the new `motion/duration/slower` token. Leaving,
  the text turns back first and the ink pulls back over 500ms, so nothing
  lingers on the white tile. On
  touch the description and arrow show from the start. The description
  always holds its space, so the tile never resizes. The links go to each
  trade's international union for now, flagged, until the nine locals are
  named (CLAUDE.md §10 #2).

Left out until the content exists: union names and local numbers (CLAUDE.md
§10 #2), worker spotlights (§5.6: no quote without a named, photographed
person), and apprenticeship programme detail. The trade descriptions are
general, plain-language descriptions of each trade, not client copy, and
carry a "confirm" flag (`?notes=on`).

## The other pages

All of them are light-hero pages built from the same parts. What each one
can say is limited by `docs/source/`; the gaps are flagged, not filled.

| Page | What is on it | Waiting on |
| --- | --- | --- |
| Our history | Then-and-now pair, the deck's 12 dated photo-essay stages on the tour's rail, the milestone timeline | Full-resolution photographs (§10 #4) |
| Community | Three route cards with their strongest figure; the two 2025 community milestones | Open-house photograph |
| Campus partners | Homer City Generation, Kiewit, GE Vernova as trade tiles linking out | Independence and Kovalchick (§10 #3) — notes only; logos |
| Our commitments | The brief's six, each with only the figures and dated facts on record; required footnotes under their figures | A sourced commitment for Health, Water and Giving back (flagged red) |
| Voices | Speaker filter and a plain "no quotes yet" — nothing unattributed runs | Named, photographed, signed-off quotes (§5.6) |
| FAQs | 19 sourced answers in the plan's six categories, search, category chips, a source line on every answer, a deep link per question (`faq.html#water`) | Water, noise, traffic, hours, lighting, emissions, monitoring, taxes, a hotline — 10 questions, shown with notes on; the appeal answer needs legal sign-off (§10 #5); a "last reviewed" date per answer |
| News | Items newest first, type chips once there is more than one type; one item page (`news-workforce-1800.html`) with a copy-link button and the press inbox | The release text as issued, the March 2026 release, the archive, an RSS feed (Webflow's collection RSS) |
| Contact | The four inboxes with copy buttons; the address | A response time, a liaison or hotline, a site access policy before any map or gate photo (§10 #11) |

The FAQ search and chips, and the News type chips, are a small embed in
Webflow (or Finsweet CMS Filter). The homepage FAQ module now reads the
same list by id, so an answer is written once.

## Content rules it enforces

- **Nothing unsourced ships silently.** Copy that is client-published but not in
  the supplied PDFs carries an amber *Confirm before launch* flag. Copy with no
  source at all carries a red *Not sourced — cannot ship* flag, and where there
  is no answer (water) the flag stands in for the answer — no text is invented.
- **Footnotes travel with their figures.** 10,000+ and ~1,000 carry the fact
  sheet's footnotes verbatim, under the label.
- **Qualifiers stay:** *Up to*, *Projected*, *Anticipated* sit above the figure.
- **Units are not abbreviated.** `$10 Billion`, not `$10B`.
- **The word "coal" does not appear.** The direction board's placeholder copy
  used it; the page uses the client's phrase, "the former Homer City
  Generating Station".
- **Image briefs sit inside the image frame**, captions outside it, and every
  caption states whether the image is a Photograph or a Rendering.

## Where it departs from the direction board

| Board | Prototype | Why |
| --- | --- | --- |
| `~4.4 GW`, `~1,800¹`, `$10B`, `55+` | `Up to 4.4 GW`, `1,800+` (as of September 2026), `$10 Billion`; 55+ dropped | CLAUDE.md §5–6 |
| Five stats, three across | Six stats, two across (one column on phones) | Adds the two footnoted job figures; 128px figures do not fit three across |
| Commitments tabs (Water, Health & safety…) | The four pillars in the same tab-and-rail pattern | Pillar copy is sourced; the commitment copy (and the water answer) is not |
| Primary button `#0081F1` | `#0067C3` | AA contrast (library decision) |
| Homer City Generation logo | Placeholder mark + "Homer City Energy Campus" | No vector logo supplied (open question #1) |
| Photography | One stand-in photo (`src/assets/placeholder-*.webp`) in every slot, tagged *Placeholder image* with its brief inside the frame; captions withheld | Photo library and rights outstanding (open question #4). A caption naming a specific shot would be false under a stock photo |
| Timeline tabs | One continuous scroll, grouped by year; each year label sticks while its milestones pass, and each group's rail fills with scroll | Keep scrolling through the milestones instead of switching tabs |

Sections not built yet from `docs/02-plan.md` §5.1: Orientation, Map (no labelled
site asset), Latest news as a full section (only one sourced news item exists —
it runs as a hero card).

## Breakpoints

Mobile first, and checked at 320, 375, 480, 600, 768, 900, 1024, 1100,
1199, 1200, 1280, 1439, 1440, 1680 and 1920px: no horizontal scroll, no
clipped text. Hero text is sampled against the pixels actually painted
behind it (headline ≥ 3:1 large text, everything else ≥ 4.5:1) at 11 viewport
sizes from 320×568 to 2560×1440 — lowest is 3.53:1 on the headline and
5.02:1 on the intro. **That check is only as good as the photo:** the scrim
was lightened to let the image show, so re-run it when the hero image
changes. A bright or white-sky photo will fail.

| From | What changes |
| --- | --- |
| 0 | One column. Hero scrim rises from the bottom edge and clears toward the top. Pillars pin as one screen (capped at 1000px) and scroll through in turn. |
| height < 640 | Pillars stop pinning and become a plain click accordion — a landscape or 320px phone cannot hold copy and photo on one screen. |
| 768 | Desktop type sizes. Stats and workforce figures two across, trades three across, news cards in a row. Stat figures scale with the width until 1440. |
| 1024 | Text and image sit side by side; the pinned pillar photo fills the stage height. Timeline year labels move into their own column. FAQ splits into intro and list. |
| 1200 | Full nav pill replaces the menu button. The logo shows its round mark only until 1440, where the nav has room for the full lockup. |
| 1440 | Hero copy and news cards side by side; the scrim rises from the bottom with a light wash behind the headline column. |

## Before this goes to Webflow

- **New tokens, not yet in Figma:** `size/80` (primitive), now aliased by
  `size/media/thumb` in both modes (the news-card image, 100 → 80px); and
  `motion/duration/800` (primitive) with `motion/duration/slower` aliasing
  it (500 on Mobile, 1ms under reduced motion), for the trade tiles. Both
  are in `design-system/tokens.*`; add them to Figma file `K7Mb6…` so the
  export matches.

- **The icon font is 5.4 MB.** Fine locally; unacceptable for a rural,
  mobile-first audience. In Webflow, load Material Symbols Rounded from Google
  Fonts with `&icon_names=` listing only the ~20 glyphs used.
- **`backdrop-filter`** (frosted nav and cards) is a custom property in Webflow;
  the solid `bg/glass` fill underneath keeps text legible where it is
  unsupported.
- **The pinned pillars** use `position: sticky` and two `min()`/`max()`
  values for the 1000px cap — custom values in Webflow. Switching the open
  pillar from scroll position needs a small embed script (Interactions 2.0
  can animate across scroll progress but cannot set `aria-expanded`); the
  click accordion works without it.
- **One `clamp()`** scales the stat figures between 768 and 1439px. Webflow
  accepts it as a custom value.
- **Motion** maps one-to-one onto Interactions 2.0 — no GSAP:

  | Effect | Trigger | Targets |
  | --- | --- | --- |
  | Page fades up from ink in 300ms, then hero copy rises in and news cards slide in (under 1s in all) | Page load | `body` (`#root` here), `hero_copy` children, `news-card` |
  | Cross-fade between pages, 250ms | Native view transition — `@view-transition` in site-wide head code | root |
  | Fade and rise into place with an 80ms sibling stagger | Scroll into view | `section-head`, `stat`, `trades_item`, `facility`, `milestone`, `faq-row`, `split_media`, footer columns |
  | Rail fills top to bottom | While scrolling in view | `timeline_list` progress segment |
  | Pillars open in turn as the pinned stage scrolls, each over a quarter of its travel; the photo cross-fades | While scrolling in view (section `pillars`, sticky `pillars_stage`) | `pillar_panel`, `pillars_frame` |
  | A pillar title jumps the page to that pillar's quarter | Click (anchor scroll) | `pillar_toggle` |
  | Opened content fades in | Click | `pillar_panel`, `faq-row_answer` |
  | Card lifts 2px, arrow nudges | Hover | `news-card` (`news-card_arrow`), `button_well` |
  | Ink circle grows from the arrow well to fill the tile; text turns, + hands over to an outward arrow, description rises in | Hover (and focus) | `trade-tile_wash` (scale 0 → 1), `trade-tile_link`, `trade-tile_more-icon`, `trade-tile_desc` |

  Figures never count up — a transparency site should not display a number
  that is not true, even for half a second. Everything is off under
  `prefers-reduced-motion`.
- **The alert ticker** is a CSS animation; in Webflow it is an Interactions 2.0
  loop, or a small embed. The dismiss-and-remember logic needs an embed script.
