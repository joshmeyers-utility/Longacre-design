# Direction 02: Daylight (Ørsted-led)

Checkpoint 1 brief. Mood board:
`directions/moodboards/02-daylight.html`, rendered to
`directions/moodboards/02-daylight-board.jpg` (1440, full page) and
`directions/moodboards/02-daylight-375.jpg` (375, hero and ledger).

---

## 1. Concept

**Positioning line:**

> The former Homer City Generating Station, rebuilt in plain sight: the
> fields, the town and the build in clear daylight, every number signed and
> dated.

Daylight takes Ørsted's register (light type set very large, a pale and airy
ground, one controlled accent, big thin numerals, one even photographic
grade) and points it at a natural gas and data center build in Indiana
County. The idea is **nothing to hide, so nothing is dark.** The neighbour
sees the site the way they see it from the road: in ordinary daylight, at
ordinary scale, with the figures written up beside it like a notice on a
board.

Voice test: the line names the former station, the town and the dated
figures. It cannot be moved to another energy company's site.

It keeps Ørsted's craft and none of its green story. There are no leaves,
no wind or solar imagery, no green accent, no "clean energy" aqua, and no
lifestyle cast.

## 2. Research it draws on

| Reference | What Daylight takes | Screenshot |
| --- | --- | --- |
| Ørsted by Kontrapunkt | Light display set large on a pale ground; a quiet key and value metadata list; one soft, even grade; big thin numerals (the "29 / 30" report cover) | `research/screens/energy-brands/orsted-kontrapunkt-desktop.jpg`, `-s2.jpg`, `-s8.jpg` |
| Ørsted, what is left out | Green framing, mist-and-turbine heroes, colour-per-object covers, kitesurfers, particle textures | `orsted-kontrapunkt-s6.jpg`, `-s8.jpg` |
| Ørsted's own plant shot | Proof that the register holds on industrial subjects: stacks and plant buildings under a pale sky | `orsted-kontrapunkt-s4.jpg` |
| Form Energy | A former-industrial Appalachian site from the air, with town, river and hills in frame. This is the subject. Its condensed caps and dark scrim are not | `research/screens/energy-brands/formenergy-home-desktop.jpg` |
| Outfit specimen | Outfit 300 holds the receipt cleanly on white; the white footnote on blue fails | `research/screens/type-and-color/specimen-5.jpg` |
| Ember, Sound Transit | Unboxed rows held by hairlines | synthesis §2 and §3.3 |
| Commonwealth Fusion Systems | Hover and focus as one state | synthesis §2 |
| Synthesis §5.2 | Open territory: "pale, light and confident with documentary subjects; nobody combines them" | `research/synthesis.md` |

## 3. How it earns a sceptic's trust

**Nothing is hidden in the dark.** Text never sits on a photograph, so no
scrim is needed and nothing can be laid over an image to soften it. The
headline sits on haze and the picture sits whole below it, with no type on it.

**The receipt is one vertical unit.** It reads in this order, from top to
bottom, at every width:

1. **Qualifier eyebrow** ("Anticipated", "Up to"), Figtree 500, slate. For
   a moving figure, the qualifier slot carries the **aqua "As of September
   2026" chip** instead, so the date is the first thing read.
2. **Figure**: Outfit 200 at 136px desktop and 300 at 68px mobile, in blue
   `#238FC8`. It never counts up.
3. **Label**: Figtree 400, 17 to 20px, navy, with the footnote marker.
4. **Footnote**: the full verbatim text, 14 to 15px, slate, set off by a
   1px left rule. It sits directly under the label and is never moved to the
   foot of the page.
5. **Source and date, plus a document link**, on one line pinned to the
   bottom of the unit. This line aligns across the row, so a sceptic can
   scan every source at one height.

At 1440, receipts sit two to a row with an 80px gutter. A 1px navy rule runs
across the top of each one. At 375 they stack in the same order. This differs
from the current design's horizontal ledger (figure hard left, label hard
right). In Daylight the figure sits above its own receipt.

**Labelled kind.** Kind is shown on the image as a small chip:
**Rendering** is gold with navy text, and **Photograph** is white with navy
text. Kind and Date are also separate caption fields.

## 4. Typography

All from Google Fonts (OFL).

| Role | Face | Weight | 375 | 1440 | Line height | Tracking |
| --- | --- | --- | --- | --- | --- | --- |
| Hero | Outfit | 200 | 44 | 104 | 1.04 / 1.00 | −2.5% / −3.5% |
| Figure | Outfit | 300 (mobile) / 200 | 68 | 136 | 1.00 / 0.95 | −3.5% / −4.5% |
| H2 | Outfit | 300 | 32 | 56 | 1.10 / 1.06 | −2% |
| H3 | Outfit | 400 | 22 | 28 | 1.20 | −1% |
| Body large | Figtree | 400 | 18 | 20 | 1.55 | 0 |
| Body, stat label | Figtree | 400 | 17 | 18–20 | 1.5 | 0 |
| Eyebrow, qualifier | Figtree | 500 | 14 | 14–15 | 1.4 | +1% |
| Footnote, source | Figtree | 400 | 14 | 15 | 1.55 | 0 |
| Button | Figtree | 500 | 16 | 16 | 1 | 0 |

- **Outfit** is the nearest web stand-in for Ørsted Sans: geometric, round,
  open. It is used only at 22px and up, and at 300 or lighter for anything
  above 32px. Its thinness is what makes it read as Ørsted.
- **Figtree** sets everything that has to be read closely. It is a friendly
  geometric-grotesque with sturdier small sizes than Outfit, and it has
  tabular figures for dates.
- There is no mono. Dates are set in plain text, not stamped, which keeps
  this direction clear of 03 and 05.
- Sentence case everywhere, and no all-caps.
- Below 80px, figures move up to 300, because thin 200 strokes at 68px on a
  phone in sunlight are too faint.

## 5. Colour

Palette latitude is **Anchored.** All five client colours are used, each in a
deliberately narrow role, with two derived steps and two neutrals.

| Token | Hex | Source | Role |
| --- | --- | --- | --- |
| `white` | `#FFFFFF` | neutral | Page ground, reading surfaces (about 58% of a page) |
| `haze` | `#F1F4F6` | neutral, from the navy hue | Hero and alternate ground (about 26%) |
| `navy` | `#143251` | client | All text. Alert bar and footer only as a ground |
| `blue` | `#238FC8` | client | **Large figures and display only** (64px and up) |
| `blue-deep` | `#16679A` | derived from `#238FC8` | Links, the primary button: the AA step of the identity blue |
| `slate` | `#4F5F72` | derived from navy | Eyebrows, footnotes, captions, sources |
| `aqua` | `#AFECF1` | client | The "As of" chip only. **Never a ground** |
| `gold` | `#D8B471` | client | The "Rendering" chip only |
| `cream` | `#F3F1D0` | client | Not a surface. The **white point of the photo grade** |
| `sky` | `#A9D3EA` | derived | Links on navy (alert bar, footer) |
| `rule` | `#D5DCE2` | neutral | Hairlines (receipt tops use navy) |

**Contrast, computed (WCAG 2.x):**

| Pairing | Ratio | Passes for |
| --- | --- | --- |
| Navy on white | 13.09 | All text |
| Navy on haze | 11.85 | All text |
| Slate on white | 6.54 | All text |
| Slate on haze | 5.92 | All text |
| Deep blue on white | 6.10 | Links |
| Deep blue on haze | 5.53 | Links |
| White on deep blue | 6.10 | Button label |
| Navy on aqua | 10.03 | "As of" chip |
| Navy on gold | 6.66 | "Rendering" chip |
| White on navy | 13.09 | Alert bar, footer |
| Sky on navy | 8.22 | Links on navy |
| **Blue on white** | **3.60** | **Large text only**: figures of 64px and up |
| **Blue on haze** | **3.26** | **Large text only**: figures of 64px and up |
| White on blue | 3.60 | Fails for body text, so it is never used |
| Navy on blue | 3.64 | Fails for body text, so it is never used |

Focus rings are 2px navy with a 3px offset (13:1 on white, which clears the
3:1 needed for focus indicators). Gold and aqua never carry meaning on their
own: the words inside the chip do.

## 6. Motion: "light coming up"

The motion idea is one slow brightening on page load, then stillness.

| Moment | Move | Token | Webflow |
| --- | --- | --- | --- |
| Page load | The headline fades in with a 16px rise; the photograph comes up from haze (opacity 0 → 1) | `duration/slow` 1100ms, `ease/appear` (0.2, 0.7, 0.2, 1) | Page load, native |
| Scroll | Each receipt fades in whole, once. The figure never counts | 700ms, `ease/appear`, `distance/sm` 12px | Scroll into view, native |
| Hover and focus | Button turns navy; link underline goes from 1 to 2px | 160ms, `ease/interact` ease-in-out | Hover plus a `:focus-visible` combo class |
| Menu | Panel fades over haze | 140ms | Click, native |
| Reduced motion | Everything is already in place. The still page *is* the design | 0ms | Conditional playback, plus a media query in the head embed |

There is no parallax, no count-up, no smooth-scroll and no video hero. All of
it is native to Interactions 2.0.

## 7. Imagery

**Subject.** The place first, then people and the build. The priorities are:
the campus from the air with the town and farmland in frame (Form's subject,
in daylight); the build seen from the edge of Homer City ("what will it look
like from my house"); one named tradesperson per frame; and steel and plant
detail against open sky. The 1969–2026 photo essay (`docs/source/iup-deck.md`)
runs as a calm, dated strip with one grade across all of it, archive frames
included, so 54 years read as one place. The date leads each caption.

**Grading recipe:**

| Setting | Value |
| --- | --- |
| Light | Overcast-bright or high sun. No golden hour and no dusk: those belong to 04 and to Kiewit |
| Exposure | High-key, +0.3 to +0.5 stop. Highlights roll off to cream `#F3F1D0`, never pure white |
| Shadows | Lifted. Black point no darker than navy-tinted `#2A3A4C` |
| Contrast | −10 |
| Saturation | −15 to −20 |
| Greens | Pulled toward olive and straw, so fields read as Pennsylvania farmland, not as "green energy" |
| White balance | Neutral to a touch warm. Never pushed cyan or blue |
| Crop | 21:9 and 16:9 for place, with the horizon in the top third and plenty of sky. 4:5 for people and detail. One subject per frame |
| CSS preview (comps only) | `brightness(1.1) contrast(.86) saturate(.62) sepia(.12) hue-rotate(-8deg)` plus a 16% haze screen. The final grade is applied to the files |

**Renderings.** A rendering is never used as a hero and is never graded to
pass as a photograph. It always carries the gold "Rendering" chip on the image,
and `Kind = Rendering` in the caption field.

**State of the assets.** The 32 frames in `content/imagery/` are flagged
"Rendering (suspected)", which means probably AI-generated or CGI. The board
uses 07, 03 and 15 **only** to show crop and grade, each labelled inside the
image area: "Stand-in — suspected generated image, not a photograph of the
campus". Every real-photograph need is briefed inside its image area. The
town, archive and essay frames are placeholders.

## 8. Voice

Short, plain and present tense. Place names over adjectives. The figure
comes first, then what it is, then where it comes from. Facts are unchanged
from `docs/source/fact-sheet.md`.

| Fact sheet | Daylight |
| --- | --- |
| "Safety is every HCG employee's #1 priority; we are accountable for our actions and responsive to concerns." | "Safety comes first for every Homer City Generation employee. If something on site concerns you, tell us. We answer for what we do." |
| "We are building world-class energy infrastructure at unprecedented scale." (Infrastructure pillar, with the turbine milestone) | "Up to 4.4 GW from seven GE Vernova 7HA.02 natural gas turbines, built on the ground where the former Homer City Generating Station stood." |

## 9. The 375px hero

**Above the fold, at 375 × 812:**
- The dismissible navy alert bar
- A haze ground with a small logo and "Menu"
- "Indiana County, Pennsylvania" in slate
- The headline in Outfit 200 at 44px, five lines of navy on haze
- The intro in Figtree at 18px
- A deep-blue pill button, with the alerts link under it
- The top edge of a 4:5 photograph rising into view at about 680px

It feels like opening a window rather than a brochure. It is quiet and very
light, and there is nothing to read over a picture.

**Directly below:** the photograph, full width, with its caption, kind and
date. Then "By the numbers", where the first receipt is **1,800+** with the
aqua "As of September 2026" chip above it and its source, "Homer City
Generation, 4 September 2026", below. Then **10,000+** with footnote 1 in
full.

See `moodboards/02-daylight-375.jpg`.

## 10. How it differs from the current Geist design

| Lever | Current (03-design-system, Geist) | Daylight |
| --- | --- | --- |
| Display | Geist, 104px, white over a scrimmed photograph | Outfit **200**, 104px, navy on pale haze |
| Hero | Text over photography behind a 0.72 to 0.88 navy scrim | No text on the image. Headline above, photograph below |
| Figures | Near-black Geist 300 in a horizontal ledger | **Blue `#238FC8`** Outfit 200 at 136px; a vertical receipt, two to a row |
| Grounds | Stone white plus navy bands that alternate | White and cool haze. Navy only at the edges (alert, footer) |
| Corners | Square surfaces, 2px controls (`radius/control`) | **Pill** buttons and chips; square images |
| Photography | No defined grade | One high-key daylight grade, cream white point |
| Air | Standard section rhythm | 120px section padding, 80px gutters, a 248px wordmark-scale cover |

**Departures from root CLAUDE.md §7**, stated as the brief requires:
- **"Blue means link."** In Daylight, `#238FC8` marks large figures and is
  never clickable. Links are a different, deeper blue and are always
  underlined.
- **Controls.** The current design uses `radius/control` (2px) for buttons.
  Here buttons and chips are pills.
- **Aqua and gold** appear as small chips that carry facts.

## 11. What it explicitly avoids

- **Green.** No leaves, no wind or solar imagery, no green accent, and no
  saturated fields.
- **Aqua as a ground.** A pale-aqua band beside a water answer would read as
  a claim (synthesis §7).
- **Blue `#238FC8` on small text**, or as a ground behind footnotes.
- **Text over photographs.**
- **Dusk, golden hour and night-lit plant shots.**
- **Cards, tiles and pictograms.** Hairlines and space only.
- **Ørsted's lifestyle cast, colour-per-object covers, gradients and
  particle textures.**
- **Count-up numerals and scroll hijack.**
- **The current look:** a navy hero, Geist, near-black figures.
- **The pastel-pill data-center look.** The risk is real, and the guard
  against it is one accent used large, navy text and no tinted panels.

## 12. Risks and doubts

- **The pill-and-pale combination sits close to the data-center cliché**
  (synthesis §4, first bullet). What keeps it apart is the thinness of the
  type, the absence of tinted panels and the receipts. If the pills read as
  generic, switch them to `radius/control` 2px.
- **Thin blue figures pass AA only as large text** (3.60:1 on white, 3.26:1
  on haze). Below 64px they must not be blue. This is defensible, but it is
  the lowest ratio in the system.
- **Outfit sits nearest to Geist** of all the candidates (synthesis §6,
  rank 5). Weight, colour and grade must do the work. Set Outfit at 500 and
  it collapses into the current design.
- **The direction depends on real daylight photography that does not exist
  yet.** Every supplied frame is a suspected rendering. Without real aerials
  of the town and the build, Daylight is mostly type on haze.
- **Haze `#F1F4F6` is a cool neutral.** It reads as daylight beside white,
  but it could drift toward the cool look of tech vendors. Its alternative
  is the current design's warm stone, which this direction deliberately
  avoids.
