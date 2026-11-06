# Research synthesis

Phase 1, 6 November 2026. Drawn from the six angle files in this folder,
`../../docs/source/external-context.md` (not re-researched) and the Homer City
QA content snapshot (`../content/homer-city-qa.md`).

**Read this caveat first.** Every researcher fetched pages as text, not
rendered screens. Layout, voice, structure and Webflow mechanics are reliable;
typefaces, hex values and motion on most references are marked "verify" or
"background" in the angle files. Designers should open a reference before
borrowing its look. Nothing here was copied into Figma as an image.

---

## 1. The one finding

All six angles found the same gap from different directions:

> **Nobody puts the receipt next to the claim.**

- Energy-campus sites (Microsoft, Google, Intel, Meta): commitments and
  rebuttals with no inline source, date or document.
- Construction programmes (Sizewell C, Gateway, Mortenson): headline figures
  with no source or as-of date. Tideway's "Data last updated" is the nearest.
- Civic and data sites (OWID, GOV.UK, ProPublica): provenance exists, but on
  charts and errata pages, never on a stat row beside a figure.
- Type and motion: no one designs footnotes and date stamps as a visible
  element, and no one animates a figure together with its qualifier.

A site where **every figure carries its date, its footnote and a document**
would be unique in the whole set. That is not a style. It is the brief, and
every direction must do it. Directions differ in *how* it looks and feels.

---

## 2. Shared patterns (use them, don't count on them for distinctiveness)

| Pattern | Seen at | For us |
| --- | --- | --- |
| Topic doors named for neighbour worries (water, noise, traffic, jobs, bills) | Microsoft, Google, Intel | Needed. Card grids are the cliché; what is behind the door is the differentiator. |
| Dated, reverse-chronological update log with concrete detail (hours, gates, dust) | Microsoft East Point, GOV.UK "See all updates" | Maps to the alert banner + News collection. |
| Named human contact closing every update | East Point, AEP, Gateway | Maps to the four inboxes. Never collapse them. |
| Proof in site units: work hours, trades, apprentices, local share | Vogtle, Hinkley, Gateway | Matches the §6 workforce ledger. |
| Status and date on the component, not in the caption | Tideway, GOV.UK | Matches the repo's "brief is not a caption" rule. |
| Big numbers turned into pictures | Tideway (pools) | We have one sourced comparison: ~3M cubic meters ≈ the Great Pyramid of Giza. Use only that one. |
| Progress as camera or dated gallery | Gateway, Hinkley | The 1969–2026 photo essay. |
| Two dates per figure: "as of" and "next update" | OWID | Worth testing: it turns a stale number into a promise. |
| Third-person errata log ("originally said…") | ProPublica, Texas Tribune | A strong sceptic signal. Cheap in Webflow CMS. |
| Restraint in motion; motion earns its keep in nav | Ørsted, Fervo, CFS, GOV.UK | Serious operators ship plain heroes. |
| One accent colour that means one thing | GOV.UK yellow focus, OVO green | Matches "blue means link". |
| Navy carries all text; variety comes from grounds | Computed contrast (type-and-color) | Under Anchored latitude, gold and aqua are grounds with navy text, never text. |

## 3. Clichés to avoid (named so the critic can block them)

**Imagery:**
- Turbine, pylon or stack at golden hour, centred, one-line headline.
- Handshake and hard-hat stock: clean PPE, smiling at a tablet.
- People small in a vast landscape (EDP). It makes the place scenic and the
  workforce anonymous, the opposite of the brief.
- Stock server racks, and glowing "network" lines on navy.
- An uppercase label over a transparent header over golden-hour photography.
  This is the construction-sector default (Mortenson, Sundt, Kiewit).

**Marks and colour:**
- Leaf, lightning bolt, swoosh or flame marks, and green to borrow an
  environmental credential.
- Blue-to-green gradients, neon on navy.
- Aqua near the water question. Bright, clean water-blue beside an
  unsourced reservoir claim (open question #14) reads as spin.

**Language:** "powering the future", "energising communities", "a brighter
tomorrow", "sustainable solutions", "partnering for progress", and "Safety is
our #1 priority" (the QA file's line; the fact sheet's is more specific).

**Behaviour:**
- Unsourced comparatives ("86% cheaper than…").
- Count-up animations on figures. They contradict "~1,300 is not 1.3K".
- Carousels for news or partners.
- Mascots and wordplay while a permit appeal is live.

## 4. Open territory (gaps nobody owns)

1. **Receipts next to claims.** A ledger with row-level provenance: figure,
   qualifier, label, footnote, as-of date, source document. Every direction
   owns this; the question is its voice.
2. **A named, local workforce as the identity.** Nine trades, the local share
   (~95%), 135+ apprentices, union locals, people with names and hometowns.
   Nobody in energy or construction makes the workforce the organising device.
   *Constraint:* only three union names exist (QA file, unconfirmed: E12), and
   every quote portrait is a placeholder (E13).
3. **Sceptic-grade long answers.** Each contested question as a first-class
   page: claim, evidence, document, date, and "what we don't know yet".
   *Constraint:* the permit-appeal answer is a draft needing legal sign-off
   (§10 #5), and the water answer has no client source (§10 #14).
4. **A specific place as the brand.** Every reviewed brand is corporate or
   national. A US county and a named town, with a build in progress, has no
   designed identity anywhere in the set.
5. **A "dated record" typographic voice.** Date stamps, source lines and
   footnotes designed as a feature rather than fine print: mono, small caps or
   tabular figures.
6. **The figure never animates; only its row arrives.** A stat reveal that
   keeps the exact figure and its footnote together, as a brand trait.
7. **Construction progress as time, not spectacle.** A calm, dated,
   caption-honest image sequence with Photograph and Rendering labels.
   Native as tabs or click-through, not video scrubbing.
8. **A warm register that is neither safety yellow nor renewables green.**
   Cream and ochre, rural and printed. It is unclaimed, and honest about a
   gas-fired campus. *Watch:* it departs from the root rule of no tinted
   grounds, and gold must stay clear of Kiewit's yellow and black, which
   workers on site wear.

## 5. What the content demands (every direction must fit all of this)

| Demand | Detail | Hardest part |
| --- | --- | --- |
| Footnoted stat ledger | 10,000+ with footnote 1, ~1,000 with footnote 2, both verbatim and both on every surface, social cards included | Long footnotes at 375px, and on a 1080×1080 card |
| Qualifiers as eyebrows | "Up to" 4.4 GW, "Projected" $10 Billion, "Anticipated"… | Must not shrink into fine print |
| As-of dates | 1,800+ as of September 2026 (a CMS field). In November it already reads two months old (E1) | Date as its own field, never in the caption string |
| Workforce ledger | 9 unions (not named), ~95% local, 135+ apprentices, ~2,000 projected by year-end 2026 | Tier A, confirm before publishing |
| Nine trades rollover | Boilermakers, carpenters, electricians, ironworkers, laborers, millwrights, operators, pipefitters, teamsters | Hover, tap and focus paths, with placeholders for 6–9 union names |
| Four contact inboxes | Job Seekers, Community, Vendors & Partners, Media. Two share a Kiewit address | Four routes, not one form |
| Long FAQ answers | 32 questions in six categories (QA file); the permit and water answers are long and contested | Readable 600-word answers on a phone |
| Photo essay 1969–2026 | Dated frames. First steel is March in the photo and April in the timeline (§10 #12) | Date-led sequence |
| Rendering vs photograph | The deck's cover is a render (§10 #10) | A label every direction designs, not an afterthought |
| Attributed quotes | Name, role, organisation and a real photo, or the quote doesn't run | All QA portraits are placeholders |
| Alert banner | Info, Construction, Urgent; dismissible; CMS-driven | Must not read as an ad |
| Four pillars | Safety, Infrastructure, Community, Energy Future, in that order | Pillar colour marks pillars only (current rule; directions may restate it) |
| Site breadth | 18 page templates in the QA file | Components must cover all of them |

## 6. Type and colour inputs for the directions

From `type-and-color.md`. All are Google Fonts (OFL), so they are
web-licensable.

| Register | Display | Text | Mono | Note |
| --- | --- | --- | --- | --- |
| Accountable record | Newsreader / Source Serif 4 | Public Sans | JetBrains Mono | A serif is the under-used trust signal in energy |
| Warm editorial | Fraunces | Source Sans 3 | IBM Plex Mono | Regional newspaper; cream-led |
| Industrial signage | Archivo (width axis, condensed) | Archivo | Space Mono | Closest to the build site |
| Tradesperson voice | Big Shoulders Display | Hanken Grotesk | IBM Plex Mono | Hero sizes only, or it shouts |
| Rural slab | Zilla Slab / Bitter | Public Sans / Source Sans 3 | IBM Plex Mono | County-fair, rooted |
| Maximum legibility | Source Serif 4 | Atkinson Hyperlegible Next | JetBrains Mono | Older and low-vision readers |
| **Control, avoid** | Plus Jakarta Sans | Hanken Grotesk | — | Too close to the current Geist |

Colour temperatures, all from the client's five colours (Anchored):

| Temperature | Ground | Accent | Risk |
| --- | --- | --- | --- |
| Cool institutional | White, navy bands | Blue = link | This is the current design |
| Warm paper | Cream | Gold rule or fill | Departs from "no tinted grounds"; must say so |
| Gold-forward | Navy page, gold CTA ground | Gold | Kiewit yellow; keep the gold muted |
| Navy night | Navy throughout | Aqua, plus gold for the one CTA | Long reading needs a light mode |
| Aqua daylight | Aqua | Cream, gold | The water claim; probably avoid |

Contrast facts, computed: navy carries text on every anchor ground. Blue
`#238FC8` is 3.60:1 on white, so it serves large text and UI only. Gold and
aqua never carry text on a light ground.

Tabular figures (`tnum`) need custom CSS in Webflow. Any direction that leans
on them flags it as an Embed cost.

## 7. Motion inputs

- **Native in Webflow Interactions:** reveals and stagger, hover, click,
  page load, scroll-in-view, scroll-scrubbed progress, nav open, accordion,
  tabs, and text-split reveals (via the new GSAP-powered engine).
- **Native, but verify in the Designer:** a reduced-motion path through
  Conditional Playback. Who sees what is set per interaction under Runs On.
- **Custom code, flag as a cost:** number count-ups, pinned scroll stories,
  video or canvas scrubbing, shared-element page transitions, smooth-scroll,
  and search autocomplete.
- **Performance:** GSAP loads site-wide once any interaction uses it. Use
  transform and opacity only. No autoplay hero video on rural mobile.
- **Pitfall:** scroll-linked interactions reverse on scroll-up. Reveal once.

## 8. What this means for Checkpoint 1

- The **evolution** direction keeps the current cool-institutional palette and
  Geist lineage, and adds the receipts-next-to-claims ledger as its upgrade.
- **Distinctness levers** that hold up under research:
  - Serif versus grotesque versus slab versus condensed.
  - Cream, navy, gold or white grounds.
  - How much the workforce is the identity versus the place.
  - Motion energy: still, a quiet stagger, or a time-led sequence.
- **Stretch candidates:** a "dated record" newspaper direction (serif, mono
  stamps, cream); a tradesperson/signage direction (condensed, gold-forward,
  workforce as the organising device).
- **Do not propose:** an aqua-led direction (water risk); anything that looks
  like a utility rebrand (gradient, swoosh, sunset).

## 9. Network and verification notes

- Unreachable during research: communityoffshorewind.com (blocked by the
  environment's network policy), hinklypointc.co.uk (DNS), Sound Transit
  (DNS); several 403 and 404 responses. Logged in the angle files.
- No prompt-injection text was found in any page fetched.
- Before Phase 2, a designer should screenshot and verify these references,
  whose visuals are unconfirmed: Tideway, Gateway, OWID, CFS, Ørsted, and the
  BIG, Heatherwick and Foster type pages.
