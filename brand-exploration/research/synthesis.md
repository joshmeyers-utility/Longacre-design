# Research synthesis (visual)

Phase 1, 6 November 2026. **Rewritten from screenshots.** Josh's direction:
content is locked, so research is about how things look and move, and
screenshots are the evidence. Every claim below points at an image in
`screens/`. The six angle files hold the detail; each `screens/<angle>/INDEX.md`
lists what was captured and what failed.

What was captured:
- desktop at 1440, full page and mobile at 375 for about 60 references
- computed fonts and colours (`*-styles.json`)
- 11 type specimens setting real fact-sheet copy on all six palette grounds
- motion frame sequences, hover and focus states, mobile-menu opens,
  reduced-motion runs, and three recordings

Not captured: orsted.com (bot check; documented instead from the Kontrapunkt
case study), Foster, Vestas, Vogtle, AEP, the Elizabeth line, and some
mobile-menu taps. Hex values marked "unsampled" in the angle files are
estimates.

---

## 1. The one finding still holds, and now it's visible

> **Nobody puts the receipt next to the claim.**

| Seen | What the screenshot shows | Image |
| --- | --- | --- |
| Tideway | The only stat anywhere with a footnote and a data date, set in small centred grey *below* a teal block, easy to miss | `screens/civic/tideway-stat-footnote.jpg` |
| Kiewit | Stats as outlined yellow numerals on a navy band that **count up**, so the figure is wrong for about a second. No date, no source | `screens/architecture-and-construction/kiewit-*`, `screens/motion/` |
| Gateway, Sizewell C | Centred bold figures in a flat green band, or in rings. No date, no footnote | `screens/architecture-and-construction/` |
| OWID, GOV.UK | The cleanest date rows seen: "Last updated / Next expected update", "Published / Last updated / See all updates". But on pages and charts, never on a stat | `screens/civic/` |
| Type specimens | Under a stat, the footnote is the first element to fail: white footnote text on blue `#238FC8` fails contrast | `screens/type-and-color/specimen-*.jpg` |
| Mobile, everywhere | The source line wraps and is the first thing pushed below the fold | `screens/civic/*-mobile.jpg` |

**What every direction must design:** figure, qualifier, label, footnote, "as
of" date and document link as **one aligned unit**, at 375px first. Designed,
not fine print. How it looks is where the directions differ.

---

## 2. Visual references that matter most

| Reference | Why it matters visually | Use it for |
| --- | --- | --- |
| **Ørsted** (Kontrapunkt case study) | **Josh's pick.** Light-weight rounded geometric type at large sizes (Ørsted Sans, custom). Pale, airy grounds with one aqua or blue accent. Uniform soft grading. Big thin numerals. Ørsted's turquoise and sky blue sit almost on our aqua `#AFECF1` and blue `#238FC8`. Nearest web stand-in: **Outfit** (or Jost) | The light, confident, uncluttered register. Keep the craft, drop the green and wind-farm cues: this is a gas campus |
| **Form Energy** | A real aerial of a former steel-mill site in Weirton, WV: river, hills, town, autumn colour. Very close to how Homer City looks. Condensed caps, one ochre accent, real workers | Proof that a former-industrial Appalachian site *is* the image. Avoid the generic headline |
| **Skellefteå Kraft** | A tile grid of local faces, duotoned to one brand colour. The nearest thing to "the workforce is the identity" | A people-led grid with uniform grading |
| **Tideway** | The logo as a tile hanging from the header; teal dates on every news card; a swimming-pool illustration translating a big number; the only footnote and data date seen | Status and dates in the accent colour; the Giza comparison as a picture |
| **Kiewit** | Near-black and navy (`#162E46`) grounds, yellow `#FFD202` rule and logo tile, squared grotesque, dusk plant photography graded into the palette | **The register to stay clear of.** Workers on site wear it |
| **Commonwealth Fusion Systems** | Orange on taupe `#CCC8C3`, patent-drawing layouts. Hover and keyboard focus are the same white-box state | The hover-equals-focus pattern |
| **Ember** | Stats as unboxed rows with a hairline | The ledger look |
| **GOV.UK / OWID / ProPublica** | Bold run-in labels ("Correction, Oct. 27, 2026:", "Data source:"); label and value date rows; file tiles giving format, size and pages | The receipt typography |
| **Heatherwick** | Warm off-white ground `#F4F3EF` with dark text and serif headlines | Credible proof of a warm ground |
| **Sound Transit** | Hairline-ruled project list with a provenance line ("voters approved 1996/2008/2016") | The nearest thing to a ledger in infrastructure |

---

## 3. Visual patterns (seen on more than one site)

1. **A quiet ground with one controlled accent.** Ørsted (aqua on pale grey),
   CFS (orange on taupe), Form (ochre on white), GOV.UK (one blue band). The
   strong references have one signal colour; everything else is neutral.
2. **Light or book-weight display type, set large.** Ørsted Sans, Kontrapunkt's
   slab, Heatherwick's serif. Thin and big reads as confidence. Heavy
   condensed caps (Form, Kiewit, Tideway's display face) read as industry,
   and on our site would read as contractor.
3. **Stats as unboxed hairline rows look current** (Ember, Ørsted's metadata
   list). **Boxed cards with pictograms look 2015** (Sizewell, CVOW). Centred
   stats in a solid band are the construction default (Kiewit, Gateway).
4. **Mono micro-labels for dates and categories** (CFS, Form, X-energy,
   Heatherwick). The "dated record" voice exists, but only as decoration.
   Nobody uses it for "as of".
5. **Dusk and night construction photography with the lights on** (Kiewit,
   Hinkley, SOM). These are the best images in the set, and they suit navy.
   Daylight aerials with the town in frame (Form, Meta) are what make it a
   *place*.
6. **The logo as a hanging header tile** (Kiewit, Tideway, Gateway). Simple
   in Webflow, and strong.
7. **Motion:** one move on load (a 600–1700 ms fade or wipe, no overshoot);
   hover equals focus; the mobile menu open within about 150 ms; a pause
   control on anything that moves. All native in Webflow.

## 4. Visual clichés to avoid (each seen in the captures)

- **Pastel-tint panels and pill buttons in one brand blue** (Google, Microsoft,
  Meta, Purple Line). This is the data-center-community look.
- **Rounded cards with paragraphs inside** (Allen County, Microsoft, Rapides).
- **Uppercase labels over a transparent header over golden-hour photography**
  (Mortenson, Sundt, Kiewit).
- **Centred stats in a solid band, or in rings** (Kiewit, Gateway, Sizewell).
- **Boxed stat cards with pictograms** (Sizewell, CVOW).
- **Count-up numerals and smooth-scroll hijack** (Kiewit, BIG). They read as
  an agency showing off, and the count-up shows a wrong figure.
- **Unlabelled renderings shown as fact** (Sizewell, Intel, BIG).
- **Turbine, solar or sunrise heroes, and leaf or swoosh marks** (the energy
  sector broadly).
- **Kiewit's colours: yellow on black or navy with squared caps.** It's the
  contractor's look and workers wear it.

## 5. Visual open territory

1. **The receipt as one designed unit:** figure, qualifier eyebrow, label,
   footnote, date and document, aligned, at 375px first.
2. **Pale, light and confident (Ørsted's register) with documentary
   tradespeople (Form's subject).** Nobody combines them.
3. **A warm cream-and-ochre ground for a gas-and-grid build.** Every energy
   site seen is white, black, pastel or saturated colour. Heatherwick proves a
   warm ground reads as credible. This departs from the current design's
   no-tinted-grounds rule, which directions may do.
4. **A designed footnote.** Every reference sets it at 11–13px grey. The
   specimens show this is where legibility breaks first.
5. **Reduced motion as the default look.** Only Mortenson and Tideway changed
   anything under `prefers-reduced-motion`. A brand whose still state *is*
   the design owns this.
6. **The figure never animates; the row arrives whole**, with its footnote.
7. **Concern shown in the picture.** Only Meta's aerial shows homes beside the
   campus. Nobody pictures what a sceptic asks about.
8. **Labelled renderings**, and a dated, calm photo sequence for progress
   rather than video.

## 6. Type: what the specimens showed

Re-ranked by looking at `screens/type-and-color/specimen-0..10.jpg`. All are
Google Fonts (OFL).

| Rank | Pairing | What it looks like | Note |
| --- | --- | --- | --- |
| 1 | Fraunces + Source Sans 3 (+ IBM Plex Mono) | Warm and regional, like a good county paper. Light figures look exact | Strongest on cream |
| 2 | Newsreader + Public Sans (+ JetBrains Mono) | Accountable record, quieter than Fraunces | The sceptic-first register |
| 3 | Big Shoulders Display + Hanken Grotesk | The most distinct, and workforce-forward | Drifts toward Kiewit in caps. Set it in sentence case |
| 4 | Zilla Slab + Public Sans | Rooted, rural, county-fair | |
| 5 | Outfit + Source Sans 3 | **The Ørsted option.** The cleanest stat row | Closest to the current Geist. Must earn its difference through weight, size and colour |
| 6 | Archivo condensed | Industrial signage | |
| 7 | Bitter + Source Sans 3 | Plain newspaper slab | |
| 8 | Source Serif 4 + Atkinson Hyperlegible Next | Very calm, maximum legibility | |
| — | Plus Jakarta Sans + Hanken Grotesk | A Geist look-alike | Control only |
| — | Roboto Slab figures + Archivo | | Dropped |

## 7. Colour: what the specimens and captures showed

- **Navy carries text on every ground.** It works on aqua, cream, gold and
  white.
- **Blue `#238FC8` is for large headlines and controls only.** Small white
  footnote text on it fails. No footnoted stat ledger on blue.
- **On white, gold reads weakly as a button.** Gold works as a ground with
  navy text, or as a rule.
- **Under the Anchored setting, temperature comes from the ground:**

| Ground | Visual precedent | Risk |
| --- | --- | --- |
| White with navy | GOV.UK, the current design | Convergence with the current design |
| Pale grey or white with one aqua or blue accent | Ørsted | Reading as renewables. Keep it light, not green |
| Cream with a gold rule | Heatherwick (warm off-white), the Fraunces specimen | Departs from no tinted grounds; say so |
| Navy with cream text | Kiewit's navy band, dusk photography | Kiewit. Never pair navy with a yellow-gold rule and squared caps |
| Aqua ground | — | Water-claim optics. Avoid as a main ground |

## 8. Motion: what was observed

Sequences, contact sheets and recordings are in `screens/motion/`.

**Native in Webflow Interactions:**
- one load move (a fade or wipe of 600–1700 ms)
- reveal once on scroll
- hover equals focus (a CFS-style box)
- mobile menu within 150 ms
- pause controls on sliders
- a reduced-motion path through Conditional Playback

**Custom code, flag as a cost:**
- count-up numerals (avoid them anyway)
- Lenis smooth-scroll (avoid it; BIG's turned 6 wheel steps into 7,692px)
- pause controls on video
- pinned scroll stories

## 9. Content (locked; unchanged)

Every direction must fit these:
- the footnoted ledger (10,000+ with footnote 1, ~1,000 with footnote 2)
- qualifier eyebrows
- the "as of" date on 1,800+
- the workforce ledger
- the nine-trade rollover with tap and focus paths
- four contact inboxes
- 32 FAQs including long answers
- the 1969–2026 photo essay
- Photograph and Rendering labels
- attributed quotes
- the alert banner
- the four pillars
- 18 page templates

Copy comes from `../content/homer-city-qa.md` and `../../docs/source/`.

## 10. Distinctness levers for Checkpoint 1

| Lever | Range seen |
| --- | --- |
| Display type | Light geometric (Ørsted / Outfit) · editorial serif (Fraunces, Newsreader) · slab (Zilla) · condensed (Big Shoulders, Archivo) |
| Ground | White · pale grey · cream · navy |
| Accent | Aqua · blue · gold rule · ochre |
| Subject of the imagery | The place from the air (Form) · the people (Skellefteå) · the build at dusk (Kiewit, minus the palette) |
| Motion | Still, with reduced motion as default · one quiet load move · a dated image sequence |

Proposals:
- One **evolution** of the current design.
- One **Ørsted-led** direction (light, pale, one accent).
- One **record** direction (serif, cream, mono stamps).
- One **workforce** direction (people grid, condensed in sentence case,
  kept clear of Kiewit).
- One **stretch**.

Directions must not be: aqua-led; anything in the Kiewit register;
pastel-pill data-center style.
