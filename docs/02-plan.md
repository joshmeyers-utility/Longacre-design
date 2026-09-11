# Stage 2 — Plan

Information architecture, page specifications, and content model for the Homer
City Energy Campus site. Ships in Webflow.

Read [`CLAUDE.md`](../CLAUDE.md) first. Facts come from
[`docs/source/`](source/) and nowhere else.

---

## 1. What the site has to do

The brief gives four jobs: provide transparency on the facts, serve as an
information hub, educate the community, correct misperceptions. In practice
those collapse into three tests the design has to pass:

1. **A neighbour can find out what this means for them in under a minute.**
2. **A tradesperson can find out how to get hired without leaving the site.**
3. **A sceptic can check the claims** — source, date, and a document to download.

Test 3 is the one most corporate sites fail, and it is the one the brief is
really asking for. It is also what makes tests 1 and 2 believable.

### Who actually visits

| Visitor | Arrives asking | Lands on | Priority |
| --- | --- | --- | --- |
| **The neighbour** | "What is this, and does it affect my water, my road, my noise?" | Home, FAQ | **Primary** |
| **The tradesperson** | "Can I get a job there? Is it union? Is it local?" | Workforce | **Primary** |
| **The sceptic** | "Prove it. Where's the permit? Who says so?" | FAQ, Resources, News | **Primary** |
| The journalist | "Facts, fast, plus a spokesperson." | News, Resources | Secondary |
| The local business | "Can I sell to this project?" | Contact | Secondary |
| The civic leader | "What's the tax and economic picture?" | Community | Secondary |

The sceptic is listed as primary deliberately. "Correct misperceptions" means
that reader is the target, not an edge case — and a site built to satisfy them
satisfies everyone else along the way.

### The one strategic choice

Every module answers **"what does this mean for people here?"** before it
answers "what is being built." The campus is the subject; the county is the
point of view. That is the whole difference between this site and the one it
replaces.

---

## 2. Sitemap

Resolved: the brief's bundled "Campus Partners / Commitment to the Community /
Testimonials" becomes one **Community** section with three children.

```
/                              Home
/workforce                     Workforce
/community                     Community — hub
  /community/partners          Campus Partners
  /community/commitments       Our Commitments
  /community/voices            Voices
/faq                           FAQ & Resources
/news                          News
  /news/{slug}                 News item
/contact                       Contact
```

**Primary nav (5 items):** Workforce · Community · FAQ & Resources · News ·
Contact. Logo returns home. A persistent **"Jobs"** button sits outside the nav
list as the one standing call to action.

Five items fits a phone without a scroll and keeps the nav from reading like an
org chart — which is the register the brief is moving away from.

### Recommended addition: `/campus`

**Not in the original brief. Flagging rather than assuming.**

The current site has both `/project-overview` and `/power-plant-fact-sheet`. In
the Phase 1 structure there is nowhere for that depth to go except the homepage —
which also has to stay scannable for a neighbour giving it sixty seconds. Those
two needs fight each other.

A **The Campus** page resolves it: the full milestone timeline, the power block
and fuel supply in detail, water and site infrastructure, the labelled site map,
and the construction photo essay. The homepage modules become teasers that link
into it. It also gives `/project-overview` and `/power-plant-fact-sheet` a
sensible redirect target instead of dumping both on the homepage.

**Recommendation: build it.** It is the natural home for the technical
transparency the sceptic wants, and it takes pressure off the homepage. Cost is
roughly one extra page of layout — most of its content already exists in
`docs/source/`. If cut, its content folds into the homepage and `/faq`, and both
get longer.

### Phase 2

| Page | Notes |
| --- | --- |
| Site History | The 1969–2023 → 2026 photo essay. Spine already exists in `iup-deck.md`. |
| Testimonial video | Extends `/community/voices`. |
| Construction calendar | Modal on `/faq`; needs a live schedule feed. |
| Letter templates | Downloads on `/faq`. |

---

## 3. URL migration

Redirects from the current site. **Slugs inferred from indexed page titles —
verify against the live site before launch.**

| Current | New | Note |
| --- | --- | --- |
| `/about` | `/` | Company-about doesn't survive the Campus pivot |
| `/project-overview` | `/campus` | → `/` if `/campus` is cut |
| `/power-plant-fact-sheet` | `/campus` | → `/faq` if `/campus` is cut |
| `/fact-sheets` | `/faq#resources` | Merged into Resources |
| `/resources` | `/faq#resources` | |
| `/videos` | `/campus` | **Audit first** — depends what the videos are |
| `/post/{slug}` | `/news/{slug}` | Preserve slugs where possible |

Anything with inbound links or search traffic gets a 301, not a delete. The
fact sheet PDFs in particular are likely linked from press coverage.

---

## 4. Global components

### Alert / construction-update banner

Required by the brief, and the client's fastest lever — road closures, blasting
notices, open house announcements. Sits above the header.

- CMS-driven (`Alerts` collection), so the client publishes without a designer.
- Three severities: Info, Construction, Urgent. Colour and icon vary; layout does not.
- Dismissible, and the dismissal is remembered per-visitor. A new alert reappears.
- Scheduled start/end dates so a road closure expires on its own.
- Never traps focus. Screen readers get `role="status"`, not an alert that
  interrupts.

### Header

Logo · 5 nav items · Jobs button. On mobile the Jobs button stays visible in the
bar; everything else goes behind the menu toggle. The one thing a tradesperson
came for should never be two taps away.

### Footer

Four contact routes (the brief's four inboxes, kept distinct — do not collapse
into one form), site address, nav repeat, social, and the standing footnotes.

---

## 5. Page specifications

Section order below is a **recommendation**. Where it departs from the brief's
listed order, the reason is given.

---

### 5.1 Home — `/`

**Job:** orient a neighbour in sixty seconds, and give every visitor type one
obvious next step.

| # | Section | Content | Status |
| --- | --- | --- | --- |
| 1 | **Hero** | Full-bleed aerial of the campus in the county landscape. Headline from the positioning statement. One sentence of what/where/when. Two CTAs: *Explore the campus* / *Work here*. | Copy ✅ · Photo ⚠️ |
| 2 | **Orientation** ⊕ | Three short paragraphs: what is being built, where, and what stage it is at right now. Plain language. The single most-missing thing on the current site. | Copy ✅ |
| 3 | **By the Numbers** ↑ | 7 figures with footnotes and "as of" dates. CMS-driven. | ✅ |
| 4 | **Workforce spotlight** ⊕ | 1,800+ on site · ~95% local · 135+ apprentices · 9 unions. One worker portrait and quote. CTA to `/workforce`. | Stats ⚠️ tier A · Portrait ❌ |
| 5 | **Power Block & Fuel Supply** | 7 × GE Vernova 7HA.02, gas supply, GIS, water treatment. Jargon expanded on first use. | Copy ✅ · Diagram ❌ |
| 6 | **Map** | Labelled site rendering. Plus the "why here" geography — 50 mi east of Pittsburgh, within 300 mi of six metros. | Labels ✅ · Asset ❌ |
| 7 | **Timeline teaser** | Last completed milestone, current phase, next upcoming. Links to the full timeline. | ✅ |
| 8 | **Four pillar tiles** | Safety · Infrastructure · Community · Energy Future. Each links deeper — Community → `/community`, Safety → `/faq`, etc. | ✅ |
| 9 | **Latest news** | Three most recent items. | Structure ✅ · Items ❌ |

⊕ = added, not in the brief's homepage list · ↑ = moved earlier than the brief's order

**Why the order changed.** The brief lists Power Block → Map → Timeline →
Numbers → Pillars. Two changes:

- **Numbers moved up to #3.** It is the most scannable proof on the page and the
  fastest way to establish scale for someone who will not read prose. Putting
  technical detail ahead of it asks for patience the visitor hasn't committed yet.
- **Workforce added at #4.** The brief says to put as much focus as possible on
  workforce and economic impact, but the homepage list has no workforce module at
  all. This is the strongest local-benefit argument on the site — 95% local and
  135 apprentices answers the "minimal return benefits" objection directly — and
  it should not be one nav click away.

**Orientation (#2) added** because the current site's failure is that a visitor
can't tell what is being built without reading a corporate About page.

---

### 5.2 The Campus — `/campus` *(recommended addition)*

**Job:** the technical depth, in plain language, with sources.

| # | Section | Content | Status |
| --- | --- | --- | --- |
| 1 | Page hero | Aerial, one-line summary, jump links. | ✅ |
| 2 | What's being built | Plant + data center campus, 3,200+ acres, 4.4 GW. | ✅ |
| 3 | Power block | 7 × 7HA.02 turbines, HRSGs, GIS. Every acronym expanded. | ✅ |
| 4 | Fuel supply | Gas compressor station, supply agreements. | Partial ⚠️ |
| 5 | Water & site infrastructure | Water treatment facility, Two Lick Reservoir. **Handle directly** — it is the most contested topic. | ⚠️ Needs client position |
| 6 | Labelled site map | Interactive or annotated static. | Asset ❌ |
| 7 | Full timeline | All milestones, 2025 → upcoming, with status. | ✅ |
| 8 | Then and now | 1969–2023 station → 2026 campus, from the photo essay. | Structure ✅ · Photos ❌ |

---

### 5.3 Workforce — `/workforce`

**Job:** convert a tradesperson, and prove local benefit to everyone else.
Per the brief, this page gets the most attention.

| # | Section | Content | Status |
| --- | --- | --- | --- |
| 1 | Hero | Workers on site. Headline leads with people, not the project. | Photo ❌ |
| 2 | **Workforce numbers** | 1,800+ on site (as of Sep 2026) · ~95% local · 135+ apprentices · 9 unions · ~2,000 projected year-end. Date-stamped. | ⚠️ Tier A — confirm |
| 3 | **Trades on site** | Nine unions, icon + name, expanding to description, local number, and what that trade does here. Boilermakers, carpenters, electricians, ironworkers, laborers, millwrights, operators, pipefitters, teamsters. | Trades ✅ · **Union names ❌ blocking** |
| 4 | Worker spotlights | Portrait, name, trade, hometown, quote. Video where available. | ❌ Needs production |
| 5 | Apprenticeships | The 135+, pathway in, partner programs. Answers "is there a future here for my kid." | Figure ⚠️ · Detail ❌ |
| 6 | **Apply for jobs** | Clear CTA to HomerCity.Info@Kiewit.com. What to expect, what's needed. | ✅ |

**Note on section 3.** The brief specifies rollover interactions. Nine union
tiles behind hover alone would be unusable on phones — where most job seekers
will be. Spec: click/tap to expand on touch, hover to preview on pointer,
keyboard-focusable throughout, and all nine descriptions present in the DOM so
they are findable by search and readable by screen readers.

**Blocking:** the nine unions are counted publicly but never named. Without the
roster, section 3 ships as placeholder.

---

### 5.4 Community — `/community` + 3 children

#### Hub — `/community`

Short intro, then three routes into Partners, Commitments, and Voices, each with
a one-line summary and its strongest single stat or quote. Target of the
Community pillar tile.

#### Campus Partners — `/community/partners`

Logo grid, each expanding to a description, role on the project, and outbound
link.

| Partner | Status |
| --- | --- |
| Homer City Generation | ✅ |
| Kiewit Power Constructors | ✅ Role known |
| GE Vernova | ✅ Role known — 7 × 7HA.02 |
| Independence | ❌ **Nothing in any source** |
| Kovalchick | ❌ **Nothing in any source** |

Same interaction rule as the trades grid: tap, hover, and keyboard all reach the
same content.

#### Our Commitments — `/community/commitments`

The brief's six areas: **Health · Safety · Environment (Water) · Economic Impact
· Workforce Development · Giving Back.**

Each gets an icon, a description, and key stats pulled from the `Stats`
collection so figures never drift between pages.

> **Read this list against the objections.** Water is called out specifically
> because it is the most contested topic; "Economic Impact" answers the "minimal
> return benefits" argument; "Health" answers the emissions claims. This page is
> the site's substantive response to organised opposition — see
> [`external-context.md`](source/external-context.md). It only works if each
> commitment carries a number, a date, and a source. Six icons with adjectives
> underneath would be worse than not having the page.

#### Voices — `/community/voices`

Supporter quotes with name, role, organisation, and photo. Filterable by who is
speaking — resident, worker, business, official — because *who* is vouching
matters more than what they say.

Unattributed quotes do not run. Phase 2 adds video.

---

### 5.5 FAQ & Resources — `/faq`

**This is the most important page on the site.** It is where the sceptical
neighbour goes first, and it is what "correct misperceptions" actually means.

**Structure:** searchable, categorised accordions. Every answer carries a *last
reviewed* date. Answers link to the source document wherever one exists.

**Proposed categories** — named for what people actually worry about, not for
what is comfortable to answer:

| Category | Covers |
| --- | --- |
| The project | What is being built, why here, who is behind it, when it finishes |
| Environment & water | Water source and volume, air quality, permits, monitoring |
| Living nearby | Noise, traffic, dust, blasting, lighting, construction hours |
| Jobs & the local economy | Hiring, unions, apprenticeships, local spend, tax |
| Safety & emergency | Site safety, emergency management, who to call |
| Permits & oversight | Regulatory status, filings, agencies, public process |

> **Open question, flagged for a client decision.** The PA DEP air quality
> permit is under appeal. A site whose stated purpose is transparency, which
> lists the permit approval as a milestone but omits the appeal, hands opponents
> their strongest argument the moment someone notices. Recommendation: a plain,
> factual entry under *Permits & oversight* — what was approved, what was
> appealed, by whom, current status. Owning it costs less than being caught
> omitting it. **Client call, not ours.**

**Resources** — anchored section, filterable by type: fact sheets, information
kits, permits and filings, reports. Every file shows format, size and date.

---

### 5.6 News — `/news`

Three types, filterable, one CMS collection: **Press Releases · Media Statements
· Supportive Coverage.** Coverage items link out and credit the outlet.

Detail pages carry a date, a share link, and press contact. Needs RSS — local
outlets (WCCS, WDAD, the *Indiana Gazette*) actively cover this project and
should be able to subscribe.

---

### 5.7 Contact — `/contact`

Four distinct routes, kept separate as the brief specifies. Routing people to
the right inbox is itself a service.

| Route | Destination |
| --- | --- |
| Job seekers | HomerCity.Info@Kiewit.com |
| Community members | info@homercityredevelopment.com |
| Vendors & partners | HomerCity.Info@Kiewit.com |
| Media | press@homercityredevelopment.com |

Plus the site address (1750 Power Plant Rd, Homer City, PA 15748), a map, and a
stated response expectation. If there is a community liaison or hotline, it
belongs here and should be the most prominent thing on the page.

---

## 6. Webflow CMS model

Thirteen collections. Anything the client will edit, or that repeats, is a
collection — not static markup.

| # | Collection | Key fields | Powers |
| --- | --- | --- | --- |
| 1 | **Stats** | label, value, unit, as-of date, footnote →, source note, group, order | Every number, everywhere |
| 2 | **Footnotes** | marker, text, source | Attaches to Stats |
| 3 | **Milestones** | date, title, description, status, phase, image, order | Timelines |
| 4 | **Alerts** | message, severity, link, start, end, active | Global banner |
| 5 | **Trades** | name, local number, icon, description, worker count, order | Workforce §3 |
| 6 | **Worker Spotlights** | name, trade, hometown, quote, photo, video | Workforce §4 |
| 7 | **Partners** | name, logo, description, role, URL, order | Partners |
| 8 | **Commitments** | name, icon, description, body, stats →, order | Commitments |
| 9 | **Voices** | name, role, organisation, quote, photo, type, video | Voices |
| 10 | **FAQ** | question, answer, category →, last reviewed, resources →, order | FAQ |
| 11 | **FAQ Categories** | name, description, icon, order | FAQ |
| 12 | **Resources** | title, type, file, size, date, description | Resources |
| 13 | **News** | title, type, date, summary, body, external URL, outlet, image | News |

### Why Stats and Footnotes are separate collections

This is the load-bearing decision in the whole model.

`CLAUDE.md` §5 says every moving figure carries an "as of" date and that the two
job figures always travel with their footnotes. As editorial discipline, that
rule gets broken the first time someone is in a hurry. As data structure, it
cannot be.

- **One number, one place.** 1,800+ appears on the homepage, the Workforce page,
  and in Commitments. As a collection item it is edited once. As three text
  fields it goes stale in two places and the transparency claim dies.
- **The footnote is a reference, not a habit.** Any stat with a footnote renders
  it automatically. A designer cannot drop it to tidy up a layout.
- **The date ships with the number.** Editing the value prompts for the date,
  because they are fields on the same item.

Given that the workforce figure has moved four times in six months — 1,000 →
1,300 → 1,500 → 1,800 — and will move again before launch, this pays for itself
immediately.

---

## 7. Component inventory

Built once in Stage 4, reused everywhere. Stage 3 sets their tokens.

**Layout:** section wrapper · container · grid · eyebrow+heading+body stack
**Content:** stat tile (w/ footnote + as-of) · stat row · pillar tile · timeline
(full + condensed) · expandable icon grid *(trades, partners, commitments —
one component, three datasets)* · quote card · photo essay item · news card ·
resource row · FAQ accordion · contact route card
**Navigation:** header · mobile menu · alert banner · footer · breadcrumb · jump
links · filter chips
**Interactive:** search field · expand/collapse · video embed · labelled map · lightbox

The expandable icon grid is worth building carefully — it carries the trades
grid, the partner grid, and the commitments grid. One well-made component covers
three of the brief's rollover requirements.

---

## 8. Content status

| ✅ Ready | ⚠️ Needs confirmation | ❌ Blocking |
| --- | --- | --- |
| Positioning statement | Workforce stats *(tier A — confirm against release)* | Names of the 9 unions |
| Four pillars | 4.4 vs 4.5 GW *(use 4.4)* | Independence + Kovalchick detail |
| All fact sheet figures + footnotes | Permit/agreement milestone status | Photo library + rights |
| Full milestone timeline | Water position for `/campus` §5 | Worker spotlights |
| Power block spec | Current FAQ copy to migrate | Partner logos, vector |
| Contact routing | | Site map / rendering asset |
| Trades list | | Position on the permit appeal |
| Site address + geography | | |

Pages shippable on existing content: **Home, The Campus, Contact.**
Pages needing client input to be real: **Workforce, Community, FAQ, News.**

Per the Stage 4 decision, all six Phase 1 sections get built — blocked content
renders as clearly-marked placeholder so the layout and component set are
provable before the copy lands.

---

## 9. Quality gates

Carried from `CLAUDE.md` §9, restated as things to check at Stage 4:

- **WCAG 2.2 AA.** Real text over images. Visible focus. Every hover reachable by
  tap and keyboard. Captions on video.
- **Mobile is the primary comp.** Design at 375px first.
- **Performance.** Explicit image dimensions, lazy loading below the fold, modern
  formats, no layout shift. This is a photo-heavy site on rural mobile.
- **Plain language.** GIS, HRSG, EPC, offtake all expanded on first use.
- **Every claim sourced.** Number, date, source. No exceptions.

## 10. Measurement

What "working" looks like, so the redesign can be judged:

| Goal | Signal |
| --- | --- |
| People find answers | FAQ search terms with no result; % of sessions reaching an answer |
| Tradespeople convert | Clicks to the jobs inbox from `/workforce` |
| The community stays informed | Alert banner impressions; news RSS subscribers |
| Misperceptions get corrected | Search terms on contested topics; whether those pages get reached |
| It works on real devices | Mobile share; mobile bounce vs. desktop |

The FAQ's zero-result search log is the most useful thing on this list — it is a
direct feed of what the community wants to know and isn't being told.

---

## Decisions needed to start Stage 3

1. **Build `/campus`?** Recommended. (§2)
2. **Homepage order** — approve moving Numbers up and adding Workforce? (§5.1)
3. **The permit appeal** — address it in the FAQ, or not? (§5.5)
4. **Brand guide** — typefaces, exact colours, logo vector. Blocking for Stage 3.
