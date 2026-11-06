# Research: type and color

Angle: typography and colour systems across energy brands, architecture and
construction firms, and civic / public-information sites. Written for the
Homer City Energy Campus exploration (anchored palette: `#143251` navy,
`#238FC8` blue, `#AFECF1` aqua, `#F3F1D0` cream, `#D8B471` gold; current design
is Geist + white grounds + navy bands, see `docs/03-design-system.md` §12-13).

## Method and confidence

Web access this session was partial: search worked, many fetches returned
404/503 or thin summaries. Each reference below is tagged:

- **Verified** - confirmed by a fetch or search result this session.
- **Background** - from my prior knowledge, not re-checked today. Confirm the
  URL and the typeface before a designer relies on it.

Font facts (hosting, licence, weights, tabular figures) are from background
knowledge of the Google Fonts catalogue unless noted. **Before a font is
chosen, check its Google Fonts page for current axes and the OFL licence.**
All contrast ratios in the colour section were computed this session (WCAG 2.x
relative luminance), not estimated.

---

## References (10)

### 1. GOV.UK / GDS Transport - civic plain-language benchmark
- URL: https://design-system.service.gov.uk/styles/typeface/ (**Verified**
  that GDS Transport is mandated on service.gov.uk; non-gov services are told
  to use a similar alternative)
- Distinctive: a single humanist-leaning sans, large body, strict
  hierarchy, almost no colour beyond one link blue and one focus yellow.
  Background: the focus state is a yellow fill with a black underline, one of
  the most recognisable accessible focus treatments in public web.
- Why it matters: the sceptic and the neighbour both read like GOV.UK users.
  Plain, large, boring-on-purpose type is a trust signal. Gold `#D8B471` could
  play the focus-yellow role against navy.
- Webflow: GDS Transport itself is not licensed for non-gov use. Substitute
  Public Sans (OFL, Google Fonts), which was built from the same civic lineage.

### 2. Ørsted - custom geometric sans, nature-derived palette
- URL: search results via https://kontrapunkt.com (work page). **Verified**:
  custom face "Ørsted Sans" by Kontrapunkt, geometric with wind-inspired
  upward curves; palette described as Nordic nature and architecture (a blue
  referencing painter Vilhelm Lundstrøm, plus teal and ochre). No official hex
  found.
- Distinctive: an energy brand that chose a *humane* geometric face and
  coastal colours rather than industrial yellow or corporate blue.
- Why it matters: precedent for a warm, optimistic energy palette; our
  blue/aqua/gold maps onto sea, sky and ochre almost one-to-one.
- Webflow: the face is proprietary. Stand-ins: Jost or Outfit (both Google
  Fonts, OFL). One page of the search results noted a guidelines summary used
  Jost as a stand-in.

### 3. Everllence (ex MAN Energy Solutions, 2025) - licensed geometric, not custom
- URL: https://news.abstractfonts.com/fontsinuse/everllence-brand-identity
  (**Verified**: Nexa by Fontfabric is the primary typeface across digital and
  signage.)
- Distinctive: industrial-scale energy company choosing a licensed geometric
  sans rather than a custom cut, applied consistently from signage to web.
- Why it matters: shows a heavy-industry brand on a commercial-licence
  geometric. Nexa is not Google-hosted (Fontfabric commercial licence), so it
  is a cost and hosting question for Webflow; Outfit or Lexend are free
  analogues.
- Webflow: needs a paid licence and upload as a custom font.

### 4. X-energy rebrand - ultra-condensed display face on a deep ground
- URL: https://contra.com/p/okvMObBr-x-energy-rebrand-for-the-largest-nuclear-ipo-on-record
  (**Verified** as a designer's self-reported write-up: wordmarks custom-cut
  from Firearm, 50+ deliverables.)
- Distinctive: display type with real weight and character on an energy
  brand; leans technical-editorial rather than corporate.
- Why it matters: a candid example of letting type carry the identity. For
  Homer City it is a temperature to avoid copying (nuclear, investor-facing),
  but the lesson is that one confident display face does more than a palette.
- Webflow: Firearm is a commercial face; treat as mood only.

### 5. Eni / "eniline" and E.ON - corporate energy with a custom face
- URLs: https://inarea.com/en/case-study/eni/ and
  https://www.german-brand-award.com/en/gallery/detail/brand-design-corporate-brand/eon-revamping-an-iconic-brand
  (**Verified** that both use custom typefaces; E.ON pairs it with a striking
  red.)
- Distinctive: large utilities making a typeface the brand's main asset.
- Why it matters: counter-example. A custom corporate face is the "company"
  register the brief is escaping. It confirms the choice to stay in
  web-licensable fonts rather than imitate them.
- Webflow: not portable.

### 6. Kiewit (the on-site contractor) - the neighbour already knows yellow and black
- Search result summary: third-party sites describe the brand as black and
  yellow with bold uppercase sans lettering (**unverified, not official**;
  could not reach kiewit.com).
- Why it matters: workers on the campus wear Kiewit branding. A palette that
  is not yellow-and-black helps separate the campus from the contractor, and
  our gold is a muted ochre, not safety yellow. Worth one line to the lead
  to confirm co-branding rules.

### 7. Bjarke Ingels Group (big.dk) - architecture studio, type as grid
- URL: https://big.dk (**Background**)
- Distinctive: near-monochrome site, project imagery in colour, a clean
  grotesque in few sizes, yellow used sparingly as a signal.
- Why it matters: model for a photography-first site where the type disappears
  and colour is a single accent. Fits a "place, not company" direction.
- Webflow: replicate with Inter/Geist-class sans; no special features.

### 8. Heatherwick Studio / Foster + Partners - architecture sites with serif voice
- URLs: https://www.heatherwick.com, https://www.fosterandpartners.com
  (**Background**)
- Distinctive: understated grotesque or humanist sans with generous whitespace;
  editorial captioning with dates and locations.
- Why it matters: captioning habit (date, place, credit) is the same
  discipline as our "as of" stamps and Photograph / Rendering labels.
- Webflow: standard sans stacks.

### 9. Bureau of Reclamation / US Web Design System (USWDS) - US civic type
- URL: https://designsystem.digital.gov/design-tokens/typography/
  (**Background**; not fetched)
- Distinctive: Public Sans for UI and Source Serif for long text as the
  default pairing; tokens expressed as numbered scales.
- Why it matters: a ready-made serif + sans civic pairing a US county audience
  will find familiar; both fonts are open source.
- Webflow: both on Google Fonts (Public Sans, Source Serif 4).

### 10. Helleniq Energy - bespoke face with infographics derived from it
- URL: https://www.mutabor.de/en/work/helleniq-rebranding/ (search summary
  **Verified**; page itself returned 503.) New individual typeface; icons and
  infographics derived from its letterforms.
- Why it matters: idea worth stealing without the font: stat figures and
  icons share one geometry, so data feels native to the brand.
- Webflow: custom face not portable; the idea is portable.

### 11. Washington Post / Guardian-style editorial data pages - serif body, tabular figures
- URL: https://www.theguardian.com (**Background**)
- Distinctive: serif headings and body, tabular lining numerals in tables,
  dated bylines.
- Why it matters: for sceptics, an editorial register ("we publish a record")
  reads more accountable than a marketing register.
- Webflow: Newsreader, Source Serif 4, Fraunces are Google Fonts equivalents.

---

## Font candidates (all OFL on Google Fonts unless noted)

Tabular figures: "tnum" is an OpenType feature. Webflow exposes
`font-feature-settings` only through custom CSS (an Embed or custom code
class), so flag it in `docs/04-build-notes.md` if stats rely on it. Fonts
marked **tnum** are, to my knowledge, supported; verify per font.

| Role | Face | Character | Weights / notes | tnum |
| --- | --- | --- | --- | --- |
| Grotesque | Hanken Grotesk | Warm, practical | 100-900 | yes |
| Grotesque | Archivo (variable width) | Industrial, can go condensed | 100-900, width axis | yes |
| Grotesque | Schibsted Grotesk | Editorial news feel | 400-900 (no Light, per our doc) | yes |
| Humanist | Source Sans 3 | Civic, very legible | 200-900 | yes |
| Humanist | Public Sans | Civic, USWDS lineage | 100-900 | yes |
| Humanist | Atkinson Hyperlegible Next | Built for low vision | 200-800 | check |
| Geometric | Outfit, Jost, Plus Jakarta Sans | Friendly, Ørsted-like | 100-900 | partly |
| Slab | Roboto Slab, Zilla Slab, Bitter | Machine / railway feel | 100-900 | yes |
| Serif | Source Serif 4, Newsreader, Fraunces | Editorial, accountable | variable, opsz axis | yes |
| Condensed | Barlow Condensed, Oswald, Big Shoulders Display | Industrial signage | 100-900 | yes |
| Mono | JetBrains Mono, IBM Plex Mono, Space Mono | Data, dates | 100-800 | native |

Host for all: Google Fonts, added in Webflow Project Settings > Fonts
(variable axes beyond weight may need a self-hosted upload).

---

## Pairing shortlist (10)

| # | Display | Text | Mono | Temperature and rationale |
| --- | --- | --- | --- | --- |
| 1 | Fraunces (opsz, 600) | Source Sans 3 | IBM Plex Mono | Warm editorial. Soft serif display with a plain civic text; cream-led ground. Reads as a regional newspaper, not a utility. |
| 2 | Newsreader | Public Sans | JetBrains Mono | Accountable record. Serif headlines, USWDS-style body; the sceptic-first direction. |
| 3 | Archivo Condensed / Expanded | Archivo | Space Mono | Industrial signage. Condensed display on navy; the closest to the build site itself. Stats set in Archivo Light/tnum. |
| 4 | Big Shoulders Display | Hanken Grotesk | IBM Plex Mono | Chicago-steel / tradesperson voice. Strong, workforce-forward; risk of shouting, so use only at hero sizes. |
| 5 | Outfit | Source Sans 3 | JetBrains Mono | Optimistic Ørsted-like geometric. Aqua-led, bright. Nearest to "energy future". |
| 6 | Zilla Slab | Public Sans | IBM Plex Mono | Railway / county-fair slab. Human, rooted, rural; gold and cream led. |
| 7 | Source Serif 4 (display opsz) | Atkinson Hyperlegible Next | JetBrains Mono | Maximum legibility. Aimed at older and low-vision readers; very calm. |
| 8 | Plus Jakarta Sans 800 | Hanken Grotesk | Space Mono | Modern product-like. Closest to current Geist, so flag as convergent. |
| 9 | Roboto Slab 300 (stat figures) + Archivo | Archivo | IBM Plex Mono | Ledger. Slab light numerals for stats against a grotesque body; the "figure as document" voice. |
| 10 | Bitter | Source Sans 3 | JetBrains Mono | Plain-spoken newspaper slab. Low risk, high familiarity, near-zero Webflow friction. |

Pairing 8 is the nearest to what already exists; the lead should treat it as a
control, not a direction.

---

## Colour: five-colour base, five temperatures

Contrast ratios computed this session (WCAG relative luminance):

| Pair | Ratio | Reading |
| --- | --- | --- |
| white on navy `#143251` | 13.09 | AA and AAA |
| cream on navy | 11.41 | AA and AAA |
| aqua on navy | 10.03 | AA and AAA |
| gold on navy | 6.66 | AA (body text OK) |
| blue `#238FC8` on navy | 3.64 | large text and UI only |
| blue on white | 3.60 | large text and UI only (matches our doc) |
| navy on cream | 11.41 | AA and AAA |
| navy on aqua | 10.03 | AA and AAA |
| navy on gold | 6.66 | AA (button label OK) |
| blue on aqua / cream | 2.76 / 3.14 | fails, do not pair |
| gold on white / cream | 1.97 / 1.71 | fails as text; decorative only |
| aqua on white | 1.31 | invisible; ground only |

Rules that fall out: navy is the universal text-on-anything colour; blue,
gold and aqua are never text on light grounds; gold and aqua are strong
grounds *with navy text*; blue works only for large display or controls.

Ways to vary temperature and proportion while staying anchored:

1. **Cool institutional** (current): white ground, navy bands, blue as link.
2. **Warm paper**: cream as the main ground with navy text (11.41), gold as
   the single accent rule or fill, blue reduced to links. Feels regional and
   printed. Note: the root CLAUDE.md retired tinted grounds for the current
   design; a direction may depart from this and should say so.
3. **Aqua daylight**: aqua as the large calm ground, navy text (10.03), cream
   for cards-by-ground, gold for highlights. Clinical-bright, water-adjacent.
   Sensitive given the water question; aqua near a reservoir claim could read
   as spin. Use with care.
4. **Gold-forward**: gold as hero or CTA ground with navy text (6.66), navy
   page, cream body. High-vis, workforce register. Distinguish from Kiewit
   yellow by keeping gold muted.
5. **Navy-dominant night**: full navy site with cream body (11.41), aqua
   accents, gold for the single CTA. Cinematic; risky for long reading and for
   print/low-quality screens, needs a light reading mode for FAQ.

Proportion levers: 80/10/10 vs 60/30/10; one accent vs two; whether navy is
text-only or also ground; whether photography is warm-graded (cream/gold) or
cool-graded (blue/aqua).

---

## Patterns

1. **Civic benchmarks choose plainness; energy brands choose a custom face.**
   The credible middle for a neighbour-facing site is a free humanist or
   grotesque body with one characterful display face.
2. **Serif is the under-used trust signal.** Newsreader / Source Serif 4 for
   headings or pull quotes reads as accountable record, and nobody in energy
   uses it.
3. **One accent, used for state.** GOV.UK's yellow focus and BIG's yellow
   signal show an accent colour earns attention by meaning one thing. This
   matches the repo rule "blue means link".
4. **Navy does all the text work.** Every anchor colour except white fails as
   text on at least one ground, so palette variety must come from *grounds*
   (cream, aqua, gold) with navy text on them.
5. **Figures deserve their own style.** Tabular numerals plus a mono or light
   figure face make the ledger and the "as of" stamp feel like data, not
   decoration (Helleniq's infographic-from-letterform idea, applied to stats).

## Gaps nobody owns

1. **Tabular numerals in Webflow**: none of the references show how editors get
   `tnum` and `font-variant-numeric` without custom code. Needs an Embed
   decision and a build-note entry.
2. **A "dated record" typographic voice**: monospaced or small-cap date stamps,
   source lines and footnotes as a designed element rather than fine print.
   No energy or civic site treats footnotes as a feature.
3. **Warm palette that is not safety yellow or green-energy**: the field is
   split between industrial yellow/black (Kiewit register) and green/teal
   renewables. A cream-and-ochre rural register for gas-fired infrastructure
   is unclaimed, and is also honest about what the site is (not a wind farm).

## Open items for the lead

- Verify the **Background** references before use (BIG, Heatherwick, Foster,
  USWDS, Guardian).
- Confirm co-branding with Kiewit before any gold-forward direction.
- Confirm Google Fonts axes for Archivo, Fraunces and Atkinson Hyperlegible
  Next at build time.
