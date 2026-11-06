# Direction 04: Crew

Checkpoint 1 brief. Status: **proposal, awaiting Josh's review.**
Mood board: `moodboards/04-crew.html`, rendered to
`moodboards/04-crew-board.jpg` (1440, full page) and
`moodboards/04-crew-375.jpg` (375 × 812, hero and ledger).

---

## 1. Concept

**Positioning line:** *The Homer City Energy Campus, shown through the nine
trades building it.*

The workforce is the identity. Not a "people" section on a corporate site:
the people are the site's visual system. Boilermakers, carpenters,
electricians, ironworkers, laborers, millwrights, operators, pipefitters and
teamsters, photographed plainly on the job, graded to one duotone so a patchy
library reads as one crew. Navy ground, cream type, a tall condensed display
face set in sentence case. Numbers are kept as a ledger the reader can check.

**Voice test.** "Nine trades", "~95% local", "135+ apprentices" and
named union locals are only true here. Swap the name and the sentence
breaks, which is the test.

**What makes it different from the other four:** it is the only direction
whose subject is faces rather than the place, the record or the drawing. It
is the darkest direction (navy-led, where 02 Daylight is pale and 03 Record
is cream). It is also the most energetic one. Its display face is
condensed, where 01 uses Geist, 02 Outfit light, 03 a serif and
05 Archivo with mono.

**Departure from the current system (root §7), stated:**

- Navy is the default ground, not an occasional institutional band.
- Cream is a text colour and a duotone highlight. The reading surface,
  `paper`, is a pale cream tint, so this breaks "no tinted grounds" for
  long reading.
- Gold is retired: it does not appear anywhere in Crew.
- A dense photographic grid is allowed. This breaks "full bleed is spent,
  not spread", but only in the trades grid and hero contact sheet, where
  every tile is a person.

## 2. Research it draws on

| Reference | What Crew takes | Screenshot |
| --- | --- | --- |
| Skellefteå Kraft | Local people duotoned to one brand colour, so a patchy library looks like one series. A tile grid where every tile answers something | `research/screens/energy-brands/skekraft-home-desktop-full.jpg`, `skekraft-home-mobile.jpg` |
| Form Energy | Real workers on a former industrial Appalachian site, shown plainly and ungraded. Proof that the site is the image | `research/screens/energy-brands/formenergy-home-desktop.jpg` |
| Sundt | Crew-as-hero, faces to camera, real kit. Crew avoids its two mistakes: caps over bodies, and a heavy scrim that flattens faces | `research/screens/architecture-and-construction/sundt-desktop.jpg` |
| Big Shoulders specimen | Condensed display on six grounds. In caps it reads as a contractor; the specimen is the warning | `research/screens/type-and-color/specimen-4.jpg` |
| CFS (motion) | Hover and focus share one state | synthesis §2 |
| Ember / Sound Transit | Unboxed hairline ledger rows | synthesis §2 |
| **Kiewit (to avoid)** | Its yellow `#FFD202` tile and rule, squared caps, outlined count-up numerals on navy `#162E46` | `research/screens/architecture-and-construction/kiewit-desktop.jpg`, `kiewit-scroll2.jpg`, `kiewit-mobile.jpg` |

## 3. Staying clear of Kiewit

Kiewit is the EPC on this project, and its workers wear its colours on site.
A workforce-led direction on navy is the one most at risk of looking like the
contractor's site. **Our navy `#143251` is within a few steps of Kiewit's
`#162E46`.** The navy is the client's, so the distance has to come from
everything else:

| Kiewit does | Crew does instead |
| --- | --- |
| Yellow `#FFD202` logo tile, top rule, arrows, progress pill | **No yellow anywhere.** Gold is retired too, because any warm accent on navy points back to Kiewit. The accent is aqua, a cool colour Kiewit never uses |
| White type on navy and black | **Cream** type on navy. No black, and no white text on navy at all |
| Yellow buttons and arrows | The primary button is **aqua**, so the one saturated colour on navy is cool. A cream button was tried in the first board and read as pale yellow on navy, so it was dropped |
| Squared slab grotesque (Industry), all-caps nav and eyebrows | Big Shoulders Display, tall and narrow, **sentence case everywhere**, including nav, buttons and eyebrows. No letter-spaced caps |
| Outlined yellow numerals that count up | Solid cream figures that never animate. The row arrives whole, with its footnote |
| Centred stats in a band, no source | A ledger aligned left. Every row carries qualifier, label, footnote, date and document |
| Dusk plant photography lit from within, the machine as hero | Daylight portraits of people. When a machine is in frame, someone is using it |
| Hanging logo tile | The client logo as is, on navy, with no tile |

The critic should still test this side by side. If a reviewer's first
word is "Kiewit", Crew has failed.

## 4. How it earns a sceptic's trust: the receipt unit on navy

Every figure is one aligned unit, designed at 375 first:

```
[qualifier eyebrow]  Anticipated                      Hanken 600 14, cream-dim
[figure]             10,000+                          Big Shoulders 800 72 (375) / 120 (1440), cream
[label]              Direct on-site construction-     Hanken 500 18/20, cream
                     related jobs
[footnote]           1. Anticipated total number…     Hanken 400 15/16, cream-dim. Full text, verbatim
[date + document]    Fact sheet · May 2026  ↓ PDF     Hanken 600 14, aqua link, 44px target
───────────────────  hairline, cream at 24%, row-closing
```

- **The footnote is set at 15px**, not 11–13px grey. On navy, cream-dim
  `#C8C9B4` is 7.77:1. It sits under the label, inside the row's rule, never
  as an asterisk sent to the page foot.
- **The "as of" date is the eyebrow** on moving figures: *As of September
  2026* sits where *Anticipated* would. It is a CMS date field, not part of
  the label string.
- **Tier A figures carry a visible review flag** in mock-ups only:
  9 · ~95% · 135+ · ~2,000 projected (and 1,800+ wording) are marked
  "Confirm before publishing" until the client confirms the 4 Sep 2026
  press-release wording.
- **The document link closes every row.** It is aqua with an underline and
  a 44px tap target, and names the source document and its date.
- **Photograph or rendering is a label and a grade.** Photographs are graded
  warm (navy to cream). Renderings are graded cool (navy to aqua) and carry a
  solid "Rendering" tag. Colour is never the only signal; the tag always
  reads.

At 375 the row stacks: eyebrow, figure, label, footnote, document link. Desktop
uses the ledger columns: figure left (5 columns), then label, footnote and
link right (5 columns), with an empty middle crossed by the rule.

## 5. Typography

All Google Fonts (OFL), all supported as Webflow Google fonts.

| Role | Face | Weight | 375 | 1440 | Notes |
| --- | --- | --- | --- | --- | --- |
| Hero | Big Shoulders Display | 800 | 54/0.92 | 128/0.88 | Sentence case, tracking 0. Two lines at 1440, four at 375 |
| H2 | Big Shoulders Display | 800 | 40/0.98 | 72/0.95 | |
| H3 / trade name | Big Shoulders Display | 700 | 28/1 | 36/1 | |
| Stat figure | Big Shoulders Display | 800 | 72/0.9 | 120/0.88 | Tabular lining figures, solid fill, never outlined |
| Date in photo essay | Big Shoulders Display | 600 | 24 | 32 | "Mar 2026" |
| Body | Hanken Grotesk | 400 | 17/1.55 | 19/1.6 | |
| Lead | Hanken Grotesk | 400 | 19/1.45 | 24/1.45 | |
| Label (ledger) | Hanken Grotesk | 500 | 18/1.35 | 20/1.35 | |
| Footnote | Hanken Grotesk | 400 | 15/1.5 | 15/1.55 | Designed size, never below 14 |
| Eyebrow / date | Hanken Grotesk | 600 | 14/1.3 | 14/1.3 | Sentence case, +1% tracking |
| Button | Hanken Grotesk | 600 | 17 | 17 | |

No mono: 05 Survey uses mono, and 03 Record uses mono stamps.

**Why Big Shoulders, and its risk.** Of the faces tested, it is the most
workforce-forward. It was drawn for Chicago signage, so it reads civic and
industrial without reading as a corporation. In caps it reads as a
contractor (`specimen-4.jpg`). In sentence case, at 800, its tall
lowercase is closer to a union-hall banner than to Kiewit's squat slab.
*Fallback if it still reads too hard:* Sofia Sans Extra Condensed 800. It is
softer and humanist, but less distinct.

## 6. Colour (Anchored)

Built from the client's five. Gold is deliberately unused (see §3).

| Token | Hex | Source | Role |
| --- | --- | --- | --- |
| `navy` | `#143251` | client navy | Default ground; duotone shadow |
| `navy-raised` | `#1C4166` | navy, lightened | Trade tile ground, focused row, mobile menu |
| `cream` | `#F3F1D0` | client cream | Text on navy; duotone highlight (photographs) |
| `cream-dim` | `#C8C9B4` | cream mixed toward navy | Secondary text and footnotes on navy |
| `aqua` | `#AFECF1` | client aqua | Primary button, links and controls on navy; focus ring; rendering highlight |
| `blue` | `#238FC8` | client blue | Identity only: focus ring on paper, progress rail. **Never text** |
| `paper` | `#FAF9EE` | cream, lightened | Reading surface: FAQ, articles, long answers |
| `link-on-paper` | `#17628F` | blue, darkened | Links on paper |
| `ink-dim` | `#4A5560` | navy-grey | Secondary text on paper |

**Contrast (WCAG 2.x, every text pairing used):**

| Text on ground | Ratio | Use |
| --- | --- | --- |
| cream on navy | 11.41 | All body and display |
| cream-dim on navy | 7.77 | Footnotes, eyebrows |
| aqua on navy | 10.03 | Links, document links |
| cream on navy-raised | 9.16 | Trade tile text |
| cream-dim on navy-raised | 6.24 | Trade descriptions |
| aqua on navy-raised | 8.06 | Links in tiles |
| navy on aqua (primary button) | 10.03 | Primary button on navy; cream fill on hover |
| navy on aqua (tag) | 10.03 | Rendering tag, review flags |
| navy on paper | 12.37 | FAQ body |
| link-on-paper on paper | 6.24 | Links on paper |
| ink-dim on paper | 7.19 | Source lines, dates on paper |
| blue on navy | 3.64 | **Not used for text.** Non-text graphics only (≥3:1) |
| white on blue | 3.60 | **Not used.** No footnoted content on blue |

**Long reading.** FAQ answers, articles and the permit-appeal answer move to
`paper`. Twelve paragraphs of cream on navy tire the eye. The page turns
light when the reader's job turns from scanning to reading. Navy carries
heroes, ledgers, the trades grid and the footer.

## 7. Motion

The most energetic of the five, but every move shows something true.

| Token | Value | Use |
| --- | --- | --- |
| `duration/fast` | 150ms | Hover, focus, tap, mobile menu open |
| `duration/base` | 280ms | Trade tile reveal |
| `duration/row` | 360ms | Ledger row arrival |
| `duration/hero` | 700ms | Hero contact-sheet wipe, once |
| `stagger/row` | 70ms | Ledger rows, trade tiles |
| `distance/row` | 16px | Rise on arrival |
| `ease/appear` | cubic-bezier(0.2, 0, 0, 1) | No overshoot |

- **Row stagger.** Ledger rows rise 16px and fade in, 70ms apart, on scroll
  into view, once. **The figure never counts up.** Each row arrives whole,
  footnote included, so nothing is ever shown wrong.
- **Hero.** Portrait tiles wipe in left to right, 70ms apart. The headline is
  present from the first paint; it does not wait for the photos.
- **Trades reveal, one state for three inputs.** Hover, keyboard focus and
  tap all trigger the same change. The tile ground lifts to `navy-raised`, the
  photo shifts up 8px, and the description and union local slide up from
  beneath the trade name. Each tile is a `<button aria-expanded>`. Tap
  toggles it; Escape closes it. The description is in the DOM, not
  hover-only.
- **Reduced motion.** Everything renders at its end state, with no rise and
  no wipe. The reveal still works, as an instant change.

**Webflow feasibility.** All Interactions 2.0: scroll-into-view with stagger
is native, hover and click triggers are native, and Conditional Playback
handles reduced motion. One small custom-code embed is needed to mirror the
hover state on `:focus-visible` and to set `aria-expanded` on tap. Flag it
in build notes. No GSAP, no Lenis, no count-up.

## 8. Imagery

**Subject.** Named tradespeople at work on the campus. One person or a small
crew, faces visible, real kit, real task: welding at height, setting a
form, pulling cable, signalling a crane. The caption names the trade, plus the
person and their local, **only with consent and confirmation**. Second subject:
the 1969–2026 photo essay, the place changing behind them.

**Duotone recipe (photographs).**

1. Desaturate fully. Lift contrast about 10% and set black point so skin
   tones keep three or four distinct values.
2. Map shadows to `navy #143251` and highlights to `cream #F3F1D0`. The
   gradient map is linear; midtones land near `#848A84`.
3. Grade at export in the photo library, not in CSS. That gives one file per
   crop and keeps weight down on rural connections. CSS (`mix-blend-mode` +
   `filter: grayscale`) is the preview and fallback only; both are native
   Webflow style settings.
4. One grade for the whole library, including 1969–2023 archive frames. A
   station photograph and a July 2026 HRSG (heat recovery steam generator)
   frame then sit side by side as one series.

**Renderings** take a *cool* map (navy to aqua `#AFECF1`) and a solid aqua
tag reading "Rendering", top left, inside the image, navy text, 10.03:1.
Photographs carry no tag, but their date is its own field. Warm means it
happened; cool means it is proposed. The tag means the colour is never the
only signal.

**Crop.** Portrait 4:5 for people tiles, 3:2 for the photo essay, never
circular. Faces sit in the upper third so the name strip never covers them.

**Text over photographs.** Almost never. Type sits on solid navy beside or
below the image. Where a caption must overlap (the photo essay), it sits on a
solid navy strip, not a scrim, so AA does not depend on the picture.

**The supplied library (6 Nov 2026).** The 32 images exported to
`content/imagery/` are all flagged "Rendering (suspected)" in its `INDEX.md`;
they look generated or CGI, not photographed. The mood board uses two
(`03`, `04`) **only** to show crop and the duotone recipe, each labelled
inside the image "Stand-in — suspected generated image, not a photograph of
the campus". No figure in them is presented as a worker, named or given a
trade. Crew cannot be judged fairly until real portraits exist; it needs a
commissioned documentary shoot, which is a cost the other directions do not
carry.

**Placeholders.** Until real photographs exist, every people image is
a navy-raised field with its brief *inside* the image area. Captions stay
outside and contain publishable text only. All quote portraits are
placeholders today, so **no quote runs** (root §5.6).

## 9. Voice

Short sentences, trade words used correctly, people before institutions.
Figures stay as sourced.

| Fact sheet (May 2026) | Crew |
| --- | --- |
| "Mobilized construction workforce with Kiewit and local unions with 1,000+ workers active on site" | "Kiewit and the local unions put the crew together. By May 2026, 1,000+ workers were active on site." *(Fact sheet milestone, May 2026; dated per critic round 0.)* |
| "Safety is every HCG employee's #1 priority; we are accountable for our actions and responsive to concerns." | "Safety is the #1 priority for every Homer City Generation employee. We're accountable for what we do here, and responsive when you raise a concern." |

## 10. The 375px hero

The phone opens on faces. A strip of three duotoned portraits, 4:5, edge to
edge with 2px gutters, wipes in. Directly beneath, on solid navy, is the
headline in Big Shoulders 800 at 54px, sentence case and cream: "Meet the
tradesmen and women building the campus." Four lines, no photo behind the
words. Next comes one receipt, *As of September 2026* / **1,800+** /
direct-hire tradespeople and skilled contractors active on site, then a full-width
aqua "Find work on the campus" button and an aqua "What we're building"
link.
The alert banner sits above everything in navy-raised, dismissible. On a
slow connection the headline and figure are there before any photograph.

## 11. What it avoids

- Anything a reader could mistake for Kiewit (§3): yellow, black, caps,
  outlined or count-up numerals, hanging logo tile.
- Stock "diverse team smiling at laptop" imagery. Every face is a real
  worker on this site, or a labelled placeholder.
- Hero type over photographs, and the heavy scrim that flattens faces
  (Sundt).
- Heroics: no low-angle hard-hat-against-sunset shots, and no "the backbone
  of America".
- Naming any union beyond the three in the QA file. Even those three are
  shown as *unconfirmed* (E12). Six tiles read "Union name needed".
- Quotes without real portraits.
- Long reading on navy.

## 12. Open risks

- **Navy proximity to Kiewit.** It is structural, because the navy is the
  client's. The critic should test it directly.
- **Big Shoulders at small sizes** looks pinched; it is never used below 24px.
- **Consent and naming.** A people-led site needs a release for every
  identifiable worker, and a decision on whether names and hometowns run.
  The QA file's "Shawn – Trafford, PA" spotlight suggests yes; confirm.
- **Everything depends on the photography.** With placeholders, Crew is the
  weakest of the five on paper. With 40 good portraits it is the strongest.
