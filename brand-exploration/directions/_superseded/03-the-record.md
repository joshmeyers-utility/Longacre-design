# Direction 03: The Record

Checkpoint 1 brief. Mood board:
`directions/moodboards/03-the-record.html`, captured as
`moodboards/03-the-record-board.jpg` (1440, full page) and
`moodboards/03-the-record-375.jpg` (375 × 812 viewport, hero and ledger).

## Concept

The site as the county's record of the build. It looks like the data desk
of a serious regional paper, or a good almanac. The display face is a light
editorial serif, the page is warm paper, gold hairlines rule the rows, and
dates and sources are set as small mono stamps. Trust comes from the
typography: every figure is set as one unit with its qualifier, label, note,
date and source document, and nothing on the page moves to sell it.

> **Positioning:** The record of what is being built on Power Plant Road,
> kept for the people who live beside it.

Voice test: Power Plant Road, and the neighbours along it, exist only here.
Swap in another company's name and the line stops being true.

## Research it draws on

| Reference | What it gives this direction | Screenshot |
| --- | --- | --- |
| Fraunces specimen | Light Fraunces figures look exact on cream, and the face reads as warm and regional | `research/screens/type-and-color/specimen-1.jpg` |
| Newsreader specimen | A quieter, accountable reading serif. Used here for text, not display | `research/screens/type-and-color/specimen-2.jpg` |
| ProPublica corrections | The bold run-in label ("Correction, Oct. 27, 2026:") and a serif headline over hairline rules | `research/screens/civic/propublica-corrections-desktop.jpg`, `type-and-color/propublica-home-desktop.jpg` |
| GOV.UK publication | Label and value date rows ("Published / Last updated / See all updates") | `research/screens/civic/govuk-publication-desktop.jpg` |
| OWID | "Data source:" as a run-in under the chart, with the download beside it | `research/screens/civic/owid-sources-desktop.jpg`, `owid-grapher-desktop.jpg` |
| Heatherwick | A warm off-white ground (`#F4F3EF`) with a book serif and mono labels reads as credible and current, not quaint | `research/screens/type-and-color/heatherwick-home-desktop.jpg`, `heatherwick-home-desktop-full.jpg` |
| Guardian | Proof that a serif headline system can carry navigation and a whole news site. The capture is mostly a cookie overlay, so it is weak evidence | `research/screens/type-and-color/guardian-home-desktop.jpg` |
| Tideway stat | The only footnoted, dated stat in the set, and a warning: the note is centred grey below the block and gets missed | `research/screens/civic/tideway-stat-footnote.jpg` |
| Synthesis §5 | Open territory #3 (a cream ground), #4 (a designed footnote), #5 (reduced motion as the default look) and #6 (the figure never animates) | `research/synthesis.md` |

## How it earns a sceptic's trust: the receipt

The receipt is typographic, not boxed. One row of the ledger is one unit:

| Part | Treatment |
| --- | --- |
| Qualifier | *Anticipated*, *Projected*, *Up to*, set in Newsreader Semibold Italic above the figure. Italic makes the hedge read as part of the sentence rather than a tag |
| Figure | Fraunces Light, lining figures. It never animates and arrives whole |
| Label | Newsreader at 22/19 px. The footnote marker is a superscript numeral |
| Note | **"Note 1."** as a bold run-in, then the footnote verbatim at 16/15 px. Behind it, a 2 px gold bar marks it as part of the row. It sits in the row, directly under the label, and is never sent to the page foot. Notes are larger than the 11–13 px grey every reference uses |
| As of | For moving figures the date is a bold run-in that opens the label: **"As of September 2026:"**. A mono tag with the exact date ("Updated 4 September 2026") sits in the margin, with the date held in its own CMS field (root §5.3) |
| Source and document | A margin column at 1440: **"Source:"** in bold, then the document in a mono stamp ("Fact sheet, May 2026"), then an underlined link to the PDF or press release. It works like a newspaper sidenote |

**At 375** the three columns stack in reading order: qualifier, figure,
label, note, then source and link on one wrapped line. The note stays above
the fold of its own row. The ledger needs no horizontal scroll and nothing
truncates. See `03-the-record-375.jpg`.

**Ledger rows on the board:** 10,000+ with Note 1 verbatim, ~1,000 with
Note 2 verbatim, *Up to* 4.4 GW, and 1,800+ *as of September 2026*. These
are root CLAUDE.md §6 figures and labels. The 4 September 2026 date and its
source come from the client press release that §6 marks tier A.

## Typography

Three Google families (OFL), and **no sans**. That is the clearest type
signal setting this direction apart from all four others.

| Role | Family | Weight | Size 1440 / 375 | Settings |
| --- | --- | --- | --- | --- |
| Hero | Fraunces | 330 | 88 / 44 px, line height 1.03 | `opsz` 72, SOFT 0, WONK 0, tracking −2% |
| H2 | Fraunces | 360 | 56 / 34 px | `opsz` 60 |
| H3, news headlines | Fraunces | 400 | 28 / 22 px | `opsz` 36 |
| Stat figure | Fraunces | 300 | 120 / 72 px | `opsz` 72, lining figures, tracking −2.5% |
| Body | Newsreader | 400 | 20 / 18 px, line height 1.5 | `opsz` auto |
| Lede | Newsreader | 400 | 24 / 19 px | |
| Notes, captions | Newsreader | 400, run-ins 700 | 16 / 15 px | |
| Qualifier | Newsreader | 600 italic | 17 / 15 px | |
| Nav, buttons | Newsreader | 500 / 600 | 17–18 px | Sentence case |
| Stamps | IBM Plex Mono | 400 | 13 / 13 px | Sentence case. Dates, sources and file details only, never body text |

Choosing the faces: Fraunces Bold at `opsz` 144 (specimen 1) reads as
folksy. Fraunces Light at `opsz` 144 was tried on the first board and read as
a fashion-magazine Didone, with hairline "+" signs. **`opsz` 72 at weight
300–330** was the setting that looked like a modern regional paper. Newsreader
carries the reading text because it is quieter than Fraunces, as specimen 2
shows.

Mono is editorial here, not technical. It works as a dateline ("Latest press
release: 4 September 2026") and a citation ("Fact sheet, May 2026"). It is
never a coordinate, a dimension or a grid label, which keeps it clear of
05 Survey.

## Colour

Anchored. Every colour is one of the client's five or a step derived from
one.

| Token | Hex | From | Role |
| --- | --- | --- | --- |
| `D03 paper` (cream/50) | `#FAF8EC` | Cream, lightened | The page ground |
| `D03 cream` (cream/100) | `#F3F1D0` | Client cream | The ledger band and feature sections, one band at a time |
| `D03 ink` (navy/900) | `#143251` | Client navy | All primary text, the masthead rule and institutional bands |
| `D03 ink-2` (navy/600) | `#4A5A6E` | Navy, lifted | Notes, qualifiers and captions. The lightest ink allowed |
| `D03 gold` (gold/400) | `#D8B471` | Client gold | Hairline rules and the note bar. Never text on a light ground |
| `D03 stamp` (gold/800) | `#6E5418` | Gold, darkened | Mono stamps on light grounds |
| `D03 link` (blue/700) | `#145E8C` | Blue, darkened | Links, always underlined |
| Aqua | `#AFECF1` | Client aqua | Links and focus rings on navy only |
| Client blue | `#238FC8` | Client blue | Logo only |

Contrast (WCAG 2.x), every text pairing:

| Text | On paper | On cream | On navy |
| --- | --- | --- | --- |
| Ink `#143251` | 12.28 | 11.41 | n/a |
| Ink-2 `#4A5A6E` | 6.61 | 6.14 | n/a |
| Link `#145E8C` | 6.55 | 6.08 | n/a |
| Stamp `#6E5418` | 6.69 | 6.22 | n/a |
| Paper `#FAF8EC` | n/a | n/a | 12.28 |
| Aqua `#AFECF1` | 1.22 ✗ | 1.14 ✗ | 10.03 |
| Gold `#D8B471` | 1.84 ✗ | 1.71 ✗ | 6.66 (stamps on navy) |
| Client blue `#238FC8` | 3.38 large only | **3.14** large only | 3.64 large only |

Client blue fails for body text on cream (3.14:1), so links use `#145E8C`.
The gold hairline is 1.84:1 on paper. That is fine for a decorative divider,
but nothing that must be seen to be operated may depend on it. Focus is a
3 px ink ring on light grounds and a 3 px aqua ring on navy, and both clear
the 3:1 non-text minimum.

**Departure from the current design.** Root §7 says there are no tinted
grounds. This direction makes the whole page a tinted ground. The
justification:
1. The rule was written against tinted *panels* used as a grouping device,
   and the 2015-era cards they produce. Here cream is the paper itself, one
   ground everywhere, so there are still no cards and nothing tinted groups
   content. Space and hairlines do that.
2. Cream is a client colour (`#F3F1D0`). Under Anchored latitude this is a
   change in how it is used, not a new colour.
3. Synthesis §5.3 identifies a warm ground as open territory. Heatherwick
   shows it can read as credible.
4. Every text pairing above passes AA on both paper and cream.

Two other changes from the current design: the stat figure is navy rather
than near-black, and stamps are bronze rather than gray. "Blue means link"
still holds.

## Motion

Still. Reduced motion is the look, not a fallback.

| Token | Value | Use |
| --- | --- | --- |
| `D03 duration/fade` | 400 ms | One opacity fade of the page content on load, gated by `prefers-reduced-motion: no-preference` |
| `D03 duration/hover` | 0 ms | Link underline thickens from 1 px to 2 px instantly. The same treatment applies on `:focus-visible` |
| `D03 ease/quiet` | `cubic-bezier(.2,0,0,1)` | The fade only |

There are no scroll reveals, no count-ups, no parallax and no smooth scroll.
The mobile menu opens instantly. The figure arrives whole.

**Webflow:** the load fade is one Interactions 2.0 page-load action. With
nothing else animated, the reduced-motion path is trivial: disable that one
interaction under Conditional Playback, or ship without it. No GSAP. No
custom code beyond the fonts' variation settings
(`font-variation-settings: 'opsz' 72`). If the Designer cannot set
`opsz` directly, it goes in a small site-wide style embed, flagged in
`docs/04-build-notes.md`.

## Imagery

- **Subject:** the real campus photography and the IUP deck's photo essay,
  shown as a **dated sequence** of 1969–2023, March 2025, November 2025,
  March 2026, April 2026 and July 2026. Each frame has a mono date over a
  gold rule and a plain caption: the record in pictures, not a slideshow.
- **Grading:** natural daylight. Saturation eased about 10%, no warming, no
  vignette, no duotone. The cream ground supplies the warmth, so the
  photographs do not need to.
- **Crop:** 3:2 documentary. Horizon in the top third, with the hills, tree
  line and farmland kept at the edges so the place stays in frame.
- **Captions are a typographic feature:** the kind and date are a mono stamp
  ("Photograph · April 2026"), and the title is a bold run-in followed by
  the caption text. The date is its own field (root §7, the third rule).
- **Renderings** carry "Rendering" twice: as a tag inside the image area and
  in the caption stamp. They are never dated as if they were photographs.
- **Supplied imagery status:** the 32 exports in `content/imagery/` are
  flagged "Rendering (suspected)". The board uses `07-campus-landscape-aerial`
  **only to show the crop and grade**. It is labelled inside the image area
  "Stand-in — suspected generated image, not a photograph of the campus", and
  its caption is undated. The hero and all six essay frames are placeholders
  with the photo brief inside the image area. For this direction this matters
  more than for any other: a dated caption under a generated image would be
  exactly the false record the direction exists to prevent.

## Voice

Plain, dated and specific. Dates become run-in labels, and adjectives go.
Facts are unchanged from `docs/source/fact-sheet.md`.

| Fact sheet | The Record |
| --- | --- |
| NOV · "PA DEP approved of HCG's air quality plan, authorizing construction and initial operations" | **November 2025:** the Pennsylvania Department of Environmental Protection (PA DEP) approved Homer City Generation's air quality plan, authorizing construction and initial operations. |
| MAR · "Demolition of the stacks and towers at the former Homer City Generating Station begins" | **March 2025:** demolition of the stacks and towers at the former Homer City Generating Station began. |

## The 375 px hero

The masthead is the logo with "Homer City Energy Campus" in Fraunces, then
"Menu". A 2 px navy rule sits beneath it, then a one-line mono dateline:
"Latest press release: 4 September 2026". The headline follows in Fraunces
330 at 44 px, five lines on paper. Under it is the 19 px lede (3,200+ acres,
the former Homer City Generating Station, Indiana County), then a
full-width navy button and an underlined link to the fact sheet. All of this
sits in the first 812 px. The photograph follows with a dated caption. There
is no text over imagery, so no scrim is needed.

It feels like opening the front page of a well-kept local paper on a phone:
calm, with the newest dated item at the top.

## What it avoids

- **Nostalgia kitsch:** no newsprint texture, halftones, blackletter
  masthead, dingbats, ornamental double rules or old-timey "Est." badges. It
  should read as a current editorial site.
- **05 Survey's register:** mono is never a coordinate, a dimension or a
  grid label.
- **Kiewit:** no gold on navy with squared caps. Gold on navy is limited to
  small mono stamps.
- **Spin:** no count-ups, no scroll theatre, no adjectives in figures, no
  centred stat bands, no boxed cards.
- **Renderings presented as fact,** and generated imagery with dates.
- **Aqua as a ground** (water-claim optics). Aqua appears only on navy.

## Distinctness and doubts

- Distinct from 01 (Geist on white), 02 (Outfit, pale and airy), 04 (Big
  Shoulders on navy) and 05 (Archivo with technical mono on a white grid).
  This is the only all-serif direction on a warm ground, and the only one
  that is still by design.
- **The risk of convergence is structural, not stylistic.** The current
  design already has a hairline ledger. The Record differs in its type, its
  ground, the in-row note bar and the sidenote source column. If 01 adds a
  source column, the two will need watching.
- Serif body text at 15–16 px for long FAQ answers needs a real reading test
  with older neighbours on low-end Android devices.
- The cream page will look "yellow" on uncalibrated screens. `#FAF8EC` was
  chosen to keep that mild, but it should be checked on a cheap laptop panel.
- The receipt depends on the client supplying document links (fact sheet PDF,
  press releases). Without them, "Source:" points nowhere.
