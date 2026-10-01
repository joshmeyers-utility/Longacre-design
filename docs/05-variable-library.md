# Variable library v2

The token system rebuilt from scratch against the new comps in
[Figma file `K7Mb6ksBE9it30ff9gb9CA`](https://www.figma.com/design/K7Mb6ksBE9it30ff9gb9CA/Untitled).
It replaces the navy/stone/sand system described in
[`03-design-system.md`](03-design-system.md), which is kept as a record of Stage 3.

| Where | What |
| --- | --- |
| Figma — local variables | 275 variables in 3 collections, 17 text styles, 1 effect style (9 added 1 Oct 2026 from the prototype: `size/80`, `font/size/72`, motion `250/400/600/800/1000`, `motion/duration/slower`, `radius/nav`) |
| Figma — `Tokens` page | Ramps, Light/Dark role panels, spacing, radius, size roles, type specimen, motion (durations by mode, the ease-out curve) |
| Figma — `Components` page | 12 demo components + `Collage / Light` and `Collage / Dark`; below them, 12 site components built from the prototype (Site header, Mega menu, Site footer, Alert bar, Link tile, Stat block, News card, FAQ row, Milestone entry, Chip, Route card, Contact route) |
| Figma — `Website` page | Every prototype page at 1440, assembled from those components and bound to the variables |
| `design-system/tokens.json` | W3C Design Tokens export of the live file. Generated. |
| `design-system/tokens.css` | Same tokens as CSS custom properties. Generated. |

The showcase components are **demos of the tokens**, not the production
library. They are built to production hygiene so they can seed one.

---

## 1. Decisions taken

| Question | Decision |
| --- | --- |
| Palette authority | **The comps only.** The client five-colour palette (navy, `#238FC8`, aqua, cream, gold) is retired. |
| `#0081F1` as a button fill | Fails AA (white label 3.88:1). Kept as identity blue at `blue/500`; buttons use `blue/600` `#0067C3` (5.63:1). |
| Dark sections | **Light/Dark modes** on one set of roles. A dark section is a frame set to Dark — every component works in both. |
| Extra scope | Mobile type mode, derived status colours, showcase pages. |

---

## 2. Collections

| Collection | Modes | Count | Rule |
| --- | --- | --- | --- |
| **Primitives** | Value | 144 | Raw values. Hidden from every picker (`scopes = []`). |
| **Color** | Light / Dark | 51 | Every value aliases one primitive, one hop. |
| **Semantic** | Desktop / Mobile | 71 | Space, size, radius, border width, motion and type roles. Only values that genuinely change by breakpoint differ. |

Components use **Color** and **Semantic** only. Never a primitive.

### Colour primitives

Five 11-step OKLCH ramps plus white, black and eight transparent inks.

| Ramp | Anchors taken exactly from the comps |
| --- | --- |
| `neutral` | 50 `#F4F4F2` · 100 `#EDEAE5` · 200 `#DAD9D6` · 300 `#D2D1CD` · 500 `#858382` · 600 `#66666A` · 700 `#585859` · 900 `#1D1D1F` |
| `blue` | 500 `#0081F1` |
| `green`, `amber`, `red` | None — derived for status. Flagged in each variable's description. |

`neutral/400`, `800` and `950` are interpolated in OKLCH. The greys in the comps
mix warm (hue ≈ 80–106) and cool (hue ≈ 286); both were kept exactly as drawn.

Transparent inks (`ink-alpha/5…85`, `white-alpha/10, 20`) exist for the frosted
nav, the announcement cards and the hero scrim — the only places the comps use
transparency.

### Colour roles — derived from how the comps apply colour

| Group | Evidence in the comps | Result |
| --- | --- | --- |
| Grounds | White, greige `#EDEAE5` and `#1D1D1F` sections alternate | `bg/canvas` white → `neutral/900`; `bg/surface` greige → `neutral/950` |
| Primary action | Blue pill with a white circular arrow well (2 buttons + Contact us) | `action/primary/*` on `blue/600` |
| Secondary action | Greige pill with an ink arrow well (2 buttons) | `action/secondary/*` on `neutral/100` |
| Strokes | **Zero strokes in the file** | Borders are hairline dividers and the progress rail, nothing else |
| Icon button | FAQ: white `+` closed, faint `×` open, on dark | `action/icon/*` — high emphasis closed, receding when open. Light mirrors Dark (ink circle, white glyph). |
| Glass | Nav pill and announcement cards: ink at 5–50% + background blur 200 | `bg/glass`, `bg/glass-card` + `Glass` effect style |
| Text | Ink, `#585859`, `#66666A`; on dark `#FFFFFF`, `#D2D1CD` | `text/primary`, `secondary`, `tertiary` |
| Links | No inline link in the comps | `text/link` = `blue/600` / `blue/300` — no applied evidence |

### Semantic — space, size, radius

Measured from the comps' auto-layout values. Fractional values (106.67, 74.67,
53.33) are a 2/3-scaled group; they were snapped rather than kept.

| Role | Desktop | Mobile | Evidence |
| --- | --- | --- | --- |
| `space/layout/gutter` | 64 | 16 | Hero logo inset |
| `space/layout/section-y` | 160 | 80 | Section padding (160 ×2, 150 ×2) |
| `space/layout/column-gap` | 104 | 40 | 106.67, snapped |
| `space/padding/button-*` | 24 / 4 / gap 28 | 20 / 4 / 24 | Pill button `4/4/4/24`, gap 28 |
| `space/padding/control-*` | 8 / 16 | 8 / 16 | Nav items `8/16/8/16` ×14 |
| `size/control/sm · md · lg` | 36 · 48 · 56 | same | Nav item, arrow well, button |
| `size/rail` | 4 | 4 | Rails measure 5px — snapped to the 2px grid |
| `radius/control` | full | full | 18 of 18 controls are pills |
| `radius/card` | 32 | 24 | Announcement cards, portrait photos |
| `radius/media-sm` | 24 | 16 | Image slots |
| `radius/media-lg` | 64 | 32 | Feature photographs. The comps cut one corner square (`64,64,0,64`) — that is a component choice, not a token |
| `radius/section` | 16 | 0 | Rounded section panels |

### Typography

**Geist** for everything; **Material Symbols Rounded** (Light) for icons.
Weights in use: Light for stat figures, Regular for headings and body, Medium for
buttons, milestone titles and eyebrows. SemiBold and Bold exist only in the
comps' type specimen.

| Style | Desktop | Mobile | Line height | Tracking | Use |
| --- | --- | --- | --- | --- | --- |
| Display | 72 Light | 56 | 96% | −3% | Stat figures |
| Heading/XL | 64 | 40 | 108% | −2% | Hero headline |
| Heading/LG | 44 | 32 | 112% | −1.5% | Section headings, commitment tabs |
| Heading/MD | 26 | 22 | 130% | −1% | FAQ questions |
| Heading/SM | 24 | 20 | 112% | −1.5% | Section title |
| Heading/XS | 20 Medium | 18 | 132% | −0.5% | Milestone titles |
| Body/LG | 22 | 18 | 150% | −1% | Lead paragraphs |
| Body/MD | 16 | 16 | 150% | 0 | Default body — **no applied evidence** |
| Body/SM | 14 | 14 | 150% | 0 | Cards, alert ticker |
| Body/XS | 13 | 13 | 146% | 0 | Milestone descriptions |
| Label/LG | 17 Medium | 16 | 158% | 0 | Button labels |
| Label/MD | 15 | 15 | 150% | 0 | Nav items |
| Label/SM | 16 | 14 | 130% | +3% | Stat labels |
| Eyebrow | 12 Medium | 12 | 130% | +3% | Dates, scope. Sentence case. |
| Footnote | 17 | 14 | 146% | 0 | Stat footnotes, "as of" stamps (17.33 snapped) |
| Icon/SM · Icon/MD | 16 · 24 | same | 100% | 0 | Material Symbols Rounded Light |

Family, style and size are **bound** to Semantic variables. Line height and
tracking are **percentages on the style**, not bound — so the Mobile mode changes
only size and everything else scales with it. This matches the previous system.

### Motion

`motion/duration/fast · base · slow` = 100 · 200 · 500 ms (slow is 300 on
Mobile). `tokens.css` collapses them to 1 ms under `prefers-reduced-motion`.

---

## 3. Verification

Run against the live file after writing.

| Check | Result |
| --- | --- |
| Every Color and Semantic value aliases a primitive, one hop, both modes | 238 / 238 at first write; 0 dangling, 0 multi-hop |
| Primitives hold raw values | 143 / 143 (+ `size/1` added later) |
| Naming — `^(color\|space\|size\|radius\|border-width\|font\|type\|motion)/…$` | 0 failures, 0 duplicates |
| Scopes explicit | All except the 8 motion durations (Figma's TIMING type takes no scopes) |
| Text styles — family, style, size bound | 17 / 17 |
| Contrast — text on every ground, every action label on its fill and hover, status text on subtle, both modes | 68 pairs, 0 failures |
| Components page — numeric properties bound | 326 / 326 |
| Components page — solid fills bound | 61 / 61 |
| Components page — text layers on a text style | 20 / 20 |
| Icon glyphs outside the `Icon` component | 0 |

**Fixed during verification:**

- Dark `text/tertiary` moved from `neutral/500` to `neutral/400` (was 4.46:1).
- Dark `text/link` and `border/focus` moved from `blue/400` to `blue/300`
  (was 4.39:1 on raised surfaces).
- Light `action/icon/*` remapped to an ink circle with a white glyph. The first
  mapping (`neutral/100`) disappeared on the greige ground in the collage.

---

## 4. Assumptions — confirm or correct

1. **Mobile sizes are derived.** The comps are desktop only.
2. **Status colours are derived.** Nothing in the comps is a warning or an error.
3. **Snapped values:** rails 5 → 4, column gap 106.67 → 104, footnote 17.33 → 17.
4. **Secondary buttons do not sit on `bg/surface`.** Greige on greige vanishes.
   The comps only place them on white or on photography.
5. **No pillar colours.** The chosen palette has none, so the four pillars are
   no longer colour-coded. See `CLAUDE.md` §10.
6. **The frames are 1944px wide.** Treated as native, not scaled — every type
   size in them is a whole number.

---

## 5. Content in the comps that breaks `CLAUDE.md` §5

Not token issues, but they will ship if the comps are built as drawn.

| Where | As drawn | Why it fails | Fix |
| --- | --- | --- | --- |
| Hero, Hero - Secondary, commitments, FAQ, "From past to present" (5 layers) | "the former **coal** plant", "decommissioned **coal** power-plant" | §5.0 — the word appears in no client document | "the former Homer City Generating Station" |
| Campus by the numbers | **~4.4 GW** | §5.5 — the source says *up to* | **Up to 4.4 GW**, qualifier as eyebrow |
| Campus by the numbers | **~1,800¹** · "As of September 7, 2026" | §6 — canonical is **1,800+**, dated *September 2026* | **1,800+**, CMS field with month/year stamp |
| Campus by the numbers | **55+** year legacy | §5.1 — not in `docs/source/` | Source it, or cut it |
| Campus by the numbers | Footnote `#66666A` on `#1D1D1F` | 2.94:1, fails AA | `text/tertiary` in Dark mode (7.18:1) |
| Logo, FAQ | "Homer City **Generation**" | §2 — the site is framed around the Energy Campus | Client decision (§10 #9) |
