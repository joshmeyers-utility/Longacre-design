# Stage 4 — First design pass

Mobile-first artboards and a reusable component library, built in Figma from the
Stage 3 tokens.

**File:** [Longacre](https://www.figma.com/design/Jrd1qr29Hi3WvscddRo34r/Longacre)

| Page | Contents |
| --- | --- |
| `01 Foundations` | Token reference sheet — colour scales, type ramp, pillars |
| `02 Components` | 14 component sets, every state as a variant |
| `03 Mobile` | 8 artboards at 375px |
| `04 Desktop` | 7 artboards at 1440px |

Everything is bound to variables: **6,188 bound values, zero unbound, zero
reaching past the semantic layer into a primitive.** No raw hex, no hardcoded
spacing, no hardcoded type size — change a token and every artboard follows.

Mobile artboards carry the Typography collection's **Mobile** mode and desktop
artboards carry **Desktop**, so the entire type ramp is one switch rather than a
duplicated component set.

---

## 1. Artboards

| Mobile (375) | Desktop (1440) |
| --- | --- |
| Home | Home |
| **Menu** — mobile only | — |
| The Campus | The Campus |
| Workforce | Workforce |
| Community | Community |
| FAQ & Resources | FAQ & Resources |
| News | News |
| Contact | Contact |

---

## 2. Component library

Fourteen sets, 60 variants. Each carries its usage and interaction notes in the
Figma description field, so the spec travels with the component.

| Component | Variants | Notes |
| --- | --- | --- |
| **Button** | Type (Primary/Secondary/Inverse) × State (Default/Hover/Pressed/Focus) | Focus rings are zero-blur spread shadows — the exact Figma equivalent of `box-shadow: 0 0 0 3px` |
| **Text Link** | Type (Default/Inverse) × State (Default/Hover/Focus) | Arrow travels on hover |
| **Stat** | Ground (Light/Dark) | "As of" date is part of the component, not an afterthought |
| **Photo Placeholder** | Aspect (21:9 / 16:9 / 4:3 / 1:1) | Carries the photo brief in its subject line |
| **Section Header** | Ground (Light/Dark) | Eyebrow + heading + intro at the 680px measure |
| **Pillar Tile** | Pillar (4) × State (Default/Hover) | Each pillar owns a colour, carried through the site |
| **Expandable Card** | State (Collapsed/Hover/Expanded) | **One component, three datasets** — trades, partners, commitments |
| **Alert Banner** | Severity (Info/Construction/Urgent) | CMS-driven, dismissible, remembered |
| **FAQ Accordion** | State (Collapsed/Hover/Expanded) | Last-reviewed date and source link built in |
| **News Card** | State (Default/Hover) | One card, three news types, separated by tag |
| **Header** | Device (Desktop/Mobile) × Ground (Light/Transparent) | Transparent only over the hero |
| **Quote Card** | Ground (Light/Dark) | Attribution is structural — a quote cannot run without it |
| **Timeline Item** | Status (Complete/Current/Upcoming) | Vertical rail inherited from the fact sheet |
| **Footer** | Device (Desktop/Mobile) | Four contact routes + the two mandatory footnotes |

The **Expandable Card** is the one worth calling out. The brief asks for rollover
interactions in three separate places — union descriptions, partner logos, and
commitment icons. They are the same interaction, so they are one component with
three datasets. Build it once, fix it once.

---

## 3. Mobile and desktop parity

Built mobile first, then widened. Every desktop page carries **the same sections
in the same order** as its mobile counterpart. Nothing appears on one and not the
other; nothing is reordered.

What changes is arrangement, never content:

| Section | Mobile | Desktop |
| --- | --- | --- |
| Hero | Stacked, buttons full-width | Content in a 760px column, buttons side by side |
| Orientation | Heading then paragraphs | Heading left, paragraphs right |
| By the Numbers | Six stats stacked | Three across, two rows |
| Power block | Cards stacked | Two across |
| Pillars | Four stacked | Four across |
| Trades | Nine stacked | Three across |
| FAQ | Category chips above questions | Category rail left, questions right |
| News | Cards stacked | Three across |
| Then / now | Stacked pair | Side-by-side pair |

### The one real divergence

**Mobile gets its own menu screen.** A six-item nav with descriptions will not
fit a dropdown, and cramming it there produces the tap-target problem the brief
is trying to escape. The full-screen menu gives each destination a 64px row, a
line of description, and room to breathe.

Two things stay put on mobile rather than going behind the toggle: **the logo and
the Jobs button.** A tradesperson arriving from a job board should never need two
taps to reach the thing they came for.

---

## 4. Layout and space

The brief asked for spacious, and the numbers reflect that.

| | Mobile | Desktop |
| --- | --- | --- |
| Page gutter | 16px | 120px (1200px content column) |
| Section padding (vertical) | 64px | 120px |
| Section internal gap | 24–32px | 48–64px |
| Hero height | hugs content | 840px |
| Display type | 44px | 104px |
| Card padding | 0 — cards are unboxed | 0 |
| Reading measure | full width minus gutter | 680–760px |

Card padding is zero on purpose. Once a card has no fill and no border, interior
padding only pushes its content away from its own image, and the grid gap
already does the separating.

### Images: full bleed unless grouped

The rule, applied consistently:

**Full bleed** — hero aerials, the labelled site map, the workforce crew shot.
These break the gutter and run edge to edge on both devices.

**Contained** — the then/now comparison pair, worker portraits beside a quote,
news card thumbnails, partner logos. The moment an image belongs to a group, it
sits inside the margin and takes the group's radius, because the relationship
between the images is the point.

---

## 5. Micro-interactions and states

Motion tokens from `docs/03-design-system.md` §6. Three curves, three jobs:
`ease/appear` for reveals, `ease/interact` for hover and press,
`ease/transition` for layout.

### Principles

1. **Nothing overshoots.** No bounce, no elastic, no spring. This site delivers
   information to people who may be anxious about what is being built near them.
2. **Movement is short.** 8–24px. Long travel reads as decoration.
3. **Every hover has a non-hover twin.** The brief specifies rollovers in three
   places; touch and keyboard reach the same content.
4. **Nothing important is behind an animation.** Content is in the DOM whether
   revealed or not — search and screen readers do not wait for scroll.

### Component states

| Component | Hover | Pressed / Active | Focus |
| --- | --- | --- | --- |
| **Button — Primary** | bg `blue-700` → `blue-800`, lift `-2px`, 200ms `ease/interact` | bg → `blue-900`, lift returns to 0 | 3px `border/focus` ring, never suppressed |
| **Button — Secondary** | bg transparent → `navy-50` | bg → `surface/sunken`, border → `border/brand` | 3px ring |
| **Button — Inverse** | bg white → `stone-100` | bg → `stone-200` | 3px `border/focus-inverse` ring |
| **Text Link** | colour deepens, arrow travels `+4px`, underline appears, 120ms | — | 3px ring around the whole link |
| **Pillar Tile** | lift `-2px`, elevation `sm`→`md`, arrow `+4px`, 200ms | lift returns to 0 | 3px ring on the tile |
| **Expandable Card** | elevation `sm`→`md` and a preview of the description | — | 3px ring; Enter/Space toggles |
| **FAQ Accordion** | row bg → `surface/subtle` | — | 3px ring on the question row |
| **News Card** | elevation `xs`→`lg`, lift `-2px`, image scales `1.03` inside its clipped frame, 320ms | — | 3px ring on the whole card |
| **Nav item** | underline grows from left, 120ms | — | 3px ring |
| **Alert dismiss** | icon bg → 8% tint | — | 3px ring |

### Scroll and page behaviours

| Behaviour | Spec |
| --- | --- |
| **Section on-appear** | opacity 0→1, translateY `16px`→0, 480ms `ease/appear`, 60ms stagger between children. Fires once, at 15% visibility. |
| **Stat reveal** | Same, staggered across the row so figures land one after another. The numbers are the argument — they earn the beat. |
| **Header swap** | Transparent → Light as the hero leaves the viewport. Background, border and `sm` shadow fade in over 200ms `ease/transition`. Sticky from then on. |
| **Alert banner in** | Slides down + fades, 320ms `ease/appear`, on page load. |
| **Alert dismiss** | Slides up + fades, 200ms `ease/exit`. Remembered per visitor until a new alert publishes. |
| **Accordion open** | Height auto, 320ms `ease/transition`. `+` crossfades to `−`. Multiple can be open — people compare answers. |
| **Expandable card open** | Height auto, 320ms `ease/transition`; chevron rotates 180° on the same curve. |
| **Mobile menu** | Full-screen, slides up + fades, 320ms `ease/appear`. Nav rows stagger in at 40ms. Focus traps inside; Escape closes; body scroll locks. |
| **Timeline** | Items fade up 16px, 60ms stagger, as the rail scrolls into view. |
| **Filter chips** | Selected state crossfades 120ms. Results fade out 120ms and back in 200ms — never a hard swap. |

### Reduced motion

`prefers-reduced-motion: reduce` zeroes every transform and collapses durations
to 1ms — **except fades, which stay at 120ms.** Movement is what causes
vestibular trouble; a cross-fade does not, and removing it entirely makes state
changes harder to follow.

The header still swaps, the accordion still opens, the menu still appears. They
just do it without travel. Already in `design-system/tokens.css`.

### Building this in Webflow

Everything above sits inside Interactions 2.0, which accepts custom cubic-bezier
values directly:

- Hover, pressed and focus → element trigger states
- Section on-appear and stat stagger → **Scroll into view**, with the stagger set
  as delay on each child
- Header swap → **Scroll progress** on the hero, or a **While scrolling** trigger
- Accordion and expandable card → **Mouse click (tap)** with height animation
- Mobile menu → native Webflow nav, restyled to full-screen

No GSAP required. The one thing needing custom code is remembering the alert
dismissal, which is a few lines of `localStorage` in a page embed.

---

## 6. What is placeholder

Every placeholder is visibly marked so nothing ships by accident.

| Marked | Meaning |
| --- | --- |
| Grey frame + "photo needed" | Photo library and usage rights still needed |
| "asset needed" | Site rendering / labelled map |
| "Name needed", "Date needed", "file needed" | Content gap |
| **Amber DRAFT flag** | Copy written from public sources, needs client and legal review |

The amber flag appears once, on the permit appeal FAQ answer. That one is drafted
from public filings and is the only place the draft asserts something the client
has not published themselves.

Union names, partner descriptions for Independence and Kovalchick, worker
spotlights and the photo library all remain blocking — see `CLAUDE.md` §10.

---

## 7. What to look at first

1. **`03 Mobile` → Home.** The whole system in one scroll: alternating warm and
   navy grounds, full-bleed hero, stat treatment, pillar tiles.
2. **`03 Mobile` → Menu.** The one place the devices diverge.
3. **`04 Desktop` → Home.** Same sections, same order, wider arrangement.
4. **`02 Components`.** Every state as a variant; interaction notes in each
   component's description panel.
5. **`04 Desktop` → FAQ.** The most important page on the site, and the one that
   has to carry sourcing convincingly.


---

## 8. Revision — the modern pass

The first pass was legible but read as a wireframe: every element wrapped in a
rounded outlined box, type too even to build hierarchy, four pastel grounds
competing in one row. Reference points for the revision were Performance Lab,
T1 Energy, Zipline and Glide — sites that build structure out of space, scale and
one confident accent instead of containers.

Work was done **at component level first** so it rippled through every artboard,
then screens were reviewed and corrected. Full token rationale in
`docs/03-design-system.md` §9.

### Components

| Component | Was | Now |
| --- | --- | --- |
| Button | 8px radius, outlined secondary | 2px radius; secondary is filled navy; trailing arrow on a boolean property; no outlined variant at all |
| Stat | Blue Light figure in a tile | Hairline rule, near-black figure at 84px desktop, no tile |
| Pillar Tile | Pastel ground + 3px top accent stroke | No ground, no stroke; a short accent rule in the pillar colour that extends to full width on hover |
| News Card | White card, border, shadow, rounded | The image *is* the card — no chrome; eyebrow + type/h3 headline sit on the page ground |
| Quote Card | Bordered box, generic avatar circle | Unboxed pull quote, hairline, square portrait slot at radius/media |
| Expandable Card | Outlined box | Lifts to `surface/default` on hover and expand; no border |
| FAQ Accordion | Boxed rows | Hairline between rows only — the one place a rule earns its keep |
| Alert Banner | Tint + 4px left bar | Tint and icon carry severity; no bar |
| Section Header | Blue 14px label | 12px eyebrow at 12% tracking, uppercase |
| Photo Placeholder | Centred grey box | Marker moves to top-right on full-bleed instances so it never sits under headline copy |

### Screens

- **Hero** is genuinely full bleed now — the image fills the frame behind the
  content rather than sitting in a 260px band above it. Desktop hero grew to
  840px to give the 104px headline room to breathe.
- **Stats** go three-across on desktop (columns were 373px in a 1200px grid, so
  only two fitted).
- **Pillar rows** stretch to equal height with the CTA pinned to the bottom, so
  four tiles with different copy lengths still align on one baseline.

### Strokes

The file now contains **66 strokes total**: 37 single-side hairline dividers
(FAQ rows, header bottoms, mobile menu rows) and 29 circular timeline markers
≤24px where the ring *is* the object and carries complete-versus-upcoming
without relying on colour. **Zero card outlines.**


---

## 9. Third pass — facts as rows, and a technical register

### The Campus: prose to spec rows

The overview carried its hard specs in three paragraphs. Tracing them found
something worth catching: **"about 50 miles east of Pittsburgh", "within 300
miles of…" and "decommissioned July 2023" exist only in
`docs/source/external-context.md`**, which §5 says is not publishable. Inside a
paragraph, nobody could tell which sentence was sourced and which was not.

The new **Spec Row** component makes that structural. Each fact is a label, a
value and its source — so provenance travels with the figure instead of with the
section:

| | |
| --- | --- |
| Turbines | Seven GE Vernova 7HA.02 high-efficiency natural gas turbines · *Fact sheet, May 2026 · IUP deck, July 2026* |
| Output | Up to 4.4 GW · *Fact sheet, May 2026 — projection* |
| From Pittsburgh | About 50 miles east · *⚠ Not in the supplied documents — needs client confirmation* |

Ten rows in four groups, every one either cited or flagged amber. `Layout=Row`
on desktop, `Layout=Stacked` at 375 where a fixed label column starves the value
— same content, same order, arrangement only.

This is the pattern to reuse anywhere the site states a number: Water &
infrastructure, the turbine detail, permit status.

### Cards

Every reference in this class carries a standfirst; ours had eyebrow and
headline only. **News Card** gains one line of what actually happened, behind a
boolean so a self-contained headline can switch it off.

### Borrowed from Performance Lab

Three devices transfer; three deliberately do not.

| Device | Taken | Why |
| --- | --- | --- |
| Rule paired with an index | ✅ | Every section header is a hairline with its number at the right end. Orientation on a long scroll, an anchor for deep links, and it is a mark rather than a box |
| Card header: rule + index | ✅ | Pillar tiles are `01–04` — they are fixed brand architecture, so the numbers are hard-coded and always true |
| Split-cell button | ✅ | The arrow sits in its own cell behind a hairline; it reads as a control, not an ornament |
| Edge-cropped display type | ❌ | Clips words. This site is read by neighbours checking facts, not admired |
| Ghosted oversize background type | ❌ | Costs legibility for style |
| Their orange, and all-caps labels | ❌ | Wrong brand; and caps were ruled out |

Section numbering is computed from a section's **position in its artboard**, not
from a running count, so mobile and desktop cannot drift. Verified: identical
across all seven page pairs. Search and filter blocks are excluded — they are
controls, and they sit differently at each breakpoint.
