# Research: architecture-and-construction (visual pass)

Angle: construction programmes, builders and architecture firms: how a build is
shown to the public. Revised 2026-11-06 from **rendered screenshots** (Playwright,
1440 and 375) and computed styles. Hex values are computed styles or pixels sampled
from the screenshot unless marked "eyeballed". Screens:
`screens/architecture-and-construction/<slug>-desktop.jpg|-desktop-full.jpg|-mobile.jpg|-scroll1..3.jpg|-styles.json`.
Note: several `-desktop-full` files are only 900px tall because the page scrolls in
an inner container; use the `-scroll` files for those.

**Dropped:** Elizabeth line (TfL 403 bot wall), Georgia Power Vogtle (404, not in
this angle's set), HS2 /building-hs2 (500), Holder and CBG leads (never captured).
**Added:** Thames Tideway tunnel page, HS2, Sound Transit, Snohetta, SOM, Mecanoo.
Studio Gang and BIG kept as short notes.

## References

### 1. Kiewit (the EPC on this project)
URL: https://www.kiewit.com . Screens: `kiewit-desktop.jpg`, `kiewit-scroll2.jpg`, `kiewit-mobile.jpg`
- **Type:** headlines **Industry** (squared slab-grotesque) 64px/700, sentence case,
  white; nav in Acumin Pro Condensed, ALL CAPS, letter-spaced 12px-ish; body Acumin.
  Eyebrow "SERVICES" caps with a yellow underline.
- **Colour:** Kiewit yellow **#FFD202** (logo tile and top rule, arrow, progress pill),
  navy **#162E46 / #1C3247** stats band, near-black scrim #212529 on photography. Yellow
  plus navy plus night photography is a closed, strong system.
- **Layout & grid:** full-bleed hero, left-aligned text block at 72px margin, logo as a
  yellow square hanging from the top-left, three-dot carousel with a pause button.
  Stats band: four figures in an **outlined (stroke-only) yellow numeral** style, centred
  labels beneath ($18.2B, 34,500, 4,000+, #4).
- **Imagery:** dusk industrial plant lit yellow from within, graded blue-navy. Very
  cinematic; matches the palette by construction.
- **Stats/dates/sources:** labels carry a year ("2025 Revenues"). No source line.
- **Mobile:** hero holds; headline stacks to three lines at about 44px, logo tile stays,
  nav collapses to a yellow hamburger. Strong.
- **Steal:** the logo as a solid tile hanging from the edge; outline numerals; text
  grading so a night photo carries the palette. **Avoid:** all-caps nav; it is the
  generic contractor look and our current system bans it.
- **Webflow:** easy; outline numerals are `-webkit-text-stroke`, check support.

### 2. Gateway Development Commission (Hudson Tunnel)
URL: https://www.gatewayprogram.org . Screens: `gateway-desktop.jpg`, `gateway-scroll2.jpg`, `gateway-mobile.jpg`. Companion: `../civic/hudson-tunnel-desktop-full.jpg` (the project's EIS site, civic angle).
- **Type:** **Brenner Sans** throughout; H1 49px/300 or bold ~48px, centred, sentence
  case; body 22px/400 in #111; intro paragraph set bold. Large, plain, civic.
- **Colour:** deep forest green **#114514** on the stats band and wordmark tile,
  olive-grey nav bar **#4B554D**, sage ground **#E5EBE1** under the headline, link
  blue #0073AA. Green marks "public agency" here, not eco.
- **Layout & grid:** logo tile + 100px olive nav, full-bleed photo (two workers in
  stickered hard hats, backs to camera, an excavator behind), sage headline panel,
  then a green stats band: **four figures, bold lead-in plus a one-line label**
  ("95,000 Jobs / Total jobs created during construction"), 2x2, centred, then a
  YouTube poster of a named worker.
- **Imagery:** documentary: stickered hats, snow, steel, a real operator; not graded.
  The most honest worker photography in the set.
- **Stats/dates/sources:** four stats, no as-of dates, no footnotes. The least
  sourced stat block of the group, which is the gap.
- **Mobile:** headline wraps to five lines at ~38px, photo crops to the steel and signage,
  hamburger; fine but heavy.
- **Steal:** workers shot from behind in their own kit; the video of a named worker;
  a flat solid colour band for stats. **Avoid:** unsourced bold-then-label stats.
- **Webflow:** easy.

### 3. Thames Tideway Tunnel
URLs: https://www.tideway.london and /the-tunnel/ . Screens: `tideway-desktop.jpg`, `tideway-scroll2.jpg`, `tideway-mobile.jpg`, `tideway-tunnel-desktop-full.jpg`
- **Type:** headings **Cubano** (a chunky condensed display) ALL CAPS, 26-50px, teal
  #00A88F or white; nav in Cubano caps slate; body Helvetica Neue/Inter 16px grey.
- **Colour:** teal **#00A88F**, pale aqua **#98D0CD**, slate grey (#5D6B73-ish eyeballed),
  white and #FCFCFC. Teal and slate on white; the water colour carries the brand.
- **Layout & grid:** a white nav with the logo as a **white tile hanging from the top**
  centre; full-bleed video hero with a centred caps title and "play full video"; a white
  panel inset 36px from the edge overlapping the hero bottom; three-up news cards
  (photo, title, teal date in dd/mm/yy); a tab strip (The tunnel / Timeline).
- **Imagery:** people in a riverside public space, a flooded-look concrete tunnel bore
  (a beautiful sand-and-shadow close-up). Humans and place, not machines.
- **Stats/dates/sources:** the big number as a picture: "One million tonnes = 400
  Olympic pools" with a flat pool illustration (the pyramid analogue in our figures).
  News dates teal beside every card.
- **Mobile:** tile logo stays centred, hamburger left, caps teal headings centred,
  centred grey body; clean and legible.
- **Steal:** the illustrated comparison; teal dates on every card; tunnel-bore photo as a
  page header. **Avoid:** all-caps Cubano and centred long body copy.
- **Webflow:** easy; Cubano is licensed, so swap.

### 4. Sizewell C
URL: https://www.sizewellc.com . Screens: `sizewell-desktop.jpg`, `sizewell-desktop-full.jpg`, `sizewell-mobile.jpg`
- **Type:** Montserrat 400-700, headline 60px/500 white, nav ALL CAPS 17px; body 20px.
- **Colour:** solid blue **#02588B** header block (two rows tall), orange **#F1860D** CTA
  and footer rule, a white hero scrim-less. Blue plus orange.
- **Layout & grid:** logo centred over two nav rows in a blue slab, a full-bleed
  **rendering** (shown with no label) of the plant on the coast under three stacked
  headline lines; below it an icon-plus-number strip (60+, 70,000, 6 million, 9 million,
  £4b) with ring graphics, alternating image/text rows with rounded-corner video
  cards, a dark milestones band with a circular timeline, a large footer with a curved
  orange arc.
- **Imagery:** a rendered aerial of a campus that does not exist yet, shown as
  the hero. This is exactly the render-as-photo risk the brief flags. Also real
  photos of workers in orange hi-vis on rows two and three.
- **Stats/dates/sources:** five round-ring stats, no dates or footnotes. Milestones
  carry month-year in orange.
- **Mobile:** not individually reviewed beyond the long-scroll image (unverified detail).
- **Steal:** a milestones rail with month-year in an accent colour. **Avoid:** an
  unlabelled render hero; a six-line blue header block.
- **Webflow:** easy; ring graphics are SVG.

### 5. Hinkley Point C (EDF)
URL: https://www.edfenergy.com/energy/nuclear-new-build-projects/hinkley-point-c . Screens: `hinkley-desktop.jpg`, `hinkley-scroll2.jpg`
- **Type:** Open Sans 700 headlines, 48px, navy **#10367A**; body 20px #1C1C1C; sentence case.
- **Colour:** navy #10367A, EDF orange-red **#C82C00** (buttons) and a bright orange
  slash graphic, light grey #F0F0F0 band. Navy plus orange.
- **Layout & grid:** pill-switch utility nav, then a hero split: text left, **a photo
  cut by an angled polygon with orange wedges** right. Below, white cards with a
  slanted-edge photo ("Benefits of Hinkley Point C"), and a full-width night photo band
  with a white call-out box.
- **Imagery:** a night aerial of the reactor dome ringed with cranes and lights: dense,
  glittering, genuinely beautiful construction photography. Plus a staff portrait.
- **Stats/dates/sources:** "Project Update May 2026" title with a dated video card;
  benefits stat ("£13 billion") in prose.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** a night shot of the build as the hero image; "Project update {month year}"
  as a title format. **Avoid:** angled polygon crops (not Webflow-native; needs
  clip-path).
- **Webflow:** medium for the angled crop; the rest is easy.

### 6. HS2
URL: https://www.hs2.org.uk/ . Screens: `hs2-desktop.jpg`, `hs2-mobile.jpg`
- **Type:** Open Sans 700; carousel headline about 48px white centred; nav 15px bold navy.
- **Colour:** navy **#1F3775**, magenta CTA **#BA5599** (also #B85197 computed), light-blue
  cookie bar. Navy plus magenta on a grey scrimmed photo.
- **Layout & grid:** cookie bar, navy utility strip, white header, 7-item nav, a
  carousel hero with chevrons and an **explicit "Pause Carousel Autoplay" control**, four dots.
- **Imagery:** an underground structure interior, grey concrete, cones; honest and
  dull.
- **Stats/dates/sources:** the headline subline is a progress figure, "80% of major
  structures complete or being built", no date visible on the hero.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** a status sentence directly under the headline; pause control labelled.
  **Avoid:** the carousel itself.
- **Webflow:** easy; carousel is a native slider.

### 7. Sound Transit system expansion
URL: https://www.soundtransit.org/system-expansion . Screens: `soundtransit-desktop.jpg`, `soundtransit-desktop-full.jpg`, `soundtransit-mobile.jpg`
- **Type:** Nunito Sans 900 **italic**, 62px, white headline; Hind body 20px; sentence case.
- **Colour:** navy **#2C3671** title band, hot pink **#D6078E** for controls, ice-blue map ground.
- **Layout & grid:** navy band with a bold italic headline and an intro line giving voter
  approval years; below, a **two-pane tool**: a line map with a key left and a filterable
  project list right with ruled rows, type icons, and a pink arrow disc per row.
- **Imagery:** none; the map is the image. Information design, not photography.
- **Stats/dates/sources:** "Voters approved projects in 1996, 2008, and 2016" is the
  provenance statement, in the intro; rows are hairline-divided (a ledger).
- **Mobile:** not individually reviewed (unverified).
- **Steal:** hairline-ruled list rows with an arrow disc; a provenance line (who
  approved it, when) in the page intro. **Avoid:** the bold italic and the hot pink.
- **Webflow:** list is easy; the map is an embed.

### 8. Sundt
URL: https://www.sundt.com . Screens: `sundt-desktop.jpg`, `sundt-desktop-full.jpg`, `sundt-mobile.jpg`
- **Type:** Univers condensed 80px, ALL CAPS, white on photo; nav Univers condensed
  caps; body Open Sans 14px. Red condensed caps section headings.
- **Colour:** Sundt red **#D0545F** (sampled on diamond) / ~#E0303C on headings, charcoal,
  white. Red and white, very corporate.
- **Layout & grid:** slim white header, full-bleed **group photograph** of the crew
  standing in a line, caps headline over a heavy scrim, a "learn more" outlined button,
  then "Featured projects" three-up thumbnails.
- **Imagery:** a posed crew in their kit, 14 people facing camera: the strongest
  workforce hero seen in the set, and the one most relevant to our lead pages.
- **Stats/dates/sources:** none in the first screens.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** crew-as-hero photo; faces visible, kit real. **Avoid:** the heavy scrim
  flattening faces; condensed caps copy over the crew's bodies.
- **Webflow:** easy.

### 9. Mortenson
URL: https://www.mortenson.com . Screens: `mortenson-desktop.jpg`, `mortenson-scroll2.jpg`
- **Type:** URW DIN semi-condensed 600 caps, 100px white headline ("LET'S REDEFINE
  POSSIBLE"); URW DIN condensed caps for the nav and section headings.
- **Colour:** the hero is **duotoned**: electric blue on the left photo, **saturated
  green** on the right (a turbine and farmland), both far from natural. Charcoal text.
- **Layout & grid:** split-screen carousel hero with a numbered 1-5 selector and a
  location caption ("Milwaukee, WI / Fiserv Forum"); the caption collides with the
  numerals in the capture (a visible layout bug).
- **Imagery:** infrastructure and a wind turbine; the green duotone makes the field
  look artificial.
- **Stats/dates/sources:** none above the fold.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** nothing graphic; the location caption is a good idea. **Avoid:** duotone
  grading of real places; it undermines "this is what is actually there".
- **Webflow:** easy.

### 10. Architecture firm sites, as image-and-type references
- **Snohetta** https://www.snohetta.com . `snohetta-desktop.jpg`. Dovre 300 (light
  grotesque) 60px headline in black on white, a **ragged horizontal strip of photographs
  of different heights**, an under-image caption in grey; white, restrained.
- **SOM** https://www.som.com . `som-desktop.jpg`. Benton Sans Light 40px white over a
  full-bleed dusk photograph with a black nav bar; the building lit from within with
  people in it (people for scale, not posing).
- **Mecanoo** https://www.mecanoo.nl . `mecanoo-desktop.jpg`. Maison Neue; the logo and
  display in cobalt **#002FA7**; full-bleed sun-bright photograph, caption in a dark
  translucent box at lower left.
- **Studio Gang** https://studiogang.com . `studiogang-desktop.jpg`. DINround 700 76px
  in navy #232841; **cyan links used as emphasis inside running text** (#00A9E8-ish);
  portrait photo in a narrow right column with the caption below; navy top bar.
- **BIG** https://www.big.dk . `big-desktop.jpg`. Everett 14px caps nav; a pure index:
  a small black square mark, a name and place on the left, a landscape image right;
  renderings and photographs mixed with no marking, the reason for our flag.
- Common lesson: these firms let the **photograph carry the page**, with quiet
  light-weight sans type. Mobile for all five not reviewed (unverified).

## Visual patterns
1. **The logo as a tile hanging from the header** (Kiewit yellow, Tideway white, Gateway
   green). A strong, Webflow-simple brand anchor.
2. **Night or dusk construction photography with lights on** (Kiewit, Hinkley, SOM).
   The best images in the set; they also fit a navy palette.
3. **Stats in a flat solid band, figures bold or outlined, label below** (Kiewit navy,
   Gateway green, Sizewell rings). Centred, never a ledger, never dated.
4. **A visible hero control** (pause on Kiewit, HS2, Meta; "Play full video" on Tideway).
5. **Dates in a brand accent colour on every item** (Tideway teal, Sizewell orange).

## Visual gaps
1. **A ledger-style stat block with hairlines, footnote and date.** Everyone centres
   figures; only Sound Transit's ruled project list approaches it.
2. **Workers as named individuals in the frame**, not crew-line stock: Sundt's group shot
   and Gateway's backs-to-camera come closest; none gives a name, trade or hometown
   caption.
3. **A flagged render versus photo.** Sizewell, Intel and BIG show renderings with no label.
