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
| Foundations | Type scale (11 styles, desktop/mobile sizes), section-rhythm demo, colour roles grouped by family |
| Components | Six labelled sections, in build order: 1 Foundations (Spacer, Logo, Image placeholder) · 2 Actions & navigation · 3 Content blocks · 4 Data · 5 Page chrome · 6 Content sections. Each component has a name and variant/property caption above it |
| Desktop | 17 pages at 1440 + 3 scroll storyboards |
| Mobile | 17 pages + menu overlay at 375 + 2 scroll storyboards |
| Reference | The original designs, untouched |

## Variables

| Collection | Modes | Count | Notes |
| --- | --- | --- | --- |
| Primitives | Value | ~95 | Colour ramps (`stone`, `night`, `navy`, `green`, `sky`, `alpha/*`), `space/*`, `radius/*`, `font-size/*`, `font-family/sans`. Colour, radius and font-size primitives are hidden (`scopes = []`); `space/*` is visible for gap and padding. |
| Color | Light | 57 | `surface/*`, `text/*`, `action/*`, `border/*`, `icon/*`, `track/*`, `status/*`, `diagram/*`, all aliased to primitives |
| Layout | Desktop · Mobile | 17 | `layout/section-gap` **100 / 48**, `layout/panel-gap` **8 / 8**, `layout/panel-inset` 8 / 2, `layout/container-x` 120 / 16, `layout/page-width` 1440 / 375, radius roles (`radius/panel` 36, `radius/media` 28, `radius/control` full …) |
| Typography | Desktop · Mobile | 12 | `type/<style>/size` for each of the 11 styles + `type/family` |

Every variable has a WEB code syntax (`var(--surface-panel)` etc.).

**11 text styles**, all with **line height auto** (Geist resolves to ~122 %).
Font size and family are bound to the Typography collection, so a style resolves
to its desktop or mobile size from the frame's mode.

| Style | Desktop / Mobile | Weight | Used for |
| --- | --- | --- | --- |
| display | 64 / 40 | Light | Hero, CTA headline, footnote markers |
| heading/lg | 36 / 28 | Regular | Page and section titles, and **every panel title** |
| heading/md | 32 / 22 | Light | Lead paragraphs, link-row titles, panel statements, story tabs |
| heading/sm | 24 / 20 | Light | Item titles, FAQ questions, section labels, quotes, statements |
| stat/figure | 80 / 64 | Regular | Ledger figures |
| body/lg | 20 / 18 | Regular | Stat labels and units, large body |
| body | 15 / 15 | Regular | Paragraphs |
| ui | 14 / 14 | Regular | Buttons, nav, small UI |
| caption | 12 / 12 | Regular | Meta, captions, footnotes |
| eyebrow | 12 / 12 | SemiBold | Qualifiers (*Up to*, *Projected*), date stamps |
| diagram | 16 / 15 | Medium | Diagram node labels |

**Panel rule:** the title of every panel (navy or stone rounded surface) uses
`heading/lg` on both breakpoints. A small label above a title ("FAQs",
"Campus history", "The vision for Homer City") keeps its own style, and a
panel with no title (Home's site-history photo panel) is left as is.

These replaced 33 earlier styles; every text layer was remapped and the old
styles and size variables deleted. **3 effect
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

## Section components

Larger components built from the pages' own recurring sections. They nest the
building blocks above, and each has Desktop and Mobile variants. Pages use them
as instances, with page-specific copy kept as overrides and unused list slots
hidden.

| Section | Variants | Instances (desktop + mobile) |
| --- | --- | --- |
| Section / Learn more | Breakpoint × Style (Plain, Panel, Home — mobile only) | 8 + 8 |
| Section / Common questions | Breakpoint × Style (Default, Home — mobile only); up to 4 FAQ items | 7 + 7 |
| Section / FAQ category | Breakpoint; up to 10 FAQ items | 6 + 6 |
| Section / Page header | Breakpoint; centred title for utility pages | 5 + 5 |
| Section / Stats ledger | Breakpoint × Layout (Simple, Detailed) | 2 + 2 |
| Section / Key facts | Breakpoint | 2 + 2 |
| Section / How to get hired | Breakpoint | 2 + 2 |
| Section / Inner header · Page footnotes · Footer | Breakpoint (existing, renamed) | already instances |

Left as page-specific (their structure is unique): the stats sections on
Campus future, Power plant and Economic impact (two-column intro header), the
Job opportunities header (has an image), and one-off sections such as the water
diagram, timeline phases and trades grid.

## Verified state

- **0** remote library instances left on Desktop or Mobile. The file no longer
  depends on the Longacre library.
- **100 %** of solid fills and strokes on Desktop (2,792) and Mobile (2,633)
  are bound to Color variables.
- **97 %+** of text uses one of the 11 styles (100 % on the Components page).
  Still unstyled: diagram labels drawn at non-integer scale in the storyboards,
  and one mixed-style safety-record figure.
- On mobile, all text outside a panel sits at least 16 px from the screen edge.
- Partner logo boxes (mobile) are 343 × 88 tiles, `radius/tile`, with each logo
  centred and sized to equal visual weight within 168 × 40.

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

## Parity check against Reference (latest)

- **Text:** every visible string on all 40 rebuilt frames matches its Reference
  frame 1:1 (2,709 strings; same content, same counts).
- **Images:** same photographs, same counts, on every frame.
- **Type:** every text layer is checked against the reference's original size
  and weight and given the nearest of the 11 styles (0 mismatches on 2,643
  layers).
- **Overflow:** no text or button spills outside its section. The one hit, in
  the "How it works" storyboard, is clipped by design in the reference too.
- **Intended visual differences:** the 100 / 48 section rhythm, the 11-style
  type scale with auto line height (e.g. stat labels 24 → 20 desktop, mobile
  Light 28 headings → 22), 16 px mobile text margins and the partner logo
  tiles.
