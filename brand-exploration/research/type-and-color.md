# Research: type and color (visual pass)

Angle: typography and colour systems across energy brands, architecture and
construction firms, and civic / editorial sites. Rewritten 2026-11-06 from
screenshots (`screens/type-and-color/`, index in `INDEX.md` there) and
computed styles (`<slug>-styles.json`: real `font-family`, size, weight and
colour read from the live page). The earlier version marked several
references "Background" (from memory); each of those is now either verified
below or marked **unverified**. Hex values "sampled" are quantised from a
screenshot (approximate); "computed" are from CSS.

Also produced: **11 type specimens**, `screens/type-and-color/specimen-0.jpg`
to `specimen-10.jpg`. Each sets the real hero line from the fact sheet
("Building America's energy future by drawing on Pennsylvania's proud past."),
a stat row (10,000+ with its footnote 1 in full, Up to 4.4 GW, 1,800+ as of
September 2026), and the fact sheet body paragraph, on six grounds: navy
#143251, blue #238FC8, aqua #AFECF1, cream #F3F1D0, gold #D8B471, white.
Fonts load from fonts.googleapis.com through the proxy (confirmed: every face
reported `loaded`). Source page: scratchpad `spec/spec<n>.html`.

Method caveats: orsted.com was bot-blocked (see energy-brands.md);
fosterandpartners.com returned 403 and the USWDS typography URL 404, so
those are **unverified** and dropped. The Roboto Slab figures in specimen 9
rendered thinner than a slab normally reads at this size and may not show the
slab character at this scale; treat that pairing as lightly tested.

---

## References (screenshot-verified)

### 1. Ørsted / Kontrapunkt, the aesthetic Josh likes
See energy-brands.md section 1 for the full write-up. Type: Ørsted Sans (custom,
rounded geometric, light at display size). Colour: pale grey ground
(`~#EFEFEF`), aqua `~#82D8D7`, sky blue `~#56A6E3`, aubergine `~#6D5C7C`.
Screens: `screens/energy-brands/orsted-kontrapunkt-s6.jpg`,
`-s7.jpg`, `-s9.jpg` (colour objects), `-s5.jpg` (light-weight type on photo).
Web-licensable stand-in: **Outfit** (specimen 5), alt Jost.
Webflow: Low (Google font), proprietary original not portable.

### 2. Kontrapunkt's own site: slab display plus grotesque, very large, very plain
- URLs: https://kontrapunkt.com/ ; screens `kontrapunkt-home-desktop.jpg`,
  `-mobile.jpg`, `-styles.json`
- **Type (computed):** "Kontrapunkt Tomo Slab" 400 at 72px (headline, black)
  paired with "Kontrapunkt Tomo" sans 400 at 16px (nav, body). A light slab
  serif with soft, rounded-slab details, set with generous line height.
- **Colour:** white page, black text, footer `rgb(26,26,26)`; all colour comes
  from the work images (turquoise-tinted offshore wind, pale sky).
- **Layout and mobile:** headline in the right-hand half of a two-column field,
  small label hard left; mobile is a 30px slab headline stacked over a full
  image.
- **Steal:** a slab headline over a plain grotesque as the whole type system;
  extreme restraint (one weight). Closest Google equivalent: **Zilla Slab**
  (specimen 6) at light weight, or Fraunces at low contrast.
- **Webflow:** Low (fonts commercial, equivalents free).

### 3. GOV.UK: civic plain-language benchmark
- URL: https://www.gov.uk/ ; screens `govuk-home-desktop.jpg`,
  `-desktop-full.jpg`, `-mobile.jpg`, `-styles.json`
- **Type (computed):** "GDS Transport" bold 64px white on the hero band, bold
  24px section heads, regular 16px body. Sentence case, tight, no decoration.
- **Colour:** one hero band `#1D6FB8` (about 41% of the first screen), page
  `#F4F7FC`/white, near-black text `rgb(11,12,12)`, links in the same blue,
  green cookie buttons.
- **Layout:** a single 960-ish column of ruled link rows with chevrons; icon
  tiles (pink/purple/teal) in the "Featured" column; hairline between rows.
- **Mobile:** same blue band, very large heading, stacked rows.
- **Steal:** the hairline-ruled link list as the FAQ/navigation pattern; type
  size as the only hierarchy. Public Sans (specimens 2 and 6) is the free
  stand-in for text.
- **Avoid:** nothing, except that the band blue is far more saturated than
  our navy; do not copy the pastel icon tiles.
- **Webflow:** Low.

### 4. Heatherwick Studio: warm off-white, serif, grey-green text
- URL: https://www.heatherwick.com/ ; screens `heatherwick-home-desktop.jpg`,
  `-desktop-full.jpg`, `-mobile.jpg`, `-styles.json`
- **Type (computed):** "Plantin W01 Light" (a book serif) for the wordmark,
  headings and body (27px headings, 16px body); "Relative Book/Medium" (a
  Courier-like monospaced grotesque) at 12px for labels. Text colour is a soft
  grey-green `rgb(72,89,74)` (`#48594A`) on a warm off-white `rgb(244,243,239)`
  (`#F4F3EF`).
- **Layout:** the first screen is a full-bleed dark photograph with the
  wordmark centred in light serif; text pages are warm off-white with generous
  margins.
- **Steal:** warm off-white ground with non-black text is the closest cousin
  of a cream direction. Our cream `#F3F1D0` is yellower than `#F4F3EF`; a
  paler cream step may be needed for long reading, with navy text.
- **Avoid:** low-contrast green-grey text on off-white (fails our stone/700
  floor); centred wordmark over photo as the only hero.
- **Webflow:** Low (Plantin is commercial; Newsreader / Source Serif 4 are
  stand-ins).

### 5. Kiewit: the contractor the neighbours already know
- URL: https://www.kiewit.com/ ; screens `kiewit-home-desktop.jpg`,
  `-desktop-full.jpg`, `-mobile.jpg`, `-styles.json`
- **Type (computed):** "industry" (a condensed industrial grotesque; Industry
  by Fort Foundry), 700 at 64px, caps and sentence case mixed, white on
  photograph; "acumin-pro" for UI.
- **Colour:** near-black `#18181A` hero over a dusk photograph of a power
  plant (sampled warm brown `#5D4940`), a **safety yellow** logo tab and
  accent (hue seen, hex not sampled), white page.
- **Layout and mobile:** full-bleed carousel hero with a short headline,
  small "Markets" eyebrow, arrow link; mobile keeps the yellow logo tab
  top-left and sets "Engineering. Construction. Solutions." in 3 stacked
  lines.
- **Why it matters:** confirms the contractor register is **black and
  safety yellow with condensed sans**. It also confirms our gold `#D8B471`
  is a different thing (muted ochre), which is useful separation. Cross-check
  co-branding with the client before any gold-forward direction.
- **Avoid:** condensed caps and safety yellow (Big Shoulders in specimen 4
  edges toward this register, deliberately so for a workforce-forward
  direction; flag it).
- **Webflow:** Low.

### 6. Everllence (ex MAN Energy Solutions): bold geometric on saturated colour
- URL: https://www.everllence.com/ ; screens `everllence-home-desktop.jpg`,
  `-mobile.jpg`, `-styles.json`
- **Type (computed):** Nexa 800/900 at 55px, white or black; Nexa 400 18px
  body. Heavy geometric sans, sentence case.
- **Colour:** a full-bleed raspberry `#ED0048` hero (about 35% of the first
  screen), black pill buttons, white page; photograph of a brass ship
  propeller inside an outlined pill shape.
- **Steal:** a saturated flat colour field as the hero, with the photograph
  held in a single outlined shape.
- **Avoid:** the colour (ours would be gold or aqua; both need navy text);
  Nexa is a paid font.
- **Webflow:** Med (commercial licence, custom upload).

### 7. ProPublica and The Guardian: the editorial "record" register
- URLs: https://www.propublica.org/ and https://www.theguardian.com/us ;
  screens `propublica-home-*.jpg`, `guardian-home-*.jpg`, `-styles.json`
- **Type (computed):** ProPublica "Feature Headline" 700 at 32px (a
  high-contrast news serif) over "Brut Grotesque" 16px; body copy on article
  pages in "Tiempos Text". Guardian: "GH Guardian Headline" 500/700 (a
  humanist serif) plus "GuardianTextSans".
- **Colour:** ProPublica: white, near-black `#111110`, a single red donate
  button. Guardian: a royal-blue masthead (hex not sampled) on white; yellow
  CTA pill.
- **Layout:** a huge wordmark masthead, dense headline-led layout, small
  grey bylines and dates.
- **Steal:** serif headline plus sans captions reads as accountable record;
  dates and kickers in small sans (Newsreader and Fraunces specimens).
- **Avoid:** density; both are news products, not information hubs.
- **Webflow:** Low (equivalents: Newsreader, Source Serif 4).

### 8. National Park Service: civic site with full-colour photography
- URL: https://www.nps.gov/ ; screens `nps-home-desktop.jpg`,
  `-desktop-full.jpg`, `-mobile.jpg`, `-styles.json`
- **Type (computed):** InterVariable (sans, body 16px, 900 weight for small
  green section labels `#446443`) on a black masthead.
- **Colour:** black header, an autumn-colour hero photograph (sampled orange
  `#CA7043`, brown `#40322A`), white page, a navy-blue promo tile (hex not sampled).
  Links are bold blue underlined.
- **Layout:** two-select "Find a park / Explore America's Story" strip over
  the hero; a 3-up grid of image tiles with underlined captions; footer
  promotion tile.
- **Mobile:** same module, selects full width.
- **Steal:** an unfussy US-federal civic look that the target audience
  recognises; underlined links with image tiles; a "find" control on the hero.
- **Avoid:** the stock Inter body look (this is the generic default).
- **Webflow:** Low.

### 9. BIG (Bjarke Ingels Group)
- URL: https://big.dk/ ; screens `big-home-desktop.jpg`, `-desktop-full.jpg`,
  `-mobile.jpg`, `-styles.json`
- **Type (computed):** "everett" (a neo-grotesque; foundry unverified), 16px,
  small mixed-case captions; the page is almost all imagery.
- **Colour:** white with black type; colour comes only from the project
  renderings. No accent colour was visible on the first two screens.
- **Layout:** a left-aligned vertical list of projects: tiny black icon plus
  micro-caption (name, place) beside a large image; very low density.
- **Steal:** caption discipline (name, location, small icon) beneath every
  image is the same device as our Photograph / Rendering and date labels.
- **Webflow:** Low.

### Dropped or unverified
Fosterandpartners.com (403, unverified); USWDS typography page (404;
stays unverified: Public Sans plus Source Serif as the USWDS default pairing
is from background knowledge only); Helleniq Energy / Mutabor (page returned
503 in the earlier pass, not re-captured); X-energy (Contra write-up not a
site, see energy-brands.md for X-energy's own site: Druk Wide plus PP Neue
Montreal, computed).

---

## Font candidates

Unchanged from the earlier pass (all OFL on Google Fonts); each shortlisted
face was loaded in the specimens, so existence and Google hosting are now
verified. Weights beyond those listed in the specimen CSS and axis details
(Archivo width axis, Fraunces opsz) still need checking at build time.
Tabular figures (`tnum`) were applied with `font-variant-numeric` in all
specimens; whether each face actually ships tnum was not checked.

---

## Pairing shortlist, re-ranked from the specimens

Judged by looking at `screens/type-and-color/specimen-<n>.jpg` (six grounds
each). Question asked of each: does the headline, the stat row (with the long
footnote) and the body survive on all six grounds, and does it look different
from the current Geist design (specimen 0, the control)?

| Rank | # | Display / text / mono | Image | Verdict from the pixels |
| --- | --- | --- | --- | --- |
| 1 | 1 | Fraunces 600 / Source Sans 3 / IBM Plex Mono | specimen-1.jpg | **Best overall.** Soft-serif headline has real character; reads warm and local, not corporate. Stat figures in Fraunces 400 are handsome and distinct from Geist; the footnote and body stay crisp in Source Sans 3. Best on cream and white, still good on navy and aqua. |
| 2 | 2 | Newsreader 500 / Public Sans / JetBrains Mono | specimen-2.jpg | **Calm, credible.** Lighter and more neutral than Fraunces; the "record" register. Slightly cooler. Very good on aqua and cream; thin strokes weaken a little on blue. |
| 3 | 4 | Big Shoulders Display 800 / Hanken Grotesk / IBM Plex Mono | specimen-4.jpg | **Most distinct, workforce-forward.** Reads as signage and tradespeople. I set the specimen in all caps for the display face; the repo's sentence-case rule would need a decision, and it drifts toward Kiewit's condensed register. Hero-size only; stat figures in it look strong. |
| 4 | 6 | Zilla Slab 600 / Public Sans / IBM Plex Mono | specimen-6.jpg | **Rooted, rural.** Distinct from Geist and from every energy site seen. Looks good on gold and cream. Echoes Kontrapunkt's slab headline and CVOW's Egyptienne. Slab figures at 600 are a little heavy for a "Light" stat tradition. |
| 5 | 5 | Outfit 300 / Source Sans 3 / JetBrains Mono | specimen-5.jpg | **The Ørsted direction.** Light round geometric headline and thin figures look closest to Ørsted Sans and are the cleanest stat row of all eleven. Honest caveat: it is the nearest to Geist (both light geometric sans), so it is a different mood but not a different structure; use with aqua and pale grounds to separate it. Best candidate if Josh wants Ørsted. |
| 6 | 3 | Archivo (width 75) 700 / Archivo / Space Mono | specimen-3.jpg | **Sturdy, industrial, neutral.** Clear and legible on every ground; the condensed width helps long headlines. Less personality than 1, 2 or 4. |
| 7 | 10 | Bitter 600 / Source Sans 3 / JetBrains Mono | specimen-10.jpg | Plain, safe and legible; reads like a regional paper. Too close to Zilla (6) with less character. |
| 8 | 7 | Source Serif 4 400 / Atkinson Hyperlegible Next / JetBrains Mono | specimen-7.jpg | Maximum legibility, bland. Good for a body-only "reading mode" rather than a brand voice. |
| 9 | 8 | Plus Jakarta Sans 800 / Hanken Grotesk / Space Mono | specimen-8.jpg | **Looks like the current Geist design, heavier.** Convergent; keep as a control only. |
| 10 | 9 | Archivo 700 / Roboto Slab 300 figures / IBM Plex Mono | specimen-9.jpg | Slab-light figures read as thin and weak next to a bold grotesque headline; the mix adds nothing. Drop. |
| ctl | 0 | Geist 300 / Geist / Geist Mono | specimen-0.jpg | The current direction, for comparison. |

Cross-ground findings seen in the specimens: navy text on aqua, cream, gold
and white is comfortable at all eleven; white on navy is excellent; **white
on blue `#238FC8` is acceptable only for the large headline and large figures
(3.60:1), and the 11px qualifier eyebrow, the 13px label and the 11px
footnote on blue are the weakest text in every specimen**. The footnote on
gold in navy is readable; the footnote on blue should not ship in white.
Mono usage in the specimens (the "as of September 2026" eyebrow) looks
distinct and "dated-record" in every pairing; it is a cheap way to give the
as-of stamp a voice.

## Colour: five-colour base, five temperatures

Contrast table unchanged from the earlier pass (computed WCAG 2.x: white on
navy 13.09; cream on navy 11.41; aqua on navy 10.03; gold on navy 6.66; navy
on cream 11.41; navy on aqua 10.03; navy on gold 6.66; blue on white 3.60;
blue on navy 3.64; gold on white 1.97). What the specimens add visually:

- **Navy ground** is the strongest panel in every pairing; the gold button on
  it is the clearest single call to action.
- **Cream ground** with navy text is the warmest, "regional paper" panel and
  works best with the serif pairings (1, 2, 10). It is more yellow than
  Heatherwick's `#F4F3EF`; a paler cream may be needed for long text.
- **Aqua ground** is bright and clean; with a light sans (5) it is the
  Ørsted look; with a serif (1) it looks like a hospital leaflet. Flag as
  sensitive near the water claim (root CLAUDE.md and earlier research).
- **Gold ground** with navy text is striking and legible (6.66). It is a muted
  ochre, visibly different from Kiewit's yellow.
- **Blue ground** is the weakest: only the headline passes; use blue for
  controls, links and large figures on white, not as a text ground.
- **White ground** with navy text is the most readable and the least
  distinctive; it is where the type does the identity work.

## Visual patterns

1. **Light or book-weight display type on a plain ground** (Ørsted Sans,
   Kontrapunkt Tomo Slab, Plantin Light, GDS Transport bold on one blue):
   the confident references make type size and one weight do the work.
2. **One flat saturated field per page** (GOV.UK blue band, Everllence
   raspberry, Ørsted aqua objects) rather than many tints.
3. **Warm off-white grounds exist on credible sites** (Heatherwick `#F4F3EF`,
   CFS taupe `#CCC8C3`, Skellefteå `#F9F9F9`) and they are always paired
   with a dark text colour, not black.
4. **Serif plus sans is the editorial/civic signal** (Guardian, ProPublica,
   Heatherwick, Kontrapunkt slab): nobody in energy but Vineyard Wind and
   Dominion use a serif at all.
5. **Mono micro-labels for dates and categories** (CFS, Form, X-energy,
   Heatherwick's Relative): common as decoration; nobody uses them as the
   as-of stamp.

## Visual gaps nobody owns

1. **A warm cream-and-ochre ground in energy.** Every energy site seen is
   white, black, or saturated colour; the cream/gold temperature has no
   owner and fits a gas-and-grid build that is not green or nuclear.
2. **A designed footnote.** In every reference footnotes are 11-13px grey
   fine print; none is a designed element. The specimens show the footnote
   under the stat is where legibility fails first.
3. **Tabular, light figures with a visible qualifier eyebrow** (Anticipated,
   Up to, as of): no reference sets figures with their qualifiers as
   typography. Outfit/Fraunces light figures with a mono eyebrow looked best.
