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
| 4b. Art direction | `docs/art-direction/t1-energy.json`, fresh Figma file `ANpwfYe7Zq4c7Lc4cxAWi2` | ✅ Complete |
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
  03-design-system.md      Rationale behind the tokens.
  04-design-pass.md        Artboards, component library, interaction spec.
  art-direction/
    t1-energy.json         Stage 4b art direction, derived from t1energy.com.
                           Supersedes parts of §7 — see its `supersedes` block.
design-system/
  tokens.json              Stage 3 tokens, W3C format. Superseded by 4b for the
                           new Figma file; still the record of the earlier pass.
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

> **⚠️ Superseded in part by Stage 4b.** A second art direction, derived from
> [t1energy.com](https://t1energy.com/) and built on a new client seed palette,
> lives in [`docs/art-direction/t1-energy.json`](art-direction/t1-energy.json)
> and is realised in the fresh Figma file `ANpwfYe7Zq4c7Lc4cxAWi2`. It changes
> four rules below — **no cards**, **no tinted grounds**, **square surfaces**,
> and **the neutral-text floor** — and adds a second type family. Its
> `supersedes` block states each change and why. **Everything in §5 (fact
> discipline), §6 (canonical figures) and §9 (quality bars) is unchanged and
> still binding.** The section below remains the record of the Stage 3/4 pass
> and of the client's five-colour brand palette, which open question 17 asks
> whether 4b replaces.

**Resolved in Stage 3, revised during the Stage 4 modern pass.** Full rationale
in `docs/03-design-system.md`; values in `design-system/tokens.json` and
`tokens.css`; live in Figma as 270 variables across four collections
(Primitives, Semantic, Typography, Motion), 32 text styles and 5 effect styles.

### The one rule

**Components use semantic tokens only — never primitives.** `action/primary-bg`,
not `color/blue/700`. Colour primitives are deliberately hidden from every Figma
picker (`scopes = []`) to enforce this. It is what makes a brand-guide
correction a one-line change instead of a rebuild.

| Layer | Examples |
| --- | --- |
| Primitives | `color/blue/700`, `space/16`, `font-size/300`, `radius/md` |
| Semantic | `surface/page`, `text/primary`, `action/primary-bg`, `pillar/safety`, `space/stack-md`, `radius/surface`, `icon/lg` |
| Typography | `type/hero`, `type/h2`, `type/body`, `type/eyebrow` — **Desktop and Mobile modes** |
| Motion | `duration/base`, `ease/appear`, `distance/md` |

Verified state: **9,668 bound values across both artboard pages, zero unbound,
zero reaching past the semantic layer, zero tinted grounds, 1,494 contrast
checks against real painted ancestors, zero failures.** If you add anything,
bind it.

### The other rule: strokes are dividers

**A stroke separates two pieces of content. Nothing else.** No card outlines, no
tile accents, no severity bars, no button borders — those are ground, space, or a
filled rectangle. The file currently holds 37 hairline dividers and 29 circular
timeline markers, and nothing else. Check before you add one.

### The third rule: a brief is not a caption

**Production notes and published copy never share a field.** A caption that
reads *"Photography needed at full resolution"* is one forgotten edit away from
saying exactly that on the live site, under a real photograph. In the **Image
Band** component the brief lives *inside* the image area — the region the
photograph destroys — and the caption lives outside it. The same separation
applies anywhere a placeholder describes what is still missing.

Two consequences:

- **Date is its own field, not part of the caption string.** §5.3 is structural,
  not a typing convention.
- **`Kind = Photograph | Rendering`.** The deck's cover is a render of a campus
  that does not exist yet. On this site, labelling that is the same discipline
  as the "as of" date.

### And no cards

**A filled box is not a grouping device.** Columns are separated by a hairline
at the top and by space — never by a white rectangle on a light ground, which is
the clearest 2015-era signal available and does the job space already does. The
file had 28 of them; four were white on white, invisible and still in the
markup. Grounds stay white, near-white and navy: there are **no tinted
grounds**, and the one that existed (an aqua CTA band) is gone.

### Stats are a ledger, not cards

Figure hard left, explanation in a narrow column hard right, a hairline spanning
the full width between rows and closing the block. The middle stays empty — the
rule spanning it is what binds figure to label, which is also why the row needs
no card and no border. **Required footnotes live in the right-hand column,
beneath the label**, inside the rule that binds the row. Not an asterisk, not a
pointer to the page foot. Qualifiers — *Anticipated*, *Projected*, *Up to* — sit
as an eyebrow directly above the figure rather than buried mid-label.

**Band widths come from the parent's padding, never from the band:**
`space/container-x-desktop` (160) → contained 1120 · `space/container-x-wide`
(80) → wide 1280 · zero → full bleed 1440 · `space/container-x-mobile` (16) →
mobile. Full bleed is spent, not spread: once in the body of the site, never two
photographic bands adjacent.

- **Type: Geist 300–700** (Google-hosted, ports to Webflow). Replaced Open
  Sans, which was the web's default 2011–2016 and carried that period into the
  design regardless of palette. Hero runs 104px desktop / 44px mobile. Stat
  figures are Light (300) — inherited from the fact sheet — but sit in
  `text/stat-figure` (near-black), not blue.
- **Sentence case everywhere. No all-caps**, including labels and buttons.
- **A pillar colour marks one of the four pillars, and nothing else.** Not a
  nav card, not a section icon, never a link. Used as decoration it stops being
  a signal. Home's "Project pillars" is the only section that may carry them.
- **Blue means link.** Nothing else is blue — **icons included**. An icon is
  blue only when the icon *is* the control (`arrow_forward`, `add`, `remove`,
  `download`, `open_in_new`, `expand_more`, `close`, `search`, `menu`). A trade
  mark, a commitment mark, a resource-type mark or a category mark is
  `text/primary` on light and `text/inverse-secondary` on navy. Labels, eyebrows and metadata are
  grays (`text/eyebrow` → `stone/700`). A blue label that is not clickable is a
  small lie repeated on every page.
- **Eyebrow:** 12px SemiBold, 4% tracking, sentence case. Not decoration — it is
  where a section's date-stamp, category or scope lives, per §5.3.
- **Grounds: white, and near-white.** `surface/subtle` is `stone/50`; navy
  bands mark institutional moments. **No tinted grounds** — the `sand` family
  exists in the primitives but is used by no semantic role.
- **`stone/700` is the floor for neutral text** — the lightest step that clears
  4.5:1 on white. Nothing lighter may carry text on any ground.
- **Icons:** Material Symbols **Rounded**, weight 300, `opsz` matched to render
  size. Not Outlined — Figma does not have it.
- **Spacing:** 2px base unit; the primitive name is the pixel value
  (`space/16` = 16px), but components use roles — `space/stack-md`,
  `space/card-padding`, `space/section-y`.
- **Radius:** four roles, not eight sizes. `radius/control` (2),
  `radius/surface` (**0**), `radius/media` (4), `radius/pill`. Surfaces are
  square; softening the whole system is one re-pointed token.
- **Responsive type:** only font size varies by breakpoint, via the Typography
  collection's Desktop/Mobile modes. Line height and tracking are percentages so
  they scale on their own. Set the mode on the artboard, never per node.
- **Motion:** gentle, never overshooting. `ease/appear` for reveals,
  `ease/interact` for hover and press, `ease/transition` for layout.
  `prefers-reduced-motion` support is in `tokens.css` and is not optional.
- **Two grounds:** warm `stone` neutrals for reading, cool `navy` for
  institutional moments. They alternate down the page.

### Palette authority

The ramps are generated from the **client's five-colour palette** —
`#143251` navy, `#238FC8` blue, `#AFECF1` aqua, `#F3F1D0` cream, `#D8B471` gold
— each reproduced at a named step (see `docs/03-design-system.md` §11).

Two things to hold on to:

- **`#238FC8` is the identity blue, not the link blue.** At 3.60:1 on white it
  fails AA for body text. Links use `blue/700`. Do not "correct" this.
- **`stone` is never tinted.** It is the text ramp. The warm tint lives in
  `sand`, which is for grounds only.

The palette introduces cream and gold, which appear nowhere in the supplied
collateral. That is a brand decision rather than a derivation — confirm it
against the brand guide (open question #1).

### Source anchors sampled from the client PDFs

**Superseded** by the palette above. Kept for traceability.

| Role in collateral | Sampled | Notes |
| --- | --- | --- |
| Masthead navy | `#161A4B` | Darkest point of the header gradient |
| Section-bar blue | `#001A85` | Solid bars, white all-caps type |
| Logo cerulean | `#0B72BE` | Brighter, more approachable than the section bar |
| Logo / pillar green | `#005D33` | Deep forest green; carries the pillar icons |
| Stat blue | `#65A4DB` | Large figures, light weight |
| Pale blue tint | `#E1EDF7` | Stat cells, timeline rail background |
| Page tint | `#E0E8F0` | Broad background wash |

**Logo:** circular four-petal mark in blue and green; wordmark "HOMER CITY" set
above a rule-flanked "GENERATION". Needs to be sourced as vector.

**Photography:** the strongest asset in the source material. Aerial and landscape
frames of the campus set in Indiana County's rolling farmland — green fields,
forest, the town itself in shot. Plus a dated construction photo essay from
1969–2023 through July 2026 (`docs/source/iup-deck.md`). This imagery is what
makes the site feel like a *place* rather than a *company*. Design around it.

**Typography:** not identified. The fact sheet uses a geometric sans for headings
with letterspaced all-caps labels; the IUP deck falls back to a plain grotesque.
The fact sheet is the better reference. Treat the typeface as an open question.

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
| 15 | **Confirm the seed hex values.** The Stage 4b palette was supplied as swatch images and the values are visually sampled: blue `#3F74AB`, paper `#F5F5F5`, grays `#F8F8F8` → `#1D1D1F`. A one-degree error in the blue changes which step is the link colour. | 4b build |
| 16 | **Sign off the three derived signal colours** (`#A9610B` construction, `#9E2A22` urgent, `#2F6B4F` affirm). None is seeded — the seeds contain no warm hue — and an alert banner needs distinguishable severities. Currently the design avoids them entirely: the urgent bar is near-black. | Alert banner |
| 17 | **Does Stage 4b supersede the client's five-colour brand palette?** (`#143251` navy, `#238FC8` blue, `#AFECF1` aqua, `#F3F1D0` cream, `#D8B471` gold.) The new seeds share neither the aqua, the cream nor the gold, and 4b is monochrome plus one blue. | Brand reconciliation |
| 18 | **Pillar colours have nowhere to live in 4b.** §7 says a pillar colour marks one of the four pillars; 4b is monochrome with blue reserved for links. The pillars currently render as numbered text. Confirm this is acceptable or supply a second signal. | Home, Community |
| 14 | **The water answer has no canonical source.** "Two Lick Reservoir", "the same source the former plant used" and "usage will be roughly the same" trace **only** to `external-context.md` — tier B press coverage. The fact sheet, the tour deck and the IA brief never name a water source at all. This is the question the brief says is asked most, on the topic with the most organised opposition, and the client's own material does not answer it. Flagged amber in Figma; needs the client's own words before it ships. | Launch |

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

- **Branch:** `claude/admiring-fermat-t84cgt` (Stage 4b). Earlier stages were on
  `claude/keen-allen-x6me7z`. Do not push elsewhere.
- **Commits:** one per stage, descriptive subject, body explaining what changed
  and why.
- **Markdown:** wrap prose at ~80 characters. Tables for anything comparative.
- **Never invent client facts.** If it is not in `docs/source/`, it is an open
  question — add it to §10 rather than filling the gap.
- **When a stage lands, update the table in §3** and the status section of
  `README.md`.
