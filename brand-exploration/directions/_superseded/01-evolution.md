# Direction 01: Evolution

> **The safe direction, labelled as such.** This is the current Longacre
> design (`../../docs/03-design-system.md`) carried forward, not replaced. It
> is here so directions 02–05 have a fair comparison: if none of them beats
> this, the answer is to finish what we have.

Checkpoint 1 brief · 6 November 2026 · mood board:
`moodboards/01-evolution.html` (screenshots `moodboards/01-evolution-board.jpg`,
`moodboards/01-evolution-375.jpg`).

---

## 1. Concept

**Plain sight.** The campus is visible from Route 119 and from people's
porches; the website should be the same: nothing hidden, nothing staged. The
current design already has the right bones: white page, navy for the
institutional moments, Geist, square surfaces, hairline ledger, no cards. What
it lacks is a finished *receipt*. Evolution spends its whole budget there:
every figure on the site arrives as one designed unit (qualifier, figure,
label, footnote, "as of" date, source document), built at 375px first, and
the place is shown at the hours neighbours actually see it, with the town in
the frame.

**Positioning line**

> *What is going up on the old station ground off Power Plant Road, shown
> plainly, with a date and a document under every number.*

Voice test: it names the road, the former station's ground and the dated
receipt. No other energy company's site can carry it with the name swapped.

---

## 2. What stays and what changes (against `docs/03`)

| | Stays | Changes |
| --- | --- | --- |
| Type | Geist, 300–700. Stat figures Light. Sentence case everywhere | Hero drops from Bold 104px to **Medium 500, 84px** at −3.5% tracking: calmer, more exact, and the locked homepage headline holds to three lines at 1440. Tabular figures on every number and date. Footnote **12 → 14px** (15 desktop) |
| Grounds | White page, `stone/50` subtle, navy bands, **no tinted grounds** | Navy band moves from generated `navy/900` `#1D3D5C` to the client anchor **`#143251`** itself: deeper, and it matches dusk photography |
| Colour roles | Blue means link. `#238FC8` is identity, not link. Pillar colour only on pillars | Stat figures and headings move from near-black to **navy `#143251`** (13.09:1). Cream `#F3F1D0` becomes the secondary text colour on navy, replacing grey `stone/200`: warmth without a tinted ground. Footnote text `stone/700` → **`stone/800`** (7.87:1) |
| Structure | Square surfaces, strokes are dividers, ledger not cards, band widths from parent padding | The ledger row gains two fixed slots, **footnote** and **receipt line**, so the unit is the same everywhere, including social cards |
| Imagery | Real photography leads. Photograph / Rendering flag | A defined grade (dusk and daylight, town in frame), a caption that always carries a date, and a rendering label that sits *on* the image |
| Motion | Gentle, no overshoot; same easings and durations | Reduced motion is designed as the reference state, not a fallback. Figures never animate |
| Hero | Navy, photo-led | On a phone, **words never sit on the picture**: photo above, headline on solid navy below |

Nothing in this direction needs a new token family. Every change is a
re-pointed semantic token or a new semantic role. That is the point of it.

---

## 3. Research it draws on

| Reference | Screenshot | Taken |
| --- | --- | --- |
| Tideway: the only footnote and data date seen, set small and centred under a block | `research/screens/civic/tideway-stat-footnote.jpg` | The *content* of a receipt. Not the placement: ours sits inside the row, aligned to the label |
| Ember: unboxed stat rows with a hairline | `research/screens/energy-brands/ember-home-desktop.jpg` | Confirms the ledger reads current. We drop Ember's pictograms |
| OWID, GOV.UK: "Data source:" run-in labels, date rows | `research/screens/civic/owid-sources-desktop.jpg`, `civic/govuk-publication-mobile.jpg` | The run-in label ("Footnote 1", "Source") and the date row typography |
| Geist control specimen | `research/screens/type-and-color/specimen-0.jpg` | Shows the problem we fix: footnote at 11–12px is the weakest thing on every ground, and fails on blue `#238FC8` |
| Form Energy: real aerial of a former mill site, river, hills, town | `research/screens/energy-brands/formenergy-home-desktop.jpg` | The town in frame. We drop the caps headline |
| Meta: the only aerial with homes beside the campus | `research/screens/energy-campus-sites/meta-dc-desktop.jpg` | Show the neighbours' side of the fence |
| Hinkley Point C: night construction, lights on | `research/screens/architecture-and-construction/hinkley-desktop.jpg` | Dusk grade. We drop the orange shards |
| Kiewit | `research/screens/architecture-and-construction/kiewit-desktop.jpg` | **The register to avoid** (see §11) |
| Mortenson reduced-motion run | `research/screens/motion/mortenson-sheet-reduced.jpg` | One of only two sites that change anything under reduced motion; ours goes further |

---

## 4. How it earns a sceptic's trust

The receipt is the identity. It looks the same on the homepage, the
Economic impact page, the fact-sheet download and a social card.

```
Anticipated                                ← qualifier eyebrow, 13px SemiBold, stone/800
10,000+                                    ← figure, Geist Light, navy, tabular
Direct on-site construction-related jobs   ← label, 17/18px Regular, stone/950
Footnote 1  Anticipated total number of…   ← run-in label SemiBold navy + 14/15px text, stone/800
Fact sheet, May 2026 (PDF) ↓               ← receipt line: source link, blue/800
```

Rules the design holds:

1. **The footnote is the row's fourth line, not fine print.** 14px at 375,
   15px at 1440, line height 1.55, measure capped at 52ch, `stone/800`
   (7.87:1). A run-in "Footnote 1" in SemiBold navy replaces the bare
   superscript, which is the first thing to vanish on a phone. The superscript
   stays on the label so the pairing reads either way.
2. **Every row ends in a receipt line**: date stamp (if the figure moves) and
   source document link, on one baseline, separated by a middle dot. On a
   phone it wraps to two lines; it never drops below the fold on its own,
   because it is inside the row.
3. **"As of" is a stamp, not a sentence.** `As of September 2026` in 13px
   SemiBold tabular, sitting in the qualifier slot above the figure, so the
   date is read *before* the number.
4. **Qualifiers are load-bearing.** *Anticipated, Projected, Up to* sit in
   the eyebrow directly above the figure. A row with no qualifier keeps the
   empty slot, so figures align down the ledger.
5. **Figures never count up.** The row arrives whole, footnote included.
6. **Source links name the document and its date** ("Fact sheet, May 2026"),
   never "Learn more".

At 1440 the row is the current ledger: figure hard left, a 400px text column
hard right, an empty middle bound by the full-width hairline.

---

## 5. Typography

One family, Google Fonts: **Geist** (300, 400, 500, 600). No mono: dates use
Geist's tabular figures (`font-variant-numeric: tabular-nums`), which keeps the
stamp clear of 03 The Record and 05 Survey, which both lean on mono.

| Role | 375 | 1440 | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Hero | 40 | 84 | Medium 500 | 1.02 | −3.5% |
| H2 | 30 | 44 | Medium 500 | 1.1 | −2% |
| H3 | 20 | 24 | SemiBold 600 | 1.25 | −1% |
| Stat figure (ledger) | 56 | 68 | Light 300 | 1.0 | −3%, tabular |
| Qualifier / as-of stamp | 13 | 13 | SemiBold 600 | 1.3 | +2%, tabular |
| Body | 17 | 18 | Regular 400 | 1.6 | 0 |
| Stat label | 17 | 18 | Regular 400 | 1.45 | 0 |
| Footnote | 14 | 15 | Regular 400 (run-in SemiBold) | 1.55 | 0 |
| Caption | 14 | 14 | Regular 400 (date SemiBold) | 1.45 | 0 |
| Button | 16 | 16 | SemiBold 600 | 1 | 0 |

Hero 104 → 84 narrows the gap to the 68px ledger figure, so the ledger
reads as the second voice of the page, not a footer to the hero. The locked
homepage headline is 74 characters; at 104px it runs to five lines and
pushes the intro off a 900px screen. On a phone the ledger figure goes *up*,
44 → 56: the figures are the proof. Display sizes all reuse existing
primitives; four odd steps are new (13 qualifier, 15 footnote, 17 phone
body, 40 phone hero). They break the even-number habit on purpose: they are
the reading sizes, tuned by eye at 375.

---

## 6. Colour

Anchored on the client's five. Grounds stay white, near-white and navy.

| Token (semantic) | Hex | From | Role |
| --- | --- | --- | --- |
| `surface/brand`, `text/heading`, `text/stat-figure` | `#143251` | Navy anchor, exact | Institutional bands, hero, footer; headings and figures on light |
| `action/primary-bg`, `text/link` | `#00597C` | Derived from `#238FC8` (`blue/800`) | Links and the one button. Hover `#00415B` |
| `border/focus`, logo | `#238FC8` | Blue anchor, exact | Focus ring on light (3.60:1, passes 3:1 non-text). Never text |
| `text/inverse-link`, `border/focus-inverse` | `#AFECF1` | Aqua anchor, exact | Links and focus on navy. Never a ground |
| `text/inverse-secondary` | `#F3F1D0` | Cream anchor, exact | Labels, footnotes and captions on navy. Never a ground |
| `feedback/construction-surface` | `#D8B471` | Gold anchor, exact | The construction-notice alert ground, with navy text. Never a rule, never on navy |
| `surface/page` · `surface/subtle` · `border/divider` · `text/secondary` · `text/primary` | `#FFFFFF` · `#F8F7F6` · `#E1DEDA` · `#55514C` · `#282622` | Stone ramp, untinted | Page, grouping ground, hairline, footnotes and eyebrows, body |

**Contrast, every text pairing used** (WCAG 2.2, computed):

| Pairing | Ratio | Needs |
| --- | --- | --- |
| Navy `#143251` on white / on `#F8F7F6` | 13.09 / 12.23 | 4.5 |
| Body `#282622` on white / on `#F8F7F6` | 15.10 / 14.11 | 4.5 |
| Secondary + footnote `#55514C` on white / on `#F8F7F6` | 7.87 / 7.36 | 4.5 |
| Link `#00597C` on white / on `#F8F7F6` | 7.72 / 7.22 | 4.5 |
| White on button `#00597C` | 7.72 | 4.5 |
| White on navy | 13.09 | 4.5 |
| Cream on navy | 11.41 | 4.5 |
| Aqua on navy | 10.03 | 4.5 |
| Navy on gold alert | 6.66 | 4.5 |
| Focus `#238FC8` on white (non-text) | 3.60 | 3.0 |
| White over a pure-white photo under navy scrim at 0.80 | 7.03 | 4.5 |
| Cream over a pure-white photo under navy scrim at 0.80 | 6.13 | 4.5 |

Scrim: navy `#143251` at 0.80 under any text on a photograph, which clears AA even if
the photo underneath is pure white. That is stricter than the current 0.72 so
that cream captions also pass.

---

## 7. Motion

Character: **settled.** Things are already where they belong; motion only
confirms an arrival or a change of state.

| Moment | Default | Reduced motion (designed) |
| --- | --- | --- |
| Page load | Hero headline fades in, 640ms `ease/appear`, 8px rise | Present at first paint. No fade |
| Ledger row | Whole row, footnote included, fades in once on scroll, 480ms, 8px, 60ms stagger | Present. No fade, no stagger |
| Figures | Never animate | Never animate |
| Photo essay (1969–2026) | Crossfade between dated frames on tap or arrow, 320ms | A static, dated contact strip: every frame and date visible at once |
| Accordion, FAQ | Height, 320ms `ease/transition` | 120ms crossfade, no height animation |
| Hover = focus | Underline thickens 1 → 2px, 120ms | Same, instant |
| Alert banner | Slides down 200ms | Appears |

Tokens are the current Motion collection, unchanged (`duration/fast…slowest`,
`ease/appear`, `ease/interact`, `ease/transition`, `distance/sm` 8px).

**Webflow:** every row above is native Interactions 2.0 (page load, scroll
into view once, click, hover). The reduced-motion column uses Webflow's
reduced-motion handling on each interaction plus the
`prefers-reduced-motion` block already in `tokens.css`. The photo-essay
contact strip is a CMS list styled two ways, not custom code. No GSAP, no
count-up, no smooth scroll. Zero custom-code cost.

---

## 8. Imagery

- **Subject:** the place, with the town in it. The Power Block, the GIS
  building and the water treatment area *seen from where people live*:
  rooftops, Route 119, the farmland and tree line in the same frame. Then
  the people: tradespeople at work, named in the caption where consent allows.
- **Two hours only.** *Dusk*: lights on across the site, sky still blue, the
  town's lights visible. It suits the navy band and shows a site that works
  late, honestly. *Daylight*: overcast or high sun, true colour, for aerials
  and people. **No golden hour, no sunrise heroes.**
- **Grade:** neutral and true. Lift shadows slightly, keep skies blue, never
  push to teal-orange. No duotone (that is 04 Crew's move).
- **Crop:** horizon in the upper third so the town and land read; 4:5 on a
  phone, 16:9 or 21:9 at 1440. Contained bands by default; full bleed spent
  once per page.
- **Caption, always:** what · where · **date** in SemiBold · Photograph or
  Rendering. The date is its own field.
- **Renderings** carry a navy "Rendering" tag inside the image's top-left
  corner, set in the same 13px SemiBold as the as-of stamp, plus the word
  in the caption. A render cannot be cropped free of its label.
- **The 1969–2026 photo essay** (`docs/source/iup-deck.md`): the dated strip
  `1969–2023 · MAR 2025 · NOV 2025 · FEB 2026 · MAR 2026 · APR 2026 · JULY
  2026` becomes the site's progress module. Same caption grammar, same date
  slot, ordered oldest to newest, with "Homer City Generating Station,
  1969–2023" as the first frame.
- Missing photography is a stone placeholder with the brief written inside
  the image area, never in the caption.

---

## 9. Voice

Plain, specific, in the past or present tense when something has happened,
with the source's own qualifiers kept. Short sentences. The date goes first.

Two lines rewritten from `docs/source/fact-sheet.md`, facts unchanged:

| Fact sheet | Evolution |
| --- | --- |
| "MAR — Demolition of the stacks and towers at the former Homer City Generating Station begins" | "March 2025. Demolition began on the stacks and towers of the former Homer City Generating Station." |
| "Safety is every HCG employee's #1 priority; we are accountable for our actions and responsive to concerns." | "Safety is the first priority for every Homer City Generation employee. We are accountable for what we do, and we respond when you raise a concern." |

---

## 10. The homepage hero on a 375px phone

A white header bar with the logo and a menu button: not transparent, not over
the photo. Under it, a 4:5 dusk photograph of the Power Block with lights on
and Homer City's own lights in the distance, captioned on the navy below with
its date. The navy band continues straight into the headline,
*"Building America's energy future while honoring Pennsylvania's proud
past."*, in 40px Geist Medium, white, then the intro in cream and one button.
Scroll once and the first receipt arrives whole: **As of September 2026 ·
1,800+ · direct-hire tradespeople and skilled contractors active on site ·
Press release, 4 September 2026**. The first number you see is the one that
changes, and it tells you when it was true.

It should feel like a well-kept noticeboard at the township building: calm,
dated, nothing to decode.

---

## 11. What it avoids

- **Kiewit's register**: yellow on black or navy, squared caps, uppercase
  letterspaced nav over a dusk plant. Our dusk photo sits *above* a solid
  navy band in Geist sentence case; gold never touches navy and never becomes
  a rule.
- **Count-up numerals**, scroll hijack, autoplay sliders.
- **Centred stats in a band, stats in rings, boxed stat cards with
  pictograms.** The ledger is left-aligned, unboxed, ruled.
- **Pastel panels and pill buttons** (the data-center-community look). One
  square button, `radius/control` 2px.
- **Transparent header over golden-hour photography.**
- **Unlabelled renderings.**
- **Turbine, solar, sunrise heroes; leaf and swoosh marks.**
- **Footnotes as 11px grey fine print** and "Learn more" links.
- **Drifting into another direction:** no Outfit or airy pale ground (02),
  no serif, cream ground or mono stamp (03), no condensed type or duotone
  people grid (04), no linework or coordinates (05).

---

## 12. Doubts

- It is the closest to what exists, so its risk is reading as *no change*.
  The receipt is the whole case for it; if the receipt does not look clearly
  better than the current ledger on a phone, this direction has no reason to
  exist beyond being the control.
- Navy headings plus navy bands is a slightly more corporate temperature than
  near-black. Worth comparing side by side.
- The 32 images in `content/imagery/` are all suspected generated or CGI
  (see its INDEX.md). The board uses three of them (07, 04, 03) only to
  demonstrate crop and layout, each labelled inside the image as a stand-in;
  the hero and the photo-essay strip are briefed placeholders. So the dusk
  grade is described, not shown, and no image in the set shows the town.
  The direction depends on the client having (or shooting) a real dusk frame
  with Homer City in it.
- 1,800+ and its date are tier A (client press release, 4 September 2026),
  not from the supplied PDFs; wording to confirm, per root CLAUDE.md §6.
