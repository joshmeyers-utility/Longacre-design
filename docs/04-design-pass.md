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

The live site is unreachable from this environment — the egress proxy returns
`CONNECT tunnel failed, response 403` for that domain, and the proxy itself
reports healthy with no relay failures, so it is a standing policy block rather
than a transient one. The reading below is from fourteen of their sections
captured on Mobbin, not from the site itself.

| Device | Taken | Why |
| --- | --- | --- |
| Rule paired with an index | ✅ | Every section header is a hairline with its number at the right end. Orientation on a long scroll, an anchor for deep links, and it is a mark rather than a box |
| Grid-node `+` mark | ✅ | Their signature: small plus marks sitting on the invisible column grid. Ours sits at the left terminus of each section rule — 36 of them, the same idea at restrained volume |
| Card header: rule + index | ✅ | Pillar tiles are `01–04` — fixed brand architecture, so the numbers are hard-coded and always true |
| Split-cell button | ✅ | The arrow sits in its own cell behind a hairline; it reads as a control, not an ornament |
| Footer column labels | ✅ | Their footer labels every column. Ours now carries *Get in touch*, *Location*, *Pages* — it scans as a directory rather than a list of links |
| Edge-cropped display type | ❌ | Clips words. This site is read by neighbours checking facts, not admired |
| Ghosted oversize background type | ❌ | Costs legibility for style |
| Registration brackets on image wells | ❌ | Handsome, but they would sit on photo placeholders that disappear the moment real photography lands |
| Their orange, and all-caps labels | ❌ | Wrong brand; and caps were ruled out |

Fixed while in the footer: the mobile page-link row was a horizontal stack at
375 and was **cutting off News and Contact**. It stacks now, and all five show.

Section numbering is computed from a section's **position in its artboard**, not
from a running count, so mobile and desktop cannot drift. Verified: identical
across all seven page pairs. Search and filter blocks are excluded — they are
controls, and they sit differently at each breakpoint.


---

## 10. Editorial pass — space, scale and imagery

Two research passes on Mobbin (one on imagery, one on rhythm) converged on the
same diagnosis: the page had **one left edge, one width and one heading size**,
repeated eight times.

### Layout bugs found first

**Seven of nine wrapping grids were dropping columns.** Every one had
fixed-width children sized for a 1200px column that no longer fitted after
section padding grew:

| Section | Children | Was | Now |
| --- | --- | --- | --- |
| Power block, Resources, Routes | 4 × 588px | **1 per row** | 2 per row at 544 |
| Trades, Partners, Commitments, News feed | 384px | **2 per row** | 3 per row at 352 |

This is the recurring failure: fixed-width children in a wrapping container
change column count silently whenever padding moves. Nothing errors; the layout
just quietly collapses into a narrow column with dead space beside it.

**Six of seven page heroes had no scrim at all** — headline and body text
directly on photography. Every hero now carries a left-weighted scrim
(navy at 92% fading to 8% across the frame) plus a top scrim on Home, where the
header overlays the image.

### Scale hierarchy

The gap between the 104px hero and the 36px section heading was empty, so every
section read at identical weight. Two levels added:

| Level | Desktop | Mobile | Frequency |
| --- | --- | --- | --- |
| Hero | 104 | 44 | 1 |
| **`type/section-lg` — chapter opener** | **56** | **36** | **max 2 per page** |
| `type/h2` — standard section | 30 (was 36) | 24 | 4–5 |
| **`type/lead` — lead paragraph** | **24** | **20** | 1 per section |

The lead paragraph is the cheapest win: a fourth level of contrast inside a
section without escalating a heading.

### Vertical rhythm

**Section padding is now asymmetric — top is roughly 2× bottom.** Space above a
heading is what announces it; space below a section's last line is merely
terminal. Symmetric padding leaves the reader unable to tell which section owns
the whitespace.

| Role | Top | Bottom |
| --- | --- | --- |
| Chapter opener | 200 | 80 |
| Standard section | 120 | 64 |
| Navy band | 160 | 160 (the colour edge already separates) |
| Full-bleed image | 0 | 0 (it butts its neighbours) |

### The rule-and-number stamp is retired

It appeared on all eight sections and had become wallpaper. The index now lives
inline in the eyebrow — *"06 — Where things stand"* — and the hairline is gone.

### Asymmetry: the register

Sections that were a full-width heading above full-width content are now a
**280px heading column on the left and a 744px content column on the right**.
The heading wraps to three or four short lines; the wrap is the point. Applied
to the Home timeline, Trades on site, the full timeline, Commitments and
Resources.

This is the direct cure for the empty right half — it moves content there rather
than decorating it, and marginal headings read as a report rather than a
brochure.

### Imagery

Two full-bleed photographic bands added to Home, butting their neighbours with
no padding, each carrying a caption at the page margin naming the photo still
needed. Combined with the map band, the page now alternates contained and
full-bleed rather than running one width throughout.

---

## 11. Editorial pass, second round — the ledger and the band

Two research passes ran in parallel with this work: one surveying how modern
editorial sites interleave photography into a long scrolling page, one surveying
how they present statistics without falling back on cards. Both were checked
against real published sites rather than against taste. What follows is what
they changed.

### 11.1 By the Numbers is now a ledger, on white

A 3×2 grid of stat cards became a seven-row ledger: the figure hard left at
68px Light, the explanation in a 448px column hard right, a hairline spanning
the full 1120 between every row and closing the block at the bottom. The middle
is empty and stays empty — the rule spanning the gap is what makes the figure
and its label read as one object, which is also why the row needs no card and no
border.

The ground changed from navy to white. A seven-row ledger in navy is roughly
1,400px of solid colour, which is the opposite of the brief. Navy stays for
smaller institutional moments; here the numbers stand alone on white, which for
a transparency site is the right register anyway.

**Three fact-discipline problems this fixed structurally, not cosmetically:**

1. **The footnotes now travel with their figures.** Previously the section
   carried one line — *"¹ ² See footnotes at the foot of this page"* — pointing
   somewhere else. `CLAUDE.md` §5.2 requires the footnote on any surface showing
   10,000+ or ~1,000. The ledger's right-hand column has room for the full
   sentence, so both footnotes now sit directly beneath the figure they qualify,
   inside the rule that binds the row. No asterisk, no jump, no footer.
2. **The projection qualifiers moved above the figures.** *Anticipated*,
   *Projected* and *Up to* were buried mid-label or, in the case of "up to
   4.4 GW", dropped entirely — the artboard read a flat "4.4 GW". They are now
   an eyebrow directly above the figure, which is both more honest and more
   readable than a qualifier the eye skips.
3. **The date stamp took the eyebrow role.** "As of September 2026" was set in
   the footnote token. It is metadata, not fine print, and §5.3 makes it
   load-bearing.

A seventh row was added: **~3M cubic meters** of earth moved, *roughly the
volume required to build Egypt's Great Pyramid of Giza*. It is in the fact
sheet, it was not on any artboard, and it is the single most legible number in
the source material for a reader who does not think in gigawatts.

### 11.2 The band component, and a caption that would have shipped

The homepage's two photographic bands were hand-built frames. Their caption
read:

> Ironworkers on the power block. Photography needed at full resolution.

That is a production note sitting in a published-copy field. If the photograph
lands and nobody edits the caption, the live site says *"Photography needed at
full resolution"* underneath it. The brief and the caption were the same string.

**Image Band** fixes this structurally rather than by editing the string:

- The **brief** lives *inside the image area* — the region the photograph
  replaces. It is destroyed the moment the asset lands. It carries an amber chip
  reading *"Photograph needed — this text never publishes."*
- The **caption** lives *outside* the image area and is the only published copy.
- `Kind = Photograph | Rendering`. The IUP deck's cover is a **rendering**, not a
  photograph, and it is the most likely asset for someone to grab for a hero. On
  a site whose job is transparency, that distinction is the same discipline as
  the "as of" date, and it now has a place to live.
- `Caption = Inline | Stacked`. Inline puts the date in a 112px marker slot hard
  left with the prose in an offset column — deliberately the same geometry as a
  ledger row. Stacked puts the date above the prose, for bands under 700px.
- Width is never set on the component. The parent section's horizontal padding
  decides: 160 → contained, 80 → wide, 0 → full bleed, 16 → mobile.

Two further caption changes, both from the research: the prose is **near-black,
not gray** (gray is reserved for the date line beneath or beside it), and the
**date is split out of the caption string** into its own field, so §5.3's
date-stamp requirement is structural rather than a typing convention.

### 11.3 Where photography now runs

Before this pass, only the homepage had imagery below the hero. Captions and
dates below are the client's own, taken verbatim from the IUP deck's photo-essay
table and re-cased to house style.

| Page | Band | Width | Caption |
| --- | --- | --- | --- |
| Home | after Workforce spotlight | wide 1280 | First steel, going vertical. March 2026. |
| Home | after Timeline teaser | full bleed 1440 | View from the north. February 2026. |
| Workforce | after Trades on site | wide 1280 | Crews working at height on the gas insulated switchgear building. July 2026. |
| The Campus | after What is being built | contained 1120 | Unit 5 heat recovery steam generator (HRSG) under construction. July 2026. |
| The Campus | Then and now | two-up 544 | Homer City Generating Station, 1969–2023 · Power block aerial, looking north, April 2026 |

**Full bleed is spent, not spread.** It appears once in the body of the site,
and no two photographic bands are adjacent. The researched rhythm — never two
bands of the same width class consecutively, always a non-photographic section
between — holds on every page.

**Three placements were deliberately not built**, and the reasoning matters more
than the omission:

- **A Contact entrance photograph.** An inviting gate shot is a promise the site
  cannot keep while no supplied document states a visitor access policy, on a
  site in full construction phase. Open question #13.
- **An apprenticeship photograph.** The only frame that works is a real
  apprentice and a real journeyman on a real dated task. A staged version is
  precisely the generic corporate register the client asked us to leave, and it
  would sit directly under a figure that is itself still unconfirmed.
- **A third homepage aerial.** The hero is an aerial and the map band sits
  between. A third would make the page one photograph repeated.

### 11.4 Two pieces of copy that could not have run

- **"135 people learning a trade on this job."** The source says **135+**, and
  says it in a client press release that is tier A and still unconfirmed. The
  artboard had turned a qualified, unconfirmed figure into a flat assertion.
  Now reads "135+ apprentices learning a trade on this job".
- **The Voices section ran the same invented quote twice**, unattributed, with
  no portrait — against §5.6, which says a quote without a name, a role, an
  organization and a real photograph does not run. It is now a single
  full-width pull quote with the portrait slot shown, the attribution slots
  labelled, and an amber flag stating plainly that no attributed quote has been
  supplied. Two half-filled cards made the section look half done; it is not
  started.

Also removed: a standfirst on Then and now that ended *"— so this pair sits
inside the margin, not full bleed."* That is a note to a designer, in a field
that publishes.

### 11.5 Mobile

Full parity, not a reduction. Mobile gets the same seven ledger rows (stacked
layout, 44px figures, same qualifiers, same attached footnotes), the same four
photographic bands at full width inside the 16px gutter, the same Then and now
pair, the same Voices flag, and the same apprenticeship correction. The caption
stacks rather than running inline, via the component variant rather than a
per-instance override.

---

## 12. The copy audit — what measuring the layout turned up

Restructuring a section means reading it. Reading it turned up more than the
layout problems.

### 12.1 Cards, removed

28 filled cards across four sections — Home's power block, the FAQ's resources,
The Campus's water block, Contact's routes. Both research passes named the
white-box card on a light ground as the single strongest 2015–2019 signal, and
it also conflicted with the file's own stroke rule in spirit: the box was doing
the separating that space and a rule should do.

All 28 are now rule-and-space: a hairline at the top of each column, no fill, no
padding box, the column free to be whatever height its content needs. Ragged
bottoms stop being a defect once there is no box to be ragged against.

**Contact's four route cards were white on white.** The box was invisible and
still in the markup — it would have shipped to Webflow as a div with a
background colour matching its parent.

The only other tinted ground in the file went at the same time: Workforce's
"How to apply" band was `surface/accent-subtle`, the lone aqua surface in a
system of white, near-white and navy. The button carries the emphasis.

### 12.2 The word "coal"

It appeared four times — in Home's orientation copy, in the homepage water row,
in the FAQ's water answer, and in The Campus page hero ("3,200 acres of former
coal ground").

**It appears in no client document.** Not in the fact sheet, not in the tour
deck, not in the IA brief. Only in `docs/source/external-context.md`, which §5
says is not publishable. The fact sheet's own phrasing is *"the former Homer
City Generating Station"* — which is also better writing, because it is specific
to this place and passes the voice test. Every instance now uses the client's
name for it.

The same audit caught *"decommissioned in July 2023"*. The photo essay says
**1969–2023** and names no month. The line now reads "ran from 1969 to 2023",
which is the client's own caption.

### 12.3 The water answer has no source at all

Three claims — the Two Lick Reservoir as the source, the comparison to the
former station's usage, and "roughly the same" — trace **only** to press
coverage in `external-context.md`. Tier B.

This is the question `docs/02-plan.md` says is asked most, on the topic with the
most organised opposition, and the client's supplied material does not answer it
anywhere. It now carries an amber tier-B flag on all three surfaces it appears
on, and it is blocking open question #14.

That is the right outcome, not a workaround. A transparency site that answers
its most contested question from newspaper coverage, unflagged, is doing the
opposite of what it claims.

### 12.4 Provenance, counted

**14 amber flags** now sit across the two artboard pages:

| Flag | Where | Why |
| --- | --- | --- |
| Tier A — 4 Sep 2026 press release | Workforce numbers, Home workforce spotlight | The five workforce figures are the ones the brief asked for and no supplied PDF contained |
| Tier B — press coverage | The Campus water card, Home power-block water row, FAQ water answer | No client document names a water source |
| Placeholder — no attributed quote | Community Voices, Workforce spotlights | §5.6: a quote without name, role, organization and a real photograph does not run |
| DRAFT — written from public filings | FAQ permit-appeal answer | Pre-existing; needs client and legal sign-off |

### 12.5 Verified, finally

**9,544 bound values across both artboard pages, zero unbound, zero reaching
past the semantic layer. 1,474 contrast checks against real painted ancestors:
zero failures, and zero within 0.35 of their threshold.** Every uniform-weight
stroke in the file is a 16×16 circle on the timeline rail.

### 12.6 The scrims, which the automated check could not see

The contrast sweep walks each text node up to its nearest **solid** painted
ancestor. A photograph is not a solid fill, so for text over a hero image the
sweep was measuring against the navy underneath the photo and reporting a pass
regardless of what the photograph actually does. Every hero was "passing" a
check that was not looking at the right thing.

Reading the actual gradients found two problems:

1. **Six mobile page heroes had no scrim at all** — white text directly on a
   photograph.
2. **The scrim that did exist ran the wrong way.** The homepage mobile hero's
   gradient is transparent at the top and 88% at the bottom, which is correct
   *there* because the photo occupies the top third and the text sits below it.
   Copied onto a page hero, whose eyebrow and headline start at the top, it put
   the weakest part of the scrim exactly where the smallest text was.

Both are now rebuilt from explicit values rather than cloned:

| | Direction | Stops (navy `23,39,58`) |
| --- | --- | --- |
| Desktop | left → right | 0.93 · 0.88 @50% · 0.72 @68% · 0.12 @92% · 0.08 |
| Mobile | top → bottom | 0.88 → 0.94 |

The desktop numbers are set so the scrim is still at 0.72 where the 900px text
column ends. Checked by hand against the worst case the design can encounter —
a **pure white photograph** behind the weakest point of the scrim:

| Text | Worst-case ratio | Needs |
| --- | --- | --- |
| White hero heading, desktop @0.72 | 5.97:1 | 3.0 |
| White standfirst, desktop @0.72 | 5.97:1 | 4.5 |
| White eyebrow, mobile @0.88 | 9.68:1 | 4.5 |

So hero text clears AA against any photograph that can be dropped in, not just
against the ones currently placed. That is the only way this holds once the real
photo library arrives and nobody re-checks.

> Worth remembering for the Webflow build: an automated contrast check that
> walks to the nearest solid fill will keep reporting these as passing. The scrim
> values are the guarantee, not the checker.

### 12.7 The tinted cards the first sweep missed

The card sweep in §12.1 looked for `surface/*` fills. Community's three route
cards were filled with `pillar/community-surface`, `pillar/safety-surface` and
`pillar/energy-future-surface` — pale blue, pale green and pale cream — so they
did not match the pattern and survived. They were the last tinted grounds in the
file, and the cream one is exactly what the client asked to be rid of.

All three are now rule-and-space like the rest. **Zero tinted grounds remain on
either artboard page.**

Removing the fills exposed a second problem underneath: **the "Open →" link in
each card was a different colour** — blue, green and gold, one per pillar. "Blue
means link" only teaches a reader anything if every link is blue; three colours
of link on one row teaches nothing. The same pattern was on Contact's four
route cards and on The Campus's three water icons.

26 nodes repointed:

- Links and their arrows → `text/link`, everywhere.
- Icons that are not pillar icons → `text/primary`.
- **Home's "Project pillars" section untouched.** That is the one place a pillar
  colour means a pillar, and the brand architecture in §6 depends on it.

The rule that falls out of this, worth stating plainly: **a pillar colour marks
one of the four pillars, and nothing else.** Used as decoration it stops being a
signal, and it quietly teaches the reader that colour here is arbitrary.

### 12.8 One photograph for Community

The Community page had no imagery below the hero, and the agent's ruling stands
that the Voices portrait cannot be briefed on its own. But the fact sheet names
a frame nobody had used: *"JUL | Hosted first community open house, convening
hundreds of residents from across Indiana County."*

It is the only event in the source material where the subject is neighbours
rather than machinery, which is exactly what a Community page needs and exactly
what the rest of the site's photography does not do. Added as a wide band
between Commitments and Voices, captioned from the fact sheet's own line.

### 12.9 Controls, made consistent

Three small inconsistencies, all the same underlying mistake — a control styled
by hand in one place and differently in another:

- **The FAQ's selected category was a pale aqua pill** (`surface/accent-subtle`);
  News's active filter was a navy one (`action/primary-bg`), and so was the
  FAQ's *mobile* chip. Desktop was the odd one out. Now navy everywhere, which
  is also the last `surface/accent-subtle` in the file.
- **Inactive filter chips were filled white on a white ground** — the same
  invisible-box problem as Contact's route cards, eight more times. Fills
  removed; the navy chip is the only filled one, which is what makes it read as
  selected.
- **The search field was also white on white**, so it did not read as a field at
  all. Given `surface/subtle` and the `field-x` / `field-y` padding roles.

And the News "Subscribe" section said an RSS feed was available and offered
nothing to click. It now carries a text link.

**Provenance flags** were sized to hug their text, which pushed the longest of
them past the edge of the accordion column on FAQ. All 16 now fill their
container and wrap.

### 12.10 Blue that was not a link

A closing sweep for the patterns both research passes named as dated —
rounded corners over 4px, drop shadows, italic captions, centred captions,
all-caps runs, text under 12px, British spellings — came back clean on every
count. The only genuine finding was one the design system's own rules should
have caught much earlier.

**104 Material Symbols icons were coloured with link tokens.** The nine trades
on Workforce. The seven commitments on Community. The resource-type icons on
FAQ. The four contact-route icons in the footer, on every page. None of them
are clickable.

`CLAUDE.md` §7 is explicit: *"Blue means link. Nothing else is blue... A blue
label that is not clickable is a small lie repeated on every page."* This was
that lie, 104 times — and it is exactly what the client asked to be rid of when
they said to use grays for anything that is not a link.

Icons are now split by whether the icon **is** the control:

| | Colour |
| --- | --- |
| `arrow_forward`, `add`, `remove`, `download`, `open_in_new`, `expand_more`, `close`, `search`, `menu` | `text/link` — these are the control |
| Everything else — trade marks, commitment marks, resource types, category marks | `text/primary` on light, `text/inverse-secondary` on navy |

The result is a page that is monochrome except where something can be clicked,
which is what the rule was always trying to produce.

**Final state: 9,668 bound values across both artboard pages, zero unbound,
zero reaching past the semantic layer, zero tinted grounds, 1,494 contrast
checks against real painted ancestors, zero failures.**
