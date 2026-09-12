# Stage 5 — New design direction

A revised design system for the Homer City Energy Campus site, drawn from nine
reference sites and rebuilt around **Helvetica Neue**.

This replaces the visual layer of Stages 3–4. It does **not** touch Stage 1 (the
source material) or Stage 2 (the IA, page specs and CMS model) — those still
stand, and the rebuild targets the same pages with the same content.

**Deliverables**

| File | What it is |
| --- | --- |
| `design-system/build-tokens.py` | The generator. Source of truth for all three files below. |
| `design-system/tokens.json` | W3C DTCG tokens — the canonical set. |
| `design-system/figma-variables.json` | Figma-shaped payload: 4 collections, 262 variables, 22 text styles. |
| `design-system/tokens.css` | The same tokens as CSS custom properties. |

Run `python3 design-system/build-tokens.py` to regenerate all three. It runs a
contrast audit first and **refuses to write if any check fails**.

---

## 1. What I actually saw

Being precise about this, because the direction below rests on it.

| Reference | What I had |
| --- | --- |
| cursor.com | **Screenshot** (homepage, desktop) + a published token breakdown |
| cosmos.so | **Screenshots** (3 — explore grid, feed, category browse) |
| harvey.ai | Published design-press writeups + their own design-system post |
| mouthwash.studio — T1 Energy | The Brand Identity's case-study writeup |
| mouthwash.studio — Kindred | Credits only; no visual detail recovered |
| legora.com | E&W Studio's project writeup |
| duna.com | A single third-party description |
| v7labs.com | **Nothing** — no usable material recovered |
| x.company/projects/tapestry | Project copy and mission; no visual detail |

**Seven of the nine domains are blocked** by this environment's egress policy —
`curl`, `WebFetch` and the browser all return 403 at the proxy, so I could not
take screenshots of them. This is the same block recorded in `CLAUDE.md` §10 #6;
it is org-level policy, not a per-site problem. Cursor and Cosmos came through
Mobbin's screenshot library, which carries those two apps but not the others.

So: the direction below is **grounded in pixels for Cursor and Cosmos, and in
published description for Harvey, T1, Legora and Duna.** V7 and Kindred
contributed nothing and Tapestry contributed only its posture. If you can send
screenshots of the missing seven — or unblock the domains — I will revise.

---

## 2. What the references share

Six things recur, and they are the direction.

**1. The ground is warm, not white.** Cursor sits on `#F2F1ED` with `#26251E`
ink. Harvey is described as warm near-black on off-white. Duna leads with warmth.
Nobody in this set uses `#FFFFFF` with cool grey text — that combination is what
"bland/generic corporate website" looks like in 2026, which is the client's own
diagnosis of the current site.

**2. Colour belongs to the content, not the chrome.** Cosmos is the clearest
case: the interface is black, white and grey, every pixel of colour comes from
the user's images, and there are no shadows anywhere. For a site whose strongest
asset is aerial photography of Indiana County farmland, this is the single most
transferable idea in the whole set.

**3. Display type is large, light and sentence case.** Cursor runs its display at
weight 400. Harvey is described as "oversized." The heroic-bold-uppercase move is
absent from all nine.

**4. Sections are separated by ground and rhythm, not by boxes.** No cards, no
outlines, no drop shadows. Where two sections share a ground, a hairline does the
work.

**5. One accent at one voltage, or none.** Cursor has a single orange. T1 has a
single neon green — chosen specifically to reject the forest-green cliché of
renewable-energy branding. Cosmos has none at all.

**6. Motion resolves something.** T1's identity is built on a tension between
round and sharp that motion resolves. Legora's motion is described as consistent
across pages. None of it is decorative.

**The T1 Energy project is the closest analogue in the set** and worth reading in
full: an energy company shedding its legacy associations, with the explicit brief
of making technical infrastructure legible "without drowning audiences in
specification sheets" and "without making them feel like they're reading a
whitepaper." That is the Homer City brief almost word for word.

---

## 3. The direction

> A warm, achromatic, editorial ground that gets out of the way of the
> photography — with the facts set as a ledger and the interface reduced to ink,
> hairlines and space.

The site currently reads as a corporate brochure because the chrome competes with
the content: blue links, blue icons, blue stat figures, tinted panels, and a
white-and-navy palette that says *utility company*. Strip the colour out of the
chrome and two things happen. The photography becomes the only colour event on
the page, which is where the emotional work should happen. And the four pillar
marks become the only coloured signals in the interface, which is what
`CLAUDE.md` §7 always wanted and could not enforce while links, icons and
figures were also blue.

---

## 4. The rules

### Kept from Stage 3, unchanged

- **Components bind semantic tokens only, never primitives.** Colour primitives
  ship with `scopes: []` so Figma hides them from every picker.
- **Stats are a ledger, not cards.** Figure hard left, label and footnote in a
  narrow right column, hairline spanning the full width.
- **A brief is not a caption.** Production notes never share a field with
  published copy. `Kind = Photograph | Rendering`. Date is its own field.
- **Sentence case everywhere. No all-caps**, labels and buttons included.
- **A pillar colour marks one of the four pillars and nothing else.**
- **Band widths come from the parent's margin, never from the band.**
- **Mobile is the primary comp.** Design 375 first.
- **WCAG 2.2 AA, non-negotiable.**

### Changed

**1. Colour belongs to the photograph.**
The chrome is `paper` and `ink`. The *only* colour in the interface is the four
pillar marks, the focus ring, and a feedback state while it is active. There is
no blue text, no blue icon, no blue figure, no accent fill.

**2. Underline means link.** *(replaces "blue means link")*
A link is ink with an underline. Hover grows and thickens the underline; it does
not change colour. This is a strictly better rule than the one it replaces: it
satisfies WCAG 1.4.1, which says colour must never be the only means of
conveying information, and it frees blue entirely.

**3. Round means press. Square means read.** *(new)*
Buttons and tags are pills (`radius/control` 9999). Form fields are near-square
(`radius/input` 2) so they read as *type here*, not *press me*. Contained media
is `radius/media` 12; full-bleed media is 0. Surfaces are 0.

**4. A stroke is a divider between content, or the boundary of a control.**
*(refines "strokes are dividers")*
Two tokens, two different obligations. `border/divider` is decorative and carries
no contrast minimum. `border/control` identifies a component, so WCAG 2.2 SC
1.4.11 applies and it must clear 3:1 on every ground — which is why it is
`ink/600` and not the hairline grey.

**5. No shadows.** *(new)*
The shadow scale is deleted. The only remaining effect is the focus ring, which
is a zero-blur spread shadow. Cosmos does this explicitly; nothing in the set
uses elevation.

**6. Grounds are warm.** *(reverses "no tinted grounds")*
`surface/page` is `#F7F6EE`. The old rule existed to stop a stray tinted panel
turning into a card; that job is now done by "no cards" and "no shadows"
directly. A cool text ramp on a warm ground looks dirty, so the neutral ramp is
warm too — one ramp, `ink`, does text, hairlines and the dark ground.

---

## 5. Palette

Eight ramps, all generated in OKLCH so the steps are perceptually even. **Five
are anchored on a client palette colour that they reproduce exactly** at one
named step — verified on every build:

| Ramp | Anchor | Step | Role |
| --- | --- | --- | --- |
| `paper` | `#F3F1D0` cream | `paper/100` | The grounds, and only the grounds |
| `ink` | — | — | Text, hairlines, the dark ground |
| `navy` | `#143251` | `navy/900` | Institutional ground; the Infrastructure pillar |
| `blue` | `#238FC8` | `blue/600` | Focus ring; the Community pillar |
| `gold` | `#D8B471` | `gold/400` | The Energy Future pillar; construction alerts |
| `aqua` | `#AFECF1` | `aqua/200` | Held in reserve — no semantic role |
| `green` | — | — | The Safety pillar; success |
| `red` | — | — | Urgent alerts only |

**This gives the client's cream and gold a job.** Open question #1 flags that
those two colours appear nowhere in the supplied collateral. Making cream *the
page* rather than an accent is the lowest-risk way to use an unconfirmed brand
colour: if the brand guide contradicts it, one token moves.

### The grounds

| Token | Value | Use |
| --- | --- | --- |
| `surface/page` | `#F7F6EE` | The default. Most of the site. |
| `surface/warm` | `#F3F1D0` | The alternating band. Client cream, exact. |
| `surface/raised` | `#FFFFFF` | Inset media and form fields **only**. |
| `surface/sunken` | `#EAE9D2` | Rare. Recessed rows. |
| `surface/ink` | `#1B1914` | The dark institutional ground. |
| `surface/navy` | `#143251` | Client navy. **Footer only.** |

Navy is demoted deliberately. Every reference that uses a dark ground uses a warm
near-black, not a blue-black; navy reads as *utility company* and it is the exact
note the client asked us to move away from. It survives where the institution
should assert itself — the footer — and as the Infrastructure pillar mark.

Grounds alternate down the page: `page → warm → page → ink → page`. Never two
dark bands adjacent, and per Stage 4, never two photographic full-bleed bands
adjacent either.

### Text

| Token | Value | On `surface/page` |
| --- | --- | --- |
| `text/primary` | `#1B1914` | 16.20:1 |
| `text/secondary` | `#504E4A` | 7.66:1 |
| `text/tertiary` | `#696763` | 5.21:1 — **the floor.** Nothing lighter carries text. |

---

## 6. Type — Helvetica Neue

### ⚠️ Licensing is a blocker

**Helvetica Neue is not a Google font.** It is a system font on macOS and iOS
only; on Windows and Android it does not exist. To ship it you need one of:

1. **A Monotype web licence**, uploaded to Webflow as a custom font. Costs money
   and needs a pageview tier. This is the real answer if the brand guide says
   Helvetica Neue.
2. **Accept the fallback.** The stack is
   `"Helvetica Neue", HelveticaNeue, Helvetica, Arial, "Liberation Sans", sans-serif`
   — Arial and Liberation Sans are metrically compatible with Helvetica, so the
   layout holds, but roughly 60% of visitors see Arial. On a site whose type *is*
   the design, that is a visible downgrade.
3. **A licensed near-equivalent.** Neue Haas Grotesk (the actual Helvetica
   revival, by the same designer lineage) or Inter Tight (free, Google-hosted,
   ports to Webflow with no licensing at all).

I have built the system on Helvetica Neue as asked. **This needs a decision
before the Figma rebuild**, because the tracking values below are tuned to
Helvetica Neue's metrics and would need retuning for a substitute. Added as open
question #15.

### Weights

Helvetica Neue's cuts, mapped to CSS numerics. Both are in the tokens.

| Token | Cut | CSS |
| --- | --- | --- |
| `font-weight/light` | 45 Light | 300 |
| `font-weight/regular` | 55 Roman | 400 |
| `font-weight/medium` | 65 Medium | 500 |
| `font-weight/bold` | 75 Bold | 700 |

**Display type runs Light.** 25 Ultra Light and 35 Thin are excluded — at any
size a neighbour reads on a phone in daylight they are a legibility problem.

### The scale

Thirteen steps, two modes. Only **size** changes between Desktop and Mobile; line
height and tracking are percentages, so they scale on their own. Set the mode on
the artboard, never per node.

| Step | Desktop | Mobile | | Step | Desktop | Mobile |
| --- | --- | --- | --- | --- | --- | --- |
| 50 | 12 | 12 | | 500 | 26 | 22 |
| 75 | 13 | 13 | | 600 | 32 | 25 |
| 100 | 14 | 14 | | 700 | 40 | 28 |
| 200 | 16 | 16 | | 800 | 56 | 32 |
| 300 | 18 | 17 | | 900 | 72 | 36 |
| 400 | 21 | 19 | | 1000 | 96 | 40 |
| | | | | 1100 | 128 | 46 |

### Tracking is load-bearing

Helvetica Neue was drawn for metal and sets **loose** by contemporary standards.
Left at zero it looks like a 1990s annual report. Display sizes need noticeably
more negative tracking than a modern grotesque like Geist did:

| Token | Value | Where |
| --- | --- | --- |
| `tracking/statement` | −4.0% | 128px |
| `tracking/display` | −3.5% | 96px |
| `tracking/hero` | −3.2% | 72px |
| `tracking/tighter` | −2.8% | 56px |
| `tracking/tight` | −2.2% | 40px |
| `tracking/snug` | −1.4% | 26px |
| `tracking/normal` | 0 | Body. Do not tighten reading text. |
| `tracking/eyebrow` | +6.0% | 13px eyebrow |

### Roles

22 text styles. The ones that matter:

- `type/statement` (128/46) — **one per page, maximum.** The oversized editorial
  moment. Most pages should not use it.
- `type/hero` (96/40) — the page's opening statement.
- `type/h2` (40/28) — section headings.
- `type/body` (16/16) at line height 1.55 on a 636px measure — **71 characters
  per line**, inside the ideal band.
- `type/stat-figure` (96/40) Light — inherited from the fact sheet's own
  treatment. Sits in `text/primary`, never in a colour.
- `type/eyebrow` (13) Medium at +6% — sentence case. Per §5.3 this is where a
  section's date-stamp, category or scope lives.

**Set stat figures with tabular numerals** (`font-feature-settings: "tnum"`,
token `font/numeric/tabular`) so a ledger column aligns. Confirm the licensed cut
actually carries `tnum` — not every Helvetica Neue package does.

---

## 7. Layout

### The grid

**12 columns at 1440, and the arithmetic closes exactly:**

```
12 × 86 + 11 × 24 = 1296     margin 72 × 2 → 1440
```

No fractional columns, so the Figma grid and the Webflow grid agree. Every
container is a whole number of columns:

| Container | Width | Columns |
| --- | --- | --- |
| `grid/content-max` | 1296 | 12 |
| `grid/narrow` | 966 | 9 |
| `grid/measure` | 636 | 6 — body text |
| `grid/measure-narrow` | 526 | 5 |

Mobile is 4 fluid columns, 20 margin, 16 gutter. The column width in the tokens
(71.75) is what the 375 comp resolves to; do not treat it as fixed.

### Bands

Width comes from the parent's margin, exactly as in Stage 4 — only the numbers
change:

| Margin token | Value | Band width |
| --- | --- | --- |
| `space/margin` | 72 | 1296 contained |
| `space/margin-wide` | 40 | 1360 wide |
| `space/margin-bleed` | 0 | 1440 full bleed |
| `space/margin` (mobile) | 20 | 335 |

Full bleed is spent, not spread. Once in the body of the site.

### Section rhythm

| Token | Desktop | Mobile |
| --- | --- | --- |
| `space/section-y-lg` | 200 | 96 |
| `space/section-y` | 160 | 72 |
| `space/section-y-sm` | 96 | 48 |
| `space/section-continues` | 0 | 0 |

### How sections separate, with no cards and no boxes

In priority order:

1. **A change of ground** — `page` → `warm` → `ink`. The strongest separator.
2. **Rhythm** — 160px of nothing is a section break.
3. **A full-width hairline** — only when two adjacent sections share a ground.
4. **A full-bleed photograph** — the breath between two dense sections.

If you reach for a fifth, the page has too many sections.

---

## 8. Interaction

Every hover below has a tap and a keyboard path. That is a brief requirement, not
a nicety — `CLAUDE.md` §9.

| Surface | Behaviour |
| --- | --- |
| **Hero** | Image scales `1.06 → 1` over `duration/reveal` (720ms) on `ease/editorial`; text rises `distance/md` with `stagger/base` between lines. Once, on load. |
| **Link** | Underline grows `0% → 100%` from the left over `duration/fast` and thickens 1px → 2px. **No colour change.** Focus paints `focus/ring` at 3px, zero blur. |
| **Primary button** | `ink/950` pill → `ink/900` on hover over `duration/fast`. No lift, no shadow, no scale. |
| **Media** | Hover or focus raises a scrim to `opacity/scrim-media-hover` (0.24) and reveals the caption. Tap reveals it too and holds it. |
| **Expandable row** (trades, partners, commitments) | A hairline-separated list, not a grid of cards. Click, tap or `Enter` expands in place; the chevron rotates 180° on `ease/interact`. Hover only previews. |
| **Nav** | Transparent over the hero; on scroll past it the ground becomes `surface/page` and a `border/divider` hairline appears. `duration/base`. |
| **Timeline** | Markers carry no colour. Complete = filled ink disc. Current = ink ring with an ink centre. Upcoming = hollow hairline ring. Shape, not hue — so it survives greyscale and colour blindness. |
| **Stat ledger** | **Figures do not count up.** An animated number reads as marketing and delays the fact. The row reveals as a whole: hairline draws left-to-right, figure and label fade in behind it. |
| **Alert banner** | Slides down `distance/sm` on `ease/appear`. Dismissible; the dismissal is remembered. |

`prefers-reduced-motion` collapses every duration to 1ms, every distance to 0 and
`reveal/scale-from` to 1. It is in `tokens.css` and it is not optional.

**All of this fits Webflow Interactions 2.0** — scroll-into-view, hover, page
load, click. Nothing here needs GSAP.

---

## 9. Accessibility, verified

`build-tokens.py` runs **58 contrast checks** on every build and refuses to write
the token files if any fails. Current state: **all pass.**

- Body and UI text on all four light grounds — AA 4.5:1
- Text on both dark grounds — AA 4.5:1
- All four pillar marks as text on both light grounds — AA 4.5:1
- Focus rings and control borders on all six grounds — AA 3:1 (SC 1.4.11)
- All four feedback states, text and accent
- **Hero scrims composited over a pure white photograph** — the worst case an
  image can present. Desktop weakest point (0.72) gives 6.44:1; mobile (0.88)
  gives 11.34:1.

The scrim check carries a **negative control at 0.60** that the audit asserts
*must* fail — otherwise a broken checker would report a pass on everything. Per
Stage 4 §12.6, these are the only guarantee text over a photograph is readable:
an automated sweep walks to the nearest *solid* painted ancestor, and a
photograph is not one. **Do not lighten them.**

---

## 10. What changed, in one table

| | Stage 3/4 | Stage 5 |
| --- | --- | --- |
| Typeface | Geist 300–700 | **Helvetica Neue 45/55/65/75** |
| Page ground | `#FFFFFF` | **`#F7F6EE` warm** |
| Alternating ground | `stone/50` near-white | **`#F3F1D0` client cream** |
| Dark ground | `navy/900` | **`ink/950` warm near-black** (navy → footer) |
| Text ramp | `stone`, cool, untinted | **`ink`, warm** |
| Links | `blue/800` | **Ink + underline** |
| Icons | Blue when the icon is the control | **Always ink** |
| Stat figures | `stone/900`, 84px | **`ink/950`, 96px, tabular** |
| Controls | 2px radius | **Pill** |
| Media | 4px radius | **12px contained, 0 bleed** |
| Shadows | 5-step scale | **Deleted.** Focus ring only. |
| Grid | Container widths only | **12 × 86 + 11 × 24, closes exactly** |
| Section rhythm | 120 desktop | **160 desktop / 72 mobile** |
| Hero | 104 / 44 | **96 / 40**, plus `statement` at 128 / 46 |
| Measure | 680 (≈76 char) | **636 (71 char), 6 columns** |
| Breakpoints | 479 | **478** — Webflow's actual value |
| Colour ramps | 8 | 8, **5 anchored on client colours** |
| Contrast checking | Manual sweep in Figma | **58 automated checks, build fails on a miss** |

---

## 11. The Figma variable model

`figma-variables.json` carries four collections. **Import Primitives first** —
the others alias it.

| Collection | Modes | Variables | Notes |
| --- | --- | --- | --- |
| **Primitives** | Value | 107 | Every colour has `scopes: []` — invisible in every picker. |
| **Semantic** | Desktop / Mobile | 96 | Colour aliases + space, grid, radius, icon, opacity. |
| **Typography** | Desktop / Mobile | 40 | Size, line height, tracking, weight. |
| **Motion** | Value | 19 | Durations, easings, distances, stagger. |

Plus **22 text styles**, each bound to Typography variables rather than carrying
literal values, so the Desktop/Mobile switch is one artboard setting.

The current Figma file is back to a single `01 Foundations` page — showing Open
Sans and an `amber` ramp, which is *older* than what `docs/04-design-pass.md`
describes. Treat it as a blank slate: the Stage 4 component sets and artboards
are not in the file to migrate.

---

## 12. Open questions this raises

Added to `CLAUDE.md` §10.

| # | Question | Blocks |
| --- | --- | --- |
| 15 | **Helvetica Neue licensing.** Buy a Monotype web licence, accept the Arial fallback for ~60% of visitors, or substitute Neue Haas Grotesk / Inter Tight? Tracking values are tuned to Helvetica Neue and would need retuning. | Figma rebuild |
| 16 | **Does the client's cream become the page?** `#F3F1D0` now carries the warm band and seeds the page ground. It appears in none of the supplied collateral. One token moves if the brand guide disagrees. | Brand sign-off |
| 17 | **Navy demoted to the footer.** It is the most recognisable colour in the current identity. Confirm the client is willing to lose it as the dominant ground. | Brand sign-off |
| 18 | **Icon family.** `Material Symbols Rounded` was chosen against Geist. Helvetica Neue is a neo-grotesque and pairs better with **Outlined** — but Stage 3 recorded that Figma could not serve Outlined. Worth re-testing. | Component build |
| 19 | **Screenshots of the seven blocked references** (§1), or an egress exception for those domains. | Revision of this doc |

---

## 13. Next

Stage 6 rebuilds the mobile and desktop artboards from scratch on these tokens:

1. Import `figma-variables.json` — Primitives, then Semantic, Typography, Motion.
2. Build `01 Foundations` fresh: the eight ramps, the 13-step scale in both
   modes, the four pillar marks, the grid.
3. Rebuild the component library against the new rules — every card gone, every
   shadow gone, controls as pills, links underlined.
4. Mobile artboards at 375, then desktop at 1440. Same sections, same order, as
   in Stage 4 §3.

Content, figures and footnotes are unchanged. `CLAUDE.md` §5 and §6 govern every
number on every artboard exactly as before.
