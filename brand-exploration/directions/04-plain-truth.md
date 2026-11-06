# Direction 04 — Plain Truth

Mood board: `moodboards/04-plain-truth.html` →
`moodboards/04-plain-truth-board.jpg` (1440, @2x) and
`moodboards/04-plain-truth-375.jpg` (375: hero + stats).

## Concept

A campus people argue about, answered plainly and loudly. The figures and the
facts are the hero, set huge — and the qualifier, the footnote and the "as of"
date are set big too, as part of the poster rather than fine print under it.
Every block on the page is one owned colour, stacked like Eager's cartons, so
a scroll reads as a pile of receipts.

**Positioning line:** *The site that answers the question you actually asked.*

**Voice test:** "Up to 4.4 GW. Expected. On this site." No other energy
company can say that sentence, and it keeps the source's own qualifiers.

## What it borrows from Ragged Edge

| Frame | What we take | What we leave |
| --- | --- | --- |
| Eager f00, f07 ("EAGER" on orange) | Giant condensed caps filling a full-bleed colour field | Their orange; their wordmark |
| Eager f02, f06 (oranges, apples) | The real thing fills the frame, cropped close | Product-as-hero styling — our "product" is steel, earth, turbines |
| Eager f11 (stacked cartons) | Stacked colour blocks, one colour per block, each carrying its own big word | Pink/green fruit palette |
| Eager f01, f03 ("we told the truth", "juice is full of crap") | A brand built on breaking a category's myths plainly | The cheek — neighbours with a contested permit don't want jokes |
| Wise f04, f12 ("The World's Money", Euro/Dirham billboard) | One bright owned colour, big bold type on outdoor | Lime; currency lists |
| Wise f05, f09 (card in the pocket, tote) | The brand in the world, on real objects | Lifestyle portraiture (that is direction 02's territory) |
| Case-study page itself | Pill nav, label-left/text-right rows, full-bleed blocks between | Ragged Edge's own wordmark and names |

## Typography

| Role | Face | Weight | 375 | 1440 |
| --- | --- | --- | --- | --- |
| Figure | Anton | 400 (only weight) | 112px | 240–280px |
| Display H1 | Anton, caps | 400 | 56px / 0.94 | 128px / 0.9 |
| Qualifier (Anticipated, Projected, Up to) | Anton, caps | 400 | 28px | 48px |
| Figure label | Archivo | 800 | 20px | 28–32px |
| Footnote | Archivo | 500 | 16px / 1.45 | 22px / 1.45 |
| Body / FAQ answer | Archivo | 400–500 | 18px | 22–26px |
| Date stamp, eyebrow | Archivo | 800 | 14px | 16px |

Both are Google Fonts and become Webflow fonts directly. Anton was chosen by
rendering six candidates (Anton, Bebas Neue, Big Shoulders Display 900,
Barlow Condensed 800, League Gothic, Oswald 700) on the blue field: it is the
heaviest, and its round bowls and soft shoulders keep it out of the squared
industrial caps Kiewit uses. Barlow Condensed and Big Shoulders read squarer
and were rejected for that reason. Archivo is the sturdy, slightly wide text
face that explains the number; footnotes are never smaller than body copy.

Departs from root §7: all-caps display (sentence case stays for every label,
button and body line), Geist replaced.

## Colour

| Token | Hex | Role | Share |
| --- | --- | --- | --- |
| `field/owned` | #238FC8 blue | The owned colour: hero, workforce, the big numbers | ~40% |
| `field/record` | #143251 navy | Receipts, sources, footer | ~20% |
| `field/paper` | #F3F1D0 cream | FAQ, long answers, print | ~20% |
| `field/build` | #D8B471 gold | Earth, steel, the build | ~10% |
| `text/on-owned` | #0A1B2E ink (navy, darkened) | All type on blue | ~7% |
| `stamp/date` | #AFECF1 aqua | "As of" stamps and the live alert bar only | ~3% |
| white | #FFFFFF | Rest ground between blocks | — |

Contrast, every pairing used (WCAG 2.2 AA):

| Text on ground | Ratio | Allowed |
| --- | --- | --- |
| Ink on blue | 4.83:1 | All sizes |
| Navy on blue | 3.64:1 | **Not used** (large-only; avoided entirely) |
| White on blue | 3.60:1 | **Not used** |
| Cream on navy | 11.41:1 | All sizes |
| Navy on cream | 11.41:1 | All sizes |
| Navy on gold | 6.66:1 | All sizes |
| Navy on aqua | 10.03:1 | All sizes |
| Navy on white | 13.09:1 | All sizes |
| White on ink (buttons) | 17.37:1 | All sizes |

Departs from root §7: `#238FC8` becomes a ground, not a link colour; links on
blue are ink and underlined. Ink is the one derived value — a darker step of
the client navy, needed because nothing in the five clears 4.5:1 on blue.

**Avoiding Kiewit.** Kiewit is yellow on black with squared caps. Here gold is
never paired with black and never carries display type on navy; gold fields
take navy type only, gold is the minority block (~10%), and the display face is
round-shouldered. The owned colour is blue, not gold.

**Aqua and the water question.** Aqua is a date colour, never a field. It does
not appear on the Water page or beside water answers — a pale aqua block next
to "how much water will you use" reads as spin. Water content sits on cream.

## Voice

Plain, blunt, specific, never spin. Short sentences. The qualifier is said out
loud, not buried. Two headline samples rewritten from fact-sheet lines, facts
unchanged (voice samples, not replacement copy — site copy is locked):

- Fact sheet: "Moved a volume of earth roughly equivalent to what was required
  to build Egypt's Great Pyramid of Giza" (~3M cubic meters)
  → **"We've moved roughly a pyramid's worth of earth."** Under it: ~3M cubic meters —
  roughly the volume required to build Egypt's Great Pyramid of Giza.
- Fact sheet: "Up to 4.4 GW — energy expected to be produced on-site"
  → **"Up to 4.4 GW. Expected. On this site."**

## Imagery

Real things, big: close crops where the object fills the frame edge to edge —
a turbine casing, a steel column, a haul road cut, a rebar mat, the Power
Block. No wide "hero landscape with sky". Never text over a photograph: type
sits on the colour block beside the image, so no scrim is needed.

The supplied library is suspected generated (all 32 files). On the board they
appear only as stand-ins, each carrying a label inside the image: "Stand-in —
suspected generated image, not a photograph of the campus". The turbine has no
image at all, so it is a striped placeholder with its brief inside the frame.

**Renderings:** a cream tab inside the frame, top-left — "Rendering — not yet
built" — at the same size a photograph's date sits. Photographs carry their
date; renderings carry this. Never cropped off at any breakpoint.

## The receipt as a poster

One block, one owned colour, five parts, always in this order:

1. **Qualifier** in Anton, 28/48px — Anticipated, Projected, Up to.
2. **Figure** in Anton, 112/280px.
3. **Label** in Archivo 800, verbatim from §6.
4. **Footnote** in Archivo 500, 16/22px, under a rule, verbatim — on the
   block, never linked away. Required for 10,000+ and ~1,000 at every size,
   including the billboard and the social card.
5. **"As of" stamp** in aqua for any moving figure (1,800+ — as of September
   2026), a CMS date field rendered as text, never baked into the label.

## Motion and Webflow

- Blocks wipe up on scroll-into-view: Interactions 2.0, 400ms, ease-out,
  24px travel, once. Alert bar slides down on page load, 250ms.
- **No count-ups.** A number that runs through wrong values on its way to the
  right one is a small lie.
- Hover on FAQ rows: rule thickens 1.5 → 3px, 150ms.
- `prefers-reduced-motion`: all of the above become instant.
- Everything is flat-class Flexbox/Grid; colours map 1:1 to Webflow variables.
  Stat blocks are one CMS template with a `field` colour option.

## Brand in the world

On the board, drawn in HTML/CSS:

- **Billboard, Route 119:** 10,000+ on blue with footnote 1 set legibly.
- **Site hoarding, Power Plant Road:** four colour panels — Up to 4.4 GW,
  7 × 7HA.02, $10 Billion projected, "Questions? Ask us." with the community
  inbox and site address.
- **Social card (1080²):** ~1,000 on navy with footnote 2 on the card.
- **Fact-sheet cover:** "What's being built at 1750 Power Plant Rd", edition
  stamp.
- **Hard-hat sticker and hi-vis patch:** trade names (Ironworkers,
  Pipefitters) — trades are public, union names are not.
- **Site signage:** campus name and address; gate wording waits on the
  site-access policy (open question 11).
- **Alert bar:** aqua, dismissible, CMS-driven: "Active · From September 16 —
  Heavy equipment transport to Homer City Energy Campus begins September 16".

## FAQ: a long, contested answer

The question shouts (Anton, 120px desktop, on cream); the answer talks
(Archivo 26px, full text, no "read more"); the source is stamped beneath with
its date (aqua stamp + "Source: Power plant & fuel supply fact sheet"). The
board uses "As the campus grows, will it drive up my power bill?" with the QA
answer verbatim. Collapsed questions are full-width rows under hairlines. An
answer that is contested is never shortened to make the layout work — the
column grows.

## What it avoids

- Spin: no adjectives where a number exists; no figure without its qualifier.
- Fine print: footnotes are never smaller than body text.
- Kiewit: no gold-on-black, no gold display caps on navy, no squared caps.
- Aqua as a field, and aqua anywhere near water.
- Count-ups, parallax, text over photographs.
- "Coal", 4.5 GW, rounded figures, invented figures, generated imagery
  presented as real.
- Converging on 01 (italic sans, single colour field — here it is multiple
  stacked blocks and upright condensed caps), 02 (portraits, serif italic),
  03 (heritage serif), 05 (dark moving field).

## Doubts

- The locked hero line ("Building America's energy future while honoring
  Pennsylvania's proud past") is the least plain sentence on the board; set in
  giant caps it reads as a slogan. This direction wants a factual H1 — a copy
  question for Josh, not a design one.
- Anton has one weight; hierarchy comes from size and colour only.
- Blue as a ground overturns "blue means link" in the current system.
- All imagery is stand-in. The direction depends on real close-up photography
  of steel, earth and turbines (open question 4).
