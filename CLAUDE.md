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
**Figma (design system + draft):** <https://www.figma.com/design/Jrd1qr29Hi3WvscddRo34r/Longacre>
— file key `Jrd1qr29Hi3WvscddRo34r`. Currently empty; it is the destination for
tokens and comps, and is the source of truth once populated.

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
| 5. Build | Webflow, from the Figma pass | ⬜ Not started |

### Rebuild (from Nov 2026) — Modern direction, real content

The client chose **Direction 1 (Modern)** and supplied the real copy. The site is
rebuilt from a fresh canvas in a **new Figma file**:
<https://www.figma.com/design/8RV4XecnHv5rFzjQVnSuNV/Untitled> (`8RV4XecnHv5rFzjQVnSuNV`).
Plan, conflicts and decisions: `docs/05-content-review.md`.

| Step | Figma page | Status |
| --- | --- | --- |
| 0 | Sources transcribed + content review | ✅ Complete |
| 1 | Site Map | ✅ Approved |
| 2 | Content (copy decks) | ✅ Built — 23 decks, flags in `docs/05` |
| 3 | Design System Documentation (variables, styles; §7 rewritten for Modern) | ✅ Built |
| 4 | Component Library | ✅ Built — 26 components, 67 variants |
| 5 | Mobile Site (375) | ✅ Built — 19 frames |
| 6 | Desktop Site (1440) | ✅ Built — 18 frames, derived from mobile |
| 7 | **Desktop Site v2** — rebuild from section patterns (`docs/06`) | ⏳ Sections page built; Home + What we're building (2–6) done; pages 7–20 next |

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
    content-outline.md     Content outline, 28 Sep 2026 — IA + page copy. NEWEST.
    fact-sheets-sept-2026.md  Quick facts (4 Sep), Power (9 Sep), Econ +
                           workforce (24 Sep), workforce graphic.
    site-structure.md      Original client IA brief — superseded by the outline.
    external-context.md    Secondary research. NOT approved copy — see §5.
  02-plan.md               IA, page specs, 13-collection CMS model.
  03-design-system.md      Rationale behind the tokens.
  04-design-pass.md        Artboards, component library, interaction spec.
  05-content-review.md     Rebuild: new IA, source conflicts, decisions, sequence.
design-system/
  tokens.py                Token source of truth (Modern). Run it to regenerate:
  tokens.json              W3C format. Generated — don't hand-edit.
  tokens.css               CSS custom properties. Generated.
  figma.json               Data for the Figma variable build. Generated.
(The draft lives in Figma, not in this repo — client decision at Stage 4.)
```

Original client PDFs and the .docx are **not** committed — they live in the
session upload directory and are transcribed into `docs/source/`. Treat those
transcriptions as the in-repo record.

---

## 5. Fact discipline — hard rules

This site's whole value is that its numbers can be trusted. Violating these is
worse than shipping late.

0. **"Coal" is not a word this site uses.** Since Sep 2026 the client's own
   documents use "the former coal plant" freely; the user decided (3 Nov 2026)
   the site still does not. Re-phrase to *"the former Homer City Generating
   Station"* / *"the former plant"*, and flag each re-phrased client sentence
   on the Content page so the client sees the change.
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
4. **Newer beats older; the dated fact sheet beats the outline on a figure.**
   Order: content outline (28 Sep) › econ/workforce sheet (24 Sep) › power
   sheet (9 Sep) › quick facts (4 Sep) › IUP deck (Jul) › May fact sheet. But
   where the outline's copy states a figure differently from a dated fact sheet
   (e.g. "~4.4 GW", "60–65%", "30% more efficient", "55+ years"), the fact sheet
   wins and the change is flagged for the client. Historic note — **July 2026 beats May 2026.** On conflicts, the IUP deck is newer. Milestones
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
| 1,800+ | Skilled contractors and direct-hire tradespeople currently active onsite, *data as of September 4, 2026* — expected to grow to 2,000 by end of 2026 | **Changes ~monthly — CMS field, date-stamped.** Fact sheet C |
| 10,000+ | Direct on-site construction-related jobs | Footnote 1 required |
| ~1,000 | Total direct & indirect permanent high-paying positions in technology, operations and energy infrastructure | Footnote 2 required |
| Up to 4.4 GW | Energy expected to be produced on-site | Stable |
| $10 Billion+ | Projected initial capital investment for power infrastructure and site readiness | Footnote: "With data center development to add billions more." |
| Early 2028 | Anticipated first power on site | Fact sheets A, B |
| 60% / 40% | Less CO₂ per MWh / more efficient (heat rate) than the former plant | Fact sheet B — not the outline's 60–65% / 30% |
| Zero | OSHA-recordable incidents | Footnote: "As of September 4, 2026." |
| 3,200+ acres | Natural gas-powered campus designed to meet the needs of America's digital future | Stable |
| ~3M cubic meters | Earth moved — roughly the volume required to build Egypt's Great Pyramid of Giza | Stable |
| 7 × GE Vernova 7HA.02 | High-efficiency natural gas turbines in the Power Block | Stable |

### Workforce figures — now canonical (fact sheet C, 24 Sep 2026)

Footnotes travel with them: **9** → "Direct-hire workforce excludes
contractors. Data as of September 4, 2026."; **95%** → "Local refers to workers
dispatched from the local union halls with jurisdiction over the project." Use
**95%** — not "~95%", not "over 95%".

| Figure | Label |
| --- | --- |
| 9 | Local union organizations represented on site |
| 95% | Of direct-hire craft workers onsite are local |
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

## 7. Design system — Modern direction (rebuilt Nov 2026)

**Source of truth: `design-system/tokens.py`.** It writes `tokens.json`,
`tokens.css` and `figma.json`; the Figma variables in the rebuild file are built
from `figma.json`. Never hand-edit the generated files — edit `tokens.py`,
re-run it, rebuild the variables. (The Stage 4 file had drifted from its own
docs — Arimo instead of Geist, a "paper" ground — which is why there is now
one generator for all three.) Rationale: `docs/03-design-system.md` §15.

Figma opacity variables are **percentages (0–100)**; `tokens.py` emits them ×100 for Figma.

Live in Figma: **245 variables** — Primitives 117 (hidden, `scopes = []`),
Semantic 97 (Desktop/Mobile), Typography 18 (Desktop/Mobile), Motion 13 — plus
**16 text styles** (font size bound to Typography) and **3 effect styles**
(Glass, Focus ring, Focus ring inverse). Documented on the *Design System
Documentation* page.

### The one rule

**Components use semantic tokens only — never primitives.** `action/primary-bg`,
not `color/blue/700`. A brand-guide correction is then a one-line change.

### What changed for Modern (user decision, 3 Nov 2026)

| Before (Stage 4) | Modern |
| --- | --- |
| Surfaces and media square (`radius/media` 4) | **Rounded media**: `radius/media` 24 / 16 mobile, `radius/media-lg` 32 / 20. Bands and sections stay square (`radius/surface` 0). |
| Buttons square-ish, no chip | **Pill buttons** (`radius/control`) with a circular icon chip: primary (blue / white chip), secondary (ink-100 / ink chip), inverse (white / navy chip). |
| No cards, ever | **One exception: frosted cards over hero photography** (`surface/glass` + Glass blur, `radius/card`). A ground is needed there for legibility. Everywhere else, still no cards. |
| Pillar list carried pillar colours | Modern pillars list is type-only; `pillar/*` remain the only pillar marks and are optional. |
| Hero 104 / 44 | Hero 72 / 40 (`type/hero`), H1 56/34, H2 44/30. |

### Unchanged rules

- **Blue means link.** Text links, buttons and control icons (`arrow_forward`,
  `add`, `remove`, `download`, `open_in_new`, `expand_more`, `close`, `search`,
  `menu`). Nothing else is blue — not labels, not decorative icons.
  `text/link` (`blue/700`, 5.07:1) must not sit on `action/secondary-bg` —
  4.29:1 — which is why there is no `surface/muted`.
  **Exception (client, Nov 2026): link-list rows** (Link tile — "Learn
  more", commitments, menu) are `text/primary` / `text/inverse`; the arrow
  and hairline row mark them as links, and hover underlines the label.
- **Strokes are dividers.** A hairline separates two pieces of content —
  `border/divider` on light, `border/divider-inverse` on navy,
  `border/divider-black` on black (navy/700 reads blue there). No outlines.
- **Key facts have no dividers** (client, Nov 2026). P6 fact rows are
  separated by space; the ledger, link rows and FAQ rows keep hairlines.
- **Runs of link-to-section rows become a scroll story** (P21, client, Nov
  2026): sticky steps left, the active step's statement + CTA + media right.
  Every tab is a button, so scrolling is never the only way through.
- **Stats are a ledger.** Figure left, label right, hairline between rows,
  qualifier (*Up to*, *Projected*, *Anticipated*) as an eyebrow above the
  figure, **required footnotes under the label inside the row** — not at the
  page foot, even where the client's outline asks for that.
- **A brief is not a caption.** Production notes live inside the image area;
  caption, date and `Kind = Photograph | Rendering | Video` are separate fields.
- **Grounds: white (`surface/page`), near-white (`surface/subtle`), navy
  (`surface/inverse`), black (`surface/black`, Nov 2026).** No tinted grounds.
- **No two adjacent sections share a ground** (client, Nov 2026). The one
  exception is a deliberate *white group* — consecutive white sections in
  the same format, separated by space. Breathers between groups: a
  full-bleed photograph or a black statement band (one sourced sentence,
  Heading 2, white). Section padding is `space/section-y` (160 / 80).
  Home order: hero · numbers (navy) · white group (past, workforce,
  what we're building — one two-column format, media side alternating) ·
  full-bleed photo · differentiators (subtle) · statement (black) ·
  stewardship (subtle) · questions (navy) · news (white) · learn more
  (subtle) · footer (navy). Hero carries one glass card (newest news).
  Desktop Home is frame `67:8121` (client's layout). Navy, not the comps' near-black,
  for dark bands — it is the client's colour and what the moodboard showed.
- **`ink/700` is the floor for neutral text** (5.64:1 on white, 5.14:1 on
  `surface/subtle`).
- **Sentence case everywhere.** No all-caps. Eyebrow: 12px SemiBold, 4%.
- **Sections have titles, not labels** (client, Nov 2026). Section header
  eyebrows are off by default; use one only for a date-stamp or scope.
- **CTAs are short** — a noun or two-word phrase ("Site history", "All
  questions"), never a sentence. In-section links are buttons.
- **Figures sections end with "Download fact sheet"** when a source fact
  sheet exists.
- **Alert bar is black** (`surface/alert`) with white text and close; no icon.
- **Hero glass is dark** — header bar and glass cards both use
  `surface/glass-dark`; all text on it is white (`text/inverse`, 4.94:1).
  The pale `text/inverse-secondary` fails there (3.76:1).
- **Header over a photo is dark glass** (`surface/glass-dark`, black 56% +
  blur): white nav text clears AA (4.95:1) even over pure white. Don't stack
  it with the white `surface/glass` — that combination needs 64% black.
- **Type: Geist** 300/400/500/600. Stat figures Light, `text/stat-figure`.
  Only size varies by breakpoint; set the Typography mode on the artboard.
- **Icons:** Material Symbols Rounded, weight 300.
- **Band widths come from the parent's padding:** `space/container-x` 80 →
  wide 1280; `space/container-x-contained` 160 → 1120; 0 → bleed; 16 mobile.
- **Near-bleed media rows** (client, Nov 2026 — Home "See what we're
  building"): the band has no side padding; the title and CTA sit in
  wrappers padded to the content column; the images run to a small gutter —
  `space/stack-sm` (12) desktop, `space/stack-xs` (8) mobile — with the
  same value between them. Spend it sparingly: never two photographic bands
  adjacent.
- **Motion:** `ease/appear`, `ease/interact`, `ease/transition`; reduced
  motion zeroes every duration in `tokens.css`.
- **Contrast:** 45 text/ground pairs checked by `tokens.py`'s palette, all ≥ AA.

### Palette authority

Ramps carry the client's five colours at named steps: `navy/900` #143251,
`blue/600` #238FC8 (identity blue — **not** the link blue; 3.60:1 fails AA),
`aqua/200` #AFECF1, `gold/400` #D8B471; cream #F3F1D0 is used by no role.
Confirm against the brand guide (open question #1).

**Logo:** circular four-petal mark in blue and green; wordmark "HOMER CITY"
over a rule-flanked "GENERATION". Needs a vector.

**Photography** is the strongest asset — aerials of the campus in Indiana
County farmland, the dated construction photo essay, the workforce assembled
on site. Design around it. Renderings (power plant, data center campus) are
labelled as renderings wherever they appear.

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
  does. The scrim is a **true-black top-to-bottom gradient** (Nov 2026: photo
  clear at the top, dark where the text sits), defined once in
  `tokens.py` → `SCRIM_GRADIENT` and emitted as `--scrim-hero-gradient`.
  Over a pure-white photograph, body text needs alpha **≥ 0.535** (4.5:1) and
  the large headline **≥ 0.42** (3:1). `TEXT_AT` records where each
  breakpoint's text starts; `check_scrim()` fails the build if a stop drops
  below that. **If you move hero text up, re-measure `TEXT_AT` first.**
  Current: desktop headline 4.2:1, lead 6.5:1; mobile headline 5.1:1, lead
  8.6:1. Figma's gradient stops mirror `tokens.py` by hand (stops can't bind
  variables).
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
| 2 | **Names of the nine unions** — 3 now public via quotes (Boilermakers Local 154, IBEW Local 5, Plumbers & Pipefitters Local 354); 6 still needed, plus logos for the union scroller. | Careers pages |
| 3 | **Local partner detail** — outline names Independence Excavating (demolition), Kovalchick Corporation (salvage & recycling), Aquatech (water technology), Edwards Moving & Rigging (heavy transport) with roles only. Descriptions + URLs needed. AWS card is "TBD on initial inclusion". | Who We Are |
| 4 | Photo library access — the IUP deck's imagery at full resolution, plus usage rights. | Stage 4 |
| 5 | **Review the drafted permit-appeal FAQ answer.** Client decided to address it; the answer is drafted from public filings and carries an amber DRAFT flag in Figma. Needs client and legal sign-off before it ships. | Launch |
| 10 | **Which library assets are renderings, not photographs?** The IUP deck's cover is a full-bleed *render* of a campus that does not exist yet, and it is the most likely asset for someone to grab for a hero. Every supplied frame needs a photo/render flag. | Launch |
| 11 | **Site access policy.** No supplied document says whether the public may approach an active construction site. Blocks the Contact entrance photograph — an inviting gate shot with no policy beside it is a promise the site cannot keep. | Contact page imagery |
| 14 | ~~Water answer has no canonical source~~ **Resolved** by the content outline (Two Lick Reservoir, owned and operated by Homer City Generation; usage in line with historical levels). Its footnote ¹ has no text — still needed. | Water page |

**Non-blocking — can proceed with a stated assumption:**

| # | Question | Working assumption |
| --- | --- | --- |
| 6 | Live site is unreachable — **all** outbound HTTPS is blocked by this environment's network policy, not just that domain. Current FAQ and news copy can't be read directly. | Structure recovered via search (see `external-context.md`). Build the architecture; client supplies copy to migrate. |
| 7 | Does a fuller timeline exist beyond the fact sheet's? | Build the condensed homepage teaser to link to a full timeline page; ship it when content lands. |
| 8 | Is "Campus Partners / Commitment to the Community / Testimonials" one page or three? | **Resolved:** one "Community" nav item with three child pages. |
| 9 | Domain: does the new site stay on homercityredevelopment.com given the Energy Campus pivot? | Flag as a client decision; it affects nav, metadata and email routing. |
| 12 | **First steel: March or April 2026?** The IUP deck's photo essay dates "First Steel, Going Vertical" to **March 2026**; the same deck's timeline dates the milestone to **April 2026**. A photograph can legitimately predate an announcement, but both will appear on the same site. | Caption uses the photo's date (March); timeline uses April. One client question resolves it. |
| 15 | **Content placeholders in the outline:** Data Centers (Amazon), Sound, Giving Back, IBEW Local 5 videos, SMS short code ("text XXXX"), Facebook URL, Water/Sound fact sheet PDFs, portraits for the 5 quoted people. | Their pages |
| 16 | **Figure conflicts** between the outline and the dated fact sheets — 11 listed in `docs/05-content-review.md` §3, resolved to the fact sheet pending confirmation. | Launch |
| 17 | **Raised by the Content step** — HCR vs HCG credited for the Apr 2025 announcement; Two Lick Reservoir vs Two Lick Creek; NextEra's role; dropped "largest coal-burning" superlatives; pillars/giving-back naming; address source; quote dates. Detail in `docs/05` step 2. | Launch |
| 13 | **"Powerblock" or "Power Block"?** The deck spells it both ways, in the same document. | Using the two-word form, matching slide 6 and §6 here. |

---

## 11. Conventions

- **Branch:** the one the session names (rebuild: `claude/inspiring-mendel-qv80rj`).
  Do not push elsewhere.
- **Commits:** one per stage, descriptive subject, body explaining what changed
  and why.
- **Markdown:** wrap prose at ~80 characters. Tables for anything comparative.
- **Never invent client facts.** If it is not in `docs/source/`, it is an open
  question — add it to §10 rather than filling the gap.
- **When a stage lands, update the table in §3** and the status section of
  `README.md`.
