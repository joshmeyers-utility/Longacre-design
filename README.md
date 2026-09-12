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
| **2 · Plan** | Sitemap, page-by-page section specs, Webflow CMS schema, Phase 1/2 scope | ✅ **Complete** — [`docs/02-plan.md`](docs/02-plan.md) |
| **3 · Design system** | Typography, colour, spacing, motion — as tokens, in Figma and in CSS | ✅ **Complete** — [`docs/03-design-system.md`](docs/03-design-system.md) |
| **4 · Design pass** | Mobile-first artboards and a component library, in Figma | ✅ **Complete**, revised through an editorial pass — [`docs/04-design-pass.md`](docs/04-design-pass.md) §11–12 |
| **5 · Build** | Webflow, from the approved Figma pass | ⬜ Not started |

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
   - [`external-context.md`](docs/source/external-context.md) — secondary
     research. **Not approved copy.** Current site structure, the September 2026
     workforce release, and what the site has to be credible against.
3. **[`docs/02-plan.md`](docs/02-plan.md)** — Stage 2. Sitemap, page specs, CMS
   model, content status.
4. **[`docs/03-design-system.md`](docs/03-design-system.md)** — Stage 3.
   Typography, colour, spacing, motion, and how it all maps to Webflow. Values
   live in [`design-system/`](design-system/) and in Figma.
5. **[`docs/04-design-pass.md`](docs/04-design-pass.md)** — Stage 4. The
   artboards, the 16-component library, and the micro-interaction spec. §11–12
   record the editorial pass: the stat ledger, the Image Band component, the
   half-bleed split, and the copy audit that restructuring the sections forced.

Arriving in later stages: `prototype/`, `docs/04-build-notes.md`.

### Where the design stands

Both artboard pages verify clean: **9,668 bound values, zero unbound, zero
reaching past the semantic layer, zero tinted grounds, 1,494 contrast checks
against real painted ancestors, zero failures.**

**14 amber provenance flags** sit on the artboards, and they are the most
important thing in the file. Each marks a claim that cannot ship as written —
the five workforce figures that come from a press release rather than the fact
sheet, the water answer that traces only to press coverage, the two quote
placeholders with no attributed speaker, and the permit-appeal answer awaiting
legal review. See `CLAUDE.md` §10, open questions 2, 5, 10–14.

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
| Brand guide — exact colour values, logo vector, confirmation of the type choice | Refines Stage 3 |
| Names of the nine unions + per-union copy | Stage 4 Workforce page |
| Partner details for Independence and Kovalchick | Stage 4 Partners page |
| Full-resolution photo library + usage rights | Stage 4 |
| A position on the live PA DEP permit appeal | Stage 4 FAQ |

The workforce stats the brief asked for — ~95% local, 135+ apprentices, 9 unions
— turned out to be in the client's own 4 September 2026 press release. They need
confirming against the primary document, but they are no longer blocking.

Non-blocking items and working assumptions are in
[`CLAUDE.md` §10](CLAUDE.md#10-open-questions).
