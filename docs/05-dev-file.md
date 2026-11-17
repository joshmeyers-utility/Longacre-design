# 05 · Dev-ready Figma file

The **Homer City – Dev** Figma file
(<https://www.figma.com/design/k0rvsKm1Wc3nxzblfQcuHu/Homer-City---Dev>, key
`k0rvsKm1Wc3nxzblfQcuHu`) rebuilds the reference page designs as a
self-contained, variable-driven file ready for the Webflow build.

It is a **separate design** from the Longacre Stage 3–4 system: warm stone
neutrals, rounded 36 px panels, Geist. Tokens were harvested from what the
reference actually uses, not copied from `design-system/tokens.json`.

## Pages

| Page | Contents |
| --- | --- |
| Foundations | Spacing-rule demo (Desktop and Mobile modes), every semantic colour, every text style |
| Components | 23 local components / sets (below) |
| Desktop | 17 pages at 1440 + 3 scroll storyboards |
| Mobile | 17 pages + menu overlay at 375 + 2 scroll storyboards |
| Reference | The original designs, untouched |

## Variables

| Collection | Modes | Count | Notes |
| --- | --- | --- | --- |
| Primitives | Value | ~95 | Colour ramps (`stone`, `night`, `navy`, `green`, `sky`, `alpha/*`), `space/*`, `radius/*`, `font-size/*`, `font-family/sans`. Colour, radius and font-size primitives are hidden (`scopes = []`); `space/*` is visible for gap and padding. |
| Color | Light | 57 | `surface/*`, `text/*`, `action/*`, `border/*`, `icon/*`, `track/*`, `status/*`, `diagram/*`, all aliased to primitives |
| Layout | Desktop · Mobile | 17 | `layout/section-gap` **100 / 48**, `layout/panel-gap` **8 / 8**, `layout/panel-inset` 8 / 2, `layout/container-x` 120 / 16, `layout/page-width` 1440 / 375, radius roles (`radius/panel` 36, `radius/media` 28, `radius/control` full …) |
| Typography | Desktop · Mobile | 34 | `type/<role>/size` per role + `type/family` |

Every variable has a WEB code syntax (`var(--surface-panel)` etc.).

**33 text styles** bind font size and family to the Typography collection, so a
style resolves to its desktop or mobile size from the frame's mode. **3 effect
styles**: `shadow/control`, `shadow/raised`, `shadow/glow-navy`.

**Set the mode on the page frame, never per node.** Every Desktop and Mobile
frame has explicit Layout and Typography modes set.

## Section rhythm (the spacing rule)

| Between | Gap | Token |
| --- | --- | --- |
| Two adjacent panels | 8 | `layout/panel-gap` |
| Anything else, including a single panel next to a plain section | 100 desktop / 48 mobile | `layout/section-gap` |

Every page is a vertical auto-layout stack. Sections carry **no vertical
padding**; the rhythm comes only from `Spacer` instances (`Type=Section |
Panel`) whose height is bound to those two variables. The alert bar sits flush
on the header. A *panel* is a section whose surface has a radius of 28 or more
and spans the page width (inset 8 desktop / 2 mobile).

## Components

Each was rebuilt from the reference's library component (every variant, with its
text and boolean properties restored), then bound to variables. Desktop and
mobile versions of the same thing are one set with a `Breakpoint` property.

Logo · Button (Icon × Tone) · Image placeholder · Section label · Link row ·
FAQ item (State) · Sub-nav item (State) · Nav (Breakpoint × Ground) · Alert bar
(Breakpoint) · Download row · Tile (Type) · Quote · Job row · Alert row ·
Stat row (Layout × Ground) · Stat row / Simple · Footer (Breakpoint) · Page
footnotes (Breakpoint) · Header / Inner (Breakpoint) · News card · Timeline row
· Captioned photo · Spacer (Type)

## Verified state

- **0** remote library instances left on Desktop or Mobile. The file no longer
  depends on the Longacre library.
- **100 %** of solid fills and strokes on Desktop (2,792) and Mobile (2,633)
  are bound to Color variables.
- **97 %+** of text uses a text style. Still unstyled: diagram labels drawn
  at non-integer scale in the storyboards, and one mixed-style safety-record
  figure. Both are intentional one-offs.

## Flags carried over from the reference (not changed — content decisions)

1. **The Home stat "2,000+ workers · On site, and growing"** conflicts with
   `CLAUDE.md` §6. Canonical is **1,800+ as of September 2026**; ~2,000 is the
   *projected* year-end figure. It also shows no "as of" date on desktop
   (§5.3).
2. **The reference breaks several Longacre rules** from `CLAUDE.md` §7:
   filled rounded panels ("no cards"), non-zero surface radius, and no blue link
   colour. The dev file follows the reference, as asked. If the Longacre rules
   still govern, the reference itself needs revising.
3. **Mobile panels are inset 2 px** from the screen edge (desktop 8 px). Kept as
   designed via `layout/panel-inset`. Change one value if 8 is wanted.
