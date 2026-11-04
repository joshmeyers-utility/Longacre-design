# Desktop Site v2 — plan for approval

Rebuild of the desktop site on a new Figma page, **Desktop Site v2**, using
only the section patterns on the client's *Hand Done* page (`67:10340`) plus
the new patterns listed in §2. Structure follows the client's website
structure slide (content outline, slide 1). Copy comes from the Content page
decks with every change made since (short CTAs, no section labels, black
link rows, etc.). **Nothing is built until this plan is approved.** Mobile
follows once desktop is approved, page for page.

Legend: ✅ content ready · 🟡 partial · ⛔ missing — **Flag** = content that
does not fit a pattern, or is not supplied.

---

## 1. Site structure → 20 pages

| Nav | Page | Status |
| --- | --- | --- |
| Home | 1 Home | ✅ |
| What we're building | 2 Campus future (section landing) | ✅ |
| | 3 The campus | 🟡 |
| | 4 The power plant | ✅ |
| | 5 Campus history | 🟡 |
| | 6 Development timeline | ✅ |
| Who we are | 7 Campus partners | 🟡 |
| | 8 Local partners | 🟡 |
| | 9 Our values / project pillars | ✅ |
| Careers | 10 Meet the workforce | 🟡 |
| | 11 Job opportunities (+ job board) | 🟡 |
| Community stewardship | 12 Community stewardship (landing) | ✅ |
| · Stewardship | 13 Water | ✅ |
| | 14 Health & safety | ✅ |
| · Engagement | 15 Economic impact | ✅ |
| | 16 Charitable giving | ⛔ |
| FAQs | 17 FAQs | 🟡 |
| News & resources | 18 News & resources hub (7 sections) | 🟡 |
| | 19 Article (template) | 🟡 |
| Contact us | 20 Contact | ✅ |

"Stewardship" and "Engagement" are nav groupings in the mega-menu, not
pages. Dropped from the current build: Data centers, Sound (not in the
structure; no content).

---

## 2. Section patterns

### From *Hand Done* (P1–P13)

| # | Pattern | Ground |
| --- | --- | --- |
| P1 | Hero, primary — photo, dark-glass header, headline, lead, CTAs, one glass card | photo |
| P2 | Hero, secondary — light header, sub-nav, H1 + lead | white |
| P3 | Numbers & figures — ledger + Download fact sheet | navy |
| P4 | Link to another section — alternating media / text rows, CTA each | white |
| P5 | Link group — title left, link rows right | subtle |
| P6 | Key facts — title left, fact rows right | white |
| P7 | 3-up facts — title, facts in columns, footnote | subtle |
| P8 | Common questions — title left, FAQ rows right | navy |
| P9 | Full-bleed photo | photo |
| P10 | Callout — logo + one sourced statement | black |
| P11 | News row — three items | white |
| P12 | News grid — three stacked columns | white |
| P13 | Timeline — phase split, entries | white |

### New, needed by the requests or the content (P14–P20)

| # | Pattern | Why | Built from |
| --- | --- | --- | --- |
| **P14** | **Union scroller** | Client request (and outline slide 4) | New *Union logo* component (logo slot + name), horizontal marquee |
| **P15** | **Job board** | Client request (row example) | New *Job row* component |
| **P16** | **Alerts** | Construction alerts — see §4 options | Alert row (new) + existing Alert bar |
| P17 | Quotes | Community commentary (workforce, soundbites) | Existing *Quote* component in a split |
| P18 | Partner grid | Campus / local partners | Existing *Partner* component, 2–3 up |
| P19 | Media sequence | History "then & now", photos & videos | Existing *Image*, 3-up grid with date captions |
| P20 | Contact routes | Four inboxes | Existing *Contact route*, 2 × 2 |
| **P21** | **Scroll story** | Client, Nov 2026 — replaces a run of consecutive P4 rows (Granola-style) | New *Story tab* component; `Active=1/2/3` variants, `Show step 3` |

P17–P20 exist as components already; they need a section wrapper only. P14–P16
need new components.

**P14 Union scroller — spec.** Row of union logos with names beneath, moving
slowly left. WCAG 2.2.2: anything that moves for more than 5 s needs a
visible **Pause** control, and `prefers-reduced-motion` shows it static.
Pauses on hover and focus. **Flag:** only 3 of 9 unions are named publicly
(Boilermakers Local 154, IBEW Local 5, Plumbers & Pipefitters Local 354);
no logos supplied. Six slots carry briefs.

**P15 Job board — spec (from the example).** One row per opening: title,
location, tags, employment type, external arrow. Whole row is the link
(opens Kiewit, new tab).

- Fields (CMS *Job board*): title · location · trade · union local · type ·
  posted date · external URL.
- **Flag — no openings were supplied.** Hiring runs through Kiewit's site.
  Proposal: until Kiewit supplies a feed or list, the board shows the **nine
  trades** as rows (e.g. *Ironworkers* · Homer City Energy Campus, Indiana
  County, PA · [Ironworkers] [Union craft] · via Kiewit ↗). No invented job
  titles. Union local shown only where public (3 of 9).
- **Styling decision needed** — see §5 Q2.

---

## 3. Pages

Ground sequence is listed per page; no two adjacent sections share a ground
except a deliberate P4 white group.

### 1 · Home

| # | Pattern | Content | Notes |
| --- | --- | --- | --- |
| 1 | P1 | Headline, lead, *What we're building* / *Local alerts & advisories*, news glass card | |
| 2 | P3 | Campus by the numbers — 5 figures + footnotes · Download fact sheet | |
| 3 | P4 ×3 | From past to present → Campus history · Meet the tradesmen and women → Meet the workforce · See what we're building → Campus future | |
| 4 | **P14** | **Union scroller** — "The unions on site" | Flag: 6 names + all logos missing |
| 5 | P9 | Workforce on site | |
| 6 | P7 | Homer City's unique differentiators (3) + 95% footnote | |
| 7 | P10 | Vision line | |
| 8 | P5 | Community stewardship → Construction alerts · Water · Health & safety · Economic impact · Charitable giving | *Construction alerts* → per §4 choice |
| 9 | P8 | Common questions (4) → All questions | |
| 10 | P11 | The latest news (3) → All news | |
| 11 | P5 | Learn more about the campus (6) | Was a 3 × 2 grid; P5 lists them |

Grounds: photo · navy · white ×3 · **white (P14)** → *see Q3* · photo ·
subtle · black · subtle · navy · white · subtle · footer navy.

### 2 · Campus future (landing)

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | About the Homer City Energy Campus — lead (OL 7) |
| 2 | P9 | Construction aerial |
| 3 | P6 | The vision for Homer City (OL 7) — one key-fact row |
| 4 | P3 | Homer City Energy Campus at a glance — 5 figures (ledger) · Download fact sheet |
| 5 | P4 ×2 | The campus → page 3 · The power plant → page 4 |
| 6 | P5 | Learn more |

**Flag:** "at a glance" was 5 tiles; P3 is a ledger — "One of the largest
natural gas-powered plants in the U.S." is a phrase, not a figure; it moves
into the lead.

### 3 · The campus

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | The campus — sub-nav |
| 2 | P9 + hotspot list | Overall site plan |
| 3 | P6 | Unique site attributes (4) |
| 4 | P3 | Local economic & job benefits — $10B+, 10,000+, ~1,000 + footnotes |
| 5 | P6 | Workforce development · Local power |
| 6 | P8 | Common questions |

**Flags:** the **interactive site map** has no pattern — proposal: P9 with a
numbered hotspot list beneath (no new pattern). Plan image is a flat raster;
vector redraw needed. **Data center** hotspot ⛔ (Amazon).

### 4 · The power plant

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Power plant & fuel supply — lead (B) |
| 2 | P9 | Power plant rendering (`Kind = Rendering`) |
| 3 | P3 | At a glance — Up to 4.4 GW · 7 turbines · Early 2028 · Front of the meter · Download fact sheet |
| 4 | P6 | Key facts (5) |
| 5 | P10 | "The Homer City Energy Campus will help relieve pressure on the Mid-Atlantic region…" (B) |
| 6 | P6 | How it works (3 rows) |
| 7 | P7 | Pennsylvania gas. Two supply paths. (4) |
| 8 | P8 | Common questions (3) |

**Flag:** the **How it works diagram** has no pattern — kept as P6 rows
(plant → grid → customer / local homes). "Front of the meter" is a phrase in
a figure ledger — move to key facts if you prefer.

### 5 · Campus history

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Homer City's history |
| 2 | P6 | Since 1969 · Two grids · Decommissioned 2023 |
| 3 | P9 | Demolition video (`Kind = Video`, March 2025) |
| 4 | P7 | Why Homer City: legacy site attributes (4) |
| 5 | **P19** | Then & now — 12 dated stages |

**Flags:** OL "[additional historical details?]" and "[demo / brownfield
clean-up]" ⛔. Then-and-now photos ⛔ (IUP files and rights).

### 6 · Development timeline

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Campus development timeline |
| 2 | P13 | 2025 · 2026–2027 · 2028 phases (as built) |
| 3 | P8 | Common questions |
| 4 | P5 | Learn more |

Hover photos on milestones: same as now (tap and focus too).

### 7 · Campus partners

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Who is building the campus — intro (OL 16) |
| 2 | **P18** | Homer City Generation · Kiewit · GE Vernova · NextEra |
| 3 | P4 | Local partners → page 8 · Meet the workforce |

**Flags:** AWS "TBD on initial inclusion" — hidden. Logos ⛔ (vectors).

### 8 · Local partners

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Local partners |
| 2 | **P18** | Independence Excavating · Kovalchick Corporation · Aquatech · Edwards Moving & Rigging — role only |

**Flag:** descriptions, URLs, logos ⛔ — a thin page until they land.

### 9 · Our values / project pillars

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Campus pillars |
| 2 | P9 | Workforce assembled on site |
| 3 | P6 | Four pillars (pillar marks) |
| 4 | P8 | Common questions |
| 5 | P5 | Learn more |

**Flag:** name — "Our values" (structure) vs "Campus pillars" (outline) vs
"Project pillars" (fact sheets). Client to choose.

### 10 · Meet the workforce

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Meet the tradesmen and women building the campus |
| 2 | P9 | Workforce assembled on site |
| 3 | P3 | Workforce by the numbers — 6 figures + footnotes · Download fact sheet |
| 4 | P6 | About our workforce (3) |
| 5 | P4 ×2 | Worker spotlights — Shawn, Isaac (video) |
| 6 | **P14** | Union scroller |
| 7 | P7 | Our workforce commitments (3) |
| 8 | **P17** | Community commentary — 5 quotes |

**Flags:** 3 IBEW Local 5 videos ⛔; quote portraits ⛔ (quotes don't run
without them).

### 11 · Job opportunities

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Job opportunities on the Homer City Energy Campus |
| 2 | **P15** | **Job board** — 9 trade rows → Kiewit (see §2) |
| 3 | P7 | Nine trades — what each does (3 × 3) |
| 4 | P10 | Steffee pull — **flag**: quotes are not shortened; use full quote in P17 or a client-approved short version |
| 5 | P5 | How to get hired — Kiewit link · HomerCity.Info@Kiewit.com |

### 12 · Community stewardship (landing)

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Our commitments to the community — intro (OL 24) |
| 2 | P6 | Environmental responsibility (4) — 60% CO₂, 40% efficiency |
| 3 | P5 | Stewardship → Water · Health & safety; Engagement → Economic impact · Charitable giving · Construction alerts |

### 13 · Water

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Water stewardship — lead (OL 25) |
| 2 | P6 | Key facts (3) |
| 3 | P4 | How our water treatment system works — diagram as image + text |
| 4 | P10 | "We are committed to being good stewards of the water we use in Indiana County." |
| 5 | P8 | Common questions (3) |

**Flags:** footnote ¹ ⛔; water fact sheet PDF ⛔ (no download button until
it exists); the treatment **diagram** has no pattern — drawn as an image in
P4.

### 14 · Health & safety

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Health & safety — intro |
| 2 | P3 | Zero OSHA-recordable incidents (as of 4 Sep 2026) |
| 3 | P6 | Construction & community (3) |
| 4 | P7 | Our core safety values (5) |
| 5 | P8 | Common questions (2) |

### 15 · Economic impact

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Economic impact — lead (C) |
| 2 | P3 | By the numbers — $10B+, 3,200+ acres, thousands of homes, 10,000+, ~1,000 · Download fact sheet |
| 3 | P6 | Investment that stays here (6) |
| 4 | P9 | Construction aerial |
| 5 | P7 | Being a good neighbor (4) |
| 6 | P8 | Common questions (2) |

### 16 · Charitable giving — ⛔

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Giving back (name to choose) |
| 2 | P19 | Carousel of images with captions — briefs only |

**Flag:** no content at all. The page exists so the link works; it needs
HCR / Kiewit philanthropy content before launch.

### 17 · FAQs

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | Questions about the campus — search + category chips in the hero |
| 2–7 | P8 ×6 | One per category (alternating navy / white variant) |
| 8 | P5 | Didn't find your question? → four inboxes |

**Flag:** P8 is navy; six in a row breaks the ground rule — propose a
white P8 variant and alternate. 26 draft answers await client approval.

### 18 · News & resources hub

| # | Pattern | Content |
| --- | --- | --- |
| 1 | P2 | News & resources |
| 2 | **P16** | Community alerts & advisories (per §4) |
| 3 | P12 | Latest news (coverage) |
| 4 | P11 | Latest press releases |
| 5 | P5 | Fact sheets (download rows) |
| 6 | P19 | Campus photos & videos |
| 7 | P17 | Community commentary (Pittman, Struzzi) |
| 8 | P4 | Community spotlights — **flag** ⛔ no stories |

### 19 · Article (template)

P2 (type · date · headline) · P9 image · body (rich text — **flag**:
no body pattern; a centred 760 text column) · P3 "Figures in this release" ·
P5 media contact.

### 20 · Contact

P2 · **P20** four inboxes · P10 "Follow Homer City Redevelopment on
Facebook" (**flag** URL ⛔) · P6 location.

---

## 4. Construction alerts — 8 options

Only two real advisories exist (heavy equipment transport, Sept 16; Kiewit
traffic improvements). Every option below is a container; none invents
alerts.

| # | Option | What it is | Needs |
| --- | --- | --- | --- |
| A | **Global alert bar** (today) | Newest active alert on every page, dismissible | Nothing new |
| B | **Alerts section on News & resources** | List, newest first, status *Active / Upcoming / Past*, date range | Alert row component |
| C | **Dedicated Construction alerts page** under Community stewardship | Full list with filters: traffic · heavy transport · road work · demolition · site operations | New page |
| D | **"This week on site" strip on Home** | Next 2–3 alerts with dates, under the hero | Alerts with dates |
| E | **Map of affected roads** | Intersections in Center, Burrell, Black Lick and White townships (OL 28) | Route data from Kiewit |
| F | **Calendar of planned closures / transports** | Month view of dated events | Dated schedule from Kiewit |
| G | **Sign-up module** | SMS (short code ⛔) + email, beside the list | Short code |
| H | **Alert detail page** | What · when · where · roads affected · contact — article variant | Full advisory text |

Recommendation: **A + B + G now** (content exists or is a single missing
code); Home's *Construction alerts* link points at B. C, E, F, H when Kiewit
supplies dated schedules. D only once alerts are frequent enough to fill it.

---

## 5. Decisions needed before building

| # | Question | Recommendation |
| --- | --- | --- |
| Q1 | Approve the 20-page structure (§1) | Yes |
| Q2 | Job board styling: (a) **as the example** — white rounded rows on a black band, outlined tag pills; (b) white rows with hairlines, filled chips (current system) | (a) as asked, but **filled** chips — outlines break "strokes are dividers"; it becomes the second card exception |
| Q3 | Union scroller ground on Home — it sits after the white P4 group; white makes four whites in a row | Subtle (near-white) ground |
| Q4 | Job board content until Kiewit supplies openings: nine trade rows → Kiewit | Yes |
| Q5 | Construction alerts: which of A–H | A + B + G |
| Q6 | FAQ page: white P8 variant to alternate | Yes |

## 6. Component work after approval

| Component | Change |
| --- | --- |
| **Union logo** (new) | Logo slot (brief), name, local |
| **Job row** (new) | Title, location, tag chips, type pill, arrow; Light / on-black |
| **Alert row** (new) | Status, date range, title, area, link |
| FAQ row / section | White-ground variant for P8 |
| Chip | Non-interactive *Tag* variant (job board) |
| Sections P1–P20 | Saved as reusable section components on a *Sections* page |

---

## 7. Build log

| Step | Status |
| --- | --- |
| Decisions Q1–Q6 | ✅ Approved as recommended (client, Nov 2026) |
| New components — Job row, Alert row (Active/Upcoming/Past), Union logo, Chip `State=Tag` | ✅ Component Library |
| **Sections** page — P1–P13 from *Hand Done* as components, P8w (white FAQ), P14–P20 new | ✅ |
| Desktop Site v2 · 1 Home | ✅ — awaiting review |
| Desktop Site v2 · 2–6 What we're building (Campus future, The campus, Power plant & fuel supply, Campus history, Development timeline) | ✅ — awaiting review |
| Pages 7–20 | ⬜ |

Copy introduced while building, for approval: section titles "The unions on
site" (P14) and "Job board" (P15); the job-board intro's second sentence
("Each row opens Kiewit's union craft opportunities page."); the alert
sign-up line.

### Pages 2–6 — what changed from the plan, and flags

Sub-nav component now has five tabs (adds *The campus*); each page sets its
active tab by override.

**Section grounds as built** (no two adjacent alike):

| Page | Sequence |
| --- | --- |
| 2 Campus future | white hero · photo · black P6 vision · navy P3 · white P4 ×2 · subtle P5 |
| 3 The campus | white hero · site plan (bleed) · black P6 hotspots · subtle P5 attributes · navy P3 · white P6 · navy P8 · subtle P5 |
| 4 Power plant | white hero · rendering (bleed) · navy P3 · black P6 key facts · white P6 how it works · black P10 · subtle P7 · navy P8 · subtle P5 |
| 5 Campus history | white hero · black P6 · video (bleed) · subtle P7 · white P19 · subtle P5 |
| 6 Timeline | white header · subtle P13 · navy P8 · subtle P5 |

**System fixes made on the way**

- **P6 is black** on the *Hand Done* library, but was built from light-ground
  items with the text overridden to white. Rebuilt properly: `surface/black`,
  Inverse variants. A white P6 is the same section with Light variants.
- **New token `border/divider-black`** → `white-alpha/24`. `divider-inverse`
  is `navy/700` and reads as a blue line on black. Fact-item hairlines on
  black sections override to it.
- P2, P4 and P13 grounds were raw hex; now bound to `surface/page` /
  `surface/subtle`.
- Fact-item marks are off on every v2 page (matches the Home decision).
  Placeholder bleed media use the *Image* component at 1440 with square
  corners, so the brief stays inside the image area.

**Flags**

| Page | Flag |
| --- | --- |
| 2 | Fact-row leads introduced for approval: "A 3,200+ acre natural gas-powered energy campus." and "A plan announced in April 2025." (each restates its body). "At a glance" is 4 figures, not 5 — "One of the largest…" is in the lead. |
| 2 | Aerial photograph has the client's logo baked into the corner — needs a clean file. |
| 3 | Site plan is a brief (vector redraw + hotspots); Data center hotspot ⛔ (Amazon). Hotspot section title "The site plan" and intro introduced. |
| 3 | Unique site attributes have no body copy in the outline — built as link rows (P5), not fact rows (P6). |
| 3 | The workforce development / local power rows take the outline's subtitle "A re-energized future for Indiana County and beyond" as their title. |
| 4 | "Front of the meter" dropped from the ledger (it's a phrase); it's the third key fact. |
| 4 | "Powering homes and America's digital future" paragraph not carried — it repeats "The rest stays on the grid". Restore if wanted. |
| 4 | P10 (PJM line) moved after *How it works* so two black bands don't touch. How-it-works diagram still has no pattern; kept as rows. |
| 5 | Then & now shows all 12 stages. Caption expansions for approval: "Module yard: pipe rack fabrication" (deck: "Mod Yard Piperack Fab"), "GIS: working at height", "Unit 5 heat recovery steam generator (HRSG)". All 12 photographs ⛔ (IUP files + rights). |
| 5 | "An experienced local workforce." has no body in the source; its body line is hidden. |
| 3–6 | FAQ answers: only the expanded row carries a sourced answer; collapsed rows still hold the component's placeholder until the FAQ answers land. |

### Review round — Nov 2026 (client)

| Request | Done |
| --- | --- |
| Remove or update the dividers in Key facts (P6) | **Removed.** Fact rows in P6 carry no hairline and no closing divider; rows are separated by 24 px of space plus their own padding. Applied to the P6 component and all six P6 sections on pages 2–5. P7 and the stat ledger keep their hairlines. |
| Combine the Campus future P4 rows into a dynamic scroll component | **New P21 · Scroll story** (Sections page). Steps on the left with a hairline track and a progress bar under the active step; the active step's statement, CTA and media on the right. Campus future uses it with two steps (The campus, The power plant). |

**P21 behaviour (for the build).** Desktop: the section is about one viewport
tall per step, and its inner row is `position: sticky`. Scroll progress moves
the active step and fills the bar (Interactions 2.0 scroll-progress). Each tab is
a button (`role="tab"`): click, tap and the arrow keys select a step, so
nothing depends on scrolling. With reduced motion there is no bar animation and
panels switch instantly. Mobile drops the sticky behaviour: steps stack, each
label above its own content. In the Figma prototype, clicking a tab switches
the variant.

**Open question:** Home's white group (past, workforce, what we're building)
is the same run of P4 rows. It is left as the client laid it out unless asked.
