# Direction 01 Evolution: build log

Phase 2 build, 6 November 2026. Figma build file `KLwTN3TWxX8SV9ty0yCQUw`,
page `01 Direction` (2:2) only. Brief: `01-evolution.md`. Mood board:
`moodboards/01-evolution.html` (exact values taken from its `:root`).

Process note: the figma-design-tokens skill has a plan-approval gate before
writing. The approved Checkpoint 1 brief and mood board are treated as that
plan (the lead's task message asked for the build); no separate approval was
sought. Logged so Josh can see the gate was not silently skipped.

## 0. Variables (written first, before any section)

| Collection | Id | Modes | Count |
| --- | --- | --- | --- |
| D01 Primitives | VariableCollectionId:15:133 | Value | 144 |
| D01 Semantic | VariableCollectionId:15:134 | Light | 73 |
| D01 Typography | (see §3) | Desktop, Mobile | 155 (31 roles x 5) |
| D01 Motion | (see §4) | Default, Reduced | 13 |

- Colour primitives: six 11-step OKLCH ramps (navy, blue, aqua, cream, gold,
  stone) computed with coloraide. Client anchors kept exact: navy/800
  `#143251`, blue/500 `#238FC8`, blue/800 `#00597C` and blue/900 `#00415B`
  (from the mood board), aqua/100 `#AFECF1`, cream/50 `#F3F1D0`, gold/300
  `#D8B471`; stone pinned at 50/100/200/300/800/950 to the mood board greys.
  Plus `color/navy-alpha/80` (scrim) and `color/cream-alpha/28` (hairline on
  navy). All primitives `scopes = []` so pickers only show semantics.
- Semantic layer mirrors the mood board's `:root` one-to-one (surface/*,
  text/*, border/*, action/*, icon/*), one hop to a primitive. Single mode
  `Light`: the site has no dark mode; navy is a surface role, not a theme.
- Departure from the current design (docs/03): `radius/media` is 0 (was 4).
  The mood board's images are square.
- Typography line-height and letter-spacing are raw px values per mode in
  D01 Typography (not aliased primitives); ratios are in each variable's
  description for CSS. Sizes, weights, families alias primitives.
- Motion: durations/distances are FLOAT (ms / px), easings STRING
  cubic-bezier. The `Reduced` mode IS the designed reduced-motion state
  (durations 0, distance 0, accordion 120ms crossfade), not a fallback.

Webflow: every colour, size and spacing token maps 1:1 to a Webflow
Variable. Typography modes become two Webflow variable modes or a
breakpoint override on the type classes. Motion tokens are documentation
for Interactions 2.0 settings (Webflow variables do not hold easings).
