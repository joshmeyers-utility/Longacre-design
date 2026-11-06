# Direction 02 Nine Trades: Figma build log

Build file `KLwTN3TWxX8SV9ty0yCQUw`, page `02 Direction` (2:3) only.
Source of truth: `02-nine-trades.md` and `moodboards/02-nine-trades.html`.
Prefix `D02` on every collection, style and component.

---

## 0. Clean-up (6 Nov 2026)

Page 2:3 held one superseded top-level node from the earlier 04 Crew /
first-round direction: `1 · Cover` (SECTION 17:45). It is moved, untouched,
into a Section `Z · Superseded (earlier direction)` placed far right.

Superseded D02 assets found and **deleted** (all from the earlier direction;
nothing on other pages binds to them, since the prefix rule forbids it):

| Kind | Name | ID | Count |
| --- | --- | --- | --- |
| Variable collection | D02 Primitives | VariableCollectionId:15:2 | 85 vars |
| Variable collection | D02 Semantic | VariableCollectionId:15:3 | 64 vars |
| Variable collection | D02 Typography | VariableCollectionId:15:326 | 90 vars |
| Variable collection | D02 Motion | VariableCollectionId:15:327 | 11 vars |
| Text styles (18) | D02/Cover, D02/Hero, D02/Figure, D02/Figure unit, D02/H2, D02/H3, D02/Position, D02/Logo, D02/Body lg, D02/Body, D02/Stat label, D02/Eyebrow, D02/Footnote, D02/Chip, D02/Button, D02/Nav, D02/Alert, D02/Alert strong | | 18 |
| Effect styles | none | | 0 |
| Paint styles | none | | 0 |
| Components | none on page 2:3 | | 0 |

Caveat: the superseded `1 · Cover` section's nodes were bound to those
variables and styles; after deletion they keep their last resolved values
but are detached. It is archive only.

Fonts confirmed in Figma: Schibsted Grotesk (Regular–Black, all italics) and
Fraunces (Thin–Black, all italics). **No substitutions of family.** Figma
exposes Fraunces as named static instances, so the board's
`opsz 144, SOFT 50` axis settings are not reproducible in Figma; Figma
renders the default instance. Logged as a substitution (see §3).

---

## Variables and styles (written before any screen)

| Collection | ID | Vars | Modes |
| --- | --- | --- | --- |
| D02 Primitives | VariableCollectionId:21:378 | 44 | Value |
| D02 Semantic | VariableCollectionId:21:423 | 47 | **Light / Navy** (ground modes) |
| D02 Typography | VariableCollectionId:21:471 | 24 | Desktop / Mobile |
| D02 Motion | VariableCollectionId:21:495 | 10 | Value |

25 text styles `D02/…`, each with `fontSize` bound to `D02 Typography`
`type/<role>/size` and `fontFamily` bound to `font/family/{display,human}`.
Line height and tracking are percentages (scale with size).

Decisions:
- **Semantic modes are grounds, not light/dark.** `Navy` mode re-points
  `text/primary` → cream, `text/human` and `text/qualifier` → gold,
  `text/link` → aqua, `border/divider` → cream 35%, `action/primary` → cream.
  A navy band is one explicit mode on the frame, never per-node colours.
  Webflow: maps to Variable modes (Webflow supports modes on collections
  since 2024); fallback is a `is-navy` combo class swapping the same vars.
- Primitives are the client's five plus three derived (paper #FBFAF0, link
  #1B6A98, cream-deep #E6E3BD) and four alpha tints (dividers, scrim,
  pill). No 11-step ramps: the direction uses flat fields, so a ramp would
  be unused inventory. Lean on purpose.
- Primitives carry `scopes = []` so components can only reach semantics.
- The italic human word is a separate text style applied as a **range**
  inside the heading (`setRangeTextStyleId`), sized 1.05×.
- Added `type/lede-human/size` (68 / 32) and `D02/Lede human` for the cover
  lede; not in the board's table but the board sets it (`.cs-lede i` 1.06em).

## 1. Cover: built

Section `1 · Cover` **21:1221**, frame `Cover · 1440` **21:1222** (1440 × 2505).
Navy opener (Navy mode) with pill nav and the board's lede ("*credit*" in
gold Fraunces italic) → cream positioning band: "The Homer City Energy
Campus, credited to *the nine trades* building it." → Define copy (board
verbatim) → three "borrowed from Ragged Edge" columns on hairlines → navy
voice test and distinctness note, including where 02 departs from root §7.

Webflow: all flex, no custom code. Pills are `pill` class, radius
`radius/control`.

Note: the Define paragraph's italic words use `D02/Qualifier` (18px) inside
21px body, so they read slightly small; a `Body human` style would fix it if
the pattern is kept.

## 2. Tokens: built

Section `2 · Tokens` **21:1486**, frame `Tokens · D02` **21:1487** (1440 wide).
Primitive swatches at their share of surface (cream 40 / navy 25 / gold 12 /
aqua 10 / paper 8 / blue 3 / link 2), captions moved *below* the fields
after the first screenshot (blue and link fields could not carry 15px
captions at AA). Twelve semantic roles shown as Light | Navy pairs (each
pair is the same variable in two explicit modes). Twelve contrast chips with
computed ratios (script in log history: WCAG 2.1 relative luminance):

| Text on ground | Ratio | Use |
| --- | --- | --- |
| navy on cream / paper / aqua / gold | 11.41 / 12.48 / 10.03 / 6.66 | all |
| cream / gold / aqua on navy | 11.41 / 6.66 / 10.03 | all |
| link on paper / cream | 5.63 / 5.14 | links |
| link on aqua / cream-deep | 4.52 / 4.52 | links, passes narrowly |
| link on gold | 3.00 | **never** |
| blue on cream / navy | 3.14 / 3.64 | no text / large display only |
| cream over navy 72% scrim on pure white | 4.79 | text over photos |

The "link on gold", "blue on cream" and "blue on navy" chips are deliberate
failing demonstrations, labelled as such; a contrast sweep will flag them.
Spacing bars have `width` bound to the semantic space roles; radius squares
bound to radius roles.

Webflow: every semantic colour, space and radius is a one-to-one Webflow
Variable. Alpha colours (divider, scrim) are fine as Webflow colour
variables with alpha.

## 3. Type: built

Section `3 · Type` **21:2025**: `Type · Desktop 1440` **21:2026** and
`Type · Mobile 375` **21:2134**. Same 25 styles in both; only the frame's
explicit `D02 Typography` mode differs (Desktop / Mobile), so nothing is
resized per node. Specimens use real copy: the workforce H1, the locked
home H1, "Job *opportunities*", the 4 Sep 2026 release headline, the
Millwrights QA description, footnote 1 verbatim, the QA workforce
description. A navy panel shows Navy mode (gold qualifier, cream figure).

Font check in Figma: **Schibsted Grotesk** and **Fraunces** both load, all
weights needed. **Substitution:** Fraunces renders as Figma's default
static instance, not `opsz 144, SOFT 50`; the italic is slightly sharper
and narrower than the board. Webflow: add
`font-variation-settings:"opsz" 144,"SOFT" 50` on the human-word class via a
small custom-code style (the board's own note). No family substitutions.

Fixed after screenshot: the superscript range on "10,000+¹" first landed on
the leading "1". Footnote numerals are set on the baseline at 20–30px Bold
rather than raised; Schibsted has no `sups` feature exposed in Figma. In
Webflow use `<sup>`.

## 4. Hero: built

Section `4 · Hero` **21:2585**.

| Frame | ID | Size |
| --- | --- | --- |
| Hero · Workforce · 375 (Typography Mobile) | 21:3165 | 375 × 1321 |
| Hero · Workforce · 1440 (Typography Desktop) | 21:3201 | 1440 × 1234 |

D02 components (atoms, nested as instances in both frames):

| Component | ID | Notes |
| --- | --- | --- |
| D02/Portrait placeholder (set) | 21:2598 | Field = Gold 21:2586, Aqua 21:2589, Navy 21:2592, Cream 21:2595; text props `Brief title`, `Brief` |
| D02/Button | 21:2599 | pill, `action/primary-*`, min height 44 (`size/tap-min`), `Label` prop |
| D02/Pill | 21:2601 | nav pill |
| D02/Flag | 21:2603 | dashed tier-A flag, production note, not copy |

Copy, all locked: alert (desktop: "News · 4 September 2026" + the 4 Sep
release headline + "View all"; mobile: QA's "What's happening…" / "Heavy
equipment transport… September 16."), QA nav, eyebrow "Careers", H1 "Meet
the *tradesmen and women* building the campus", the QA workforce header
description verbatim, button "Find work on the campus →". Trade strip:
1440 shows seven tiles with the seventh clipped at the edge to signal the
sideways scroll; 375 a 2-col grid of four (as the board). Captions name the
trade only.

Compared with the board (screens `reviews/screens/02-hero-375.png`,
`02-hero-1440.png`): type pairing, scale, cream/paper grounds and the
portrait fields match. Fixed after first screenshot: the placeholder
highlight sat bottom-right; moved to top-left (board's `30% 18%` radial).
Differences kept: the hero is the workforce page (locked H1 per task), not
the board's home hero; no ghost button (root §7 "no button borders").

Contrast: navy on every light field ≥ 6.66:1, cream on navy 11.41:1, aqua
"View all" link on navy 10.03:1. No text over photographs in this section.

Webflow: alert = CMS item + dismiss stored in localStorage (Interactions
can't remember; one small embed). Strip = flex row, `overflow-x:auto`,
`scroll-snap-type:x mandatory` (custom property in Designer is supported).
Portrait highlight gradient is decorative and unbound (raw white/aqua
alpha); in production it is the photograph.

---

## Stopped here (coordinator's 50% check-in, 6 Nov 2026)

Done: 0 clean-up, 1 Cover, 2 Tokens, 3 Type, 4 Hero.
**Not started:** 5 The nine trades + By the Numbers (375, 1440; screenshots
02-numbers-375/1440), 6 Brand in the world (02-world.png), 7 Motion &
imagery notes. Motion tokens already exist in `D02 Motion` (durations
0/120/240/480 ms, distance 16, scale 1.03, eases appear/interact/reduced).

Open issues:
- Fraunces renders without opsz 144 / SOFT 50 in Figma (static default).
- Footnote numerals sit on the baseline in Figma (no `sups`).
- QA descriptions for Operators and Laborers look swapped (brief §11);
  still to be used verbatim in section 5 and flagged.
- No write conflicts or timeouts so far.
