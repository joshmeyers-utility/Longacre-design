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

## 3. How we work: one stage at a time, one gate each

The user asked to be walked through this one step at a time. **Do not run ahead.**
Finish a stage, present it, wait for a decision, then start the next.

| Stage | Deliverable | Status |
| --- | --- | --- |
| 1. Context | `CLAUDE.md`, `README.md`, `docs/source/*` | ✅ Complete |
| 2. Plan | `docs/02-plan.md` — IA, page specs, CMS schema | ✅ Complete |
| 3. Design system | `docs/03-design-system.md`, `design-system/tokens.*`, Figma variables | ✅ Complete |
| 4. Design pass | `docs/04-design-pass.md` + Figma artboards | ⚠️ **Superseded by Stage 5** |
| 5. Design direction | `docs/05-design-direction.md`, regenerated tokens | ✅ Complete |
| 6. Rebuild | `docs/06-rebuild.md` + Figma artboards, mobile + desktop | ✅ Complete |
| 7. Build | Webflow, from the Stage 6 pass | ⬜ Not started |

**Stage 4 is kept for its component inventory, interaction spec and page
structure — all still valid.** Its *visual* layer (Geist, white grounds, blue
links, square controls) is replaced by Stage 5. Where the two disagree about how
something looks, Stage 5 wins; where they disagree about what a page contains,
Stage 4 wins. The Figma file itself is back to a bare `01 Foundations` page, so
there are no Stage 4 artboards to migrate.

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
  03-design-system.md      Rationale behind the tokens.
  04-design-pass.md        Artboards, component library, interaction spec.
  05-design-direction.md   The direction, and why. Read with §7 below.
  06-rebuild.md            What is actually in Figma now. Read this first.
design-system/
  build-tokens.py          Generator + 58-check contrast audit. Source of truth.
  tokens.json              W3C DTCG tokens. Generated — don't hand-edit.
  figma-variables.json     Figma payload: 4 collections, 262 vars, 22 text styles.
  tokens.css               Same tokens as CSS custom properties.
(The draft lives in Figma, not in this repo — client decision at Stage 4.)
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

**Rebuilt in Stage 5 around Helvetica Neue.** Full spec and the reasoning in
`docs/05-design-direction.md`; values in `design-system/tokens.json`,
`figma-variables.json` and `tokens.css`, all generated by `build-tokens.py`.
`docs/03-design-system.md` explains the *previous* system and is kept for
traceability — where it disagrees with this section, this section wins.

**260 variables across four collections** (Primitives, Semantic, Typography,
Motion) and 22 text styles, live in Figma. Typography and Semantic each carry
**Desktop and Mobile modes**; set the mode on the artboard, never per node.

⚠️ **A FLOAT variable bound to `lineHeight` or `letterSpacing` resolves as
PIXELS in Figma**, so 122 (meaning 122%) becomes 122px. Text styles carry both as
PERCENT literals, and the `line-height/*` and `tracking/*` variables are
`scopes: []` so the trap cannot be re-introduced from a picker.

### The direction

> A warm, achromatic, editorial ground that gets out of the way of the
> photography — with the facts set as a ledger and the interface reduced to ink,
> hairlines and space.

### The rules

**1. Components bind semantic tokens only, never primitives.** `action/primary-bg`,
not `color/ink/950`. Every colour primitive ships `scopes = []` so Figma hides it
from every picker. This is what makes a brand-guide correction one line.

**2. Colour belongs to the photograph.** The chrome is `paper` and `ink`. The
*only* colour anywhere in the interface is the four pillar marks, the focus ring,
and a feedback state while it is active. **No blue text, no blue icon, no blue
figure, no accent fill.** The photography is the strongest asset in the source
material; an achromatic interface is what lets it carry the page.

**3. Underline means link.** Not colour. Hover grows and thickens the underline;
it never changes hue. (This replaces the old "blue means link" — and it is
stronger, because WCAG 1.4.1 says colour must never be the only signal.)

**4. Round means press. Square means read.** Buttons and tags are pills
(`radius/control`). Fields are near-square (`radius/input` 2). Contained media is
`radius/media` 12, full-bleed media 0, surfaces 0.

**5. A stroke is a divider between content, or the boundary of a control.**
Nothing else — no card outlines, no tile accents, no severity bars.
`border/divider` is decorative and has no contrast floor. `border/control`
identifies a component, so SC 1.4.11 applies and it must clear 3:1 on every
ground. Check which one you need before you draw it.

**6. No cards. No shadows.** A filled box is not a grouping device, and the
shadow scale is deleted — the only effect left in the system is the focus ring,
a zero-blur spread shadow. Sections separate by, in order: a change of ground, a
160px rhythm, a full-width hairline (only when two sections share a ground), or a
full-bleed photograph. If you need a fifth, the page has too many sections.

**7. Stats are a ledger.** Figure hard left, explanation in a narrow column hard
right, a hairline spanning the full width between rows and closing the block. The
middle stays empty — the rule binding figure to label is why the row needs no
card. **Required footnotes live in the right-hand column beneath the label**, not
as an asterisk. Qualifiers — *Anticipated*, *Projected*, *Up to* — sit as an
eyebrow above the figure. **Figures never count up**: an animated number reads as
marketing and delays the fact.

**8. A brief is not a caption.** Production notes and published copy never share
a field. In the Image Band the brief lives *inside* the image area — the region
the photograph destroys — and the caption outside it. Date is its own field.
`Kind = Photograph | Rendering`; the deck's cover is a render of a campus that
does not exist yet, and labelling that is the same discipline as an "as of" date.

**9. Band widths come from the parent's margin, never from the band.**
`space/margin` (72) → contained 1296 · `space/margin-wide` (40) → wide 1360 ·
zero → full bleed 1440 · mobile 20 → 335. Full bleed is spent, not spread: once
in the body of the site, and never two photographic bands adjacent.

### Palette

Eight OKLCH ramps. **Five reproduce a client palette colour exactly** at one
named step, asserted on every build: `paper/100` = `#F3F1D0` cream ·
`navy/900` = `#143251` · `blue/600` = `#238FC8` · `gold/400` = `#D8B471` ·
`aqua/200` = `#AFECF1`.

| Ground | Value | Use |
| --- | --- | --- |
| `surface/page` | `#F7F6EE` | The default. Most of the site. |
| `surface/warm` | `#F3F1D0` | The alternating band. Client cream, exact. |
| `surface/raised` | `#FFFFFF` | Inset media and form fields **only**. |
| `surface/ink` | `#1B1914` | The dark institutional ground. |
| `surface/navy` | `#143251` | Client navy. **Footer only.** |

Grounds alternate `page → warm → page → ink → page`. Navy is deliberately
demoted: it reads as *utility company*, which is the note the client asked us to
move away from. It survives in the footer and as the Infrastructure pillar mark.

- **`text/tertiary` (`ink/700`, `#696763`) is the floor for neutral text.**
  Nothing lighter carries text on any ground.
- **Pillars:** Safety `green/800` · Infrastructure `navy/900` ·
  Community `blue/800` · Energy Future `gold/800`. A pillar colour marks one of
  the four pillars and nothing else — not a nav card, not a section icon, never
  a link. Home's "Project pillars" is the only section that may carry them.
- **`aqua` has no semantic role.** It exists in the primitives; nothing uses it.

### Type — Arial

**Nothing to license, and it is everywhere.** The CSS stack is
`Arial, Arimo, "Liberation Sans", Helvetica, sans-serif` — Arimo and Liberation
Sans are metrically compatible with Arial, so a fallback never reflows the
layout. **Figma has no Arial** (it is a licensed Monotype system font), so the
artboards are built in **Arimo** and the family is bound to `font-family/sans`:
swapping it is one variable edit. See `docs/06-rebuild.md` §1.

- **Arial ships Regular and Bold, and nothing else.** There is no Arial Light and
  no Arial Medium, so this is a genuine two-weight system: display and body
  **Regular**, structure and labels **Bold**. Sixteen roles Regular, six Bold.
  The weight tokens are named `regular` and `bold` — a token called `light` that
  renders Regular is the same small lie as a blue label that is not a link.
- **Tracking is load-bearing.** Arial sets loose by contemporary standards; at
  zero, display type looks like a 1990s annual report. Display runs −1.8% to
  −3.5%; body stays at **0** — never tighten reading text; eyebrows run **+6%**.
- **Arial's digits are already tabular**, so a ledger column aligns without
  `tnum`.
- **Sentence case everywhere. No all-caps**, labels and buttons included.
- **Hero** 96/40, `statement` 128/46 (**one per page, maximum**), body 16 at line
  height 1.55 on a 636px measure — 71 characters per line.
- **Stat figures** are Regular in `text/primary`, never a colour.
- **Eyebrow:** 13px Medium, +6% tracking, sentence case. Not decoration — it is
  where a section's date-stamp, category or scope lives, per §5.3.
- **Responsive type:** only font size varies by breakpoint. Line height and
  tracking are percentages, so they scale on their own.
- **Icons:** Material Symbols Rounded, weight 300, `opsz` matched to render size.
  **Always ink** — never a colour. (Outlined would pair better with a
  neo-grotesque; open question #18.)

### Grid and rhythm

**12 × 86 + 11 × 24 = 1296, margin 72 × 2 → 1440.** The arithmetic closes
exactly, so the Figma grid and the Webflow grid agree. Every container is a whole
number of columns: content 1296 (12) · narrow 966 (9) · measure 636 (6) ·
measure-narrow 526 (5). Mobile is 4 fluid columns, 20 margin, 16 gutter.

Sections: 160 desktop / 72 mobile, with `-lg` 200/96 and `-sm` 96/48.
Spacing is a 2px base unit; the primitive name is the pixel value
(`space/16` = 16px) but components use roles — `space/stack-md`, `space/section-y`.

### Motion

Gentle, never overshooting. `ease/appear` for reveals, `ease/interact` for hover
and press, `ease/transition` for layout, `ease/editorial` for big type and image
reveals. Everything fits Webflow Interactions 2.0 — nothing here needs GSAP.
`prefers-reduced-motion` collapses every duration to 1ms and every distance to 0;
it is in `tokens.css` and it is not optional.

### Still open on the brand

The palette introduces cream and gold, which appear nowhere in the supplied
collateral. Stage 5 gives cream a job — it is now the page — which is the
lowest-risk way to use an unconfirmed colour, but it is still a brand decision
rather than a derivation. Open questions #1, #16, #17.

**Logo:** circular four-petal mark in blue and green; wordmark "HOMER CITY" set
above a rule-flanked "GENERATION". Still needs to be sourced as vector.

**Photography:** the strongest asset in the source material. Aerial and landscape
frames of the campus set in Indiana County's rolling farmland — green fields,
forest, the town itself in shot. Plus a dated construction photo essay from
1969–2023 through July 2026 (`docs/source/iup-deck.md`). This imagery is what
makes the site feel like a *place* rather than a *company*, and the whole
achromatic direction exists to serve it.

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
  text column; mobile 0.88 throughout). Do not lighten them.
  `design-system/build-tokens.py` composites the scrims over pure white on every
  build and asserts the result, with a **negative control at 0.60 that must
  fail** — otherwise a broken checker would report a pass on everything.
- **The token build is the contrast gate.** 58 checks run on every build and it
  **refuses to write the token files if any fails**. Run
  `python3 design-system/build-tokens.py --check` before claiming a colour is
  accessible. If you add a semantic colour, add its check.
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
| 16 | **Does the client's cream become the page?** `#F3F1D0` now carries the warm band and seeds the page ground, giving an unconfirmed brand colour a job. One token moves if the brand guide disagrees. | Brand sign-off |
| 17 | **Navy demoted to the footer.** It is the most recognisable colour in the current identity, and Stage 5 replaces it as the dominant dark ground with a warm near-black. Confirm the client will accept that. | Brand sign-off |

**Non-blocking — can proceed with a stated assumption:**

| # | Question | Working assumption |
| --- | --- | --- |
| 6 | Live site is unreachable — **all** outbound HTTPS is blocked by this environment's network policy, not just that domain. Current FAQ and news copy can't be read directly. | Structure recovered via search (see `external-context.md`). Build the architecture; client supplies copy to migrate. |
| 7 | Does a fuller timeline exist beyond the fact sheet's? | Build the condensed homepage teaser to link to a full timeline page; ship it when content lands. |
| 8 | Is "Campus Partners / Commitment to the Community / Testimonials" one page or three? | **Resolved:** one "Community" nav item with three child pages. |
| 9 | Domain: does the new site stay on homercityredevelopment.com given the Energy Campus pivot? | Flag as a client decision; it affects nav, metadata and email routing. |
| 12 | **First steel: March or April 2026?** The IUP deck's photo essay dates "First Steel, Going Vertical" to **March 2026**; the same deck's timeline dates the milestone to **April 2026**. A photograph can legitimately predate an announcement, but both will appear on the same site. | Caption uses the photo's date (March); timeline uses April. One client question resolves it. |
| 13 | **"Powerblock" or "Power Block"?** The deck spells it both ways, in the same document. | Using the two-word form, matching slide 6 and §6 here. |
| 18 | **Icon family.** Material Symbols Rounded was chosen to pair with Geist. This environment serves Rounded and Sharp only — no Outlined, and only the **Bold** cut, not the weight 300 the spec asks for. | Using Rounded Bold. Revisit on a machine with the full Material Symbols range. |
| 20 | **Swap Arimo → Arial in Figma.** The artboards are built in Arimo because this environment has no Arial. Arimo is metrically identical, so nothing reflows. | One variable edit (`font-family/sans`) on a machine that has Arial. |
| 21 | **Delete the `Z · Archive — S4 …` pages** once the rebuild is signed off. Stage 4 was renamed rather than deleted. | Kept until you say otherwise. |
| 19 | **Screenshots of seven reference sites.** All but cursor.com and cosmos.so are blocked by this environment's egress policy (403 at the proxy), so Stage 5 is built from published description for those. | Direction as written. Send screenshots or unblock the domains and it gets revised. |

---

## 11. Conventions

- **Branch:** `claude/epic-pascal-twojc4`. Do not push elsewhere.
  (Stages 1–4 landed on `claude/keen-allen-x6me7z`, now merged.)
- **Commits:** one per stage, descriptive subject, body explaining what changed
  and why.
- **Markdown:** wrap prose at ~80 characters. Tables for anything comparative.
- **Never invent client facts.** If it is not in `docs/source/`, it is an open
  question — add it to §10 rather than filling the gap.
- **Tokens are generated.** Edit `design-system/build-tokens.py`, re-run it, and
  commit all four files together. Never hand-edit `tokens.json`,
  `figma-variables.json` or `tokens.css` — the next build overwrites you.
- **When a stage lands, update the table in §3** and the status section of
  `README.md`.
