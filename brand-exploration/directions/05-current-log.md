# 05 Current: build log

Figma build file `KLwTN3TWxX8SV9ty0yCQUw`, page `05 Direction` (2:6) only.
Prefix `D05` on every collection, style and component. Source of truth: `05-current.md`
and `moodboards/05-current.html` (values copied from its CSS, not eyeballed).

## 0. Setup (6 Nov 2026)

- Page 2:6 was empty on arrival. No `D05` collections or styles existed, so nothing was
  moved to "Z · Superseded" and nothing was deleted. No other direction's collections
  existed yet either.
- Figma session `2641a591-…`. Skills loaded: figma-use, figma-generate-design,
  figma-design-tokens.
- **Field route chosen: rendered poster frames, not Figma blur ellipses.** The board's field
  is five stacked conic gradients with 30–56px blur and `screen`/`overlay` blend; Figma has
  no conic gradient with a fill blur that reproduces the streaks. The CSS master was rendered
  headless (Playwright, Chromium 1243) with the animation frozen, from a field-only copy of
  the board CSS (`scratchpad/fig05/field.html`). The 105 s frame matches
  `05-current-motion-3.jpg` (the reduced-motion still) by eye. Frames rendered: 1440×900
  t=105, 375×760 t=105 (2×), hoarding 1376×460 t=62, social 1080×650 t=20, OG 1200×630
  t=110, motion thumbnails t=0/30/105, cover 1440×900 t=62. Each placed image is labelled
  "Field — poster frame (video loop in build)".
- Phase 3 gate of the tokens skill: the token values are the approved mood board's own CSS
  custom properties, so the board approval stands in for the plan review. No new values
  were invented.
- Contrast computed with coloraide (WCAG 2.1 formula): cream/navy 11.41, cream/night 15.84,
  aqua/navy 10.03, aqua/night 13.92, gold/navy 6.66, gold/night 9.25, current/navy 10.37,
  current/night 14.41, navy on cream pill 11.41, navy on current chip 10.37, blue/navy 3.64
  (fails, never text). **Band:** navy at 0.75 over pure white composites to `#4F657D`;
  cream on it **5.24:1** (board said 5.25, rounding), aqua 4.61, current 4.77. At 0.70 cream
  drops to 4.46 (fails). Aqua inside the band passes but with the least margin: keep aqua
  type inside the band to ≥ 13px and never lighten the band.

## 1. Cover — built

- Section `05 · 1 Cover` **21:1735**; frame `Cover · 1440` **21:1833** (Typography mode
  Desktop set on the frame). Field target 21:1834 (image fill, t = 62 s still), band 21:1835.
- Content: logo-as-is placeholder, "Direction 05 · the stretch" pill, HOMER CITY / ENERGY
  CAMPUS caps fitted edge to edge (Syne ExtraBold, `textCase = UPPER` over sentence-case
  characters, so the Webflow build keeps real words for screen readers), positioning line
  with the receipt words in Instrument Serif italic, then the concept lede and the two rules.
- Shell sections created at the same time: 21:1736 Tokens, 21:1737 Type, 21:1738 Hero,
  21:1739 Numbers, 21:1740 World, 21:1741 Motion.
- Components created (they live in the Tokens section): `D05/Pill` set **21:1750**
  (State = Default 21:1742 · Active 21:1744 · Ghost 21:1746 · Focus 21:1748, TEXT prop
  Label), `D05/Logo placeholder` **21:1751**, `D05/Field label` **21:1754**.
- Decision: the band's gradient stops are bound to `color/scrim/band` and
  `color/scrim/band-edge` (stop-level variable binding worked), so lightening the band is a
  token change, not a redraw.
- Decision: every field still carries the `D05/Field label` chip, opaque night plate, so the
  label itself never depends on the band.
- Webflow: cover is board-only, not a site page.
- 17:12 Tokens script failed once on a missing semantic var (space/18); swatch padding moved to space/stack-md. Rolled back cleanly, retried.

## 2. Tokens — built

- Section **21:1736**; frame `Tokens · palette, contrast, space` **21:2925** (auto-layout,
  all padding/gaps bound). Components row sits below it in the same section.
- Collections: `D05 Primitives` (VariableCollectionId:21:814, 54 vars: 9 colours + 6 alpha
  colours, 30 space, 4 radius, 5 size), `D05 Semantic` (21:815, 51 vars, one mode "Dark"),
  `D05 Motion` (21:816, 13 vars). All primitives `scopes = []`; semantics scoped.
- **Open-latitude addition, documented:** `color/current` `#D4F25A` (description on the
  variable says why: aqua × gold crossing pushed to full chroma; dates, sources, footnote
  numbers and focus only). `color/night` `#0A1626` is navy darkened, not a new hue.
- Semantic map shown with contrast (see §0 numbers) and the band rows: ≥ 5.24 cream,
  4.61 aqua, 4.77 current; 0.70 fails at 4.46.
- Decision: **one Semantic mode ("Dark"), not Light/Dark.** The direction is dark-only; a
  mirrored light mode would be invented. The brief's own doubt (an all-dark site read in
  daylight) is the open question that would add a Light mode later.
- Decision: links are cream + underline (departs from root §7 "blue means link").
- Retries: two script failures on missing semantic spacing (`space/18`, `space/10`); added
  `space/logo-x`, `space/chip-x`, `space/chip-y`, `space/cell-y`, `size/logo-mark`.
  Each failure rolled back cleanly. No write conflicts with other designers so far.
- Section grounds bound to `color/surface/deep` (sections defaulted to white).
- Webflow: every semantic colour maps 1:1 to a Webflow Variable. Alpha colours (band,
  rule, ghost) are expressible as Webflow colour variables with alpha. The band's
  gradient is a Webflow linear-gradient background using those two variables.
