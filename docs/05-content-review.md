# Rebuild — content review and Figma sequence

The client chose **Direction 1 (Modern)**. We rebuild the site from a fresh
canvas, with real content, in the new Figma file:

**File:** [Longacre — rebuild](https://www.figma.com/design/8RV4XecnHv5rFzjQVnSuNV/Untitled)
(`8RV4XecnHv5rFzjQVnSuNV`)

This document is the detailed review of the content supplied on 3 Nov 2026.
It also sets the order in which the Figma file gets filled. Sources:

| Source | Dated | Role |
| --- | --- | --- |
| `source/content-outline.md` | 28 Sep 2026 | **IA + page copy.** Newest. |
| `source/fact-sheets-sept-2026.md` C | 24 Sep 2026 | Economic impact + workforce figures |
| `source/fact-sheets-sept-2026.md` B | 9 Sep 2026 | Power plant, fuel supply, power FAQs |
| `source/fact-sheets-sept-2026.md` A | 4 Sep 2026 | Quick facts, timeline, contacts |
| `source/fact-sheets-sept-2026.md` D | Sep 2026 | Workforce social graphic |
| `source/iup-deck.md` | 28 Jul 2026 | Photography + dated photo essay |
| `source/fact-sheet.md` | 6 May 2026 | Superseded except for footnote wording |

---

## 1. What is in the new Figma file

| Page | State |
| --- | --- |
| Direction | **Moodboard** "Modern" (9 slides) + **12 desktop comps** on the *old* IA |
| Site Map, Content, Design System Documentation, Component Library, Mobile Site, Desktop Site | Empty |

The comps' 13 components (Site header, Site footer, Alert bar, Button, Icon,
Stat block, Milestone entry, FAQ row, News card, Link tile, Route card, Chip,
Contact route) and ~1,400 colour bindings point at a **remote library that is
not linked to this file.** Nothing is editable at source; the file has zero local
variables, text styles or components. A fresh canvas therefore means fresh
foundations. The comps stay on Direction as the visual reference.

### What the Modern direction looks like

Taken from the moodboard and comps — this is what we carry forward:

- Full-bleed aerial hero, dark scrim, large Geist Regular headline (~104px),
  two frosted "News · date / Milestone · date" cards bottom-right.
- Navy "by the numbers" band: figures in Geist Light with a unit suffix, a
  qualifier eyebrow above (*Up to*, *Projected*, *Anticipated*), and the
  footnote under the label.
- Large-radius photography (~24px), pill buttons with a circular arrow
  chip, chips for filters, plus-in-circle FAQ rows on navy.
- Two-column "section with photo" pattern: eyebrow, H2, stat pairs, buttons
  left; rounded photo right.
- Pillars as a vertical list, with the active one expanded beside a photo.
- Timeline: year + phase label left, a vertical rule, dated entries right.
- Warm off-white (`stone/50`-like) alternating with white and navy.

The direction **contradicts** four rules currently written in `CLAUDE.md` §7.
They are rounded media (rule: `radius/media` 4, surfaces 0), pill buttons, the
frosted cards in the hero ("no cards"), and pillar colour dropped from the
pillars list. The client chose this direction, so `CLAUDE.md` §7 gets revised
to describe it. It is not overridden silently. See §6 Q-D.

---

## 2. The new IA (from the outline, slide 1 + nav bars)

The outline replaces the comps' seven-section IA. **8 top-level nav items,
21 pages.** Status shows what the content supports today.

| Nav | Page | Outline slides | Content status |
| --- | --- | --- | --- |
| **Homepage** | Home | 3–5 | ✅ Full |
| **What We're Building** | Campus Future (The Campus + The Power Plant) | 7–8 | ✅ Full; "Data Center [facts / stats]" placeholder inside |
| | Power Plant & Fuel Supply | 9–11 | ✅ Full (= fact sheet B) |
| | Data Centers | 12 | ⛔ "TBD — placeholder for information from Amazon" |
| | Campus History: Then & Now | 13 | 🟡 Copy present; "[additional historical details?]", "[add demo brown field clean up]" open |
| | Development Timeline | 14 | ✅ Full |
| **Who We Are** | Campus Partners + Local Partners | 16 | 🟡 Campus partners have copy; AWS "TBD on initial inclusion"; local partners are role + "[link to website]" only |
| | Campus Pillars | 17 | ✅ Full |
| **Careers** | Meet Our Workforce | 19–21 | ✅ Copy, stats, 5 attributed quotes; 3 IBEW Local 5 videos referenced but not supplied |
| | Job Opportunities | 22 | ✅ Full (9 trade descriptions + Kiewit URL) |
| **Community Stewardship** | Overview | 24 | ✅ Full |
| | Water Stewardship | 25–26 | ✅ Full; footnote ¹ referenced but missing |
| | Sound | 23–24 | ⛔ "[Sound] TBD" |
| | Health & Safety | 27 | ✅ Full |
| | Economic Impact | 28–29 | ✅ Full |
| | Giving Back | 30 | ⛔ "[Placeholder for info on local philanthropy …]" |
| **FAQs** | FAQs | 32 | 🟡 **29 questions in 6 categories; answers exist for only 4** (fact sheet B) |
| **News & Resources** | Hub: Alerts, News, Press releases, Fact sheets | 34 | 🟡 Structure only; 6 real headlines on Home (slide 5) |
| | Photos & Videos, Soundbites, Spotlights | 35 | 🟡 Structure only |
| **Contact Us** | Contact | 37 | ✅ Full (adds a Facebook line) |

Global: an **alert bar** with real copy ("Heavy Equipment Transport to Homer City
Energy Campus Begins September 16. Read More >>"). **Common Questions** (3–4
questions) and **Learn More About the Campus** (6 link tiles) repeat at the
foot of most pages, as does an SMS sign-up line ("please text XXXX").

---

## 3. Figure and wording conflicts

Ranked by risk on a transparency site. Each has a **proposed resolution**; none
is final until the client confirms the ones marked *client*.

### A. Figures

| # | Conflict | Where | Proposed |
| --- | --- | --- | --- |
| A1 | **"~4.4 GW"** vs **"Up to 4.4 GW"** | Outline Home stat vs every fact sheet | **Up to 4.4 GW.** "~" means "about"; the source means a ceiling. |
| A2 | **CO₂: "60% less"** vs **"60–65% lower"** | Fact sheet B (×2) vs outline Stewardship | **60% less per MWh** — the dated fact sheet, and the only one that states the unit. *client* |
| A3 | **Efficiency: "40% more efficient"** vs **"30% more efficient"** | Fact sheet B (×2, "on a heat rate basis") vs outline Stewardship | **40%.** Same reasoning. *client* |
| A4 | **"55+ year legacy"** vs **"For 54 years"** vs **"nearly 55 years"** | Outline Home stat, Campus Future, History | 1969 → 1 Jul 2023 is 54 years. "55+" is not true of the power-producing period. Propose **"54 years"** or **"1969–2023"**. *client* |
| A5 | **Workforce "as of" date: 7 Sep vs 4 Sep 2026** | Outline Home footnote vs fact sheet C | **4 September 2026** — the date the data was cut. *client* |
| A6 | **"~1,800"** vs **"1,800+"** | Outline Home stat vs every other source | **1,800+** |
| A7 | **"over 95%"** vs **"95%"** vs **"~95%"** | Outline Home differentiator vs C/D vs Sep press release | **95%**, with footnote ⁵ ("Local refers to…") always attached. "Over" overstates. |
| A8 | **"nearly 10,000"** vs **"10,000+"** | C page 1 prose vs C page 2, A, outline | **10,000+** in stats; leave "nearly" only if the client wants the prose verbatim. *client* |
| A9 | **"< $10 billion"** | Outline slide 8 | Typo for "more than". Use **$10 Billion+** / "more than $10 billion". |
| A10 | **Turbine delivery: "began" Sept 2026** vs **"anticipated, late 2026"** | Outline timeline (28 Sep) vs fact sheet A (4 Sep) | **Began September 2026** — newer source, and it agrees with the alert bar. Show it as complete. |
| A11 | **"1.8 GW"** old plant output | Fact sheet B FAQ only | Fine to use, sourced to B. |

### B. Names and wording

| # | Issue | Proposed |
| --- | --- | --- |
| B1 | **"Coal."** CLAUDE.md §5 rule 0 bans the word because "it appears in no client document." It now appears in **every** new client document, about 20 times. | Rule 0 is obsolete. Use the client's phrasing ("the former coal plant"). Update CLAUDE.md. *client* (Q-A) |
| B2 | **"At Homer City Generating Station, our highest priorities…"** and "Homer City Generating Station engaged with local police…" (Health & Safety) | That is the *former plant's* name. Almost certainly **Homer City Generation**. *client* |
| B3 | **Homer City Generation vs Homer City Redevelopment.** The outline uses both, and has an FAQ asking the difference. FAQ wording says "the Homer City Redevelopment site". | Use **Homer City Generation** for the company, **Homer City Energy Campus** for the place. The FAQ answer needs client copy. |
| B4 | **Safety pillar.** "Safety is **our** #1 priority" (outline) vs "Safety is every **HCG / Homer City Generation employee's** #1 priority" (fact sheets) | Fact-sheet wording on the pillar (it is fixed brand architecture); the outline's shorter form is fine inside the Workforce Commitments list. |
| B5 | **Removed milestones.** Fact sheet A (Sep) dropped "Corey Hessen appointed CEO" and "Senator McCormick's summit". The old comps still show both. | **Drop both** from the timeline. Corey Hessen appears in a news headline — fine there. |
| B6 | **Construction phase label:** "2026–2027: Construction" + "2028: Operations begin" (A, outline) vs "2026: Construction" in the comps | Use the new labels. |
| B7 | **"7 7HA.02 gas-fired GE Vernova turbines"**, "7HA 02" | Typos. **Seven GE Vernova 7HA.02.** |
| B8 | **"Powerblock" / "Power Block"** | Neither appears in the new sources. Only matters if the tour content returns. |

### C. Footnotes

The **10,000+** and **~1,000** footnotes now exist in two versions. The long
one (May + Sep one-pagers) ends "…based on a 2024 data center and power
generation economic impact analysis commissioned by Homer City Generation." The
short one is in fact sheet C (24 Sep) and the outline. **Proposed: the long
version.** It names the study, which is what a sceptic needs. The short one
reads as an abridgement for space. *client*

New required footnotes, which travel with their figures exactly as §5.2 requires:

| Figure | Footnote |
| --- | --- |
| 9 unions / "direct-hire" | Direct-hire workforce excludes contractors. Data as of September 4, 2026. |
| 95% local | Local refers to workers dispatched from the local union halls with jurisdiction over the project. |
| Zero OSHA-recordable incidents | As of September 4, 2026. |
| $10 Billion+ | With data center development to add billions more. |

**Missing footnote:** the Water page's lead paragraph ends in "¹" and the
outline supplies no footnote text. *client*

---

## 4. Gaps — content the outline asks for and does not supply

| Gap | Blocks | Handling until it lands |
| --- | --- | --- |
| Data Centers page (Amazon) | That page; "Data Center" callout on Campus Future; AWS partner card | Page designed as an explicit "coming" state, not lorem |
| Sound page | That page; one Stewardship tile | Tile omitted, not shown as TBD |
| Giving Back | That page | Designed as an empty carousel with a production brief |
| **25 FAQ answers** | FAQ page, every "Common Questions" block | See Q-C |
| Local partner descriptions + URLs (Independence Excavating, Kovalchick, Aquatech, Edwards) | Local partners | Logo + role only, which is what the outline shows |
| 3 IBEW Local 5 videos + Shawn/Isaac footage | Meet Our Workforce | Video frame component with brief |
| Photos of the 5 quoted people | Quotes (CLAUDE.md §5.6 requires a photo) | Quote component with a portrait slot + brief; quote does not ship without it |
| Names of the other 6 unions | Union scroller (slide 4) | Quotes name 3: Boilermakers Local 154, IBEW Local 5, Plumbers & Pipefitters Local 354 |
| SMS short code ("text XXXX") | Alerts sign-up | Shown as a field placeholder, flagged |
| Water fact sheet + Sound fact sheet (download CTAs) | Download cards | Card with "coming" state |
| History: "[additional historical details?]", "[add demo brown field clean up]" | History page | Omitted |
| Facebook URL for "@Homer City Redevelopment" | Contact, footer | Placeholder link |
| Safety value 5 text is clipped in the graphic | Health & Safety | Inferred wording, flagged |

### Open questions this content **resolves**

- **#3 Independence and Kovalchick:** named, with roles (site demolition; site
  salvage and recycling). Descriptions and logos still needed.
- **#14 The water answer:** the client's own copy now names Two Lick Reservoir,
  owned and operated by Homer City Generation, with usage "in line with the
  historical usage levels of the former coal plant". This moves from tier B
  to client copy. Missing footnote aside, it can ship.
- **#2 Unions:** partly. 3 of 9 are now named publicly by their own officers.

---

## 5. Imagery available

| Asset | Kind | Where |
| --- | --- | --- |
| IUP deck construction photo essay (1969–2023 → Jul 2026) | Photograph | Already on the Direction moodboard |
| Workforce assembled on site, aerial | Photograph | Workforce graphic (D) + moodboard pillars slide |
| Shawn (Trafford, PA), Isaac (Penn Hills, PA) | **Video stills, name tags burned in** | Outline slide 4/19 |
| Power plant, aerial | **Rendering** | Outline slide 4/8/9 |
| Data-center campus in landscape | **Rendering** | Outline slide 4/8 |
| Overall campus site plan (Kimley-Horn) | Drawing | Outline slide 8 — the "interactive site map" base |
| Stacks and towers demolition (YouTube still) | Video | Outline slide 13 |
| Partner logos ×9 | Logo | Outline slide 16 |

Renderings carry `Kind = Rendering` on every surface (CLAUDE.md §7).

---

## 6. Decisions (3 Nov 2026)

| # | Question | Decision |
| --- | --- | --- |
| Q-A | Adopt the client's "former coal plant" wording? | **No — keep avoiding it.** Rule 0 stands even though the client's documents now use the word. Client sentences containing it are re-phrased to "the former Homer City Generating Station" / "the former plant", and each re-phrasing is flagged in the Content page so the client sees the change. B1 is resolved this way. |
| Q-B | How to resolve figure conflicts | **The dated fact sheet wins.** The §3 proposals are working copy, and each one is flagged in Figma for client confirmation. |
| Q-C | The 25 missing FAQ answers | **Draft from sources only.** An answer is assembled only from sentences already in client documents, cites its source and carries a DRAFT flag. A question with no sourced answer ships unanswered. |
| Q-D | Modern direction vs CLAUDE.md §7 | **Follow Modern and rewrite §7 to describe it**: rounded media, pill buttons, frosted hero cards. Unchanged: blue means link, the stat ledger, footnotes travel with figures, contrast and scrim rules, sentence case, no tinted grounds. Rewritten in step 3 alongside the tokens. |

---

## 7. Sequence for filling the Figma file

Each step ends in a review gate, per CLAUDE.md §3.

| # | Figma page | Work | Why this order |
| --- | --- | --- | --- |
| 1 | **Site Map** | The §2 IA as a tree: 8 nav items, ~27 pages, each with a status chip (ready / partial / blocked) and the shared modules it uses | Everything else hangs off it; the client can approve scope in one look |
| 2 | **Content** | Page-by-page copy decks: every block of copy in order, each figure tagged with its source and date, conflicts and gaps flagged in place | Copy approval is the slowest client loop; start it first. Also tells us which components exist |
| 3 | **Design System Documentation** | Local variables (Primitives → Semantic → Typography Desktop/Mobile → Motion), text styles, effects. Built from `design-system/tokens.json`, re-tuned to the Modern direction | No component can be bound until these exist; the comps' library is orphaned |
| 4 | **Component Library** | ~25 sets: carry-overs from the comps (header, footer, alert bar, button, stat, milestone, FAQ row, news card, link tile, chip, contact route) + new ones the outline needs (sub-nav, at-a-glance tile, fact-check list, partner logo card, quote with portrait, video frame, download card, how-it-works diagram, interactive timeline with hover photo, site-map hotspot, image band with Kind) | Pages are assembled from instances, never drawn |
| 5 | **Mobile Site** | 375px, Home first, then nav sections in IA order | CLAUDE.md §9: mobile is the primary comp |
| 6 | **Desktop Site** | 1440px, same order | Mostly re-flow of the mobile build |
| 7 | Repo | `CLAUDE.md` §3/§5/§6/§7/§10, README, tokens | Keeps the next session honest |

| Step | Status |
| --- | --- |
| 1 Site Map | ✅ Approved |
| 2 Content | ✅ Built — 23 copy decks |
| 3 Design system | ✅ Built — 244 variables, 16 text styles, 3 effects |
| 4–7 | ⬜ |

### Step 2 output — Content page

23 frames, one per page in nav order (plus a legend and a global
header/footer deck). Every field names its source. Flags are production
notes and never publish:

| Flag | Count | Meaning |
| --- | --- | --- |
| Changed | 44 | Client copy re-phrased ("coal" removed) or a figure corrected to the dated fact sheet |
| Draft | 26 | FAQ answers assembled from client sentences |
| Gap | 44 | Content not supplied |
| Footnote | 20 | Required footnote attached to its figure |
| CMS | 17 | Collection field, date-stamped where it moves |

Audit: no publishable field contains "coal", "4.5 GW", "~4.4", "over 95%"
or "~95%".

FAQ: 35 questions — the client's 29 plus 6 asked in "Common questions"
blocks on other pages — plus 1 held (air quality appeal, not on the client
list). 4 client answers, 26 drafts, 5 unanswered: HCR vs HCG, financing,
renderings, customer selection, who builds the data centers.

**New questions surfaced while writing the decks** (added to CLAUDE.md §10):

- Home credits the April 2025 announcement to *Homer City Redevelopment*;
  Campus future credits *Homer City Generation*. Which?
- Water copy names both *Two Lick Reservoir* and *Two Lick Creek* as the
  withdrawal point.
- NextEra's role ("delivering the natural gas") is not in the power fact
  sheet, which names the pipeline operators instead.
- Two superlatives can't survive removing "coal": "largest coal-burning power
  plant in Pennsylvania" (Campus future, History). Dropped; client may supply a
  replacement.
- "Campus pillars" or "core values" or "project pillars"; "Giving back" or
  one of two alternates — naming choices the outline leaves open.
- The site address appears in no September document.
- The outline asks for workforce footnotes "in footer of page"; the site
  rule puts them under the label. Rule kept.
- Quotes need dates and portraits; safety value 5 is clipped in the graphic.
