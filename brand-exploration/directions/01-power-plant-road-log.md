# 01 Power Plant Road — Figma build log

Build file `KLwTN3TWxX8SV9ty0yCQUw`, page `01 Direction` (2:2) only.
Source of truth: `01-power-plant-road.md` + `moodboards/01-power-plant-road.html`.
Started 6 November 2026.

## 0. Clean-up (superseded build)

- Page 2:2 held **no top-level nodes** at start, so the "Z · Superseded"
  section was not needed (nothing to move). Logged rather than created empty.
- Font check: Schibsted Grotesk is available in Figma with Regular, Medium,
  SemiBold, Bold, ExtraBold, Black (+ italics). **No substitution needed.**
- Superseded D01 assets found and deleted (they belonged to the earlier
  direction):
  - Variable collections: `D01 Primitives` (144 vars, VariableCollectionId:15:133),
    `D01 Semantic` (73, 15:134), `D01 Typography` (155, 15:493),
    `D01 Motion` (13, 15:649).
  - Text styles (31): D01/Hero, H2, H3, Stat figure, Stat unit, Eyebrow, Intro,
    Body, Stat label, Footnote, Footnote label, Receipt link, Receipt date,
    Caption, Caption strong, Button, Nav, Notice, Notice strong, Wordmark, Tag,
    Brief, Brief title, Doc/Display, Doc/Subtitle, Doc/Title, Doc/Lede,
    Doc/Note, Doc/Label, Icon/MD, Icon/LG.
  - Effect styles, paint styles, components with D01 prefix on 2:2: none.
- Process note: figma-design-tokens' Phase 3 approval gate is treated as
  already passed — the mood board and brief are the approved plan (lead's
  instruction). The skill's "never delete variables" is overridden by the
  lead's explicit instruction to delete the superseded D01 collections.

## Tokens written before drawing (support for sections 1–3)

- `D01 Primitives` (VariableCollectionId:21:145, mode Value, 70 vars, all
  `scopes=[]` so pickers only show semantics): colour (gold 400/500/600,
  navy 900/950 + navy-900-a10, cream 50/100/200, aqua 200, blue 500/700,
  white, black, scene/* for mockup scenery), space/0–120 (px-named),
  radius 0/4/6/8/160/200/260/999, border-width 1/2/5, font family + 7 style
  strings.
- `D01 Semantic` (21:216, mode Default — this direction has no dark mode;
  navy is an explicit field, not a theme). ~60 vars, every one a one-hop alias.
- `D01 Typography` (21:273, Desktop/Mobile): 18 roles × family/style/size/
  line-height/letter-spacing. Line height and tracking are px per mode,
  computed from the board's ratios (e.g. hero 0.93 lh, −2.5%).
- `D01 Motion` (21:364, Default/Reduced): durations, delays, distances
  (FLOAT; Reduced = 0) and easing as cubic-bezier strings (Reduced = linear).
- 18 text styles `D01/…`, each with all five properties bound to the
  Typography variables, so an artboard set to Mobile re-sizes everything.

## 1. Cover — built

- Section `1 · Cover` 21:953, frame `Cover — 1440` 21:954.
- Gold field opening (chips, "Power Plant Road." at 212 Black Italic,
  positioning line, concept), paper overview rows (idea, borrowed from
  Palmetto via Ragged Edge, what it avoids), navy band with gold
  "Power Plant Rd." cropped by the band edge, sign-off lockup
  "Plain numbers (with) the dates on." + address.
- Decision: overview row dividers are a 1px navy rectangle at 25% node
  opacity (board's rgba rule); they separate content, so they pass the
  stroke rule.
- Webflow: cover is a board page, not a site page. The cropped band is a
  section with overflow hidden + a large heading — native.

## 2. Tokens — built

- Section `2 · Tokens` 21:1286, frame `Tokens — 1440` 21:1287.
- Palette strip by share (gold 44 / navy 26 / cream 18 / aqua 6 / blue 4 /
  link 2), primitive → semantic map with swatches bound to the semantic
  variables, contrast pairs painted on their real grounds (all computed with
  the WCAG 2.1 formula), spacing bars with `width` bound to each space role,
  radius demos bound to radius roles.
- Contrast fix during build: the vertical "Blue" label on the blue strip was
  12px navy on #238FC8 (3.64) — fails. Removed it; the strip is described in
  a note beneath instead. Link-on-gold (3.57) is shown only as a NOT ALLOWED
  pair.
- Departures from root §7 (allowed by brand-exploration/CLAUDE.md): gold and
  cream are full fields (root system bans tinted grounds); the arch is a
  radius role (root system: surfaces square, media 4).
- Webflow: every semantic colour maps 1:1 to a Webflow colour variable; the
  navy-10% nav pill is an rgba variable (Webflow supports alpha colours).
  The arch is `border-radius: 200px 200px 0 0` — native.

## 3. Type — built

- Section `3 · Type` 21:2241: `Type — 375 (Mobile mode)` 21:2242 and
  `Type — 1440 (Desktop mode)` 21:2361. Same 13 specimen rows in both; the
  only difference is the explicit `D01 Typography` mode on each artboard.
- Fonts: **Schibsted Grotesk loads in Figma** (Regular, Medium, SemiBold,
  Bold, ExtraBold, Black, all with italics). No substitution.
- Real copy: hero H1 and intro (QA Direction page wording = fact sheet
  "by drawing on"), footnote 1 verbatim, site address, community inbox,
  the 4 Sep 2026 news headline. "The small print, set big." and
  "Plain numbers" are board lines — labelled "voice, not site copy".
- Decision: stat figure on mobile is 86 (brief table) not the board's type
  table's 96 — the brief and the 375 board both render 86.
- Webflow: one font family; only font-size varies by breakpoint (Webflow
  variable modes or breakpoint overrides). Letter-spacing as em in CSS.
  Footnote mark is a separate `<sup>`-style span, not a Unicode superscript.

## 4. Hero — built

- Section `4 · Hero` 21:2666: `Hero — 375` 21:2667 (Typography mode Mobile),
  `Hero — 1440` 21:2690 (Desktop). Arch image frames 21:2685 / 21:2723.
- Locked copy: H1 and intro are the QA Direction page / fact sheet wording
  ("by drawing on"). Alert copy: 375 uses the Sept 16 heavy-equipment
  advisory, 1440 uses the 4 Sep 2026 news item — both as on the board.
- Every fill, text style, padding, gap and radius is bound to D01 Semantic /
  D01 Typography. Exceptions: the arch frame's image fill (image paint), and
  the dashed logo placeholder's dash pattern.
- Image: `10-workers-walking-laydown.jpg` uploaded as a stand-in, labelled
  inside the image area "Stand-in — suspected generated image, not a
  photograph of the campus" on a solid cream label (navy 11.41:1 — contrast is
  guaranteed by the label ground, not by the photo), plus the brief/kind pill
  in navy with cream type. No text sits on the photograph directly, so no
  scrim is needed.
- Compared with board: matched. Fix applied — desktop H1 constrained to 760px
  so line breaks match the board ("Building / America's energy / future by /
  drawing on / Pennsylvania's / proud past.").
- Added (not on board): a dismiss "×" on both alert bars — root §8 requires
  the alert to be dismissible. Build note: hit area must be ≥24×24 (WCAG 2.2
  2.5.8); aim for 44.
- Screens: `reviews/screens/01-hero-375.png`, `01-hero-1440.png`.
- Webflow: alert = CMS collection item + dismiss with a small localStorage
  script (Embed, flagged). Nav pills, arch (border-radius on an image
  wrapper), hero load (lines rise 24px, 60ms stagger) = Interactions 2.0
  page-load; split-line stagger needs each line as its own span — native if
  the H1 is broken into spans by hand, otherwise GSAP SplitText (flag).
- Open: 375 nav collapses to a "Menu" pill — the open menu state is not yet
  designed.
