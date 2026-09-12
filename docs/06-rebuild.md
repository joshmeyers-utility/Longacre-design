# Stage 6 — Figma rebuild

Mobile and desktop artboards rebuilt from scratch on the Stage 5 tokens, in
**Arial**.

**File:** [Longacre](https://www.figma.com/design/Jrd1qr29Hi3WvscddRo34r/Longacre)

| Page | Contents |
| --- | --- |
| `01 Foundations` | Eight colour ramps with the client anchors marked, grounds, pillar marks |
| `02 Components` | 14 components — 10 variant sets, 4 single |
| `03 Mobile` | 8 artboards at 375 |
| `04 Desktop` | 7 artboards at 1440 |
| `Z · Archive — S4 …` | The four Stage 4 pages, renamed, not deleted |

---

## 1. Two things that were not what I said they were

**The file was not a blank slate.** In Stage 5 I reported it was "back to a bare
`01 Foundations` page." It was not — all four pages were intact, with 306
variables and 32 text styles. The `get_metadata` call I relied on listed only
one page and I reported that without checking. The Stage 4 pages are **renamed,
not deleted** (`Z · Archive — S4 …`), so nothing was destroyed. Delete them
whenever you are satisfied with the rebuild.

**Arial is not available in Figma here.** It is a licensed Monotype system font;
this environment has 1,949 font families and Arial is not one of them. The
artboards are built in **Arimo** — Google's metrically-compatible Arial
substitute: identical advance widths, identical line breaks, so nothing reflows
when it is swapped. The family is bound to the `font-family/sans` variable, so
swapping Arimo → Arial on a machine that has Arial is **one variable edit**.

The CSS stack ships Arial first, because on the web it genuinely is everywhere:

```
Arial, Arimo, "Liberation Sans", Helvetica, sans-serif
```

---

## 2. Arial is a two-weight system

Arial ships **Regular and Bold. There is no Arial Light and no Arial Medium.**
Stage 5's ramp used both, so the type system was rebuilt around what the
typeface actually has.

| | Stage 5 (Helvetica Neue) | Stage 6 (Arial) |
| --- | --- | --- |
| Display, hero, statement | 45 Light | **Regular** |
| Body, lead, captions | 55 Roman | **Regular** |
| h3, h4, eyebrow, label, button, wordmark | 65 Medium | **Bold** |
| — | 75 Bold | **Bold** |

Sixteen roles are Regular, six are Bold. The weight tokens are named `regular`
and `bold` and nothing else — a token called `light` that renders Regular is the
same small lie as a blue label that is not a link.

**Tracking was eased back about half a step** at every display size. Arial is
metrically compatible with Helvetica and sets just as loose, so display type
still needs negative tracking — but Regular is heavier than the Light this was
first drawn for, and heavy letterforms collide sooner.

| Token | Stage 5 | Stage 6 |
| --- | --- | --- |
| `tracking/statement` | −4.0% | **−3.5%** |
| `tracking/display` | −3.5% | **−3.0%** |
| `tracking/hero` | −3.2% | **−2.8%** |
| `tracking/tight` | −2.2% | **−1.8%** |
| `tracking/normal` | 0 | **0** — never tighten reading text |

Line heights went up a notch for the same reason (`statement` 0.90 → 0.92).

**Arial's digits are already tabular** — every digit has the same advance — so a
stat ledger column aligns without `tnum`. The token is kept for any substitute
face that needs it.

---

## 3. The variable model

**260 variables in four collections**, rebuilt from scratch. The Stage 4
collections were deleted, not merged, so no `stone` / `teal` / `sand` ramp
survives in a picker.

| Collection | Modes | Variables |
| --- | --- | --- |
| **Primitives** | Value | 107 — every colour `scopes: []`, invisible in every picker |
| **Semantic** | Desktop / Mobile | 96 — colour aliases, space, grid, radius, icon, opacity |
| **Typography** | Desktop / Mobile | 38 — size, line height, tracking, family, weight |
| **Motion** | Value | 19 — durations, easings, distances, stagger |

**22 text styles**, each binding `fontFamily`, `fontStyle` and `fontSize` to
Typography variables. Setting an artboard's Typography mode to Mobile moves the
entire ramp — `type/hero` resolves 96 on desktop and 40 on mobile, from one
setting. Verified on all eight mobile artboards.

### One Figma constraint worth knowing

**A FLOAT variable bound to `lineHeight` or `letterSpacing` always resolves as
PIXELS.** Binding `line-height/heading` (122, meaning 122%) produced a 122px line
height on 26px text. Since both are percentages they already scale with the bound
font size, the binding bought nothing — so text styles carry them as PERCENT
literals instead, and the `line-height/*` and `tracking/*` variables are set to
`scopes: []` so nobody can re-introduce the trap from a picker. They remain as
the documented values that `tokens.json` and `tokens.css` publish.

---

## 4. Components

Fourteen, each carrying its usage and interaction notes in the Figma description
field so the spec travels with the component.

| Component | Variants |
| --- | --- |
| **Button** | Type (Primary/Secondary/Inverse) × State (Default/Hover/Focus) |
| **Text Link** | State (Default/Hover/Focus) |
| **Header** | Desktop Light · Desktop Transparent · Mobile |
| **Footer** | one |
| **Alert Banner** | Severity (Info/Construction/Urgent) |
| **FAQ Accordion** | State (Collapsed/Expanded) |
| **Expandable Row** | State (Collapsed/Expanded) |
| **Timeline Item** | Status (Complete/Current/Upcoming) |
| **Stat Row** | one — the ledger |
| **Pillar Tile** | one |
| **News Card** | one |
| **Quote** | one |
| **Section Header** | one |
| **Photo Placeholder** | one |

Focus rings are zero-blur spread shadows — the exact Figma equivalent of
`box-shadow: 0 0 0 3px` — with the colour bound to `focus/ring` on light and
`focus/ring-on-ink` on dark.

**Inverse buttons have their own on-ink specimen frame.** They are white pills
and would be invisible on the page ground; showing them on a light ground would
be a specimen that lies about the component.

---

## 5. Artboards

Same sections in the same order on both devices. Nothing appears on one and not
the other; nothing is reordered. What changes is arrangement.

| Mobile (375) | Desktop (1440) |
| --- | --- |
| Home | Home |
| **Menu** — mobile only | — |
| The Campus | The Campus |
| Workforce | Workforce |
| Community | Community |
| FAQ & Resources | FAQ & Resources |
| News | News |
| Contact | Contact |

| Section | Mobile | Desktop |
| --- | --- | --- |
| Hero | Stacked, buttons full-width, flat 0.88 scrim | 900px column, buttons inline, 0.88 → 0.72 scrim |
| Stat ledger | Figure above label | Figure hard left, label hard right, rule spanning both |
| Orientation | Stacked | Heading left, paragraphs right |
| Power block | Stacked | Four across |
| Trades, partners | Stacked rows | Rows on the 966px measure |
| News | Stacked | Three across |
| Pillars | Stacked | Four across |

**Mobile keeps its own menu screen.** A six-item nav with descriptions does not
fit a dropdown. The logo and the Jobs button stay in the bar.

---

## 6. What the audit found, and what it says now

Both artboard pages were swept programmatically, not by eye.

| Check | Desktop | Mobile |
| --- | --- | --- |
| Artboards | 7 | 8 |
| Unbound fills or strokes | **0** | **0** |
| Nodes overflowing the artboard | **0** | **0** |
| Zero-size text nodes | **0** | **0** |
| Both collections in Mobile mode | n/a | **8 of 8** |

Three real defects were caught this way rather than shipped:

1. **Twenty components were 10px tall.** `resize()` *after* setting
   `primaryAxisSizingMode = 'AUTO'` silently resets the axis to FIXED, so every
   component built that way collapsed and its children spilled onto the page
   behind it. The Footer looked like it had a light background; it was actually
   1440×10 of navy with everything overflowing below it.
2. **Line height rendered at 122px instead of 122%** — see §3.
3. **Six mobile text nodes still carried a desktop measure**, up to 636px wide
   inside a 375px artboard, inherited from component instances.

The only fill in the file that is not variable-bound is the **desktop hero
scrim**, which is a gradient — Figma cannot bind gradient stops to variables. It
is named `Scrim — ink/950 0.88 → 0.72 over the text column · DO NOT LIGHTEN` so
the constraint travels with the layer. The mobile scrim is a solid and *is*
bound.

---

## 7. Provenance flags are on the artboards

Every claim that cannot ship as written carries a visible flag, in the feedback
colours rather than a comment that a developer will never open.

| Flag | Where | Blocks |
| --- | --- | --- |
| **BLOCKING** — water has no canonical source | Campus, FAQ (both devices) | Launch |
| **BLOCKING** — the nine unions are never named | Workforce (both devices) | Workforce page |
| **BLOCKING** — Independence and Kovalchick appear in no source | Community (both devices) | Partners page |
| **TIER A** — four workforce figures are from a press release | Home, Workforce (both devices) | Confirm before launch |
| **OPEN** — first steel is March or April 2026 | Campus (both devices) | One client question |
| **OPEN** — no stated site access policy | Contact (both devices) | Contact imagery |

---

## 8. Still open

- **Swap Arimo → Arial** on a machine that has Arial. One variable edit
  (`font-family/sans`). Nothing reflows.
- **Photography.** Every image is a placeholder carrying its brief *inside* the
  image area, where the photograph will destroy it. The caption sits outside.
- **The union roster, the two unknown partners, and the water answer** are the
  three things that keep real pages as placeholder.
- Delete the `Z · Archive — S4 …` pages once you are satisfied.
