# Homer City Energy Campus — Website Redesign

Design and content workshop for the new public website for the **Homer City
Energy Campus**, a 3,200+ acre natural gas power and data center campus under
construction in Indiana County, Pennsylvania, on the site of the former Homer
City Generating Station.

The finished site ships in **Webflow**. This repo holds the thinking that gets it
there: the brief, the plan, the design system, and a responsive HTML draft that
acts as a reference implementation for the Webflow build.

| | |
| --- | --- |
| **Current site** | <https://www.homercityredevelopment.com/> |
| **Figma** | [Longacre](https://www.figma.com/design/Jrd1qr29Hi3WvscddRo34r/Longacre) — design system + comps |
| **Build platform** | Webflow, AI-assisted |
| **Branch** | `claude/keen-allen-x6me7z` |

---

## The brief, in short

The current site reads like a generic corporate website. It doesn't serve the
people who actually visit it — neighbours in Homer City and Indiana County trying
to understand a very large thing being built near them.

The new site is framed around **the Campus, not the company**. Its job is
transparency: be the information hub, educate the community, correct
misperceptions. Workforce and economic impact get the most room.

Full brief in [`docs/source/site-structure.md`](docs/source/site-structure.md).
The rules that follow from it are in [`CLAUDE.md`](CLAUDE.md) — read that before
making anything.

---

## Status

Four stages, reviewed one at a time.

| Stage | What it produces | Status |
| --- | --- | --- |
| **1 · Context** | Source material transcribed, brand inputs captured, rules written | ✅ **Complete** |
| **2 · Plan** | Sitemap, page-by-page section specs, Webflow CMS schema, Phase 1/2 scope | ⬜ Awaiting go-ahead |
| **3 · Design system** | Typography, colour, spacing, motion — as tokens, in Figma and in CSS | ⬜ Not started |
| **4 · Draft site** | Responsive HTML/CSS draft of the Phase 1 pages | ⬜ Not started |

Each stage gets presented for a decision before the next one starts.

---

## What's here

Read in this order:

1. **[`CLAUDE.md`](CLAUDE.md)** — the operating context. Strategy, fact-handling
   rules, canonical figures, brand inputs, Webflow constraints, open questions.
2. **[`docs/source/`](docs/source/)** — faithful transcriptions of everything the
   client supplied. The single source of truth for facts and copy.
   - [`site-structure.md`](docs/source/site-structure.md) — the IA brief.
     Authority on scope.
   - [`fact-sheet.md`](docs/source/fact-sheet.md) — approved public copy, May
     2026. Positioning statement, pillars, timeline, all figures, footnotes.
   - [`iup-deck.md`](docs/source/iup-deck.md) — tour deck, July 2026. Freshest
     numbers, plus the dated construction photo essay.

Arriving in later stages: `docs/02-plan.md`, `docs/03-design-system.md`,
`design-system/tokens.json`, `design-system/tokens.css`, `prototype/`,
`docs/04-build-notes.md`.

---

## Site structure (Phase 1)

From the client brief. Details and section specs land in Stage 2.

- **Global** — alerts / construction-update banner
- **Homepage** — hero, Power Block & Fuel Supply spotlight, labelled site map,
  condensed milestone timeline, By the Numbers, four pillar tiles
- **Workforce** — union descriptions, worker spotlights, workforce stats, apply CTA
- **Campus Partners / Commitment to the Community / Testimonials** — partner logo
  grid, six commitment areas, supporter quotes
- **FAQ / Resources** — re-categorised FAQ, downloadable fact sheets and info kits
- **News** — press releases, media statements, supportive coverage
- **Contact Us**

**Phase 2:** Site History (the photo essay), testimonial video, construction
calendar, downloadable letter templates.

---

## Two things worth knowing up front

**The numbers move.** "Workers active on site" was ~1,300 in May 2026 and ~1,500
in July 2026. On a site whose purpose is transparency, a stale figure does real
damage — so it ships as a CMS field with a visible *"as of"* date, never as
hardcoded text. Same discipline for every figure that can change.

**Two figures carry mandatory footnotes.** The 10,000+ construction jobs and
~1,000 permanent positions both trace to a 2024 economic impact analysis, and the
footnotes explaining that must appear anywhere those numbers do — including
condensed homepage modules. Full text in
[`docs/source/fact-sheet.md`](docs/source/fact-sheet.md).

---

## Needed from the client

Blocking the stage listed:

| Item | Blocks |
| --- | --- |
| Brand guide — typefaces, exact colour values, logo vector | Stage 3 |
| Workforce stats — # from PA, # of apprentices, union list | Stages 2 & 4 |
| Partner details for Independence and Kovalchick | Stage 2 |
| Full-resolution photo library + usage rights | Stage 4 |

Non-blocking items and working assumptions are in
[`CLAUDE.md` §10](CLAUDE.md#10-open-questions).
