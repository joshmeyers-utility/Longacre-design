# 01 — Power Plant Road

**Anchor:** Ragged Edge × Palmetto. **Palette:** Anchored. **Logo:** as-is.
Board: `moodboards/01-power-plant-road.html` →
`moodboards/01-power-plant-road-board.jpg` (1440, @2x) and
`moodboards/01-power-plant-road-375.jpg` (375, hero + stats, @2x).

## Concept

Everyone in Indiana County knows the road. Fewer know what is going up at the
end of it. The brand is named after the address, owns one warm colour
full-bleed, and talks like a neighbour leaning on the fence: short, specific,
a little dry, never selling. Every big number carries its own small print,
set in the same loud type, so nobody can say anything was hidden.

**Positioning:** *What's going up at 1750 Power Plant Road, in plain numbers,
with the dates on.*

Voice test: the address, the dates and the footnotes are only true here.

**Sign-off lockup** (Palmetto's "Have it all (with) Palmetto"):
*Plain numbers (with) the dates on.*

## What it takes from Palmetto (re-palmetto-f00…f13)

| Frame | Palmetto does | Power Plant Road does |
| --- | --- | --- |
| f00 | One saturated red-orange field, full-bleed, big intro sentence | Gold `#D8B471` field, full-bleed, owns the cover and the hero |
| f02, f06 | Deep tonal field (maroon) where the brand colour becomes the type: "Have it all" | Navy field with gold type, "Power Plant Rd." cropped by the band edge |
| f03–f05 | Heavy chunky grotesque, upright and italic: "Every. Meal.", "Why wait?", "Switch on eight lamps…" | Schibsted Grotesk Black 900, italic for headlines, roman for figures |
| f03, f04 | The circled small word, "with", inside the lockup | The circled pill holds the qualifier or the date: *Anticipated*, *Up to*, *As of September 2026* |
| f07–f08 | Brand on a van, a work-jacket patch, an app icon | Community-liaison pickup, hi-vis patch, hard-hat sticker, gate sign |
| f09–f12 | Line-drawn isometric house, warm styled photography | A line-drawn neighbour's house (labelled illustration, never the campus); photos framed in a tall arch inside the gold field |

It does not borrow the script wordmark (the logo stays as-is) or Palmetto's
lifestyle-indulgence voice ("Have it all") — a transparency site cannot
promise abundance.

## Typography

One family, Google-hosted, ports to Webflow as a single font:
**Schibsted Grotesk** (variable 400–900, roman and italic). Chosen from a
rendered specimen against Bricolage Grotesque, Archivo, Familjen, Unbounded,
Inter Tight and Rethink Sans: it has Palmetto's warmth and chunk at 900 italic
without Unbounded's tech feel or Archivo's squared, Kiewit-adjacent caps.

| Role | Weight / style | 375 | 1440 |
| --- | --- | --- | --- |
| Hero H1 | 900 italic, −2.5% tracking, 0.93 lh | 44 | 92 |
| Stat figure | 900 italic, −4.5%, 0.8 lh | 86 | 228 |
| H2 / campaign line | 900 italic | 36 | 72–120 |
| Stat label, subhead | 700 | 18 | 28 |
| Body | 400 / 500 | 17 | 18–21 |
| Footnote | 500, numeral in 900 | 14 | 16 |
| Pill (qualifier, date, nav, button) | 600 | 14 | 15–20 |

Sentence case throughout; no all-caps (also keeps it away from Kiewit). This
departs from the current system's Geist and from its "stat figures are Light"
rule — figures here are Black.

## Colour

| Token | Hex | Role | Share |
| --- | --- | --- | --- |
| `field/brand` | `#D8B471` gold | The owned field: cover, hero, social, hoarding, vehicles | ~44% |
| `field/tonal` · `text/primary` | `#143251` navy | Tonal field (gold type on it) and all text on gold/cream | ~26% |
| `surface/reading` | `#F3F1D0` cream | Long reading, FAQ, footnote-heavy rows | ~18% |
| `surface/page` | `#FBFAF0` paper | Neutral page between fields (derived off-white) | — |
| `accent/spark` | `#AFECF1` aqua | Pills and links on navy only. Never a field — and never beside the water question | ~6% |
| `brand/blue` | `#238FC8` | Illustration line, display type ≥32px bold only | ~4% |
| `text/link` | `#165E88` | Links on cream/paper (derived from blue) | ~2% |

**Why gold, not blue** (by looking): a blue field reads as a utility bill —
every energy company is blue. Gold is warm like Palmetto's red, reads as late
light on Indiana County farmland, and pairs with navy at a ratio that works at
every size. Blue + white is 3.60:1 and would confine all type on the brand
field to large sizes.

**Contrast (WCAG 2.2 AA)**

| Pairing | Ratio | Use |
| --- | --- | --- |
| Navy on gold | 6.66 | All sizes |
| Gold on navy | 6.66 | All sizes |
| Navy on cream | 11.41 | All sizes |
| Cream on navy | 11.41 | All sizes |
| Aqua on navy | 10.03 | Pills, links on navy |
| Navy on white | 13.09 | All sizes |
| Link `#165E88` on cream | 6.12 | Links |
| Link `#165E88` on gold | 3.57 | **Not allowed** — links on gold are navy, underlined |
| White on blue `#238FC8` | 3.60 | ≥24px, or ≥18.66px bold only |
| Navy on blue | 3.64 | Large only |
| Gold `#D8B471` text on cream | — | Never |

**Kiewit watch-out:** gold is ochre, not safety yellow, and always carries
navy or cream type, never black; no squared caps.

## Voice

Plain, specific, a little cheeky — the cheek lives in the framing, never in
the facts. Qualifiers (*anticipated*, *projected*, *up to*, *expected*) stay,
and get their own pill.

Sample headlines (voice samples, **not approved copy**; facts unchanged):

1. Fact sheet: "~3M cubic meters — earth moved, roughly the volume required
   to build Egypt's Great Pyramid of Giza" → **"Roughly one Great Pyramid of
   earth. Moved."** with ~3M and the full label beside it.
2. Fact sheet: "Up to 4.4 GW — energy expected to be produced on-site" →
   **"Up to 4.4 GW. Expected to be made right here."**

Site copy itself is locked; the board's hero uses the QA file's H1 and intro
verbatim.

## Imagery

Real people, the real place, the real build — shot warm (late light), cropped
tight, and framed in a tall arch inside the gold field rather than run
full-bleed under the headline. People are named in captions (name, trade,
union, home town) or they do not run. Every frame carries a `Kind` pill on
the image — *Photograph* or *Rendering* — plus month and year. A rendering
says "Rendering" on the picture, not in a caption.

Illustration (Palmetto's drawn house): single-weight line drawings in
`brand/blue` on cream, of neighbourly things — a house, a road. Never the
campus, which would be a rendering by another name.

On the board, supplied images are labelled "Stand-in — suspected generated
image, not a photograph of the campus"; missing photos are striped gold
placeholders with the brief inside the image area.

## Motion (Interactions 2.0)

Confident but short, no overshoot.

| Moment | Behaviour | Webflow |
| --- | --- | --- |
| Hero load | H1 lines rise 24px and fade in, 60ms stagger, 500ms ease-out | Page load, native |
| Colour band entry | Gold/navy field wipes up from the bottom edge, 600ms | Scroll into view, native |
| Stat figure | Figure slides in 40px from left; pill and footnote fade after 150ms. **No count-up** — a rolling number is a number that is briefly wrong | Scroll into view, native |
| "Power Plant Rd." band | Horizontal drift tied to scroll (±80px) | Scroll progress, native |
| Pills / buttons | Fill swap navy↔gold, 160ms | Hover + focus, native |

All honour `prefers-reduced-motion` (custom code: one CSS media query).

## The receipt

Each figure is a row: **pill** (qualifier or date) → **figure** (900 italic,
with a footnote numeral in 900 at 28% size) → **label** (700) → **footnote**
(numeral set big in 900, text in 500, under a 2px navy rule) — all inside the
same coloured field, no asterisks, no foot-of-page pointer.

| Figure | Pill | Footnote / date |
| --- | --- | --- |
| 1,800+ | *As of September 2026* (CMS date field) | — |
| 10,000+ | *Anticipated* | Footnote 1, verbatim |
| ~1,000 | *Anticipated* | Footnote 2, verbatim |
| 4.4 GW | *Up to* | — (label keeps "expected") |

Rule for printed things: hoarding, vehicles and signs carry stable figures
only (4.4 GW, 3,200+ acres, ~3M m³). Moving figures go only where they can be
updated (web, email, social with its date pill).

## In the world (on the board)

- **Site hoarding, Power Plant Road** — gold/navy/gold triptych: "Under
  construction.", Up to 4.4 GW, 3,200+ acres, community inbox.
- **Social card 1080²** — 10,000+ with footnote 1 verbatim on the card.
- **Hard-hat sticker** ("Built in Indiana County, PA") and **hi-vis patch**
  ("Power Plant Rd. · Crew · Homer City, PA").
- **Community-liaison pickup** — gold livery, navy stripe, site address.
- **Construction-update email header** — the real Sept 16 heavy-equipment
  advisory, gold italic on navy.
- **Gate sign** and **Route 119 billboard** (billboard line is a voice
  sample).

## What it avoids

Kiewit yellow-and-black and squared caps; spin and superlatives ("powering
the future", "world-class"); stock photography; generated imagery of the
campus, town or workers; count-up animations; aqua fields near water
content; the words and figures the fact rules ban.

## Doubts

- Gold is softer than Palmetto's red; at full bleed it is warm, but it will
  never have that red's shout. That is arguably right for this audience.
- The direction leans on photography it does not have yet. Without real,
  named, warmly-shot people it falls back to type-and-colour, which is strong
  but not Palmetto.
- 900 italic for long locked headlines (the 12-word H1) is heavy at 375;
  shorter headlines would serve this direction better if copy ever unlocks.
- "Power Plant Road" as a name assumes residents identify with the road;
  confirm locally.
