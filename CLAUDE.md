# CLAUDE.md — Homer City Energy Campus website

Working context for Claude Code sessions in this repo. Read this first, every session.

---

## 1. What this is

A ground-up redesign of the public website for the **Homer City Energy Campus** —
a 3,200+ acre natural gas power and data center campus under construction on the
site of the former Homer City Generating Station in Indiana County, Pennsylvania.

This repo is the **design and content workshop**. The shipped site is built in
**Webflow**. Nothing here deploys. Everything here is a specification, a token
set, or a reference implementation that gets ported into Webflow by hand or by an
AI-assisted Webflow workflow.

**Current site being replaced:** <https://www.homercityredevelopment.com/>
**Figma — current comps + variable library:** <https://www.figma.com/design/K7Mb6ksBE9it30ff9gb9CA/Untitled>
— file key `K7Mb6ksBE9it30ff9gb9CA`. Holds the new comps (Page 1), the variable
library, and the `Tokens` and `Components` showcase pages. **Source of truth.**
**Figma — Stage 3/4 file (superseded):** `Jrd1qr29Hi3WvscddRo34r` (Longacre).

---

## 2. The pivot that drives every decision

> The site is framed around the **Homer City Energy Campus** — the place, the
> build, the people — **not** Homer City Redevelopment, the company behind it.

The client's own diagnosis of the current site: *"outdated and feels too much like
a bland/generic corporate website — it isn't accessible/digestible for community
and doesn't spotlight the right information clearly."*

Four consequences, and they are not negotiable:

1. **Audience is neighbours, not investors.** Local residents of Homer City and
   Indiana County looking for information about a very large thing being built
   near them. Write for them. Not for analysts, not for the trade press.
2. **The job is transparency, not persuasion.** The brief says: provide
   transparency on the facts, serve as an information hub, educate, and correct
   misperceptions. A site that reads as spin fails at all four. Verifiable
   specifics beat adjectives every time.
3. **Workforce and economic impact get the most room.** That is the explicit
   instruction: *"Put as much focus as possible on the positives of the
   workforce/econ impact."* Real people, real trades, real numbers, real wages.
4. **Some readers are sceptical, and specifically so.** "Correct misperceptions"
   is not abstract: the PA DEP air permit is under appeal by environmental groups
   and Our Children's Trust, and there is organised concern about water (Two Lick
   Reservoir), noise, air quality and whether local benefit is real. The sceptic
   is a primary user. Sourcing, dates and footnotes are not legal boilerplate to
   be hidden — they are the reason a sceptic believes anything else on the page.
   Detail in `docs/source/external-context.md`.

**Voice test:** if a sentence could appear on any energy company's website with
the name swapped out, it is wrong. Replace it with something only true here.

---

## 3. How we work: four stages, one gate each

The user asked to be walked through this one step at a time. **Do not run ahead.**
Finish a stage, present it, wait for a decision, then start the next.

| Stage | Deliverable | Status |
| --- | --- | --- |
| 1. Context | `CLAUDE.md`, `README.md`, `docs/source/*` | ✅ Complete |
| 2. Plan | `docs/02-plan.md` — IA, page specs, CMS schema | ✅ Complete |
| 3. Design system | `docs/03-design-system.md`, `design-system/tokens.*`, Figma variables | ✅ Complete |
| 4. Design pass | `docs/04-design-pass.md` + Figma artboards | ✅ Complete (revised — see `04` §11) |
| 4b. Variable library v2 | `docs/05-variable-library.md`, `design-system/tokens.*`, Figma file `K7Mb6…` | ✅ Complete — rebuilt from scratch against the new comps |
| 4c. React prototype | `prototype/` — homepage, from the new comps + tokens | ✅ Homepage built — other pages not started |
| 5. Build | Webflow, from the Figma pass | ⬜ Not started |

Keep this table current. It is how the user and the next session both know where
things stand.

---

## 4. Repo map

```
CLAUDE.md                  This file. Context + rules.
README.md                  Human orientation: what's here, how to use it.
docs/
  source/                  Faithful transcriptions of client source material.
    fact-sheet.md          Fact Sheet, May 2026 — canonical approved copy.
    iup-deck.md            IUP tour deck, July 2026 — freshest figures.
    site-structure.md      Client IA brief — authority on scope.
    external-context.md    Secondary research. NOT approved copy — see §5.
  02-plan.md               IA, page specs, 13-collection CMS model.
  03-design-system.md      Stage 3 token rationale. Superseded by 05.
  04-design-pass.md        Artboards, component library, interaction spec.
  05-variable-library.md   The current token system: decisions, map, verification.
design-system/
  tokens.json              Design tokens, W3C format. Exported from Figma — don't hand-edit.
  tokens.css               Same tokens as CSS custom properties. Powers prototype/.
prototype/                 React + TS reference build of the homepage. `npm run dev`. See its README.
```

Original client PDFs and the .docx are **not** committed — they live in the
session upload directory and are transcribed into `docs/source/`. Treat those
transcriptions as the in-repo record.

---

## 5. Fact discipline — hard rules

This site's whole value is that its numbers can be trusted. Violating these is
worse than shipping late.

0. **"Coal" is not a word this site uses.** It appears in no client document —
   only in `external-context.md`. The fact sheet's own phrasing is *"the former
   Homer City Generating Station"*. Use theirs.
1. **Every figure traces to `docs/source/`.** If a number is not in those files,
   it does not go on the page. Do not estimate, do not interpolate, do not round
   for visual balance (`~1,300` is not `1.3K`).

   Sources are tiered. `fact-sheet.md`, `iup-deck.md` and `site-structure.md`
   are client-supplied and canonical. `external-context.md` is **secondary
   research and is not publishable** — client-published items in it (tier A) are
   strong candidates for copy but must be confirmed against the primary
   document first; press coverage (tier B) needs client sign-off; opposition
   claims (tier C) never appear on the site, they are what it answers.
2. **The two footnotes travel with their figures.** Any surface showing
   **10,000+** or **~1,000** carries the corresponding footnote from
   `docs/source/fact-sheet.md`. This includes stat tiles, hero modules, social
   cards, and any condensed homepage version. No exceptions for layout.
3. **Date-stamp anything that moves.** "Workers active on site" went ~1,300 (May
   2026) → ~1,500 (July 2026). It ships as a CMS field with a visible *"as of
   {month} {year}"*. A stale number on a transparency site is a self-inflicted
   wound.
4. **July 2026 beats May 2026.** On conflicts, the IUP deck is newer. Milestones
   the deck marks complete are complete; milestones only the fact sheet lists as
   forward-looking need confirmation before being shown as done.
5. **Projections are labelled as projections.** "Projected", "anticipated",
   "expected", "up to" are load-bearing words from the source. Keep them.
6. **Attribute quotes.** Name, role, organisation, and a real photo — or the
   quote does not run.

---

## 6. Canonical figures

Copy from here, not from memory.

| Figure | Label | Volatility |
| --- | --- | --- |
| 1,800+ | Direct-hire tradespeople and skilled contractors active on site *as of September 2026* | **Changes ~monthly — CMS field, date-stamped.** Tier A, confirm wording |
| 10,000+ | Direct on-site construction-related jobs | Footnote 1 required |
| ~1,000 | Total direct & indirect permanent high-paying positions in technology, operations and energy infrastructure | Footnote 2 required |
| Up to 4.4 GW | Energy expected to be produced on-site | Stable |
| $10 Billion | Projected initial capital investment for power infrastructure and site readiness | Stable |
| 3,200+ acres | Natural gas-powered campus designed to meet the needs of America's digital future | Stable |
| ~3M cubic meters | Earth moved — roughly the volume required to build Egypt's Great Pyramid of Giza | Stable |
| 7 × GE Vernova 7HA.02 | High-efficiency natural gas turbines in the Power Block | Stable |

### Workforce figures — tier A, confirm before publishing

From the client's own 4 Sep 2026 press release, not from the supplied PDFs. These
are the stats the brief asked for and no supplied document contained.

| Figure | Label |
| --- | --- |
| 9 | Local union organizations represented on site |
| ~95% | Of the skilled direct-hire craft workforce is from the local area |
| 135+ | Apprentices training alongside experienced journeymen |
| ~2,000 | Projected total workers by year-end 2026 |

**Trades on site:** boilermakers, carpenters, electricians, ironworkers,
laborers, millwrights, operators, pipefitters, teamsters. The nine unions are
counted but **not named** anywhere public — the named list is still needed.

**Do not publish 4.5 GW.** Widespread in press coverage; both client documents
say **up to 4.4 GW** and they are newer. See `docs/source/external-context.md`.

**Site address:** Homer City Energy Campus, 1750 Power Plant Rd, Homer City, PA 15748

**Contact routing** (four distinct inboxes — do not collapse into one form):

| Audience | Address |
| --- | --- |
| Job Seekers | HomerCity.Info@Kiewit.com |
| Community Members | info@homercityredevelopment.com |
| Vendors & Partners | HomerCity.Info@Kiewit.com |
| Media Inquiries | press@homercityredevelopment.com |

**The four pillars** — Safety, Infrastructure, Community, Energy Future — are
fixed brand architecture. Same names, same order, everywhere. Copy in
`docs/source/fact-sheet.md`.

---

## 7. Design system

**Rebuilt from scratch against the comps in Figma file `K7Mb6ksBE9it30ff9gb9CA`.**
Full record in `docs/05-variable-library.md`; values in `design-system/tokens.*`
(exported from the live file); in Figma as **266 variables across three
collections** — Primitives (Value), Color (Light / Dark), Semantic (Desktop /
Mobile) — plus 17 text styles and one `Glass` effect style. The Stage 3
navy/stone/sand system (`docs/03`) is retired.

### The one rule

**Components use Color and Semantic tokens only — never primitives.**
`color/action/primary/bg`, not `color/blue/600`. Every primitive is hidden from
every Figma picker (`scopes = []`) to enforce this. Every Color and Semantic value
aliases exactly one primitive, in one hop, in every mode.

| Collection | Modes | Examples |
| --- | --- | --- |
| Primitives | Value | `color/neutral/900`, `space/16`, `size/56`, `radius/64`, `font/size/44` |
| Color | Light / Dark | `color/bg/canvas`, `color/text/secondary`, `color/action/primary/bg`, `color/status/warning/subtle` |
| Semantic | Desktop / Mobile | `space/layout/gutter`, `size/control/lg`, `radius/card`, `type/heading/lg/size`, `motion/duration/base` |

**A dark section is a mode, not a variant.** Set the frame to `Dark` in the Color
collection (in CSS, add `theme-dark`). Every component works in both.
**A breakpoint is a mode too.** Set `Mobile` on the artboard, never per node.

Verified state: 238/238 aliases one hop, 68 contrast pairs across both modes
with zero failures, and on the Components page 326/326 numeric properties,
61/61 fills and 20/20 text layers bound. If you add anything, bind it.

### Palette

From the comps, not the old client palette:

| Role | Value | Notes |
| --- | --- | --- |
| Ink | `#1D1D1F` (`neutral/900`) | Text, dark sections |
| Greige | `#EDEAE5` (`neutral/100`) | Alternate ground, secondary button |
| Identity blue | `#0081F1` (`blue/500`) | **Not** a button fill — 3.88:1 with white. |
| Action blue | `#0067C3` (`blue/600`) | Primary buttons, Contact us. 5.63:1. Do not "correct" to `#0081F1`. |

All eight greys in the comps are pinned exactly in the `neutral` ramp. Green,
amber and red exist only for status and are derived — nothing in the comps is a
warning or an error.

### Rules carried forward

- **Strokes are dividers.** The comps contain zero strokes. Separation is ground,
  space, a hairline (`size/divider`) or the progress rail (`size/rail`).
- **A brief is not a caption.** Production notes and published copy never share
  a field. Date is its own field. `Kind = Photograph | Rendering` stays.
- **Required footnotes sit beneath the label**, inside the stat — never an
  asterisk pointing at the page foot. Qualifiers (*Up to*, *Projected*) sit as an
  eyebrow above the figure. The comps' `~4.4 GW` / `~1,800¹` break this.
- **Sentence case everywhere.** No all-caps.
- **`text/tertiary` is the floor for content text.** `text/disabled` is not AA and
  is for disabled controls only.
- **Motion:** `prefers-reduced-motion` support in `tokens.css` is not optional.

### Rules the new comps changed

- **Everything clickable is a pill** (`radius/control` = full). Cards and media
  are rounded (`radius/card` 32, `radius/media-lg` 64) — "square surfaces" and
  "no cards" are retired. A filled box is still not a grouping device for text
  columns; the rounded containers here hold photography and news teasers.
- **Blue means clickable**, not just "link": inline links (`text/link`) and the
  primary button fill. A blue thing that is not clickable is still a lie.
- **Frosted glass** (`bg/glass` + `Glass` effect) is allowed over photography
  only — the nav pill and announcement cards.
- **No pillar colours.** The palette has none. See §10 #15.

### Type

**Geist** (Light 300, Regular 400, Medium 500 in use) and **Material Symbols
Rounded Light** for icons. Headings are **Regular**, stat figures **Light**,
buttons and eyebrows **Medium**. Family, style and size are bound to Semantic
variables; line height and tracking are percentages on the style, so Mobile
changes only size. Hero 64 → 40, stat figure 128 → 64. Full table in
`docs/05-variable-library.md` §2.

---

## 8. Webflow constraints — these shape the code

Everything in `prototype/` must port cleanly into Webflow. Write it that way from
the first line rather than refactoring later.

- **Flat class naming.** Webflow's class model has no nesting. Use single,
  self-describing utility-and-block classes (Client-First style:
  `stat-card`, `stat-card_figure`, `is-large`). No BEM chains that assume a
  preprocessor, no deep descendant selectors.
- **Tokens map to Webflow Variables.** Colour, size, and font tokens should be
  expressible as Webflow variables one-to-one. Avoid tokens that only make sense
  as a computed value.
- **Stay inside what the Designer can express.** Flexbox, CSS Grid, and standard
  properties are native. `:has()`, container queries, complex `calc()` chains and
  custom properties with fallbacks are not — anything needing them must be
  deliberately isolated into an Embed and flagged in `docs/04-build-notes.md`.
- **Motion stays inside Interactions 2.0** where possible: scroll-into-view,
  scroll-progress, hover, page-load, and click. Anything richer needs a GSAP
  embed and an explicit call-out — it becomes a maintenance cost for whoever
  edits the site later.
- **Identify CMS collections early.** Anything repeating or editable by the
  client is a Collection, not static markup. Expected: News, FAQ, Partners,
  Unions/Trades, Testimonials, Downloadable Resources, Timeline Milestones,
  Stats, and the global Alert banner. Schema is Stage 2 work.
- **The global alert / construction-update banner** is required by the brief and
  is the client's fastest lever. Make it CMS-driven and dismissible, with the
  dismissal remembered.

---

## 9. Quality bars

- **Text over a photograph is guaranteed by the scrim, not by a checker.** An
  automated contrast sweep walks to the nearest *solid* painted ancestor, and a
  photograph is not one — so it will report a pass no matter what the image
  does. Hero scrims are set so the weakest point over the text column still
  clears AA against a pure white photograph (desktop 0.72 at the end of the
  900px column; mobile 0.88 throughout). Do not lighten them. `docs/04` §12.6.
- **Accessibility: WCAG 2.2 AA, non-negotiable.** A public information site for a
  whole community. That means real text over images (not baked-in type), visible
  focus states, keyboard paths through every rollover interaction, and captions
  on video.
- **Rollovers need a non-hover path.** The brief specifies hover interactions for
  unions, partners, and commitment icons. Touch and keyboard users must reach the
  same content — design tap/click and focus behaviour alongside hover, not after.
- **Assume constrained connections.** Rural county, mobile-first, large photos.
  Every image gets explicit dimensions, lazy loading below the fold, and modern
  formats. No layout shift.
- **Mobile is the primary comp**, not the fallback. Design 375px first.
- **Plain language.** Expand jargon on first use: GIS is gas insulated
  switchgear, HRSG is a heat recovery steam generator, EPC is engineering,
  procurement and construction. A neighbour should not need a glossary.

---

## 10. Open questions

**Blocking — needed before the stage named:**

| # | Question | Blocks |
| --- | --- | --- |
| 1 | Brand guide: real typefaces, exact colour values, logo vector, clear-space rules. | Stage 3 |
| 2 | **Names of the nine unions** + per-union copy for the rollover module. Counts are public; the roster is not. | Stage 4 Workforce page |
| 3 | Partner detail for **Independence** and **Kovalchick** — neither appears in the PDFs. Logos + descriptions. | Partners page |
| 4 | Photo library access — the IUP deck's imagery at full resolution, plus usage rights. | Stage 4 |
| 5 | **Review the drafted permit-appeal FAQ answer.** Client decided to address it; the answer is drafted from public filings and carries an amber DRAFT flag in Figma. Needs client and legal sign-off before it ships. | Launch |
| 10 | **Which library assets are renderings, not photographs?** The IUP deck's cover is a full-bleed *render* of a campus that does not exist yet, and it is the most likely asset for someone to grab for a hero. Every supplied frame needs a photo/render flag. | Launch |
| 11 | **Site access policy.** No supplied document says whether the public may approach an active construction site. Blocks the Contact entrance photograph — an inviting gate shot with no policy beside it is a promise the site cannot keep. | Contact page imagery |
| 14 | **The water answer has no canonical source.** "Two Lick Reservoir", "the same source the former plant used" and "usage will be roughly the same" trace **only** to `external-context.md` — tier B press coverage. The fact sheet, the tour deck and the IA brief never name a water source at all. This is the question the brief says is asked most, on the topic with the most organised opposition, and the client's own material does not answer it. Flagged amber in Figma; needs the client's own words before it ships. | Launch |
| 15 | **Pillar colours.** The new palette has none, so Safety / Infrastructure / Community / Energy Future are no longer colour-coded. Keep them uncoloured, or add four hues to the library? | Home "Project pillars" section |
| 16 | **Copy in the new comps breaks §5.** "Former coal plant" in 5 text layers; `~4.4 GW` (source: *up to*); `~1,800¹` dated 7 Sep (canonical: 1,800+, Sep 2026); "55+ year legacy" (not in `docs/source/`). Detail in `docs/05` §5. | Build from the new comps |

**Non-blocking — can proceed with a stated assumption:**

| # | Question | Working assumption |
| --- | --- | --- |
| 6 | Live site is unreachable — **all** outbound HTTPS is blocked by this environment's network policy, not just that domain. Current FAQ and news copy can't be read directly. | Structure recovered via search (see `external-context.md`). Build the architecture; client supplies copy to migrate. |
| 7 | Does a fuller timeline exist beyond the fact sheet's? | Build the condensed homepage teaser to link to a full timeline page; ship it when content lands. |
| 8 | Is "Campus Partners / Commitment to the Community / Testimonials" one page or three? | **Resolved:** one "Community" nav item with three child pages. |
| 9 | Domain: does the new site stay on homercityredevelopment.com given the Energy Campus pivot? | Flag as a client decision; it affects nav, metadata and email routing. |
| 12 | **First steel: March or April 2026?** The IUP deck's photo essay dates "First Steel, Going Vertical" to **March 2026**; the same deck's timeline dates the milestone to **April 2026**. A photograph can legitimately predate an announcement, but both will appear on the same site. | Caption uses the photo's date (March); timeline uses April. One client question resolves it. |
| 13 | **"Powerblock" or "Power Block"?** The deck spells it both ways, in the same document. | Using the two-word form, matching slide 6 and §6 here. |

---

## 11. Conventions

- **Branch:** `claude/keen-allen-x6me7z`. Do not push elsewhere.
- **Commits:** one per stage, descriptive subject, body explaining what changed
  and why.
- **Markdown:** wrap prose at ~80 characters. Tables for anything comparative.
- **Never invent client facts.** If it is not in `docs/source/`, it is an open
  question — add it to §10 rather than filling the gap.
- **When a stage lands, update the table in §3** and the status section of
  `README.md`.
