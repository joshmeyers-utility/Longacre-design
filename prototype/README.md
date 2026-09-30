# Prototype — homepage

A React + TypeScript reference implementation of the homepage, laid out after
the Figma direction board (file `K7Mb6ksBE9it30ff9gb9CA`, Page 1) and styled
entirely from `../design-system/tokens.css`. It ports to Webflow; it does not
deploy.

## Run it

```sh
cd prototype
npm install
npm run dev        # http://localhost:5173
```

- Review notes (provenance flags, placeholder-image tags, and FAQ questions
  with no sourced answer) are hidden by default. `?notes=on` shows them.
- `npm run build:preview` writes `dist/preview.html`: the whole page as one
  self-contained file (JS and CSS inline, fonts from Google Fonts with the icon
  font subset to the glyphs in use) that opens straight from disk. Add any new
  icon name to the list in `scripts/build-preview.mjs`.
- `npm run build` typechecks and builds to `dist/`.
- To bring the alert back after dismissing it, clear site data for
  `localhost:5173` (it is stored under `hcec-alert-dismissed`).

## How it is put together

| Path | What |
| --- | --- |
| `src/content/types.ts` | Content model. Mirrors the Webflow CMS collections (`docs/02-plan.md` §6). A `Stat` cannot exist without its provenance; footnotes and "as of" dates are fields, not strings. |
| `src/content/home.ts` | Every string on the page, each block commented with its source in `docs/source/`. |
| `src/components/primitives.tsx` | Icon, Button, Flag, MediaFrame, SectionHead. |
| `src/components/Header.tsx` | Alert banner, header, nav pill, mobile menu. |
| `src/components/Sections.tsx` | The homepage sections. |
| `src/styles/site.css` | All styling. Flat Client-First class names, role tokens only. |

Fonts are self-hosted from npm (Geist, Material Symbols Rounded), so it runs
offline.

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
  | Hero copy rises in, news cards slide in | Page load | `hero_copy` children, `news-card` |
  | Rise in with an 80ms sibling stagger | Scroll into view | `section-head`, `stat`, `trades_item`, `facility`, `milestone`, `faq-row`, `split_media`, footer columns |
  | Rail fills top to bottom | While scrolling in view | `timeline_list` progress segment |
  | Pillars open in turn as the pinned stage scrolls, each over a quarter of its travel; the photo cross-fades | While scrolling in view (section `pillars`, sticky `pillars_stage`) | `pillar_panel`, `pillars_frame` |
  | A pillar title jumps the page to that pillar's quarter | Click (anchor scroll) | `pillar_toggle` |
  | Opened content fades in | Click | `pillar_panel`, `faq-row_answer` |
  | Card lifts 2px, arrow nudges | Hover | `news-card`, `button_well` |

  Figures never count up — a transparency site should not display a number
  that is not true, even for half a second. Everything is off under
  `prefers-reduced-motion`.
- **The alert ticker** is a CSS animation; in Webflow it is an Interactions 2.0
  loop, or a small embed. The dismiss-and-remember logic needs an embed script.
