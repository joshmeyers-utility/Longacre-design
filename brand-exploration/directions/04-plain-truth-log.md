# Direction 04 — Plain Truth · Figma build log

Build file `KLwTN3TWxX8SV9ty0yCQUw`, page `04 Direction` (node `2:5`) only.
Prefix `D04` on every collection, style and component. Source of truth for the
look: `moodboards/04-plain-truth.html` (exact values) and its screenshots.

## Session 1 — 2026-11-06

### Pre-flight
- Page 2:5 was **empty** on arrival — nothing moved to "Z · Superseded".
- No pre-existing `D04` collections, text styles or effect styles — nothing
  deleted. Other directions present in the file: D01 and D02 collections
  (not touched, not bound).
- Fonts: **Anton Regular** and **Archivo** (Regular, Medium, SemiBold,
  ExtraBold, all needed weights) load in Figma. **No substitutions.**
- figma-design-tokens Phase 3 gate: the approved mood board is the plan; its
  CSS `:root` is the token source, so values are transcribed, not derived.
  No OKLCH ramps — the direction uses the five client colours flat plus one
  derived ink, by design (lean token set, per brief).

### Tokens written first (before any section)
- `D04 Primitives` (VariableCollectionId:21:524, mode Value): 17 colours (the
  client five exact, `color/ink` #0A1B2E derived, white, plus `color/scene/*`
  illustration-only greys for drawn mock-ups), `space/*` px-named, `radius/0|6|full`,
  `border-width/1-5|2|3|6|10`. All primitive scopes `[]` (hidden from pickers).
- `D04 Semantic` (21:579, mode Value — single mode: the direction has no dark
  mode; blocks *are* the colour changes): `color/field/*`, `color/text/on-*`,
  `color/rule/on-*`, `color/action/*`, `color/stamp/date`, `color/placeholder/*`,
  `color/scene/*`, `space/*` roles, `radius/surface|patch|sticker`,
  `border-width/rule|rule-strong|rule-hover`. One hop to a primitive each.
- `D04 Typography` (21:644, modes **Desktop / Mobile**): family strings
  Anton / Archivo, sizes per role, `type/display/line-height` 115/53 px.
- `D04 Motion` (21:665): `motion/duration/wipe` 0.4s, `alert` 0.25s,
  `hover` 0.15s, `reduced` 0s, `motion/easing/ease-out` (0,0,.58,1),
  `motion/distance/wipe` 24, `alert` 48.
- 21 text styles `D04/*`, fontFamily + fontSize bound to D04 Typography so the
  artboard's mode switches the size. Anton styles are `textCase UPPER`.
- First attempt threw on `scopes` for TIMING variables; the script rolled back
  whole and the retry (guarded by a "D04 exists" check) succeeded. No write
  conflicts with other designers so far.

## 1 · Cover — built
- Section `21:1773`; artboard `Cover · 1440` `21:1793`.
- Cream statement band ("plainly and loudly" in ExtraBold — the board's blue
  highlight box is not expressible on a text range in Figma; bold carries it),
  blue title poster "PLAIN TRUTH." in `D04/Poster` (Anton 300), lede + aqua
  stamp rotated −2°, stand-in image 15-steel-and-crane with tag inside the
  frame; label-left/text-right rows: Positioning, Concept, Drawn from, Voice test.
- Kit components (in section 2, frame `21:1780`): `D04/Stamp` 21:1781,
  `D04/Image tag` 21:1783, `D04/Rendering tab` 21:1785, `D04/Button primary`
  21:1787, `D04/Button secondary` 21:1789, `D04/Logo placeholder` 21:1791.
- Decision: the board's case-study pill nav is dropped from the cover (it is
  board chrome, not brand); eyebrow line replaces it.
- Webflow: the cover is presentation only. Poster = one Grid (1fr 520px).

## 2 · Tokens — built
- Section `21:1774`; board `Tokens · 1440` `21:2480`; kit `21:1780` below it.
- Stacked cartons = the palette (Eager f11), each carton filled with its
  semantic field token and labelled with hex, share, pairing, and the alias.
- Eight live contrast swatches, each painted with the real semantic pair
  (computed: ink/blue 4.83, cream/navy 11.41, navy/cream 11.41, navy/gold 6.66,
  navy/aqua 10.03, navy/white 13.09, white/ink 17.37, aqua/ink 13.31). Failing
  pairs (navy/blue 3.64, white/blue 3.60) listed as "not used".
- Semantic map + space/radius/rule roles as text columns. Lean on purpose.
- Fix: board hugged to 128px after `resize()`; reset to AUTO. Aqua carton
  title broke mid-word; cartons rebalanced (2.6/1.4/1.4/1.05/.9/.95).
- Departures from root §7 recorded on the board: blue is a ground not a link;
  links on blue are ink + underline; secondary button has a 2px edge.
- Webflow: every semantic colour → one Webflow variable (`field-owned`,
  `text-on-owned`…). Primitives become a hidden "D04 base" variable group.
  Stat blocks take a `field` option (owned/record/paper/build/rest) mapped to
  combo classes `is-owned` etc. — no computed values anywhere.

## 3 · Type — built
- Section `21:1775`: navy specimen `Type specimen · 1440` `21:2760`
  ("UP TO 4.4 GW / 7HA.02" in Anton, 7HA.02 in aqua-on-navy 10.03:1, Archivo
  column + scale table); ladders `Type ladder · 375 · Mobile` `21:2863` (left,
  mobile first) and `Type ladder · 1440 · Desktop` `21:2802`. Same 21 styles,
  only the frame's D04 Typography mode differs — verified visually.
- Real copy only in samples: locked H1, hero lede, footnote 1 verbatim, the
  power-bill FAQ answer, figures from root §6.
- Fonts: Anton Regular + Archivo 400/500/600/800 load natively. **No
  substitutions.**
- Added during Cover: `D04/Poster` (120/300), `D04/Statement` (30/64),
  `D04/Row` (20/30) — presentation styles, not for site templates.
- Webflow: Anton + Archivo as Google Fonts. Sizes per breakpoint map to the
  two modes (Desktop on base, Mobile at ≤479). Anton styles use
  `text-transform: uppercase` on the class, never typed caps, so the CMS stores
  sentence case.

## 4 · Hero — built
- Section `21:1776`: `Hero · 375` `21:3583` (Mobile mode, left) and
  `Hero · 1440` `21:3611` (Desktop mode).
- Locked copy: H1 "Building America’s energy future while honoring
  Pennsylvania’s proud past." (QA Home wording), the QA hero intro, buttons
  "What we’re building →" / "Local alerts & advisories". Alert bar (aqua,
  CMS, dismissible, 24×24 dismiss target per WCAG 2.2 2.5.8): "Active · From
  September 16 — Heavy equipment transport to Homer City Energy Campus begins
  September 16" + "Read the advisory" (desktop). Navy strip: 1,800+ /
  "Direct-hire tradespeople and skilled contractors active on site" / aqua
  stamp "As of September 2026" (separate CMS date field, per §5.3).
- Image: stand-in 20-steel-beams-topdown, tag inside the frame. Cropped left
  (CROP transform, 15–20%) as on the board, which also keeps the generated
  figure at the right edge out of frame.
- Contrast: all hero type is ink on blue (4.83:1), navy on aqua (10.03),
  cream on navy (11.41), white on ink buttons (17.37). No text over the photograph.
- Compared with the board: it matches. The desktop nav sits ~24px lower than
  on the board (nav padding 24 instead of 20; tokens snap to stack-lg). Left
  as is.
- Screens: `reviews/screens/04-hero-375.png`, `reviews/screens/04-hero-1440.png`.
- Webflow: alert = CMS "Alerts" item, dismissal in localStorage via a small
  embed; slide-down 250ms in Interactions 2.0 (page load). Hero = Grid
  (1fr 470px); 375 stacks. Buttons are flat classes `button` / `is-secondary`.
- Doubt carried from the brief: the locked H1 reads as a slogan in giant
  caps; a factual H1 is a copy question for Josh.

## STOPPED here — coordinator's 50% check-in stop request
Not yet built: **5 · By the Numbers** (section `21:1777`, empty),
**6 · Brand in the world** (`21:1778`, empty), **7 · Motion & imagery**
(`21:1779`, empty). Motion tokens already exist in `D04 Motion`. Stand-in
images still to upload for 5 and 7 are already downsized in the scratchpad
(`12-haul-road-dump-truck`, `05-roller-closeup`); re-derive them from
`content/imagery/` if the scratchpad is gone. Still to save: 04-numbers-375.png,
04-numbers-1440.png, 04-world.png.

Open items:
- Hero H1 copy (above). The board's blue highlight in the cover statement was
  rendered as ExtraBold, because a text range in Figma can't take a box behind it.
- No write conflicts or timeouts on the shared file this session.
