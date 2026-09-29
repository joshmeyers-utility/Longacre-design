# Site v3 — desktop rebuild on the new sections

Figma `06 · Site v3 — desktop` (`192:2`), 29 Sep 2026. All 27 Site v2 pages
rebuilt from scratch at **1920px**, using only the new section designs on the
`New UI` page (`188:5459`). The copy is the same approved deck copy as Site v2
(`docs/source/content-outline.md`). No new copy was written. Each artboard has
an amber annotation key to its right, with 72 numbered pins in all.

## Section templates → where they are used

| New UI section | Node | Used for |
| --- | --- | --- |
| Hero (photo, alerts) | `188:5588` | Home only |
| Hero (white + photo) | `188:5645` | Every sub-page hero (title, deck intro, CTA, true photo or labelled placeholder) |
| Hero-Alt (full photo) | `188:5460` | Not used — only Home gets a photo hero |
| Stats | `188:5488` | Campus / workforce numbers, Power key stats, How it works flow, Economic impact |
| Text beside image | `188:5496` | Splits (dark, cream or white), e.g. From past to present, Past, About our workforce |
| Local economic & job benefits | `188:5674` | Every label + statement grid: at a glance, attributes, pillars, trades, contact routes |
| Story | `188:5561` | Long text: How it works, water commitment, quotes, single-line CTAs, pending content |
| Partners (cards) | `188:5698` | Partners, local partners, learn-more tiles, fact sheets, photos, spotlights |
| Row (carousel) | `188:5513` | Differentiators, photos & videos, videos |
| Questions | `188:5567` | Every common-questions block and the six FAQ groups |
| Rows / Lists | `188:5552` | Latest news, hub collections, alerts / news / press-release lists |
| Hero (tabs) | `188:5628` | Home community stewardship, Our community commitments |
| Timeline | `188:5728` | Development timeline (three phases) |

## Decisions

- **Image bands dropped.** The new set has no full-bleed band. Those photos
  moved into heroes and splits.
- **No template placeholder imagery survives.** Each image is a dated client
  photo from Site v2, or a grey labelled placeholder. Two Lick Reservoir, the
  data center, logos, videos and diagrams stay placeholders.
- **Scrims** sit behind text on the two photo-ground sections (Home hero,
  commitments).
- **Grounds:** hero white › then alternating cream `#EDEAE5` / white / dark
  `#1D1D1F`. No two alike touch, and no dark band sits against the footer;
  this was checked by script.
- **Footnotes stay beside their figures** (Stat footnote slot or the column
  footnote). The deck's own footnote numbering is kept.
- **Text-figure stats** (Not supplied, Front of the meter, the flow labels)
  use `Stat figure sm`.
- **FAQ rows are shown closed.** The deck gives no answers.
- **Production briefs** (the "Carousel of …" lines) are annotations, never
  page text.
- **Footer:** the existing `Footer — site v2` instance, stretched to 1920. It
  still needs a 1920 master.
- **Nav:** the pill from the new hero. "Contact Us" is set in sentence case.

## Still to do

- Bind the new sections' raw values to variables. Cream `#EDEAE5` is not
  `surface/cream` (`#F2EFE9`). Pick one, then sync Foundations.
- Build a 1920 expanded-nav panel and footer master, then do the mobile pass.
- Resolve the flagged items. They are the same set as
  `content-outline.md` › Conflicts and gaps.
