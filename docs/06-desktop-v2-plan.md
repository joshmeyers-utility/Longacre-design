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
| **P2s** | **Hero, statement** | Client, Nov 2026 — long page intros read as a white statement | P2 restyled: title Heading 4 secondary (still the h1), intro Heading 2 at 900, `space/section-y-lg` |
| **P22** | **Topic tiles** | Client, Nov 2026 — the outline's Community Stewardship tile row | New *Topic tile* component (Label, Icon, Show divider) |
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
| Desktop Site v2 · 7–11 Who we are (Campus partners, Local partners, Campus pillars) + Careers (Meet the workforce, Job opportunities) | ✅ — awaiting review |
| Desktop Site v2 · 12–16 Community stewardship (landing, Water, Health & safety, Economic impact, Charitable giving) | ✅ — awaiting review |
| Desktop Site v2 · 17–20 FAQs, News & resources, Article, Contact | ✅ — awaiting review |
| Mobile Site v2 (375) — parity with desktop v2, 21 frames | ✅ — awaiting review |

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

Round 2 (client):

- P21: the button now sits **below** the media. Each panel gains an optional
  `body` paragraph (Body large), hidden by default.
- **Home's white group is now a three-step P21**: From past to present (body),
  Meet the tradesmen and women (statement + video), See what we're building
  (body + rendering). Home is about 1,000 px shorter.
- **P10 statement bands breathe more**: new token `space/section-y-lg` 240 /
  120 on the component, Home's statement and the PJM statement.

### Pages 7–11 — what changed from the plan, and flags

| Page | Sequence |
| --- | --- |
| 7 Campus partners | white hero · subtle P18 (4) · white P4 → Meet the workforce · subtle P5 |
| 8 Local partners | white hero · subtle P18 (4, role only) · white P4 · subtle P5 |
| 9 Campus pillars | white hero · photo · black P6 four pillars · navy P8 · subtle P5 |
| 10 Meet the workforce | white hero · photo · navy P3 (6) · black P6 · white P21 spotlights · subtle P14 · white P17 (3) · black P7 commitments · subtle P5 |
| 11 Job opportunities | white hero · black P15 job board · subtle P7 nine trades (3 × 3) · white P17 · subtle P5 how to get hired |

- The site header's active nav item is now set per page (it said *What we're
  building* everywhere). The sub-nav relabels and hides tabs per section.
- Page 10's two worker spotlights are a P21 (run of P4s → scroll story).
  The statement "IBEW Local 5 worker spotlight: {name}, {place}." is
  introduced copy. Its CTA, *Job opportunities*, is too.
- Page 11's Steffee pull runs as the **full** quote in P17, not shortened.

| Page | Flag |
| --- | --- |
| 7 | v1 linked Homer City Generation to "Visit kiewit.com". That is wrong, so its link is hidden until a URL is supplied. Logos ⛔ (vectors). AWS hidden ("TBD"). |
| 8 | Role only; descriptions, URLs and logos ⛔. v1 linked all four to kiewit.com — removed. |
| 9 | Page name ⛔ (Campus pillars vs Our values vs Project pillars). No intro copy exists, so the hero carries only the title. Section title "The four pillars" introduced. |
| 10 | **Quote portraits ⛔.** Per §5 rule 6 these quotes do not ship until each has a real photo. Spotlight videos ⛔; the third IBEW Local 5 video ⛔. Union logos ⛔, and 6 of 9 union names ⛔. |
| 10–11 | The workforce photo is used on pages 7, 8 and 10. Swap in more of the library when it arrives. |

### Footer (client, Nov 2026)

*Site footer* (both variants) is now `surface/black` with a
`border/divider-black` rule. Every v2 page ends on a subtle or white section,
so the footer never touches another black band.

### Pages 12–20 — sequences and flags

| Page | Sequence |
| --- | --- |
| 12 Community stewardship | white hero · black P6 environmental responsibility (4) · subtle P5 commitments → Water, Health & safety, Economic impact, Charitable giving, Construction alerts |
| 13 Water | white hero · black P6 key facts (3) · white P4 treatment diagram · black P10 · navy P8 · subtle P5 |
| 14 Health & safety | white hero · navy P3 (Zero OSHA) · black P6 (3) · subtle P7 core values (5) · navy P8 · subtle P5 |
| 15 Economic impact | white hero · navy P3 (5) · black P6 (6) · photo · subtle P7 (4) · navy P8 · subtle P5 |
| 16 Charitable giving | white hero · subtle P19 "Giving back" (3 content-needed slots) |
| 17 FAQs | white hero (search + category chips) · P8 / P8w × 6, navy / white alternating · subtle P5 "Didn't find your question?" |
| 18 News & resources | white hero · subtle P16 alerts + text sign-up · white P11 press releases · subtle fact sheets · white P11 recent news · subtle P17 soundbites · white P19 photos & videos |
| 19 Article | white hero (headline, type · date · source) · image + 760 body column · navy P3 figures in this release · subtle P5 media contact |
| 20 Contact | white hero · subtle P20 four inboxes · black P10 Facebook + button · white P6 location |

Every interior page except the What we're building, Who we are, Careers and
stewardship groups hides the sub-nav. The header's active item is set per
page.

| Page | Flag |
| --- | --- |
| 12 | "Construction alerts" links to the alerts section on News & resources (option B). |
| 13 | Water footnote ¹ ⛔ (intro sentence). Water fact sheet ⛔, so there is no download button. Treatment diagram drawn as a brief: an accessible SVG with the steps as real text. The second commitment line ("Throughout the construction process…") isn't carried; it repeats the landing page. FAQ answers are outline-only (not a public document), so all rows stay collapsed. |
| 14 | "Our safety record" is introduced as a section title. |
| 15 | Photo is the trench image; an aerial would suit better once the library lands. "Thousands of homes" is a phrase in the ledger, not a figure. FAQ answers ⛔ (collapsed). |
| 16 | ⛔ **No content.** Name, photos, captions and copy all needed from HCR or Kiewit. |
| 17 | 26 drafted answers still await approval (only 3 are expanded with sourced answers). The permit-appeal answer (open Q5) is not on the page yet; it lands only with client and legal sign-off. |
| 18 | Community spotlights left out (no stories). SMS short code ⛔. Quote portraits ⛔ for Pittman and Struzzi. News thumbnails ⛔. |
| 19 | The release body is a CMS rich-text field (brief). The image is the release photo; replace it with the file supplied with the release. |
| 20 | Facebook URL ⛔. P10 carries a button here only (instance addition). Site access policy (open Q11) still blocks an entrance photograph. |

---

## 8. Copy audit against the content outline (4 Nov 2026)

Every text block in the 28 Sep outline (44 slides, 423 unique blocks) was
checked against the visible text on the 20 Desktop v2 pages. Script:
outline paragraphs × site strings, word overlap; everything below 100 % was
read by hand.

**Restored (lost in v1, carried into v2):**

| Page | Restored |
| --- | --- |
| FAQs · Campus plans | 5 questions: HCR vs HCG difference · who is financing · where to see renderings · has a customer been selected (and when announced) · who is building the prospective data centers. Answers pending, like the other collapsed rows. |
| Power plant | "Two underground connections" lead-in ("…two underground "lateral" lines…") and the full "A more efficient fuel source" sentence. |
| Campus future | Vision subtitle "Honoring our past, reimagining our future." |
| Job opportunities | Steffee introduction line above the quote. |

**Intentionally different (no action):** "coal" re-phrased (§5 rule 0),
including the dropped "largest coal-burning" superlatives. Figures resolved
to the dated fact sheets (~4.4 → up to 4.4 GW, 55+ → 54 years, 60–65 % / 30 %
→ 60 % / 40 %, "nearly 10,000" → 10,000+, "over 95 %" → 95 %). "Homer City
Redevelopment site" → "Homer City Energy Campus" in three FAQ questions
(the pivot). Title case → sentence case. CTAs shortened. Footnotes inside
rows, not at the page foot. Design notes, placeholders and the appendix's
reference sites are not copy.

**Decisions (client, 4 Nov 2026): A1 full headline; A2–A4 restored.**

- A1: Home headline is now the outline's full line. It wraps to three lines, so the
  desktop scrim stops moved up (0.28 → 0.20, 0.40 → 0.50) and `TEXT_AT`
  was re-measured (headline top 0.417, alpha 0.507, about 4.1:1 over white).
- A2: "Powering homes and America's digital future" is the sixth key fact.
- A3: How it works has a text diagram in the left column (plant → grid →
  customer / local homes). It's real text, not an image; the arrows are decorative.
- A4: the full natural-areas question is restored ("Homer City Energy
  Campus" for "Homer City Redevelopment site").

Original list:


| # | Item |
| --- | --- |
| A1 | Home headline: outline "Building America's energy future while honoring Pennsylvania's proud past" (alt. "Pennsylvania energy, built in Indiana County."). Home carries "Building America's energy future." from the client layout `67:8121`. |
| A2 | Power plant "Powering homes and America's digital future" + its sentence (dropped as a repeat of "The rest stays on the grid"). Restore? |
| A3 | Power plant "How it works" diagram labels (metered delivery, PPA, remaining capacity) — no diagram pattern yet; the three rows carry the meaning. |
| A4 | FAQ "…most cherished natural areas" preamble shortened to the question alone. |
| A5 | Still ⛔ from the outline: Data centers page and AWS card (Amazon), Sound page, Giving back content, third IBEW Local 5 video, union names ("[Others to be added]"), local partner links, SMS short code, video carousel, community spotlights. |

### P22 Topic tiles (client, 4 Nov 2026)

Built from the outline's Community stewardship tile row: five equal columns
on the subtle ground, hairlines between them (dividers, not boxed cards),
label + link arrow at the top, a 56 px decorative Material Symbols icon
below. The whole tile is the link and the icon is `aria-hidden`. Icons:
`warning`, `water_drop`, `engineering`, `home`, `groups`.

Swapped in for the P5 link lists on **Home** (title "Community
stewardship" + *Our commitments* button) and the **Community stewardship**
page ("Our community commitments", no button — it is that page). Order
follows the outline: Construction alerts first. The label stays "Charitable
giving" (the outline tile says "Giving back"; the name is still open). Mobile
spec: a 2-up grid, or stacked rows with the icon on the left.

### P2s Hero, statement (client, 4 Nov 2026)

The page hero on Campus partners, Community stewardship, Water, Health &
safety and Economic impact is now a white statement. The intro is set in
Heading 2 (900 wide, like the black P10 band), with the page title above it
in Heading 4, `text/secondary`. The title is still the page's `<h1>`, so the
outline order and screen readers are unchanged. Padding is
`space/section-y-lg`. Short intros stay P2.

### News & resources: combine and split (client, 4 Nov 2026)

The site is now **21 pages**. News & resources gains a child page.

| Page | Sequence |
| --- | --- |
| 18 News & resources | header + sub-nav · subtle alerts + text sign-up · white **Latest news** (press release + coverage + commentary in one row of four, filter chips All / Press releases / Coverage / Commentary) · subtle **Fact sheets & media** (intro + press inbox left, three PDF downloads right) |
| 18b **Photos, videos & voices** (new) | header + sub-nav · subtle Photos & videos · white Soundbites from the community |

- "Recent press releases" had one item, so it merges into Latest news. The
  type label on each item keeps press releases distinguishable.
- The press inbox moves into Fact sheets & media. The Fact sheets & media
  intro is introduced copy.
- The News & resources title block was removed in Figma (client edit), so
  both pages open on the sub-nav. **Flag (accessibility):** each page still
  needs an `<h1>` in the build. Options: a visually hidden h1 ("News &
  resources" / "Photos, videos & voices"), or promote the first section
  title.
- Meet the workforce's hero is now a P2s statement.

### Round — scroll story stewardship, unions grid (client, 4 Nov 2026)

- **P21 extended to five steps** (`Active=1…5`, `Show step 3/4/5`; 4 and 5
  default off, so existing 2- and 3-step stories are unchanged — verified).
- **Home stewardship is a five-step P21** (Construction alerts, Water, Health &
  safety, Economic impact, Charitable giving), replacing P22 on Home. It is on
  `surface/subtle` so it doesn't run into the white news row. Each step's body
  is sourced copy (alerts sign-up line, water hero, the OSHA sentence with its
  date, econ hero). **Charitable giving has no copy** — its step shows the
  CTA and a content-needed brief only. The Home title "Community
  stewardship" and the *Our commitments* button are not on the scroll story
  (P21 has no header). P22 stays on the Community stewardship page.
- **P14 is now "Unions"** — a static 3 × 3 grid replaces the marquee (no
  motion, so no pause control). Three names shown; six slots carry a "name
  and logo needed" brief (no guessing which trade each union is). Applied to
  Meet the workforce and to the parked copy beside Home.
- **Home order (client edit):** hero · statement (black) · numbers (navy) ·
  differentiators · photo · scroll story (past) · questions (navy) · scroll
  story (stewardship, subtle) · news (white) · learn more (subtle) · footer.
  The union section is off Home (parked at x −2001). Two scroll stories now
  sit on Home.

---

## 9. Mobile Site v2 (4 Nov 2026)

New Figma page **Mobile Site v2**, 21 frames at 375, one per desktop v2
page, in the same order (Home at x 0, then 475 apart).

**How each frame was made:** each one is a copy of its desktop page, so the
copy is identical by construction. Then:

1. Semantic and Typography collections set to **Mobile** on the frame, so all
   spacing (`space/section-y` 80, `section-y-lg` 120,
   `container-x-contained` 16) and type sizes switch through the tokens.
2. Header, footer, alert bar and sub-nav swapped to `Device=Mobile`; stat
   rows to `Layout=Mobile`. The sub-nav keeps each page's labels and active
   tab.
3. Side-by-side layouts (split, columns, fact columns, partner and route
   grids, news rows, media grids, the diagram branch) stack.
4. Full-bleed photos and briefs are 420 tall. In-column media are 4:3 at
   column width.
5. **Scroll stories (P21) stack**, per their spec: each step's label
   (Heading 3) above its own copy, media and CTA. No sticky behaviour on
   mobile.

**Hand-fixed:**

| Where | Fix |
| --- | --- |
| Home hero | The v1 mobile hero (already tuned to the mobile scrim) with the full headline. It wraps to five lines and the hero grows to 1,021. The headline starts at 0.294 (scrim α 0.47 ≥ 0.42) and the lead at 0.513 (α 0.70 ≥ 0.535). `TEXT_AT` mobile is updated; `check_scrim()` passes. |
| Unions | 2-up grid. Section side padding was a raw 80, now bound to the token. |
| Topic tiles (P22) | 2-up grid, hairline above each tile instead of beside it. |
| Job board | Tags wrap; the "Hiring via Kiewit" pill drops under the tags. |
| Timeline | Milestone entries put the date above the text. |
| Article | Image and body get side padding. |
| All text components | Hug height (news items had kept desktop heights and overlapped). Buttons hug their label. |

**Also:** Unions is back on desktop Home (client edit, between questions
and the stewardship story). It now has a white ground with light-grey logo
slots, so it doesn't share the stewardship section's grey.

**Component gaps to fold back later:** Milestone entry and Job row have no
mobile variant (fixed on the instances). The Union logo slot ground is an
instance override.

### Campus future corrected against outline slides 7–8 (client, 5 Nov 2026)

The outline's Campus future page is **slides 7 and 8** (both slides have the
nav tab "What We're Building – Campus Future" active). In the site
structure (slide 1), "The Campus" and "The Power Plant" are indented
*under* Campus future. The build had split slide 8 into a separate "The
campus" page and padded Campus future with copy that isn't in the outline.
Rebuilt, desktop and mobile, in slide order:

1. About the Homer City Energy Campus — **both** paragraphs (the
   partnership paragraph had been moved into a fact row with an invented
   lead).
2. The vision for Homer City — "Honoring our past, reimagining our future"
   + the vision paragraph, **no invented lead**.
3. At a glance (ledger).
4. **What we're building** — the site plan (brief) + hotspots: the energy
   campus, the power plant, Two Lick Reservoir (data center ⛔ Amazon).
   Replaces the two-step scroll story, which wasn't in the outline.
5. Unique site attributes.
6. Local economic & job benefits + "A re-energized future for Indiana
   County and beyond" (workforce development, local power).

Removed copy: the leads "A 3,200+ acre natural gas-powered energy
campus." and "A plan announced in April 2025.", and the scroll-story
statements.

**Done (client, 5 Nov):** the separate *The campus* page is deleted
(desktop + mobile); the site is **20 pages**. Its outline slides 8 and 12
sit with Campus future. The sub-nav's *The campus* tab is hidden by
instance override on the What we're building pages. It is not deleted from
the component, because the Who we are pages reuse that slot as *Local
partners*.

**Parity check (5 Nov):** visible text and section order compared,
desktop vs mobile, on all 20 pages. The only differences are by design:
mobile scroll stories show every step stacked. Fixed along the way: mobile
Home's Unions title ("Unions on site", client edit) and its section order
(client re-ordered desktop Home). Home differentiators are bound to
`surface/subtle`; they had been raw white next to the white Unions.

### Page-by-page check against outline slides (5 Nov 2026)

Each page was compared with its slide images (now on the canvas). Fixed,
desktop + mobile (parity re-checked: no differences):

| Page | Fix |
| --- | --- |
| Power plant | "Front of the meter" restored as the 4th at-a-glance item (label "Power", as on slide 9). |
| Development timeline | Common questions = the slide's four (How large · When operational · Who is building the data center · How much water). Learn more = Power plant & fuel supply · Water stewardship · Workforce · Project partners · Safety · Economic impact. |
| Campus pillars | Same four questions. Learn more = Workforce · Water stewardship · Power plant · Latest news · Safety · Economic impact. Safety pillar copy now the outline's "Safety is our #1 priority; …" (was the May fact sheet's). |
| Meet the workforce | Community commentary has all five quotes (adds Pittman, Struzzi). Workforce commitments are the outline's three sentences; the invented leads are hidden. |
| Community stewardship | Tiles follow slide 24: Power · Water · Health & safety · Economic impact · Charitable giving (Sound ⛔). |
| Water | "Our commitment on water" carries both statements (was one). |
| FAQs | Category names from slide 32 (Environmental considerations & water stewardship · Economic & community impacts · Job & partnership opportunities). Power generation in the outline's order. |

**Kept, with reason:**

| Page | Difference | Why |
| --- | --- | --- |
| Economic impact | Ledger also shows 10,000+ and ~1,000 (slide shows 3 figures) | Their footnotes have to appear on the page (§5 rule 2); the "Jobs" bullet repeats both figures. |
| Health & safety | "Our safety record — Zero" section isn't on slide 27 | Sourced figure (fact sheet C) with its date; remove if unwanted. |
| Contact | Location block isn't on slide 37 | Canonical address; address source is still open Q17. |
| Campus partners | Hero title "Who is building the campus" (not in outline) | Introduced; the outline has no title for this page. |
| Photos, videos & voices | Photos before soundbites (slide 35: soundbites first) | Client-approved split; reorder if wanted. |
| Home | 3 news items (slide: 6); one worker video in the scroll story (slide: Shawn + Isaac); one rendering under "See what we're building" (slide: two images) | Format limits of P11/P21; content otherwise matches. |

Health & safety intro: the outline says "At Homer City Generating Station";
the site says "At Homer City Generation" (the station is the former plant).
Flag for the client. Local partners, Campus pillars and Charitable giving
have no title block in Figma (as on News); each page still needs an h1 in
the build.

### Power plant — How it works diagram (client, 5 Nov 2026)

The text-only diagram in the left column is replaced by a drawn flow (slide
11). Every label is live text, with the slide's exact wording:
- **Desktop:** full width under the section. Power plant → Public grid,
  which branches to **Customer** (navy; "Contracted power defined in Power
  Purchase Agreement") and **Local homes** ("Remaining capacity"). Connector
  labels "Sends all power to", "Delivers to" and "Remaining capacity goes to".
  Nodes are `surface/subtle` / `surface/inverse` with `radius/media`;
  connectors and labels are `text/secondary`; icons are decorative
  (factory, electric_meter, domain, home).
- **Mobile:** plant and grid stacked, then the branch as two side-by-side
  nodes, each with its own label, so nothing reads as power passing through
  the customer.
- **Build:** the nodes are real text in reading order (plant → grid →
  customer → local homes); connectors are decorative SVG. A diagram/infographic
  is not a content card, so the no-cards rule doesn't apply.
- (5 Nov, client) Diagram now sits in a bounding panel (`surface/subtle`,
  `radius/media-lg`, 48 / 16 padding) with white nodes; icons removed.

### Campus history checked against slide 13 (client, 5 Nov 2026)

- History section on **white** (was black). The page's title block was
  removed in Figma (client), so the section carries the slide's heading
  "Homer City's history"; it is the page h1 in the build.
- **Removed introduced copy:** the intro line "The same ground, from 1969 to
  today."; the leads "Since 1969." / "Connected to two grids." /
  "Decommissioned in 2023."; "already on the site." and "from Two Lick
  Reservoir." under the legacy attributes.
- History is now the slide's three statements; the legacy site attributes are
  the slide's four labels (Transmission lines connected to the power grid ·
  Substations · Water access · Experienced local workforce).
- **Kept, flagged:** "largest coal-burning power plant in Pennsylvania"
  dropped (§5 rule 0); "nearly 55 years" → "54 years" (1969–2023, fact
  sheet rule). Slide placeholders "[additional historical details?]" and
  "[add demo brown field clean up]" ⛔.

### Campus history — Then & now as a near-bleed mosaic (client, 5 Nov 2026)

Section side padding 0; the title and intro sit in a wrapper padded to the
content column (`space/container-x-contained`). Images run to a
`space/stack-sm` (12) gutter with the same gap between them, in rows that
alternate full width (560 tall) and a pair (395 tall), chronological:
1969–2023 · Mar 2025 + Nov 2025 · Feb 2026 · Feb–Mar 2026 + Mar 2026 ·
Apr 2026 · Apr 2026 + Apr 2026 · Jul 2026 · Jul 2026 + Jul 2026. Captions
and dates stay under each image (a brief is not a caption). Mobile:
`space/stack-xs` (8) gutter, one image per row (pairs were too narrow for
captions).

### Campus partners page follows slide 16 (client, 5 Nov 2026)

Slide 16 is one "Who We Are" page: intro · Campus partners · Local partners
· "Learn more about the workforce bringing the campus to life → [CTA to
Workforce page]". The page now has: statement hero (white) · Campus
partners (subtle, 4 — AWS hidden, "TBD on initial inclusion") · **Local
partners (white, 4, roles only)** · workforce link (subtle) · footer. The
"Learn more" list (not on the slide) is removed. Desktop + mobile.

**Open:** the separate *Local partners* page now duplicates the section.
The site structure (slide 1) still lists Local Partners as a sub-page, so
it stays until the client decides.

### Who we are: one page (client, 5 Nov 2026)

Campus partners, Local partners and Campus pillars are combined into a
single **Who we are** page (desktop + mobile). The site is now **18 pages**.
Order follows slides 16 → 17: statement hero (h1 "Who we are") · Campus
partners (subtle) · Local partners (white) · workforce link (subtle) ·
**Campus pillars** (black; the title uses the slide's heading in place of
"The four pillars") · Common questions (navy) · Learn more (subtle) ·
footer. The Local partners and Campus pillars frames are deleted, and their
outline slides moved to this page's column. The sub-nav is hidden (single
page). The workforce photo band from the old pillars page is not carried,
as slide 17 has no photo. Naming of the pillars ("Campus pillars [or Core
Values?]") is still open.

### 5 Nov — dividers and grounds (client)

- **Campus history, history section:** light dividers added (`border/divider`
  above each of the three statements plus a closing divider), desktop +
  mobile. This is a deliberate exception to "key facts have no dividers",
  at the client's request.
- **Job opportunities, Job board:** white ground (was black); job rows on
  `surface/subtle`, section header Light. It now runs on from the white hero
  as one block. Desktop + mobile.
