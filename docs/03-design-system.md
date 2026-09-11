# Stage 3 — Design system

Typography, colour, spacing and motion for the Homer City Energy Campus site.

| Where | What |
| --- | --- |
| [Figma](https://www.figma.com/design/Jrd1qr29Hi3WvscddRo34r/Longacre) | 232 variables in 3 collections, 28 text styles, 5 effect styles, plus a visual token sheet |
| `design-system/tokens.json` | W3C Design Tokens format — the machine-readable source |
| `design-system/tokens.css` | The same tokens as CSS custom properties; powers `prototype/` |

Direction given: Open Sans, Google Material icons, primitive colour scales with
semantic tokens on top, spacing on a 2px scale, gentle motion. Brand evolved
rather than replaced (Stage 2 decision).

---

## 1. The two-layer model

Every token sits in one of two layers, and the rule is absolute:

> **Primitives hold values. Semantics hold meaning. Components only ever use semantics.**

```
color/blue/700  = #006EB1          ← primitive: a value, no opinion
action/primary-bg → color/blue/700 ← semantic: a decision, aliased
```

In Figma the colour primitives are created with `scopes = []`, which **hides them
from every picker**. A designer opening a fill picker sees `surface/page`,
`surface/brand`, `surface/accent` — not 79 raw swatches. That is deliberate: a
token system only holds if using it correctly is easier than bypassing it.

The payoff is concrete. When the brand guide arrives and the real blue turns out
to be two shades off, one primitive changes and all 66 semantic tokens, every
text style, and every component follow. Nothing downstream is edited.

---

## 2. Colour

### What was inherited, and what changed

Sampling the client PDFs surfaced something useful: **the collateral is not
internally consistent.** The logo sits in azure; the print system drifted violet.

| Role | Sampled | OKLCH hue | |
| --- | --- | --- | --- |
| Logo cerulean | `#0B72BE` | **248.8°** | azure |
| Pale tints | `#E1EDF7` | 243° | azure |
| Section bars | `#001A85` | **264.0°** | violet-leaning, very saturated |
| Masthead navy | `#161A4B` | **274.3°** | most violet of all |

So "make the hues more modern" had a principled answer rather than a taste call:
**unify the blue family onto the logo's hue and drop the print system's violet
drift.** The logo is the one fixed asset — everything else moves to meet it.

| Scale | Hue | Reasoning |
| --- | --- | --- |
| **blue** | 250° | The logo's own hue, held as the interactive colour. `blue-700` `#006EB1` lands within a hair of the logo's `#0B72BE` — the primary button *is* the logo blue |
| **navy** | 258° | Pulled 16° off the masthead's violet. Still distinctly deeper than the azure, so the family keeps its hierarchy, but it reads as navy rather than blurple |
| **green** | 159° | The logo green at `#005D33` was 155°, slightly flat. Nudged toward emerald with a little more chroma. `green-800` `#056335` is nearly the original |
| **teal** | 205° | New. Sits between blue and green so it joins the family rather than arriving from outside. Carries the Energy Future pillar |
| **amber** | 68° | New. Construction alerts |
| **red** | 27° | New. Urgent alerts |
| **stone** | 80° | Warm neutral — see below |

Every scale runs 50 → 950 on a shared perceptual lightness ramp, generated in
**OKLCH** and gamut-mapped by reducing chroma while holding lightness and hue.
That is what makes `blue-700`, `green-700` and `stone-700` all sit at the same
visual weight — so swapping a pillar's colour never changes how heavy a tile
looks. Each scale also carries a small hue torsion (a few degrees across the
ramp) because a mathematically flat hue reads slightly synthetic.

### Two grounds, warm and cool

The neutrals are **warm** (`stone`, hue 80°), not the cool grey the existing
collateral implies. This is the one real departure, and it does specific work:

- **Warm paper for reading.** `surface/page` is `#F8F7F6`. Long FAQ answers and
  news articles sit on something closer to newsprint than to a dashboard.
- **Cool navy for the institutional moments.** Header, footer, and the By the
  Numbers band use `surface/brand` `#17273A`.
- The two alternate down the page, and warm neutral against azure is
  near-complementary — it makes the blue read as deliberate rather than default.
- It also serves the photography. The source imagery is green farmland and gold
  fields; a warm ground sits with it, a cool grey fights it.

### Semantic roles

66 colour tokens in eight groups: `surface`, `text`, `border`, `action`,
`feedback`, `pillar`, plus stat and footnote roles. Each is scoped in Figma to
the pickers where it belongs — `text/*` only appears in text-colour pickers,
`border/*` only in strokes.

**The four pillars get colour identities**, because they are fixed brand
architecture that a visitor meets on the homepage and again on deeper pages:

| Pillar | Token | Why |
| --- | --- | --- |
| Safety | `green-700` | Green reads as safe, and it is the logo's second colour |
| Infrastructure | `navy-800` | The structural, load-bearing end of the palette |
| Community | `blue-700` | The most open and human of the blues |
| Energy Future | `teal-700` | Forward-looking, and new to the system |

**Alert severities** map to the brief's banner requirement: Info → blue,
Construction → amber, Urgent → red. Each has a surface, border, text and icon
token so the layout stays identical and only colour carries the signal.

### Contrast — verified, not assumed

Every pairing was computed against WCAG 2.2 before the tokens were written.

| Pairing | Ratio | Needs |
| --- | --- | --- |
| `text/primary` on `surface/page` | **10.45** | 4.5 |
| `text/secondary` on white | **5.46** | 4.5 |
| `text/link` on white | **5.43** | 4.5 |
| White on `action/primary-bg` | **5.43** | 4.5 |
| White on `surface/brand` | **15.13** | 4.5 |
| `text/inverse-secondary` on `surface/brand` | **11.29** | 4.5 |
| `text/inverse-link` on `surface/brand` | **9.24** | 4.5 |
| `border/focus` on white | **3.84** | 3.0 |
| `border/focus-inverse` on `surface/brand` | **7.14** | 3.0 |

All pass. The 600 step of every scale clears 3:1 on white (large text and UI
components); the 700 step clears 4.5:1 (body text). That consistency is a
property of the shared lightness ramp, not a coincidence — it means a designer
can reach for `<scale>-700` for text and be right every time.

---

## 3. Typography

**Open Sans**, 300–700, from Google Fonts.

It is a workhorse rather than a statement, and for this brief that is the point.
Large x-height and open apertures keep it legible at 16px on a phone in daylight;
it has no stylistic tics that would read as "designed at" the reader; and Webflow
ships it natively, so there is no font-hosting step.

### The ramp

| Style | Desktop | Mobile | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display | 68 | 36 | Bold | 1.05 | −0.02em |
| H1 | 44 | 30 | Bold | 1.15 | −0.012em |
| H2 | 36 | 24 | SemiBold | 1.25 | −0.012em |
| H3 | 24 | 20 | SemiBold | 1.25 | 0 |
| H4 | 20 | 18 | SemiBold | 1.45 | 0 |
| Body Large | 20 | 18 | Regular | 1.6 | 0 |
| Body | 18 | 16 | Regular | 1.6 | 0 |
| Body Small | 16 | 16 | Regular | 1.45 | 0 |
| Caption | 14 | 14 | Regular | 1.45 | 0 |
| Footnote | 12 | 12 | Regular | 1.45 | 0 |
| Label | 14 | 14 | SemiBold | 1.45 | +0.08em, caps |
| **Stat** | 68 | 44 | **Light** | 1.0 | −0.02em |
| Stat Small | 44 | 36 | Light | 1.0 | −0.02em |
| Quote | 30 | 24 | Light | 1.25 | −0.012em |

All sizes are even numbers, consistent with the 2px discipline.

Three decisions worth naming:

**H2 is SemiBold, not Bold.** At 44 and 36 with the same weight, H1 and H2 were
hard to tell apart. Separating them by weight as well as size fixes it, and a
semibold H2 reads slightly more editorial — which suits a brief that is moving
away from corporate.

**Stat figures are Light (300).** Inherited directly from the fact sheet, where
the big numbers are set light in mid-blue. It is the most distinctive typographic
move in the existing collateral and it is worth keeping: at 68px, light weight
reads as confident rather than shouty, which matters when the numbers are the
argument.

**Body is 18px, not 16.** This is a public information site read by a wide age
range, often on a phone. The generous default costs nothing and helps everyone.

### Measure

`container/text` is **680px** — about 70 characters at 18px Open Sans. FAQ
answers, news articles and long commitment copy use it. Nothing that is meant to
be read runs full-bleed.

### Mobile ramp

Display steps 68 → 36 and H1 44 → 30. Tested at a true 375px viewport: at 44px a
hero headline breaks to two or three words a line and reads as fragments. 36px
holds a phrase. Stat figures deliberately stay large on mobile (44px) — they are
the proof, and shrinking them wastes the page's strongest asset.

---

## 4. Iconography

**Material Symbols Rounded**, weight 300, optical size matched to render size.

The first choice was Outlined. Figma turned out not to have it — the file offers
Material Symbols **Rounded** and **Sharp** only. Rather than run different icon
sets in Figma and in the browser, the system uses Rounded in both.

It is the better pair anyway. Open Sans is a humanist face with rounded
terminals; Rounded matches it, where Sharp would fight it. And for a site whose
job is approachability with a community, the softer set is the right register.
The visual difference from Outlined is corner treatment only.

| Token | Size | Optical size | Use |
| --- | --- | --- | --- |
| `icon-size/sm` | 20px | 20 | Inline with text, alert banners |
| `icon-size/md` | 24px | 24 | Buttons, list items, nav |
| `icon-size/lg` | 40px | 40 | Pillar tiles, commitment icons |
| `icon-size/xl` | 48px | 48 | Feature moments |

Always set `opsz` to match the render size — Material Symbols adjusts stroke
weight optically, and a 20px icon rendered at `opsz 48` looks thin and broken.

**Icons never carry meaning alone.** Every icon has a text label or an
`aria-label`. The alert severities are distinguished by icon *and* colour *and*
wording, because colour alone fails for colour-blind readers and icon alone fails
for screen readers.

---

## 5. Spacing

**2px base unit. The token name is the pixel value** — `space/16` is 16px. Nobody
has to learn a t-shirt scale or do arithmetic, which matters when the site is
handed to a Webflow editor who did not build it.

```
0  2  4  6  8  10  12  14  16  20  24  28  32  40  48  56  64  80  96  120  160  200
```

Dense at the small end for component-internal spacing, coarse at the large end
for section rhythm. 19 semantic spacing tokens alias the scale for the decisions
that repeat:

| Token | Value | Use |
| --- | --- | --- |
| `space/section-y` | 96 | Between major page sections, desktop |
| `space/section-y-compact` | 64 | Tighter sections |
| `space/section-y-mobile` | 48 | Section rhythm on phones |
| `space/container-x` | 24 | Page gutter, desktop |
| `space/container-x-mobile` | 16 | Page gutter, phone — the minimum side margin |
| `space/card-padding` | 24 | Standard card interior |
| `space/stack-xs … 2xl` | 8–48 | Vertical rhythm inside components |
| `space/inline-xs … lg` | 6–16 | Horizontal gaps between inline elements |
| `space/field-y` / `-x` | 12 / 16 | Form control padding |

### Radius and elevation

Radius: `0, 2, 4, 8, 12, 16, 24, 9999` — all even. Cards use `lg` (12), buttons
`md` (8), pills `full`.

Five elevation steps, **tinted with `navy-950` rather than pure black**. A black
shadow on a warm ground goes muddy; a navy-tinted one keeps elevation inside the
palette. Shadows live as Figma effect styles (`Elevation/xs … xl`) because Figma
variables cannot hold shadows.

---

## 6. Motion

Gentle throughout: nothing overshoots, nothing bounces, nothing draws attention
to itself. The site is delivering information to people who may be anxious about
what is being built near them — motion should feel steady, not playful.

### Durations

| Token | Value | Use |
| --- | --- | --- |
| `duration/fast` | 120ms | Colour changes, small state flips |
| `duration/base` | 200ms | Most hover and press interactions |
| `duration/slow` | 320ms | Expand/collapse, menu open |
| `duration/slower` | 480ms | On-appear reveals |
| `duration/slowest` | 640ms | Hero and page-load sequences |

### Easing — three curves for three jobs

| Token | Curve | Job |
| --- | --- | --- |
| `ease/appear` | `cubic-bezier(0.16, 1, 0.30, 1)` | **On appear.** Decelerates hard and settles softly — content arrives and stops, it doesn't slide in |
| `ease/interact` | `cubic-bezier(0.30, 0, 0.20, 1)` | **Interactions.** Hover, focus, press. Responsive without snapping |
| `ease/transition` | `cubic-bezier(0.40, 0, 0.20, 1)` | **Transitions.** Layout, accordion, menu. Even in and out |
| `ease/exit` | `cubic-bezier(0.40, 0, 1, 1)` | Dismissals — accelerate away, no lingering |

### Patterns

| Pattern | Spec |
| --- | --- |
| Section on-appear | opacity 0→1, translateY 16px→0, `slower` + `ease/appear`, 60ms stagger |
| Stat reveal | Same, staggered across the row so figures land one after another |
| Card hover | translateY −2px, elevation `sm`→`md`, `base` + `ease/interact` |
| Accordion | height auto, `slow` + `ease/transition`; chevron rotates on the same curve |
| Alert banner in | slide down + fade, `slow` + `ease/appear` |
| Alert dismiss | slide up + fade, `base` + `ease/exit` |
| Icon grid expand | `slow` + `ease/transition` — same curve as the accordion, since it is the same gesture |

Travel distances are small and on the 2px scale: `distance/sm` 8px,
`distance/md` 16px, `distance/lg` 24px. Long travel reads as decoration.

### Reduced motion

`prefers-reduced-motion: reduce` collapses every duration to 1ms and every
distance to 0 — **except fades, which stay at 120ms.** Movement is what causes
vestibular trouble; a cross-fade does not, and removing it entirely makes state
changes harder to follow. Durations go to 1ms rather than 0 so `transitionend`
still fires and JS that waits on it does not hang.

This is in `tokens.css` and is not optional.

---

## 7. Getting this into Webflow

| This repo | Webflow |
| --- | --- |
| Colour primitives | Variables, one collection, hidden from designers by convention |
| Semantic colour tokens | Variables aliasing the primitives — what designers actually pick |
| `space/*` | Size variables |
| Type styles | Text style classes, with breakpoint overrides for the mobile ramp |
| Open Sans | Native Google Font — add from Project Settings, no hosting |
| Material Symbols Rounded | Add via Project Settings → Custom Code as a Google Fonts link |
| Elevation effect styles | Box-shadow on a class (`shadow-sm` … `shadow-xl`) |
| `duration/*`, `ease/*` | Entered per-interaction in Interactions 2.0, which accepts custom cubic-bezier |

Two notes for the build:

**The mobile type ramp is breakpoint overrides, not separate variables.** Set the
desktop size on the text class, then override at the ≤767px breakpoint. That is
how a Webflow designer expects to work, and it keeps one class per style.

**Webflow's breakpoints are the system's breakpoints.** ≤479, ≤767, ≤991 and the
1280/1440/1920 min-widths. Nothing here invents its own.

---

## 8. Still open

| Item | Impact if it changes |
| --- | --- |
| **Brand guide** — real typefaces, exact colours, logo vector | Colours are sampled from rendered PDFs, which shifts values slightly. Because every semantic token aliases a primitive, correcting them is a find-and-replace on 7 scales, not a rebuild. Open Sans is a stated choice, not a guess at the brand face — if the real face differs, one `font-family` primitive changes |
| Icon set | Rounded chosen because Figma lacks Outlined. If the client installs Outlined in Figma, one variable changes |
| Dark mode | Out of scope; not in the brief. The primitive/semantic split means it could be added later as a second mode on the Semantic collection without touching components |
