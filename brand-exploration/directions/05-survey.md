# Direction 05: Survey (the stretch)

> **The stretch direction.** It goes furthest from the current design while
> keeping every fact rule. It is here to test whether a technical drawing
> language can be *more* trustworthy to a sceptic than a brand language,
> without going cold on a neighbour.

Checkpoint 1 brief · 6 November 2026 · mood board:
`moodboards/05-survey.html` (screenshots `moodboards/05-survey-board.jpg`,
1440 full page, and `moodboards/05-survey-375.jpg`, 375 hero and ledger).

---

## 1. Concept

**The site is the campus's sheet set.** A 3,200+ acre site is described the
way surveyors and engineers describe land: a title block that says what this
is, where it is and who it is drawn for; numbered sheets instead of menu
items; contours, outlines and dimension lines; leaders that run from a figure
or a feature in a photograph to a keyed note. The photo essay becomes the
drawing's revision history. Every figure is an annotation, so the receipt
(qualifier, footnote, as-of date, source) is not fine print under the number;
it *is* the callout the number points to.

**Positioning line**

> *The Homer City Energy Campus, drawn to the record: every line points at
> something real, every figure is keyed to its note, its date and the sheet it
> came from, and the sheet is drawn for the neighbours on Power Plant Road.*

Voice test: the title block carries 1750 Power Plant Rd, the former Homer City
Generating Station and "drawn for neighbours in Homer City and Indiana
County". No other energy company can swap its name into that sheet.

---

## 2. Research it draws on

| Reference | Screenshot | Taken | Left behind |
| --- | --- | --- | --- |
| Commonwealth Fusion Systems | `research/screens/energy-brands/cfs-home-desktop.jpg`, `cfs-home-desktop-full.jpg` | Patent-drawing layout: numbered captions, ghosted line drawing of the machine, ruled nav box, mono micro-labels. Hover equals focus | Taupe ground, orange accent, very small grey labels |
| X-energy | `research/screens/energy-brands/x-energy-home-desktop.jpg` | Wide display type as a register; mono date and category tags | Extended **caps**, sunrise hero, dark "technology" grid band. Our wide face is sentence case |
| Form Energy | `research/screens/energy-brands/formenergy-home-desktop.jpg` | A former-industrial Appalachian site *is* the image: river, hills, town, all in frame | Condensed caps headline |
| Archivo specimen | `research/screens/type-and-color/specimen-3.jpg` | Archivo is legible on every ground; the mono "as of September 2026" eyebrow reads as a dated record | The condensed width (75): we go the other way, to 118–125 |
| BIG, SOM | `research/screens/type-and-color/big-home-desktop.jpg`, `research/screens/architecture-and-construction/som-desktop.jpg` | The architect's register: drawings and plates treated as content, generous white sheet | BIG's scroll-jacking (6 wheel steps → 7,692px, `research/motion.md`) |
| Ember, Sound Transit | `research/screens/energy-brands/ember-home-desktop.jpg`, `research/screens/architecture-and-construction/soundtransit-desktop.jpg` | Unboxed hairline rows; a provenance line per project | Pictograms |
| GOV.UK, OWID | `research/screens/civic/owid-sources-desktop.jpg`, `civic/govuk-publication-mobile.jpg` | Run-in "Source" labels and date rows, now set as drawing notes | |

Synthesis open territory it claims: §5.1 (the receipt as one unit), §5.4 (a
designed footnote), §5.5 (reduced motion as the default look) and §5.8
(labelled renderings and a dated, calm photo sequence).

---

## 3. How it earns a sceptic's trust

The drawing set is the oldest trust device in construction: nothing on a
sheet is allowed to point at nothing. Survey makes that the visual rule.

- **The receipt is an annotation.** Each ledger row: figure hard left,
  qualifier tag above it (*Anticipated*, *Up to*, *As of September 2026*), an
  elbow leader from the figure to a callout on the right. The callout holds
  the label, a keyed note number (a ringed `1` or `2`, the drawing convention
  for a keynote), **the footnote in full at 14px**, then a dashed rule and the
  source line in mono: `Note 1 of 2 · Source Fact sheet, May 2026`.
- **375 first.** On a phone the leader turns vertical: a dot on the figure,
  a 22px drop, then label, footnote and source in reading order. Nothing is
  pushed below an "expand". Verified in `05-survey-375.jpg`: the 10,000+ row
  with footnote 1 is about 560px tall at 375 and reads cleanly.
- **Moving figures are marked as moving.** 1,800+ carries its as-of tag on the
  figure and "CMS field · updated monthly" in its source line. The site title
  block repeats it as "On site · as of September 2026 · 1,800+ workers".
- **The drawing tells you what it is not.** Every schematic carries its own
  disclaimer in the drawing: "Schematic · not to scale · not survey data",
  "Count only · not the layout". This is normal drafting practice, and on
  this site it is the honesty a sceptic is looking for.
- **The photograph's kind is a field.** Plates carry Photograph, Rendering or
  (for now) Stand-in inside the image area, and a separate date field in the
  caption. A rendering cannot be mistaken for a photograph because the label
  is part of the plate, not the caption.
- **Figures never animate.** Lines may draw on; numbers are drawn whole.

---

## 4. Typography

All Google Fonts, OFL.

| Role | Face | Axes | 375 | 1440 |
| --- | --- | --- | --- | --- |
| Display (H1) | Archivo | wdth 118, wght 450, −1.2% tracking, lh 1.05 / 1.02 | 35px | 60px |
| Heading (H2) | Archivo | wdth 118, wght 450 | 27px | 44px |
| Stat figure | Archivo | **wdth 125**, wght 300, `tnum` lining | 54px | 92px |
| Figure unit (GW, cubic meters) | Archivo | wdth 125, wght 350 | 22px | 34px |
| Body | Archivo | wdth 100, wght 400, lh 1.55 | 17px | 18px |
| Ledger label | Archivo | wdth 100, wght 500, lh 1.4 | 17px | 18px |
| Footnote | Archivo | wdth 100, wght 400, lh 1.5, slate | 14px | 14px |
| Annotation (sheet numbers, dates, sources, plate keys) | JetBrains Mono | wght 500, +2% tracking | 12px (11 min on plates) | 12–13px |

**Why the width axis.** One family at two widths does what a pairing usually
does: expanded is the lettering on a title block (stable, measured,
horizontal like land); normal width is for reading. Sentence case throughout,
which is what keeps the expanded face from tipping into X-energy's sci-fi
caps.

**Why JetBrains Mono, not IBM Plex Mono.** Direction 03 (The Record) uses mono
as an editorial stamp. JetBrains Mono has a taller x-height and squarer
terminals: it reads as instrument and drawing, not as a dateline.

**Webflow note (honest).** Webflow's Google Fonts picker loads static
instances and the Designer has no `font-stretch` control. Two routes: (a)
upload Archivo's static width instances (Archivo SemiExpanded / Expanded ship
in the family's download) as separate custom fonts, which is fully native; or
(b) upload the variable TTF and set `font-stretch` in a small custom-code
style block, which is a maintenance cost. Recommend (a). Verify the exact
instance names at build.

---

## 5. Colour

**Anchored.** Four of the client's five carry roles. Aqua appears only as the
focus ring on navy. Cream is deliberately unused, so Direction 03 owns it.

| Token | Hex | From | Role |
| --- | --- | --- | --- |
| `sheet` | `#FFFFFF` | — | Primary ground |
| `vellum` | `#F4F5F6` | derived, neutral | Drawing panels, the second ground |
| `survey-navy` | `#143251` | **client** | Ink: all text on light, linework, leaders, buttons, navy plates |
| `plate-navy` | `#0E2540` | derived from navy | Callout chips on photographs, label boxes |
| `datum-blue` | `#238FC8` | **client** | Contours, dimension lines, focus ring on light. Never text below 24px |
| `line-blue` | `#1B6A98` | derived from `#238FC8` | Link text on light |
| `annotation-gold` | `#D8B471` | **client** | Mono annotation on navy only: plate keys, revision letters, dates |
| `slate` | `#4D5B6B` | derived | Secondary text, footnotes, mono labels on light |

Hairline `#C9D0D8` is a divider and decorative contour colour, never text.

**Contrast, every text pairing (WCAG 2.x, computed):**

| Text | Ground | Ratio | Use |
| --- | --- | --- | --- |
| Survey navy | Sheet | 13.09 | All text |
| Survey navy | Vellum | 11.99 | All text |
| Slate | Sheet | 6.94 | Footnotes, mono labels |
| Slate | Vellum | 6.36 | Labels in drawing panels |
| Line blue | Sheet | 5.90 | Links |
| Line blue | Vellum | 5.40 | Links |
| White | Survey navy | 13.09 | Text on navy bands, button label |
| White | Plate navy | 15.47 | Callout chip text |
| Annotation gold | Survey navy | 6.66 | Mono annotation |
| Annotation gold | Plate navy | 7.87 | Callout keys on photographs |
| Hairline grey | Survey navy | 8.41 | Secondary text on navy |
| White | Line blue | 5.90 | Not used, available |
| White | Slate | 6.94 | Not used, available |
| Datum blue | Sheet | 3.60 | **Large only (≥24px) or non-text.** Fails for body text |
| Annotation gold | Sheet | 1.97 | **Never.** Gold is not used on light grounds |

Non-text: datum blue focus ring on white 3.60 and aqua focus ring on navy
10.03, both above the 3:1 needed for focus indicators. Leaders are navy
(13.09) or gold on photographs over a solid chip.

---

## 6. Linework (the system's signature)

| Element | Drawn as | Rule |
| --- | --- | --- |
| Contours | Abstract rolling terrain, 0.6–1.2px, datum blue at low opacity or navy in drawing panels; index contour every fourth line | **Schematic.** No elevations, no coordinates, no north arrow, no claim to be Indiana County's real terrain. Labelled as such inside the drawing |
| Campus outline | Dash-dot boundary with "3,200+ acres" in an area tag | "Area · schematic outline". Not a parcel |
| Dimension line | Datum blue, arrowheads, extension lines | Only for something measured in the sources; otherwise reads "Not to scale" |
| Leader | 1px navy (light) or gold (on plates), dot at the object, elbow to the note | Must end at a note, a photo feature or a sheet. A leader that points at nothing is not allowed |
| Keynote | Ringed number, mono | Footnotes 1 and 2 |
| Grid references | A–F, 1–8 on drawing frames | The drawing's own, not geographic |
| Power Block | Seven identical schematic units, numbered 1–7, with a "7 units" dimension bracket and the callout "GE Vernova 7HA.02 high-efficiency natural gas turbines" | "Count only · not the layout". No ratings, sizes or positions |

This departs from the current design's "strokes are dividers" rule (root
CLAUDE.md §7). Here linework *is* content. The discipline moves from "no
strokes" to "no stroke without a referent".

Production note: the mood board generates contours in the browser for speed.
The build ships one exported, optimised SVG per sheet (target under 40KB),
not a script.

---

## 7. Motion

**Character: the drawing is plotted, once.** Lines draw on, then the plate
or label they point at fades in after them. 600 ms for a leader, 900 ms for a
contour set, `cubic-bezier(0.2, 0, 0, 1)`, no overshoot. Figures never count
up. Under `prefers-reduced-motion` the sheet appears complete: the still
state is the design.

| Move | Webflow route | Cost |
| --- | --- | --- |
| Row and plate reveal (fade, 8px rise) | Interactions 2.0, scroll into view | Native, none |
| **Leader "draws on" left to right** | Native fallback: leader sits in a wrapper whose width animates 0 → 100% (a wipe). Reads as drawing for straight and elbow leaders | Native, none. **Recommended default** |
| True SVG stroke draw (contours, curved lines) | `stroke-dashoffset`: not exposed in Interactions 2.0. Needs GSAP (DrawSVG, now free) in a custom-code embed, or a CSS keyframe plus a small IntersectionObserver script | **Custom code: flag in `docs/04-build-notes.md`.** About 30–60 lines, one more thing a future editor can break. Webflow's newer GSAP-based interactions may expose it; verify at build, don't assume |
| Alternative for hero drawings | Webflow's native Lottie element, triggered on load or scroll | Native in Webflow, but every drawing must be authored in After Effects, and text inside a Lottie is not real text. Keep labels as HTML overlays |
| Revision stepper (Rev 0 → Rev F) | Tabs or slider, with keyboard arrows and a visible pause on autoplay (or no autoplay) | Native |
| Hover equals focus on buttons and plates | Hover and focused states set to the same style | Native |
| Reduced motion | Conditional playback on every interaction | Native |

Motion tokens: `d05/duration/leader` 600, `d05/duration/contour` 900,
`d05/duration/reveal` 400, `d05/duration/interact` 150,
`d05/ease/plot` `cubic-bezier(0.2,0,0,1)`, `d05/distance/rise` 8px.

Honest recommendation: ship the wipe everywhere first. Spend the custom-code
budget on one moment only, the hero contour set, and only if Josh wants it.

---

## 8. Imagery

- **Photographs are plates.** Numbered (Plate 01), with a kind label inside
  the image area (Photograph / Rendering / Stand-in) and caption and date as
  separate fields outside it. Gold-on-navy callouts name a **location**
  ("A · Construction area"), never a spec.
- **Warmth comes from the place.** The plate series must include what the
  neighbours see: farmland, woods, the farms next door, the town. On the
  board the hero leader C points at a neighbouring farm, and a whole plate
  is given to the farms around the campus. A drawing set about a place that
  shows only steel is a tech brand; one that keys the farmstead is a
  neighbour.
- **The 1969–2026 photo essay is the revision block.** Rev 0 Homer City
  Generating Station (1969–2023), Rev A Inflection point (Mar 2025), Rev B
  After stacks and towers down (Nov 2025), Rev C View from the north (Feb
  2026), Rev D First steel, going vertical (Mar 2026), Rev E Power Block
  aerial looking north (Apr 2026), Rev F Unit 5 heat recovery steam
  generator (HRSG) (Jul 2026), marked current. Dates come from the IUP deck
  strip. First steel uses the photo's own date (March), per open question
  #12.
- **Renderings** get the Rendering label inside the plate, and a lighter
  dashed frame so they read as "proposed" in drafting terms.
- **Current imagery.** The 32 exports in `content/imagery/` are flagged
  *Rendering (suspected)*: they look generated or CGI. The board uses 07,
  04, 30 and 09 only to show crop, plate and callout layout, each labelled
  inside the image "Stand-in — suspected generated image, not a photograph
  of the campus". No town or historic images exist yet; the revision block
  uses labelled placeholders with the brief inside the image area.

---

## 9. Voice

Plain words, drawn exactly. Sentences short enough to sit in a callout.
Jargon expanded where it first appears, like a drawing's legend.

Two lines rewritten from `docs/source/fact-sheet.md`, facts unchanged:

1. Source: *"Up to 4.4 GW · Energy expected to be produced on-site"* and *"GE
   Vernova confirmed to provide seven high-efficiency 7HA.02 natural gas
   turbines for the campus"*.
   Survey: **"Up to 4.4 GW of energy expected to be produced on-site, from
   seven high-efficiency GE Vernova 7HA.02 natural gas turbines. See Sheet
   01.4."**
2. Source: *"~3M cubic meters · Moved a volume of earth roughly equivalent to
   what was required to build Egypt's Great Pyramid of Giza"*.
   Survey: **"Earth moved: ~3M cubic meters, roughly what was required to
   build Egypt's Great Pyramid of Giza. Comparison drawn schematic, not to
   scale."**

---

## 10. The 375px hero

White sheet. A faint contour set breathes in from the top-right corner only,
never under the words. Nav is the logo and a square "Sheets 01–07" button.
Then the sheet tag "Sheet 01 · The campus at a glance", the locked H1 in
Archivo wide at 35px over five lines, the intro, a full-width navy button
"See what we're building →" and the link "Read the numbers and their
sources". The plate follows (photo above, never words on the photo), with
its kind label inside and one gold callout. Then a two-by-two title block:
Project · Location (1750 Power Plant Rd) · Drawn for (neighbours in Homer
City and Indiana County) · On site, as of September 2026, 1,800+ workers. It
feels like being handed the cover sheet of the plans: calm, exact, and
addressed to you.

---

## 11. What it avoids

- **Blueprint cliché.** No white lines on cyan. Navy ink on white; blue is
  the datum line, not the paper.
- **Cold tech vendor.** No extended caps, sunrise hero or dark-grid
  "technology" bands (X-energy). Sentence case, real place, plain words.
- **Invented map data.** No coordinates, elevations, north-arrowed plans or
  parcel lines. Grid references are the drawing's own; contours are
  labelled schematic.
- **Decorative linework.** Every line has a referent.
- **Kiewit's register.** Gold is small mono annotation, never a band or a
  rule on navy with squared caps.
- **Count-up numerals and scroll-jacking.**

## 12. Distinctness and risks

- **vs 01 Evolution** (also white and navy): Survey differs in the ground's
  content (linework and drawings vs empty white), the type (Archivo wide vs
  Geist), the receipt (leader-and-keynote callout vs aligned ledger slots)
  and the navigation (numbered sheets). If 01 adopts mono receipts or
  leaders, the two converge; flag it.
- **vs 03 The Record**: both have mono. Ours is JetBrains Mono as drawing
  annotation on white; theirs is a stamp on cream.
- **Risk: cold.** The mitigation is the photography, and today there is no
  real photography. With only generated stand-ins and empty revision slots,
  this direction reads more technical than it will with real plates of the
  farms and the town. Judge it with that in mind.
- **Risk: the drawings get read as real.** Every schematic says so in the
  drawing itself, but a sceptic may still screenshot the contour sheet as "the
  site plan". Consider keeping contours to frames and heroes, and never
  putting the campus outline on a page about land, water or neighbours
  without the client's real site plan.
- **Cost:** the true line-draw is custom code; the variable width axis is
  custom fonts. Both have native fallbacks (wipe; static width instances).
