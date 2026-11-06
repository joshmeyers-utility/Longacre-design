# Research: civic-transparency angle (visual pass)

Rewritten 6 November 2026 after capturing and viewing real screenshots
(Chromium, 1440 desktop and 375 @2x mobile; stills in `screens/civic/`).
Every look-and-feel claim below was read off an image unless marked
**unverified**. Hex values come from computed styles (`*-styles.json`) or from
sampling the screenshot, and are labelled. Cookie banners cover the first
screen on several captures; the full-page JPGs are the clean view.

Sceptic test: "source, date, and a document to download", seen on screen.

## References (verified)

### 1. Our World in Data, grapher with source and metadata block
URL: https://ourworldindata.org/grapher/life-expectancy (also `?tab=sources`)
Stills: `screens/civic/owid-grapher-desktop.jpg`, `owid-sources-desktop-full.jpg`
(the metadata block sits mid-page), `owid-sources-mobile.jpg`
- Look: navy header band (#002147, sampled) with a thin red rule (#D52124) under
  it; white page. Chart title in Playfair Display 600 (#2D2E2D), body in Lato
  16px (#1D3D63 navy text). Palette is navy, vermilion and a muted
  categorical set. Layout: chart card left, country picker right.
- Source: directly under the chart, one line, 13px grey (#5B5B5B):
  **"Data source:"** in bold, then underlined citations, then
  "OurWorldinData.org/life-expectancy | CC BY". It is small but always there,
  and it is the first thing under the plot.
- Date: further down, in a pale-blue box (pale blue-grey; exact hex not sampled) a single horizontal
  metadata row of small label/value pairs, the label grey, the value dark:
  **Unit** years, **Date range** 1543-2023, **Last updated** 2025-10-22,
  **Next expected update** 2026-12-06, **Managed by** (a named person,
  underlined). ISO-format dates, no icons.
- Download: a bottom "Download" section with two big rows (icon, title, one
  line of what is included) for "Download full data" and "Download displayed
  data", plus monospace code boxes for the CSV and JSON metadata URLs. A small
  "Download" button also sits beside the chart.
- Mobile: chart fills the width, the country picker collapses to an "Edit
  countries" button, the source line wraps to 3 lines and is partly under the
  cookie sheet. Controls are large, 44px-plus.
- Steal: the one-line metadata strip with **Last updated / Next expected
  update / Managed by a named person**. Avoid: Playfair headlines are too
  editorial for us, and the strip is 13px and easy to miss.

### 2. GOV.UK publication page: dates and "See all updates"
URL: https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020
Stills: `govuk-publication-desktop.jpg`, `govuk-publication-desktop-full.jpg`,
`govuk-updates-open.jpg` (expanded change history), `govuk-publication-mobile.jpg`
- Look: white page, blue bar (#1D70B8) with white wordmark, black text
  (#0B0C0C) in GDS Transport, H1 48px bold. Links #1A65A6, bold and underlined.
  Green buttons (#0F7A52). Almost no decoration.
- Dates: a three-row label/value block under the title, labels regular and
  values beside them: **From:** (linked), **Published:** 18 April 2013,
  **Last updated:** 28 October 2026 followed by an inline bold link
  "See all updates". The same Last updated line repeats at the page foot above
  a "Show all updates" disclosure.
- Change history (seen open): a yellow focus-state summary toggle (#FFDD00 with
  a black underline), then a vertical grey rule with each entry as a bold date
  and a plain-English note ("5 February 2026 ... radically shorter and
  simpler"). Newest first.
- Downloads (seen): **Documents** heading, then a grey file-icon tile (PDF or
  HTML label on a page glyph) beside a blue link title, then a grey line
  "Ref: ISBN ..., PDF, 944 KB, 86 pages". Type, size and page count on screen.
- FAQ/feedback: a bordered strip "Is this page useful? Yes / No" and "Report a
  problem with this page" at the foot, buttons outlined black.
- Mobile: same stack, labels stack above values, the cookie panel fills the
  first screen (about 975px of 1624). The Menu toggle is a text button.
- Steal: **Published / Last updated / See all updates** as three plain rows;
  the file tile with format, size and page count. Avoid: nothing visual, but it
  is austere, so it needs warmth from imagery elsewhere.

### 3. ProPublica corrections
URL: https://www.propublica.org/corrections
Stills: `propublica-corrections-desktop.jpg`, `propublica-corrections-mobile.jpg`
- Look: white page, a huge condensed serif wordmark, "Corrections" H1 at 80px
  in a feature serif (#111110), body in Brut Grotesque 16px (#31302D). Hairline
  rules separate sections. Orange-red Donate pill (hex not sampled).
- Entries: a two-column grid under a hairline; each entry has a bold serif story
  headline, then **"Correction, Oct. 27, 2026:"** in bold, then plain
  third-person text ("This story originally misstated..."). Some entries are
  set in italic. No icons, no badges. The correction date is the bold run-in
  label, not a separate field.
- Contact: the first line on the page is "To contact us with corrections,
  email us at feedback@..." (underlined), above the first entry.
- Mobile: single column, the same bold run-in label, body at about 17px, long
  entries run full length (no truncation).
- Steal: the bold run-in "Correction, {date}:" pattern and the correction
  email as line one. Avoid: the 80px serif display, which is another brand.

### 4. Tideway: a stat with its footnote and its data date
URL: https://www.tideway.london/the-tunnel/ (stat block lower down)
Stills: `screens/civic/tideway-stat-footnote.jpg` (the one to open),
`tideway-tunnel-full.jpg`, `tideway-home-desktop.jpg`, `tideway-home-mobile.jpg`
- Look: the stat is a full-width teal block (#459F96, sampled), figure
  "23 MILLION TONNES" in a chunky display face (Cubano) in white with an
  off-white tint, one-line label "of sewage diverted from the River Thames*"
  in bold sans. Page background near-white (#FCFCFC).
- Footnote and date (seen): directly below the teal block, centred grey 16px
  text: "*into the London Tideway Tunnel system since August 2024. The tunnel was
  fully connected and operational in February, 2025." Then a blank line and
  **"Data last updated 27/10/2026."** Then a plain-language comparison and a
  pool illustration ("equivalent of 400 Olympic-sized swimming pools").
- This is the closest match to our rule that a figure carries its footnote and
  its date. It is weak: the footnote is centred, small, and sits outside the
  coloured block, so the eye reads the figure alone. Footnote and date are on
  separate lines with no rule.
- News list (seen): dates as 12/10/26 in small teal under each headline.
- Steal: asterisk + footnote + "Data last updated" on the stat itself. Avoid:
  placing them outside the figure block, centred, in light grey.

### 5. USWDS "official website" banner
URL: https://designsystem.digital.gov/components/banner/
Stills: `uswds-banner-desktop.jpg`, `uswds-banner-mobile.jpg`
- Look: a thin strip at the very top (about 22px, light grey #F0F0F0 on
  census.gov, #1B1B1B here), a tiny flag, one line "An official
  website of the United States government", then an underlined blue "Here's how
  you know" with a chevron. Text about 12px.
- Cost: it is tiny, and the explanation is hidden behind the chevron. The
  same strip appears on census.gov and USAspending in identical form
  (confirmed in `census-acs-desktop.jpg` and `usaspending-desktop.jpg`), so
  the signal is learnt.
- Expanded state: **unverified** (not captured).
- Steal: one-line top strip with a disclosure that teaches verification.
  Avoid: 12px text.

### 6. Census.gov page chrome
URL: https://www.census.gov/programs-surveys/acs/about.html
Stills: `census-acs-desktop.jpg`, `census-acs-mobile.jpg`
- Look: grey federal strip, a pale-blue alert bar with an "i" icon and a close
  X ("2025 ACS 1-year estimates ... are now available"), white header, Roboto
  H1 62px bold (#131313), blue links #2B74B7, left sub-nav of blue links,
  right "Related Information". Round blue and green pill buttons.
- Feedback (seen): bottom-right floating card "Is this page helpful? Yes /
  No" with thumbs icons and a close X. This is the cheapest correction channel.
- The page-revised date is below the fold of the capture; the placement at the
  foot is **unverified visually**.
- Steal: the dismissible pale-blue alert bar (matches our alert banner spec),
  and the floating helpful widget. Avoid: the thumbs icons.

### 7. USAspending
URL: https://www.usaspending.gov/
Stills: `usaspending-desktop.jpg`, `usaspending-mobile.jpg`
- Look: pale blue-grey ground (#ECF4F7, sampled), 56px bold Source Sans Pro
  heading, blue and outlined blue buttons (#005EA2), a flat illustrated
  landscape (capitol, bridge, wind turbines, farm). A "Pause text animation"
  control sits visible under the lede. Then a dark teal band (#0D4F5D).
- The illustration is a place-as-diagram move that is closer to our brief than
  a stock photo, but it is generic. The visible pause control is the useful
  detail.
- Steal: a visible pause control for any moving text. Avoid: clip-art scenery.

### 8. HS2 communities page
URL: https://www.hs2.org.uk/in-your-area/ (resolves to "Communities")
Stills: `hs2-community-desktop.jpg`, `hs2-community-mobile.jpg`
- Look: navy (#1E3775) wordmark and headings, Open Sans 54px bold H1, a magenta
  section bar (#B85198) with an "Also in this section" button, a dark-scrimmed
  photo hero of the CEO meeting residents, with a caption line and an "i" icon
  beneath ("HS2's CEO Mark Wild meeting residents in Old Oak Common and
  Acton."). Names and places are in the caption.
- The caption pattern (real names, real place, below the photo, grey 14px) is
  the useful bit and matches our quote rule.
- Steal: place-and-name captions with an info icon. Avoid: the magenta bar.

### 9. Sizewell C: stat row and project hero
URL: https://www.sizewellc.com/
Stills: `screens/motion/sizewell-scroll-2.jpg` (stat row, full size),
`sizewell-c-desktop.jpg`
- Look: deep blue header (#02588B), Montserrat, aerial rendering of the
  campus as the hero with white 60px text over it. The rendering is not
  labelled as a rendering on the first screen (**seen**).
- Stat row: five figures, each in a circular arc outline (open ring, blue
  #02588B) with the figure beside it, a one-line label under ("60+ Years of
  clean, reliable power", "70,000 UK jobs supported"). No source, date or
  footnote anywhere on the row.
- It confirms the gap: a stat row with no receipt. It also shows what to
  avoid: a rendering with no label.

### 10. GOV.UK Design System home, for type and focus
URL: https://design-system.service.gov.uk/
Stills: `govuk-design-system-desktop.jpg`
- Look: GDS Transport, a navy hero #0B0C0C and blue #1D70B8 pair, yellow
  focus ring. A plain list of links. Mostly confirms entry 2.

## Seen but weak (kept in index as "weak")
- **Texas Tribune About** `screens/civic/texas-tribune-about-desktop.jpg`: a
  centred pipe-separated link row ("Ethics | Corrections | Downloads |
  Documents") in underlined PT Serif, Open Sans bold headings. Plain and
  honest but dated in look. The donor-disclosure content was not captured
  (**unverified**).
- **Hudson Tunnel Project (hudsontunnelproject.com)**:
  `screens/civic/hudson-tunnel-desktop.jpg`. A 2010s Arial site with an
  orange rule under a white header, FEIS and Library in the nav, bullet lists
  of blue links, a small "Photo courtesy of Amtrak" credit. Shows how a
  document-heavy project site looks when nothing is designed: a cautionary
  reference, not a model. Note the earlier pass cited the Gateway Program site
  (gatewayprogram.org); this is a different site and the claims about site
  cameras were **not** verified visually.

## Dropped
- Microsoft East Point (404 at the URL tried), Vogtle (404), Mariner East
  (blocked, 405), NYC DCP (403), Crossrail/GLA (403): no usable capture.
- The Pudding About: not captured in this angle (used in motion).

## Patterns (visual)

1. **Label/value rows for dates.** GOV.UK's Published / Last updated / See all
   updates and OWID's Last updated / Next expected update are both small
   labelled pairs, not prose.
2. **A bold run-in label.** "Correction, Oct. 27, 2026:" (ProPublica) and
   "Data source:" (OWID) put the receipt at the start of the line in bold.
3. **File tile with metadata.** GOV.UK shows format, size and page count under
   a linked title next to an icon tile.
4. **Footnote on the figure.** Tideway's asterisk + "Data last updated" is the
   only one found, and it is under-designed.
5. **A named person.** OWID "Managed by" a named person with a link.

## Gaps nobody owns
1. **The receipt inside the ledger row.** Tideway puts the footnote below the
   block; Sizewell C has none. Nothing sets figure, footnote, date and
   document link as one aligned row.
2. **A contested-topic answer that looks serious.** No reference shows a
   claim, evidence, document, date and "what we don't know yet" on one calm
   page. ProPublica's corrections look the part but are about the publisher.
3. **Mobile receipts.** On every mobile capture the source line wraps and is
   the first thing pushed under a banner or the fold (OWID). Nobody designs the
   source for the 375px screen first.
