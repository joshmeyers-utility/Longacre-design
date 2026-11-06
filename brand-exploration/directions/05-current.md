# Direction 05: Current (the stretch)

> **Stretch direction · palette Open.** Built from Ragged Edge's own site and
> its Granola work. It goes furthest from the current design while keeping
> every fact rule in root `CLAUDE.md` §5 and §6.

Mood board: `moodboards/05-current.html` · screenshots
`moodboards/05-current-board.jpg` (1440, full board),
`moodboards/05-current-375.jpg` (375 hero and numbers),
`moodboards/05-current-motion-1..3.jpg` (the hero field frozen at 0 s, 30 s
and 105 s).

---

## 1. Concept

**Power was made on this ground from 1969 to 2023. Current shows the same
place switching back on.**

The brand is a field of colour in motion: a slow, blurred radial field built
only from the client's five colours. It is the campus's "current". Two rules
keep it from being generic "energy future" spin:

1. **The field has an address.** Every streak converges on one vanishing
   point, and that point is the site: 1750 Power Plant Rd. On the hoarding
   it converges on the gate; on the web it sits behind the name; on the
   milestone poster the field winds into that point before the date lands.
   An energy gradient on any other website points nowhere. This one points
   at a real place in Indiana County where power was made for 54 years.
2. **The field never moves without a receipt.** No surface shows the field
   on its own as a mood. Every field carries a dated figure, a dated
   milestone, or the place name. The "playful" moment, borrowed from
   Granola's oversized "Of", is the oversized serif **as of**: the
   transparency hinge set as the brand's signature.

**Positioning line:** *The same ground, switching back on, and dated where
it stands.*

**Voice test:** "converges on 1750 Power Plant Rd", "as of September 2026"
and "from 1969 to 2023" cannot be swapped onto another energy company's site.

## 2. What it borrows from Ragged Edge

| Frame | What it borrows | What it does not |
| --- | --- | --- |
| `re-home-desktop`, `re-home-mobile` (plus new captures at 0–10 s) | The full-bleed blurred radial field with a vanishing point; the ultra-wide caps across the full width; serif pills on the field, bottom-left with the secondary pill right | The field's free colour (theirs drifts teal → orange → pink). Ours stays inside the client's five plus one accent |
| `re-approach-desktop` | Hairline, then a small wide-grotesque label left and a large serif lede right. The wide sentence-case heading. Dark active pill | Their pale mint ground. Ours is navy |
| `re-granola-f00…f13` | An electric chartreuse on near-black; the oversized serif word as the human, playful moment; long serif copy on dark | The "Of" as decoration. Ours is "as of", and it carries a date |
| Partnerships pages | Generous scale and almost no chrome | Case-study cards |

Recording note: the live Ragged Edge field is **not** CSS or WebGL. It is a
looping MP4 (`/dist/videos/home-hero--desktop.mp4`, ~5.0 MB) under a canvas.
That is also the honest Webflow route here (§7).

## 3. Typography

All Google Fonts, all OFL.

| Role | Face | 1440 | 375 | Notes |
| --- | --- | --- | --- | --- |
| Display caps (names, single words) | **Syne 800**, caps | 200–300px, set to fit edge to edge | 30–44px, still edge to edge | Closest Google match to Ragged Edge's wide caps. Rendered against Unbounded, Krona One, Lexend Zetta/Giga, Michroma and Archivo Expanded: Syne is the only one that is wide *and* flat enough |
| Figures | **Archivo 900, wdth 125** | 150px ledger, 186px social | 68px | **Syne is barred from figures.** Its `.` and `~` render as a mid-height dash: "4.4" read as "4-4" and "~1,000" as "-1,000". On a transparency site that is a factual error |
| Headings | Syne 700, sentence case | 64 / 1.02 | 30 / 1.05 | Matches Ragged Edge's "It's time to commit…" |
| Lede, long copy | **Newsreader** 350–400 (opsz auto) | 44 / 1.16 lede, 20 / 1.5 body | 24–27 / 1.16 lede, 18 / 1.5 body | Serif for everything a neighbour reads |
| Navigation | Newsreader 400, in pills | 17px, 44px tall | 17px, 44px tall | Meets the 24px target size with room |
| The moment | **Instrument Serif italic** | 150px | 72px | Only the receipt words: *as of*, *up to*, a milestone month. Never decoration |
| Footnotes, qualifiers | Newsreader 400 / italic | 14.5 / 1.5 | 14 / 1.5 | Footnotes in aqua, qualifiers in gold italic, above the figure |

Departs from root §7: all-caps display (set in sentence case in the markup,
`text-transform: uppercase`, so screen readers read words, not letters), and
Geist is replaced.

## 4. Colour (Open)

| Token | Hex | Source | Role | Share |
| --- | --- | --- | --- | --- |
| navy | `#143251` | Client | Anchor ground, active pill | ~45% |
| night | `#0A1626` | Navy, darkened | Numbers ground, applications | ~20% |
| blue | `#238FC8` | Client | **Field only. Never text** (3.64:1 on navy) | in field |
| aqua | `#AFECF1` | Client | Secondary text, footnotes, field | ~4% |
| cream | `#F3F1D0` | Client | Primary text on dark, pill ground | ~12% |
| gold | `#D8B471` | Client | Field warmth, qualifier eyebrows | ~3% |
| **current** | `#D4F25A` | **Open** | Dates, sources, "as of", focus ring | ≤2% |

**How Current relates to the client's five.** It is where aqua and gold
cross in the field. The average of `#AFECF1` and `#D8B471` is a pale sage
(`#C4D0B1`, hue ~80°). Current is that hue pushed to full chroma. It is the
field's own mix, at full charge. It is also Granola's chartreuse role, and
it is far enough from Kiewit's yellow (hue ~50°) not to read as the
contractor's brand.

**Rule: Current means "checked".** It marks only a date, a source, a
footnote number or keyboard focus. It is never a fill, a link or a
decoration. Because of that, a reader learns that the bright colour always
says *when* and *says who*.

**Links** are cream and underlined. Blue never carries text on dark. This
departs from root §7's "blue means link".

### Contrast (WCAG 2.2 AA)

| Pairing | Ratio | Use |
| --- | --- | --- |
| Cream on navy / night | 11.41 / 15.84:1 | Body, headings, figures |
| Aqua on navy / night | 10.03 / 13.92:1 | Footnotes, captions |
| Gold on navy / night | 6.66 / 9.25:1 | Qualifiers |
| Current on navy / night | 10.37 / 14.41:1 | "as of", dates |
| Navy on cream pill | 11.41:1 | Navigation |
| Cream on navy pill (active) | 11.41:1 | Current page |
| Navy on Current chip | 10.37:1 | Receipt chips |
| Blue on navy | 3.64:1 | **Fails. Never text** |
| **Cream over the moving field, inside the band** | **≥ 5.25:1** | See below |

**Text over the moving field is guaranteed by geometry, not by a checker.**
All type on the field sits inside a horizontal "horizon band": navy at 0.75
opacity, solid from 10% to 90% of its height, fading at the edges. Cream on
navy at 0.75 over a **pure-white** field gives 5.25:1. The field's lightest
stop is cream, not white, so the real value is higher. The band is part of
the art (it reads as the field's horizon), and the hero's caps and H1 never
leave its solid part. Pills are opaque, never translucent. Do not lighten
the band below 0.70 (4.46:1 against white).

## 5. Voice

Copy is locked. Two headlines rewritten from fact-sheet lines to show the
register, with the facts unchanged:

- Fact sheet: *"~3M cubic meters: moved a volume of earth roughly
  equivalent to what was required to build Egypt's Great Pyramid of Giza."*
  → **"Roughly a Great Pyramid of earth, moved. ~3M cubic meters."**
- Fact sheet: *"Up to 4.4 GW: energy expected to be produced on-site."*
  → **"Up to 4.4 GW, expected to be made on the same ground as before."**
  ("As before" stands on the station having produced power here
  from 1969 to 2023.)

Short, plain, a little dry. Ragged Edge's "Why wait?" register, never their
swagger about "average".

## 6. Imagery

- **The field is the brand. Photographs are the evidence.** Photographs
  run straight and full colour. No field colour, duotone or tint over a
  photograph, ever. A tinted photograph is a small edit of the evidence.
- Kind (Photograph / Rendering) and date are separate fields, and the date
  sits in Current.
- People: named portraits only (name, trade, local union, written consent).
  The nine unions are still not named (root §10 #2).
- On the board: one stand-in (`content/imagery/07-campus-landscape-aerial.jpg`)
  labelled inside the image "Stand-in — suspected generated image, not a
  photograph of the campus", and one briefed placeholder whose brief is in
  the image area.

## 7. Motion and Webflow feasibility

| Token | Value | Behaviour |
| --- | --- | --- |
| `field/rotate` | 150 s per turn, linear | Streaks turn about the vanishing point. Slower than a minute hand |
| `field/breathe` | 24 s, ease-in-out, scale 1 → 1.14 | The core brightens and recedes |
| `field/mood` | 60 s cross-fade, 0 → 0.82 | A gold-and-cream layer comes and goes: cool, then warm |
| `ui/press` · `ui/appear` | 160 ms · 320 ms, ease-out, 12px | Pills and reveals. Interactions 2.0 |
| Reduced motion | Poster frame at 105 s | No loop, no autoplay |

**Build route: a looping video, not live CSS.** The board renders the field
with five stacked blurred conic and radial gradients. That shows the idea,
but animated `filter: blur(48px)` on full-screen layers is too heavy for a
low-end Android phone in a rural county, and it needs an Embed.

| Route | Cost | Verdict |
| --- | --- | --- |
| **Webflow Background Video** (native) | 8 s seamless loop rendered from the CSS master. 1080p desktop ~1.5–2 MB, 720p mobile ~600 KB, H.264 + WebM. Webflow transcodes it and gives a built-in **pause button** (WCAG 2.2.2) | **Recommended.** Native, editable by the client, no code. Ragged Edge ships the same thing at ~5 MB |
| CSS gradients in an Embed | ~2 KB, but GPU-heavy blur, and a custom-code maintenance cost | Prototype only |
| WebGL shader (GSAP or OGL embed) | ~30–60 KB JS, best fidelity | Not worth it for the client team to maintain |

**Fallbacks.** A 20 KB still poster (AVIF/WebP) loads first and is the
`prefers-reduced-motion` state. A small embed script skips the video on
`Save-Data` or 2G/3G (`navigator.connection`) and keeps the poster. Every
field instance has a visible pause control. Print and the hoarding use the
poster frame.

**Fonts in Webflow.** Syne, Newsreader and Instrument Serif load through
Webflow's Google Fonts integration. The Google integration loads static
weights only, so **Archivo's `wdth 125` axis needs the variable TTF
uploaded as a custom font** (OFL permits it). Caps fitted edge to edge use
fixed sizes per breakpoint (`vw` units), not the board's fit script.

## 8. Brand in the world (drawn on the board)

1. **Site hoarding, Power Plant Road** (24 × 8 ft). A printed still of the
   field, the place name edge to edge, and a night plate with "1,800+ ·
   direct-hire tradespeople and skilled contractors active on site · *as of*
   September 2026". **The plate is a swap-out panel, re-printed monthly. If
   it can't be kept current, it comes off.** A stale figure on a sign is
   worse than none.
2. **Social card** (1080 × 1350). 10,000+, "Anticipated" above, label, and
   footnote 1 verbatim at 25px, inside the card.
3. **OG / share image** (1200 × 630). Field, place name, "Up to 4.4 GW"
   pill. No URL until the domain is decided (root §10 #9).
4. **Fact-sheet cover.** Field panel, caps, the fact-sheet H1, and its own
   edition date ("as of May 2026").
5. **Milestone motion poster** (1080 × 1920, 8 s). The field winds into the
   core, "First steel" lands, then "Crossed first steel threshold with
   commencement of vertical construction", then **April 2026** in Current,
   which holds. The timeline date is used, per root §10 #12.

Also natural: hard-hat sticker (field disc + "as of" date chip), the alert
banner as a Current-dated pill strip, and the construction-update email
header as a field strip.

## 9. The receipt

On dark, at every size:

- **Qualifier** (*Anticipated*, *Up to*, *Projected*) in gold italic,
  directly above the figure.
- **Figure** in Archivo Expanded Black, cream.
- **Label** in Newsreader, cream, right column (stacked at 375).
- **Footnote** verbatim in Newsreader 14–14.5px aqua (10.03:1+), inside
  the row's rules, with its number in Current. Never grey fine print.
- **"as of {month} {year}"** for moving figures: the giant Instrument Serif
  *as of* plus the date in Syne caps, both in Current, set at least half the
  figure's size. The date is a CMS field next to the figure, never part of
  the label string.

## 10. What it avoids

- A field with no address: the generic "energy future" gradient.
- A figure without its date, a footnote in grey fine print.
- Blue text on navy. Current as decoration.
- Any tint over a photograph.
- Type on the raw field without the band. Translucent pills.
- Motion with no pause and no still.
- Kiewit's yellow and black, and squared caps on gold.

## 11. Doubts for Josh

- **An all-dark site.** Navy everywhere is dramatic, but neighbours read on
  phones in daylight. A light reading ground for long pages (FAQs, Water)
  may be needed. That would move it toward Ragged Edge's pale "Approach"
  page.
- **The band is visible** when the field turns warm (motion frame 2). We
  accept it as the horizon; the alternative is to lose the guarantee.
- **Distinctness.** 01 Power Plant Road also owns a colour field. Here the
  field is blurred, moving and radial on navy, and theirs is flat and
  saturated. Keep watching for convergence.
- The hoarding's monthly swap-out panel is an operational promise the
  client has to agree to.
