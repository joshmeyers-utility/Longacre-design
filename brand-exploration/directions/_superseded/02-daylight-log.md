# Direction 02 Daylight: build log

Phase 2 build in the shared build file `KLwTN3TWxX8SV9ty0yCQUw`, page
`02 Direction` (node `2:3`) only. Every collection is prefixed `D02`, and every
style and component is prefixed `D02/`. Entries are appended after each section.

## Setup (6 November 2026)

- The page was empty, and the file had no variable collections when work
  started. D01 is writing to page 01 at the same time. There have been no
  conflicts so far.
- **Fonts:** Outfit (Thin to Black) and Figtree (Light to Black) both load in
  Figma. Outfit ExtraLight is weight 200 and Outfit Light is 300. No
  substitution was needed.
- **Token plan gate:** the figma-design-tokens skill asks for a plan review
  before writing. The palette, ramp anchors and type ramp are the ones in
  `02-daylight.md` §4 to §6, which Josh approved at checkpoint 1. They were
  written as specified, and that brief is the signed-off plan.

## 2. Tokens (variables)

| Collection | ID | Modes | Vars |
| --- | --- | --- | --- |
| D02 Primitives | VariableCollectionId:15:2 | Value | 65 colour/space/size/radius, plus font and motion primitives |
| D02 Semantic | VariableCollectionId:15:3 | Daylight | 64 |
| D02 Typography | VariableCollectionId:15:326 | Desktop, Mobile | 90 (18 roles × family, weight, size, line-height, letter-spacing) |
| D02 Motion | VariableCollectionId:15:327 | Default, Reduced motion | 11 |

- **Ramps** are 11-step OKLCH ramps, computed with coloraide. The client hexes
  are pinned exactly.
  - `blue`: 500 = #238FC8 (identity), 700 = #16679A (deep, for links and
    buttons), 200 = #A9D3EA (sky).
  - `navy`: a cool neutral ramp with 50 = #F1F4F6 (haze), 200 = #D5DCE2
    (rule), 600 = #4F5F72 (slate) and 900 = #143251 (navy).
  - Single primitives: `aqua/100` #AFECF1, `gold/300` #D8B471,
    `cream/100` #F3F1D0, `white`.
- **Colour primitives are hidden** (`scopes = []`). Only semantic roles show up
  in the pickers.
- **Semantic has one mode, Daylight.** There is no dark mode. Navy appears
  only at the edges (alert, footer), through the `bg/inverse` and
  `text/inverse*` roles.
- **Motion has a "Reduced motion" mode.** It sets every duration and
  distance to 0 and every ease to linear. Setting the mode on a frame
  previews the still page, and the still page is the design.
- **Webflow:** every semantic colour and space role maps 1:1 to a Webflow
  Variable.
  - The Typography modes become two Webflow variable modes, or the Mobile
    values become breakpoint overrides on the type classes.
  - Easing values are stored as strings (`cubic-bezier(...)`), because
    Interactions 2.0 takes named or custom curves. The ease-out-soft curve has
    to be entered as a custom curve in each interaction.

## 1. Cover

- Section `17:45`, frame `D02 Cover / 1440` `17:2` (1440 × 1373).
- **Contents:** the name at 248px in Outfit 200, the positioning line, a
  three-sentence concept and a seven-row key/value list. Everything is bound
  to D02 Semantic and the D02 text styles. The Typography mode is set to
  Desktop on the frame.
- **Critic notes (round-0), received during this section:**
  - (1) The brief lives only inside the image area. Caption, Kind and Date
    are separate fields.
  - (2) Display stays at 200/300, and headings never go to 500.
  - (3) Pills risk the pastel data-centre cliché. Reassess at the hero
    screenshot and log the decision.
  - (4) Keep all four contact inboxes visible.
  - All four are applied from section 5 onwards.
