# Stage 3 — Design system

Typography, colour, spacing and motion for the Homer City Energy Campus site.

| Where | What |
| --- | --- |
| [Figma](https://www.figma.com/design/Jrd1qr29Hi3WvscddRo34r/Longacre) | 270 variables in 4 collections, 32 text styles, 5 effect styles, plus a visual token sheet |
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

Four collections carry it:

| Collection | Modes | Holds |
| --- | --- | --- |
| Primitives | Default | 132 raw values — colour steps, the 2px space scale, font sizes, radii |
| Semantic | Default | 105 roles — `surface/*`, `text/*`, `action/*`, `border/*`, `pillar/*`, `space/*`, `radius/*`, `icon/*` |
| Typography | **Desktop, Mobile** | 17 font-size roles — see below |
| Motion | Default | 16 durations, easings, distances, staggers |

In Figma the colour primitives are created with `scopes = []`, which **hides them
from every picker**. A designer opening a fill picker sees `surface/page`,
`surface/brand`, `surface/accent` — not 79 raw swatches. That is deliberate: a
token system only holds if using it correctly is easier than bypassing it.

The payoff is concrete. When the brand guide arrives and the real blue turns out
to be two shades off, one primitive changes and all 105 semantic tokens, every
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

### One mode switch drives the whole responsive ramp

The **Typography** collection is the only one with modes. Each entry is a
font-size role that aliases a different primitive per mode:

```
type/hero      Desktop → font-size/1100 (104px)   Mobile → font-size/700 (44px)
type/h2        Desktop → font-size/600  (36px)    Mobile → font-size/400 (24px)
type/body      Desktop → font-size/200  (18px)    Mobile → font-size/100 (16px)
```

Every text node in the file binds `fontSize` to one of these. Mobile artboards
carry an explicit **Mobile** mode; desktop artboards carry **Desktop**. Changing
one artboard's mode reflows its entire type ramp — no duplicated components, no
per-instance overrides.

Line height and tracking stay as **percentages**, so they scale with the font
size automatically and need no mode of their own. That is why only font size is
a variable.

`type/logo-wordmark` and `type/logo-sub` are deliberately separate: the logo is a
lockup, not body copy, and must not ride the body ramp. Both are placeholder
artwork until the logo vector arrives.

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

### Radius — four roles, one dial

Primitives are `0, 2, 4, 8, 12, 16, 24, 9999`, but components never touch them.
They use four semantic roles instead:

| Role | Value | Used by |
| --- | --- | --- |
| `radius/control` | 2 | Buttons, chips, inputs |
| `radius/surface` | **0** | Cards, tiles, panels, banners |
| `radius/media` | 4 | Grouped imagery, portraits, thumbnails |
| `radius/pill` | 9999 | Avatars, timeline markers, round badges |

Surfaces at 0 is the deliberate part. A card defined by a rounded box is a card
the layout is apologising for; a card defined by space and a ground shift is one
the layout means. Roles also make this a **one-line decision**: if the client
wants the whole system softer, `radius/surface` re-points and every component
follows.

### Strokes mean exactly one thing

A stroke is a **divider between pieces of content**. Nothing else.

Not a card outline, not a tile accent, not a severity bar, not a button border.
Those are drawn with ground, space or a filled rectangle, which is what they
actually are. Across the entire file this leaves 32 strokes: FAQ row rules,
header bottom rules, mobile menu row rules, and three timeline markers where the
ring *is* the object and carries complete-versus-upcoming without relying on
colour.

`border/divider` and `border/divider-inverse` exist so the intent is legible in
the token name, not just in the usage.

### Elevation

Five steps, **tinted with `navy-950` rather than pure black**. A black shadow on
a warm ground goes muddy; a navy-tinted one keeps elevation inside the palette.
Shadows live as Figma effect styles (`Elevation/xs … xl`) because Figma variables
cannot hold shadows.

Cards no longer use them. Elevation is now reserved for things genuinely floating
above the page — the sticky header once scrolled, the mobile menu overlay — plus
focus rings, which are zero-blur spread shadows so they map to
`box-shadow: 0 0 0 3px` exactly and survive variant swaps.

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


---

## 9. Revision — from wireframe to finished

A review found the first pass reading as a wireframe: every element announced by
a rounded, outlined box; type too timid to establish hierarchy; four pastel
grounds competing in a single row. Reference points were Performance Lab, T1
Energy, Zipline and Glide — sites that build structure from space, scale and one
confident accent rather than from containers.

What changed, and why:

| Change | Reason |
| --- | --- |
| Strokes reduced to content dividers only | An outline around everything is the single strongest wireframe signal |
| `radius/surface` = 0 | Cards defined by ground and space, not by a rounded box |
| Display type up to 104px desktop / 44px mobile | The first pass had no scale contrast; a hero needs to behave like one |
| Eyebrow role added (12px, 12% tracking, caps) | Carries section scope **and** the date-stamps and category labels the fact discipline needs — an editorial device doing real work |
| Stat figures blue → `text/stat-figure` (near-black) | At 84px Light, blue read as decoration; near-black reads as fact. The brand blue moved to the eyebrow, where it has more effect |
| Pillar tiles: pastel grounds → accent rule | Four pastel tints side by side read as a dashboard, not as one set of four |
| News cards: chrome removed, image enlarged | The photograph is the strongest asset in the source material; it should carry the card |
| Quote cards: box removed | A pull quote on the page ground with a hairline reads as editorial rather than as a widget |
| Buttons: outlined secondary → filled navy; radius 2; trailing arrow | Outlines fail over photography. Every reference site has exactly one button style plus text links |
| Every font size, gap, padding and radius bound to a variable | Roughly half the file was hardcoded or reaching past the semantic layer; it is now **6,188 bound values and zero unbound** |

**Reversibility.** Every one of these is a token move, not a rebuild. Softer
corners, blue stat figures and a lighter type ramp are each one re-pointed token
away if the client's brand guide says otherwise.


---

## 10. Second revision — white base, sentence case, verified AA

### A contrast defect, found and fixed

Auditing every semantic text-on-surface pair turned up a real failure that had
been there since Stage 3, despite §2's "verified, not assumed" claim — the
verification had covered a subset:

| Token | Was | On light grounds | Now |
| --- | --- | --- | --- |
| `text/tertiary` | `stone/600` | **2.88 – 3.87:1** | `stone/700` (4.72 – 5.46) |
| `text/footnote` | `stone/600` | **2.88 – 3.87:1** | `stone/700` (4.72 – 5.46) |
| `text/secondary` | `stone/700` | 4.07 on `sunken` | `stone/800` (6.80 – 7.87) |

These are the tokens carrying *"as of September 2026"* and the footnote markers.
The two figures §5 says must always be visible were the two hardest to read.

`stone/700` is the floor: it is the lightest neutral that clears 4.5:1 on white.
Anything lighter cannot legally carry text, whatever the ground.

### Lighter, and what "lighter" actually meant

| Token | Was | Now |
| --- | --- | --- |
| `surface/page` | `stone/50` | **`white`** |
| `surface/subtle` | `stone/100` | `stone/50` — the old page tint, now doing the grouping |
| `surface/sunken` | `stone/200` | `stone/100` |
| `surface/brand` | `navy/950` | `navy/900` |
| `surface/brand-alt` | `navy/900` | `navy/800` |

The page is white and the old tint groups content. Grounds carry the rhythm; the
dark bands stop reading as near-black.

Text had to go *darker* for AA while grounds went lighter — the lightness comes
from the surfaces, which is where the eye reads it anyway.

### Sentence case, and blue means link

Labels were uppercase at 12% tracking. Both are gone: **sentence case at 4%
tracking**, and `text/eyebrow` repointed from `blue/700` to `stone/700`.

Blue now means exactly one thing: this is a link. A label that was blue but not
clickable was a small lie told 90 times across the file.

### Verified, this time properly

Not a token matrix — every text node in the file, against its actual nearest
painted ancestor, at the AA threshold for its own size and weight:

**932 text nodes checked. Zero failures.** Plus 5,711 bound values, zero
unbound, zero reaching past the semantic layer.


---

## 11. Palette rebuild — the client's five colours

The client supplied a five-colour palette. The primitive ramps were regenerated
in OKLCH so each anchor is reproduced exactly at a named step, and every other
step in that family derives from it:

| Anchor | Role | Lands at | Generated |
| --- | --- | --- | --- |
| `#143251` | Deep navy — institutional ground | `navy/900` | `#1D3D5C` |
| `#238FC8` | Cerulean — the brand blue | `blue/600` | `#0D8CC2` |
| `#AFECF1` | Pale aqua | `teal/200` | `#AEECEF` |
| `#F3F1D0` | Cream | `sand/100` | `#F3F0D0` |
| `#D8B471` | Gold | `gold/400` | `#D4AA6A` |

Eight families, 88 primitives. Three structural decisions came out of it:

**The cream needed its own family.** `#F3F1D0` carries chroma 0.043 at hue 104 —
roughly three times the tint of the `stone` neutral ramp. A ramp that light-tinted
cannot also carry body text: its dark steps land on olive, and text in an olive
gray reads as a mistake. So `sand` was added for grounds and `stone` stays
deliberately untinted for text. Only `sand/50–200` are used; the darker steps
exist for completeness.

**Amber became gold.** The supplied gold sits 14° from the old amber, so keeping
both would have been two names for one hue. The family was renamed and
re-anchored — Figma aliases are id-based, so every semantic pointing at it
followed automatically. Caution still reads at the dark end (`gold/900` is
`#523406`, 11.3:1 on white) and the brand gains a usable warm range at the light
end.

**The brand blue cannot carry body text.** `#238FC8` is 3.60:1 on white — it
fails AA for anything under 24px. It is the *identity* blue, not the *link*
blue. Links use `blue/700` (`#00729F`, 5.37:1). This is exactly the distinction
the two-layer model exists to hold.

### Where each colour appears

| Family | Job |
| --- | --- |
| `navy` | Institutional bands, the hero, the footer |
| `blue` | Links, primary actions, the Community pillar |
| `teal` | The aqua: `surface/accent-subtle`, and inverse links on navy |
| `sand` | Warm grounds — `surface/subtle` groups and separates content |
| `gold` | The Energy Future pillar, and construction-notice feedback |
| `green` / `red` | Kept: Safety pillar, success and urgent feedback |
| `stone` | Neutral text ramp only — never tinted |

The cream reads heavy at full section width, so `surface/subtle` uses `sand/50`
and the full `sand/100` cream is held for feature bands (`surface/stat`) and
recessed states.

### Verified

1,725 text nodes across all three pages. 375 are icons and 94 sit over
photography with no painted ancestor; **1,256 were checked against their actual
nearest painted ground at the AA threshold for their own size and weight, and
none failed.** Zero unbound values, zero reaching past the semantic layer.

### A flag worth keeping

This palette diverges from the colours sampled off the client's own PDFs
(`CLAUDE.md` §7) — notably it introduces cream and gold, which appear nowhere in
the supplied collateral, and softens the cerulean. That is a legitimate
direction, but it is a **brand decision, not a derivation**, and it should be
confirmed against the brand guide when it arrives (open question #1).


---

## 12. Typeface change — Open Sans to Geist

A review found the design still reading dated after the palette work. The
diagnosis was the typeface, not the colour.

**Open Sans was the web's default from roughly 2011 to 2016.** At display
weights and sizes it carries that period with it, and no amount of white space
or palette tuning undoes the association. Checked against current reference
work — Ragged Edge, SSENSE, Studio Freight, Base — every one of those pages is
carried by its type, not its colour.

**Geist** replaces it across the system: 1,350 text nodes and all 32 text
styles. It was chosen over the alternatives because:

| Candidate | Why not |
| --- | --- |
| Inter | Fine, but the current default — neutral to the point of anonymous |
| Instrument Sans | No Light weight, and the stat figures depend on Light |
| Schibsted Grotesk | No Light weight either |
| Archivo | A real contender, with more editorial character — the pick if the client wants more personality than Geist gives |
| Public Sans | Credible civic choice, but plainer than what the brief needs |

Geist keeps the full range the system relies on — Light for stat figures
through Bold for display — and reads tighter and flatter than Open Sans at the
104px hero size, which is where the difference shows most.

It is a Google-hosted face, so it ports to Webflow exactly as Open Sans did.

## 13. Clean pass — white grounds, deeper blue

| Change | From | To |
| --- | --- | --- |
| `surface/subtle` | `sand/50` | `stone/50` |
| `surface/sunken` | `sand/100` | `stone/100` |
| `surface/stat` | `sand/100` | `stone/50` |
| `action/primary-bg` | `blue/700` | `blue/800` |
| `text/link` | `blue/700` | `blue/800` |
| `text/link-hover` | `blue/800` | `blue/900` |
| `pillar/community` | `blue/700` | `blue/800` |
| `space/section-y-lg` | 120px | **160px** |

The `sand` family no longer appears in any semantic role — the cream was
carrying too much warmth at section scale. It stays in the primitives, one
re-point away if it is wanted back for a feature band.

The 36 grid-mark `+` glyphs were removed. They suited the Performance Lab
register, but against a brief of "clean" they read as furniture.

Section padding at 160px narrowed the content column to 1120px, which dropped
the stat grid to two columns — the fixed 368px children no longer fitted three
across. Columns re-fitted to 341px. **This is the recurring failure mode of
fixed-width children inside a wrapping container: change the padding and the
column count changes silently.**

Verified after: 1,165 text nodes checked against their real grounds, zero
contrast failures, zero unbound values, zero primitive leaks.

A further 55 text nodes now sit over photographic hero fills and cannot be
contrast-checked programmatically — their legibility depends on the gradient
scrim beneath them, which is a design decision to confirm visually, not a
computed one.
