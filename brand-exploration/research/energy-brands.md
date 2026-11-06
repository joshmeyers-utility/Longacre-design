# Research: energy brands (visual pass)

Angle: how utility, generation, grid and energy-build identities and sites
actually look. Rewritten 2026-11-06 from screenshots. Every claim below was
made from a captured image in `screens/energy-brands/` (listed per reference;
index in `screens/energy-brands/INDEX.md`) or from computed styles in the
matching `-styles.json`. Hex values marked "sampled" were quantised from the
screenshot and are approximate (JPEG, photo-graded). Hex values marked
"computed" come from the page's computed CSS. Anything not seen is marked
**unverified**. Web content is reference only.

Capture notes: sites with scroll-hijacking returned a one-viewport "full" page,
so `-sN.jpg` viewport sequences were taken instead. **orsted.com and orsted.us
returned a 403 bot-check page from this network and were not worked around**,
so Ørsted's own site is unverified; the Ørsted evidence below is the
Kontrapunkt case study (their identity work, including mockups of the real
system) plus one mobile capture of Ørsted's Hornsea Projects site.

Webflow difficulty: Low = native Designer. Med = Interactions 2.0 or tricky
layout. High = GSAP/Lottie/canvas embed (flag in build notes).

---

## 1. Ørsted, identity by Kontrapunkt (PRIORITY: Josh likes this aesthetic)

- URL: https://kontrapunkt.com/work/a-global-energy-company-goes-green
  (+ https://hornseaprojects.co.uk/ mobile only)
- Screens: `screens/energy-brands/orsted-kontrapunkt-s1.jpg` to `-s9.jpg`
  (the case study top to bottom), `orsted-kontrapunkt-desktop.jpg`,
  `orsted-kontrapunkt-mobile.jpg`, `orsted-kontrapunkt-styles.json`;
  `hornsea-home-mobile.jpg`.
- Seen: the case study is a long, white, very quiet page (Kontrapunkt's own
  chrome is a slab-serif headline at 72px, black on white, 32px page margin)
  carrying large image blocks of Ørsted work. What makes Ørsted's system look
  the way it does is visible in those blocks.

**Type.** The Ørsted wordmark and display text are set in Ørsted Sans, a
custom face: a rounded-terminal geometric sans with a single-storey "a", a
round, open "e", monoline strokes and a light weight used for large display
lines ("Love your home", the huge "2028 27 26" on the sustainability report
cover, "Powering the world with positive energy"). UI figures in the app
mockups ("2600 kWh", "€17.49") are set in the same face at light/regular in a
dark aubergine. Body in the mockups is the same family at small sizes. Not
licensable; closest Google Fonts: **Outfit** (nearest: geometric, round,
light weights exist; see type-and-color specimen 5), **Jost** (more
Futura-like, narrower), **Figtree** or **Quicksand** (softer, rounder
terminals; suggested from memory, not specimen-tested). The Kontrapunkt page itself
loads "Kontrapunkt Tomo" and "Tomo Slab" (computed), their own faces, not
Ørsted's.

**Colour (sampled from the mockups, approximate).** A pale, airy system, not a
dark one. Ground: light grey `#EFEFEF` / white `#F8F9FC`, roughly 55 to 60%
of the frames. Hero identity colour: a turquoise/aqua around `#82D8D7` to
`#A5DDE3` (notebooks, report covers, app screens), perhaps 15%. A mid blue
`#56A6E3` (app splash, notebook), and a deeper cerulean for the wordmark on
white (computed on the Hornsea mobile page: bright cerulean blue, seen in the
logo and a full-width blue band). Supporting accents used sparingly as
whole-object colours: aubergine/purple `#6D5C7C`, warm yellow, coral red
(`~#F2555A` on the commitment icon). The colours appear as flat fills on
objects (a whole notebook, a whole report cover), never as gradients on the
web mockups. A dotted "radiating particles" texture in white or a tint of the
cover colour runs across some covers and the loading screen.

**Photography and grading.** Wind turbines in fog, often with the turbine
dissolving into a pale blue-white haze; a sunrise/sunset frame of the Avedøre
plant with the Ørsted logo on the cladding (warm and cinematic); and, in the
people shots, lifestyle photography of children, kitesurfers, a cyclist in a
pink helmet: bright daylight, soft pastel, desaturated sky blues, warm skin.
Grade is high-key and cool-pastel. The brand's own principle, visible in the
frames, is **people at ease in the places the energy serves**, not workers.
Type over photo: white, light weight, centred ("Love your home").

**Layout and grid.** Images in a 12-column field at full container width, with
two-up and three-up mockup pairs separated by a thin gutter (about 16px);
large unframed objects on pale grey. Square corners on posters and covers;
phones rendered with real hardware frames. Lots of empty space. On the
Kontrapunkt page the project metadata is a quiet three-row list (Client,
Industry, Deliveries) in small grey labels, with the one paragraph of
description set in a narrow column hard right (a ledger-like two-column
split).

**Iconography.** Circular, monoline white-on-colour pictograms enclosed in a
ring (a wind-turbine-over-waves icon on a teal notebook; a flag-with-arrows
icon in coral). Rounded joins, even stroke. They echo the rounded wordmark.

**How figures and data are shown.** Large, light-weight numerals used as a
graphic element: "2028 27 26" is a stacked year countdown, the current year
bold blue and the rest light, cropped by the cover edge. In the app, a
ring-progress chart with a euro figure and a plain-language line. Figures are
big, thin and uncluttered; there is no card, no border.

**Mobile.** On the Kontrapunkt page: the 72px headline drops to about 30px
slab, the hero image is full width, the metadata stacks. The Hornsea site on
mobile (the only Ørsted-owned page seen): white ground, centred light headline
("Hornsea Projects"), logo top-left, search and menu icons top-right, a
photograph of a turbine foundation below, then a flat blue band. Simple
stacked sections.

**Steal / avoid.** Steal: pale, mostly-white ground with one calm colour
(here the aqua) used as whole-surface fills; a light-weight round sans at
large sizes; figures as huge thin numerals; thin gutters and no boxes;
white type over soft photographs; a flat colour object per concept. Avoid:
the green-credential narrative (the case title is "goes green"), turbine and
mist imagery, the sunny-lifestyle photography register (reads as consumer
retail and as a promise we cannot make about gas), the radiating dot
particles (a renewables-network cue).

**Webflow difficulty.** Low for the system (flat fills, large type, grids).
The dot-particle texture is an image asset (Low); animated particle loader
would be Lottie (High).

### What Ørsted's aesthetic means for us

Under the Anchored palette (#143251 navy, #238FC8 blue, #AFECF1 aqua,
#F3F1D0 cream, #D8B471 gold). Note the match: Ørsted's identity turquoise
(`~#82D8D7`) and sky blue sit almost exactly on our aqua `#AFECF1` and blue
`#238FC8`, which is probably why Josh responds to it.

**Transfers**
- **Pale ground plus one calm colour as whole surfaces.** White or near-white
  page, with aqua (or cream) used as a flat panel colour for a stat band or a
  section, not as a tint on text. Navy replaces Ørsted's aubergine as the
  deep text and band colour.
- **Light-weight round sans at display size.** Outfit (or Jost) at 300 for
  headline and for stat figures: the single biggest "this feels like Ørsted"
  lever. Contrast: navy `#143251` on aqua is 10.03:1 (type-and-color.md), so
  light weights remain readable. Keep text at 16px+ regular for body.
- **Big thin numerals as the stat treatment.** Our ledger of 10,000+, 4.4 GW,
  1,800+ can be set exactly like the "2028 27 26" cover: light, large, one
  accent colour. Qualifiers and footnotes still sit with the figure.
- **No cards, thin gutters, generous white.** Consistent with the existing
  "no cards" rule.
- **Rounded monoline icon set** in a ring: suits trade and commitment marks
  (stays `text/primary` navy, not blue, per root CLAUDE.md).
- **Warm, people-at-ease photography.** Real local faces, daylight, soft
  grade. Not staged lifestyle: real workers (CLAUDE.md §2 and §5.6).

**Does not transfer**
- **Green framing.** Ørsted's whole story is renewables ("goes green"). Our
  campus is natural gas. No leaf, no "green energy", no wind-farm or
  turbine imagery cues, no mist-and-turbine hero. Do not use the aqua as a
  "clean energy" signal: the root CLAUDE.md and type-and-color.md already
  flag aqua near a water claim as sensitive.
- **Consumer-lifestyle photography** (kitesurfers, kids with ribbons): wrong
  for a neighbours-and-workforce site with a live permit appeal. Replace with
  real tradespeople and the real site.
- **Colour-per-object playfulness** (teal, yellow, purple, coral covers).
  Our palette has five colours and gold is the only warm one: use gold as the
  single warm accent (button, focus, rule), not as a rainbow.
- **Dot-particle "network" texture and gradients**: reads as tech vendor.
- **Pastel everything.** Our content is contested; the system needs one
  firm dark (navy) for institutional moments, which Ørsted barely uses.

---

## 2. Skellefteå Kraft (BOLD)

- URL: https://www.skekraft.se/
- Screens: `screens/energy-brands/skekraft-home-desktop.jpg`,
  `skekraft-home-desktop-full.jpg`, `skekraft-home-mobile.jpg`,
  `skekraft-home-styles.json`
- **Type:** "SK Sans" (computed; weights 400, 700, 800): a rounded-grotesque
  with a chunky 800 for tile headlines; sentence case; headline text sits on
  highlighter-style solid label blocks.
- **Colour:** purple-dominant. Sampled: deep `#631C75` / `#742484` (about 35%
  of the page), lilac tints `#91729C`, `#B29EBA`, warm off-white `#F9F9F9`
  ground, with one acid-yellow high-vis jacket in the photography. Link/CTA
  text computed `#A83D72` (magenta-berry).
- **Layout and grid:** a modular tile mosaic: one full-width purple hero tile
  with a line illustration (sun, turbine, waves), then a 4-column grid of
  mixed-size tiles (1x1, 1x2, 2x1, 2x2), each either a purple flat colour or a
  duotone-purple photograph of a local employee with a cut-out white outline,
  each with a short bold headline and a circular arrow link. Tight 8px gutters.
- **Imagery:** real local people (a woman in a high-vis jacket, a customer
  service rep, a smiling colleague), photographed plain and often duotoned to
  the brand purple; a "cut-out sticker" outline treatment.
- **Mobile:** tiles collapse to one column; a persistent top strip toggles
  Privat / Företag / Om oss; large tap targets; cookie bar sits at the bottom.
- **Steal:** the tile grid as a dashboard of answers (each tile = one question
  the neighbour has); duotoning real local portraits to a brand colour so a
  patchy photo library still looks consistent; highlighter label blocks behind
  headlines; the arrow-in-circle link affordance.
- **Avoid:** the saturated single-hue purple (ours would be navy); busy
  mosaic as the whole homepage (contested facts need calm).
- **Webflow difficulty:** Low-Med (CSS grid with spans; duotone is an image
  treatment or mix-blend-mode, Low).

## 3. Form Energy

- URL: https://formenergy.com/
- Screens: `screens/energy-brands/formenergy-home-desktop.jpg`,
  `formenergy-home-desktop-full.jpg`, `formenergy-home-mobile.jpg`,
  `formenergy-home-styles.json`
- **Type:** Roboto Condensed at 86px, uppercase, white on photography for
  hero headings (computed); Roboto Light 20px body; Roboto Mono 14px
  (uppercase, tracked) for buttons and tags. A very ordinary system-ish stack
  that nonetheless reads as industrial because of the condensed caps.
- **Colour:** white and `#F4F4F4` grounds (about 55%), near-black `#050505`
  text, hairline grey, and a single **gold/ochre** accent used for 1px
  button outlines, small rules before section heads, and "press release" tags
  (an ochre-gold; exact hex not reliably sampled, treat as unverified). Close to our gold in role.
- **Layout and grid:** alternating image-left/text-right bands on white and
  light-grey, 1280 container; a full-width crowd photo with an overlay for
  "We're hiring"; a four-up news row with mono dates.
- **Imagery:** the strongest match for our brief. Real workers in hi-vis
  and hard hats on the real site; an aerial of the real factory built on the
  former Weirton steel mill ("Manufacturing batteries in the heart of the
  rust belt"); a mass crowd photo of the workforce. Documentary, daylight,
  ungraded.
- **Mobile:** hero headline stacks to five lines in condensed caps; image
  bands stack image-first; hamburger top-right.
- **Steal:** a gold rule-plus-label pattern as the single accent; mass
  workforce photograph as a section ground; naming the former industrial
  heritage of the site in the copy and imagery; mono-tag dates on news cards.
- **Avoid:** all-caps (repo rule is sentence case); the generic Roboto stack
  (reads templated).
- **Webflow difficulty:** Low.

## 4. Commonwealth Fusion Systems (Upstatement)

- URLs: https://cfs.energy/ and
  https://upstatement.com/case-study/commonwealth-fusion-systems/
- Screens: `screens/energy-brands/cfs-home-desktop.jpg`,
  `cfs-home-desktop-full.jpg`, `cfs-home-mobile.jpg`, `cfs-home-styles.json`;
  `cfs-upstatement-desktop.jpg`, `cfs-upstatement-mobile.jpg`,
  `cfs-upstatement-styles.json`
- **Type:** nbInternational (Neue Bernard-style grotesque, light 300 at ~63px
  for the hero, computed) with nbInternational Mono for labels, tags and
  footers; Upstatement's case study sets the title in Rizoma (serif, 300)
  with Diatype body.
- **Colour:** a warm grey-taupe ground `#CCC8C3` (about 40% of the page),
  dark navy `#1A2632` / `#122130` bands (20%), near-black, and a single
  burnt-orange accent computed `#CF6D46` on hairlines, dots, and arrow
  circles. A testimonial panel is navy on the taupe.
- **Layout and grid:** a precise technical-drawing layout: numbered captions
  (01, 02, 03) above an asymmetric image group (one big, one small), a ghosted
  wireframe line drawing bleeding off the edge, hairline-ruled four-column
  value list, arrow-in-circle links. Monospace micro-labels everywhere.
- **Imagery:** real engineers at real machines, tight cropped, industrial
  textures; line-art diagram of the machine overlaid.
- **Mobile:** hero stacks three claims under the headline; menu in a ruled
  box; imagery cropped to the same hardware close-ups.
- **Steal:** a warm grey ground that is neither white nor cream (an
  alternative to cream); numbered mono captions as the "source line"
  typographic voice; line-drawing of the machine as a diagram layer (could be
  the Power Block); the single orange accent used only on controls.
- **Avoid:** the very small body type and low-contrast grey labels on taupe
  (fail our stone/700 rule).
- **Webflow difficulty:** Low-Med (diagrams are SVG; layout is grid).

## 5. EDP, identity by Pentagram

- URL: https://www.pentagram.com/work/edp
- Screens: `screens/energy-brands/edp-pentagram-s1.jpg` to `-s8.jpg`,
  `edp-pentagram-mobile.jpg`, `edp-pentagram-styles.json`
- **Type:** custom lowercase "edp" wordmark with a spiral "e"; supporting
  light grotesque for "Changing Tomorrow Now" (thin weight, large). Pentagram's
  own page is "Plain" (computed) at 19px, black on white.
- **Colour:** deep navy-grey `~#1E2A3A` ground on hoardings and covers, with
  electric lime `~#33F000`, violet `~#6A3CF2` and cyan `~#1FD0E0` gradient
  bands forming the spiral (sampled).
- **Layout and grid:** Pentagram case-study format: title, one line, tags,
  big video, then paired mockups (stationery, T-shirt, bottle, brochure,
  signage, hoarding) in a 2-up grid with quote paragraphs set in a narrow
  right-aligned column. The identity is shown on physical objects: shopfront
  sign, construction hoarding, bottle.
- **Imagery:** photographic mockups; in the brochure, close-up natural
  textures (dandelion, water). Neon-on-navy.
- **Mobile:** single column; the mockups are the whole story.
- **Steal:** showing the identity on **construction hoardings and site
  signage** (relevant: this campus is a construction site with a fence line);
  asking a mark to extend onto physical assets.
- **Avoid:** the neon lime/violet gradient (the cliché the old research named;
  it is what "energy transition" looks like everywhere).
- **Webflow difficulty:** Low for palette and layout; the spiral is a
  generative motion piece (High).

## 6. Ember (energy data)

- URL: https://ember-energy.org/
- Screens: `screens/energy-brands/ember-home-desktop.jpg`,
  `ember-home-desktop-full.jpg`, `ember-home-mobile.jpg`,
  `ember-home-styles.json`
- **Type:** Poppins (computed; 500 at 54px for the headline, 400 17px body),
  navy-ink `#192238` text.
- **Colour:** white ground (about 60%), pale blue-grey `#EBEDF1` band, a
  mid-green accent on small icons and tags, text in `#192238`.
- **Layout and grid:** one stat row directly under the hero ("Latest data"):
  five stats, each a small line-icon, a bold figure ("43%", "+30%", "-0.2%",
  "40 Mt"), a one-line label and a hairline beneath. Then a four-up row of
  "Latest Insights" cards.
- **Imagery:** a washed aerial photograph fading to white behind the hero text;
  isometric illustrations for articles.
- **Mobile:** stats reflow to 2x3 with the same hairlines.
- **Steal:** the stat strip right under the hero with a hairline per stat is
  the closest thing seen to our "ledger" idea; labels carry the year ("in
  2025") inline.
- **Avoid:** Poppins and the wash-fade photo (generic); clip-art icons beside
  figures.
- **Webflow difficulty:** Low.

## 7. Vattenfall

- URL: https://group.vattenfall.com/
- Screens: `screens/energy-brands/vattenfall-home-desktop.jpg`,
  `vattenfall-home-desktop-full.jpg`, `vattenfall-home-mobile.jpg` (blank at
  capture time, unverified), `vattenfall-home-styles.json`
- **Type:** "Vattenfall Hall" (custom; weights 300-700) for text and "Vattenfall
  Hall Display" 800 at 72px, a wide, heavy grotesque, sentence case, tight
  leading.
- **Colour:** white ground, a pale blue-grey band `#EFF4F6`, a pale mint band
  `#EFF5F0`, light grey, with the brand's yellow and blue used only on the
  logo and the cookie buttons (sampled).
- **Layout and grid:** alternating feature bands where a photograph overlaps
  a pale block by about 30% (offset, not centred); document links
  with icons ("Interim report", PDF sizes shown, "On-demand broadcast"); a
  three-up news row with dates and categories; a circular-crop photograph for
  careers.
- **Imagery:** offshore vessels, aerial seascapes, a worker in hi-vis in
  front of a spillway; clean, real, bright daylight.
- **Steal:** documents as first-class content with file size shown ("PDF 2
  MB"), the pattern for our downloadable permit documents and FAQ sources; the
  overlapping photo-and-pale-block layout, which creates depth without cards.
- **Avoid:** the heavy 800 display face with long lines; pale pastel bands
  (our no-tinted-grounds rule).
- **Webflow difficulty:** Low.

## 8. X-energy

- URL: https://x-energy.com/
- Screens: `screens/energy-brands/x-energy-home-desktop.jpg`,
  `x-energy-home-desktop-full.jpg`, `x-energy-home-mobile.jpg`,
  `x-energy-home-styles.json`
- **Type:** Druk Wide Medium (wide, extended display at 72px, computed) for
  headlines and logo; PP Neue Montreal for text; Akkurat Mono for tags/dates.
- **Colour:** white and near-black navy `#080E19` sections alternating, a
  sunrise-gradient hero photograph, pale blue-lilac cards for news.
- **Layout and grid:** tabbed value statement with a full-width hairline;
  a dark two-up product band; a two-column news list with mono category tags
  and dates.
- **Imagery:** a sunrise-over-clouds hero (atmosphere, not place); B&W lab
  interior; staged team photo.
- **Mobile:** headline wraps to three lines; Cookiebot overlay dominates the
  first screen at capture.
- **Steal:** mono date and category tags on news items (same device as Form
  Energy and CFS).
- **Avoid:** extended display caps in the headline (reads as sci-fi/nuclear
  tech vendor), the sunrise hero, the dark-grid "technology" band.
- **Webflow difficulty:** Low (fonts are commercial).

## 9. Vineyard Wind and Dominion CVOW (community hubs for a build)

- URLs: https://www.vineyardwind.com/ and https://coastalvawind.com/
- Screens: `screens/energy-brands/vineyardwind-home-desktop.jpg`,
  `-desktop-full.jpg`, `-mobile.jpg`, `-styles.json`;
  `cvow-home-desktop.jpg`, `cvow-home-desktop-full.jpg`, `cvow-home-mobile.jpg`,
  `cvow-home-styles.json`
- **Type:** Vineyard Wind: EB Garamond / Minion Pro serif for text and nav,
  Sofia Pro for labels (computed), spaced all-caps green labels. CVOW:
  Egyptienne (a slab serif, light at 48px, `#354D7C`) for headlines and Urbano
  for text.
- **Colour:** Vineyard: mint ground `#EDF7EF`, charcoal `#43433F` footer,
  sage green `#858D81`/teal labels, navy text `#243348`. CVOW: Dominion blue
  band `#2D4864`-family with a yellow underline accent, white and pale
  blue-grey grounds.
- **Layout and grid:** Vineyard: a centred hero card ("We are offshore wind",
  a real worker's portrait, speech-label overlay), horizontally carousel'd press
  releases with dates, and a boxed **third-party grievance hotline** block
  (phone and web) in the footer zone. CVOW: slanted-edge hero over a harbour
  construction photograph, a three-tile key-facts row (176 turbines, 660,000
  homes, 2027 completion) with pictograms, a resource card with turbine
  silhouette.
- **Imagery:** construction in progress (a pile of monopile sections on a
  port quay, crane); real workers' portraits.
- **Mobile:** both stack cleanly; CVOW's hero headline in the light slab on
  Dominion blue is clear and large.
- **Steal:** a **hotline/grievance box** as a first-class component (for the
  contact routing and complaint path); photography of construction actually in
  progress; the slab-serif headline in blue (a civic/utility voice, see Zilla
  Slab specimen).
- **Avoid:** pictograms in boxes beside facts (CVOW's tile row), carousels for
  news (Vineyard), the slanted hero cut-outs.
- **Webflow difficulty:** Low.

## 10. EDF Sizewell C (anti-reference)

- URL: https://www.edfenergy.com/energy/nuclear-new-build-projects/sizewell-c
- Screens: `screens/energy-brands/sizewell-home-desktop.jpg`,
  `sizewell-home-desktop-full.jpg`, `sizewell-home-mobile.jpg`,
  `sizewell-home-styles.json`
- **Type:** Open Sans 700 at 48px in navy `#10367A` (computed), Open Sans 400
  20px body.
- **Colour:** white, light grey bands `#F3F3F3`, brand navy-blue and a
  red-orange `#C82C00` for buttons and underlined links; orange chevron
  shards in the hero.
- **Layout and grid:** exactly what we are trying not to be: four tall white
  **cards** in a row on a grey band, each with a big circular pictogram
  (house, CO2 cloud, banknotes, hard hat), figure as heading ("6 million
  homes powered", "70,000 UK jobs supported"), then three more cards with
  stock photo and red button each. The contact block (phone, freepost, visit,
  email) is useful and honest: a full address, opening hours and a freephone.
- **Imagery:** one real aerial of the site in landscape, stock workers,
  a beetle (biodiversity).
- **Mobile:** headline plus three stacked buttons; usable but identical to
  any utility.
- **Steal:** the **contact block** (visit, call, write, with hours): the
  community-relations basics presented plainly.
- **Avoid:** cards, circular pictograms on figures, a button on every card,
  a footnote ("*compared to a gas-fired power station") in grey 12px under a
  card. This is the generic "corporate 2015" look the repo's design rules
  already reject.
- **Webflow difficulty:** Low.

---

## Visual patterns (what is shared across the strong references)

1. **A quiet ground with one controlled accent.** Ørsted (aqua on pale grey),
   CFS (orange on taupe), Form (ochre on white): one colour is the signal;
   everything else is neutral or dark.
2. **Real people on real sites, ungraded or lightly graded.** Form, CVOW,
   Vineyard, Skellefteå. The ones that grade (Skellefteå duotone, Ørsted
   pastel) do so uniformly across the library.
3. **Light or regular-weight display type at large size** (Ørsted Sans,
   nbInternational 300, Egyptienne): thin big text reads as confidence rather
   than shouting; heavy display caps (Druk Wide, Form's condensed caps) read as
   tech or industry.
4. **Stats as unboxed rows with a hairline** (Ember, Kontrapunkt's metadata
   list) versus stats in boxed cards with pictograms (Sizewell, CVOW): the
   first looks current, the second looks 2015.
5. **Mono micro-labels for dates, categories and captions** (CFS, Form,
   X-energy): the "dated record" voice already exists in the sector, used as
   decoration rather than for sources.

## Visual gaps nobody owns

1. **A workforce-led homepage that is also warm and pale.** Form Energy has
   the workers but a grey-industrial look; Ørsted has the warm pale look but
   lifestyle people. Nobody combines pale, soft, light-weight type with
   documentary tradespeople.
2. **Sources and footnotes designed as a visible layer** (not 12px grey
   after a card). The mono-label devices above are decorative; none attaches
   a visible source and date to every figure.
3. **A gas-and-grid build that looks like a place** rather than a transition
   story: every reference leans on turbines, solar panels or sunrise. Industrial
   site photography with a warm neutral ground (cream, gold) is unclaimed.
