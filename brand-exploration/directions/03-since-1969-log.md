# Direction 03 · Since 1969 — build log

Figma build file `KLwTN3TWxX8SV9ty0yCQUw`, page `03 Direction` (2:4) only.
Prefix `D03` on every collection, style and component. Source of truth:
`directions/03-since-1969.md` and the mood board (`moodboards/03-since-1969*.html`,
`-seal.js`, `-board.jpg`, `-375.jpg`).

## Setup — 2026-11-06

- Page 2:4 was empty on arrival. Nothing to move to "Z · Superseded".
- No pre-existing `D03` collections, text, effect or paint styles. Nothing deleted.
  Other directions present: D01 (Primitives, Semantic, Typography, Motion),
  D02 (same four). Not touched, not bound.
- Fonts confirmed in Figma: Cormorant (all weights + italics), Cormorant
  Infant, Cormorant Garamond, Instrument Sans (400–700 + italics).
- **Lining-figure substitution.** Figma's plugin API cannot set OpenType
  features (`setRangeOpenTypeFeatures` does not exist), and Cormorant renders
  old-style figures by default (probe: "10,000+" sets as small caps). Cormorant
  Infant ships **lining figures by default** and differs from Cormorant only in
  the single-storey lower-case a/g. So: figure, date and stamp styles use
  **Cormorant Infant** in Figma; in Webflow they are Cormorant with
  `font-variant-numeric: lining-nums` (site-wide custom code). Digits inside
  display headlines ("Since 1969", "April 2026") get a range override to
  Cormorant Infant. Caps are identical between the two families.
- Plan sign-off: the skill's Phase 3 gate is satisfied by the approved mood
  board (Josh's approval of direction 03); token values are its exact CSS
  values. Lean set requested by lead — no 11-step ramps, the board uses the
  five client colours plus four derived values only.

## Section 1 · Cover — built

Section `01 · Cover` (21:1852).

| Node | ID |
| --- | --- |
| Cover · 1440 (navy, then gold mark field) | 21:2728 |
| D03 Components frame | 21:1853 |
| `D03/Seal` component (200 × 200, vector) | 21:1854 |
| `D03/Mark` component (seven rays, 200 × 110) | 21:2022 |
| `D03/As-of pill` | 21:2559 |
| `D03/Kind stamp` set (Photograph · Rendering · Archival · Stand-in) | 21:2580 |
| `D03/Button` | 21:2581 |
| `D03/Note` (reviewer annotation, never shipped) | 21:2583 |

Decisions:
- **Seal is real vector**, a port of `03-since-1969-seal.js`: disc r98, rings
  r93/2.6 and r66/1.4, ring dots, the seven-ray fan (same polygon maths), the
  1.6px horizon, and "19 ✦ 69". Ring text is set glyph by glyph along r78/r83
  and **flattened to outlines** (matches the build note: text on a curve stays
  inside the SVG, never live). ✦ is a 4-point star, not a glyph.
- **Seal and mark recolour by mode, not by variant.** All their paints bind
  `color/seal/line` and `color/seal/fill`, so one component serves gold-on-navy
  (Navy mode), navy-on-cream (Cream) and navy-on-gold (Gold, the as-of pill).
  `D03 Semantic` therefore has three ground modes: Navy, Cream, Gold.
- "1969 to 2023" in the concept copy carries a `D03/Note` "Date to confirm
  (E11)" beside it. 1969 alone is sourced (IUP deck "1969–2023"); the 2023 end
  date is the open question.
- The "Since 1969" continuity doubt from the brief is shown on the cover for Josh.

Webflow: seal and mark ship as static SVG (inline for the reveal, `<img>`
elsewhere). Mode-switching becomes three SVG colourways or `currentColor`.

