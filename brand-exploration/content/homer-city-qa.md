# Homer City QA: website content snapshot

| | |
| --- | --- |
| Source | <https://www.figma.com/design/rPSQ9vdg7YQSbPTptIPlzc/Homer-City-QA> |
| fileKey | `rPSQ9vdg7YQSbPTptIPlzc` |
| Extracted | 2026-11-06 |
| Method | Figma MCP read tools plus read-only Plugin API scripts. Each script read text and node names and nothing else. |
| Status | **Read-only snapshot.** Nothing in the Figma file was changed. Where this file and the Figma file differ, the Figma file is correct. |

> This is **not approved copy**. It records what the QA file says on
> 2026-11-06. Where it conflicts with `docs/source/` or root `CLAUDE.md` §6,
> the conflict is listed in §3 and **the repo figure stands** until the
> conflict is resolved. See `brand-exploration/CLAUDE.md`.

## 1. File structure

| Page | Node | Contents |
| --- | --- | --- |
| Direction | `1:14851` | One section, "Modern" (`1:14853`), holding an alternative visual direction with its own copy (§2.1) |
| --- | `1:14852` | Divider, empty |
| Desktop | `0:1` | 19 page artboards at 1440 wide, plus "Kit" (`1:270`) and 20 "Content outline" frames above the artboards (§2.2, §2.4) |
| Mobile | `1:10086` | 20 artboards at 375 wide (including "Menu · Mobile") and "Kit · Mobile" (`1:10261`) (§2.3) |
| Imagery | `1:14813` | "Frame 1" (`1:14848`): 32 raster images such as `image 2` and `Photo / Crews on foundation`, plus three screenshots dated 2026-11-04. No text. |
| --- | `1:14849` | Divider, empty |
| Archive | `1:14850` | Empty |

How to read the notes:

- Node IDs are in backticks. IDs that start with `I` belong to nodes inside a
  component instance.
- **[PLACEHOLDER]** marks production notes, stand-in images, or "needed"
  labels. None of these is publishable copy.
- `[img: …]` gives the layer name of an image fill. Layer names often describe
  the image, and they mark stand-ins.
- Copy is quoted verbatim, including curly quotes, en dashes and em dashes.
- The QA file has **no local variables, text styles, paint styles or effect
  styles** (§4).

Desktop artboards, in order on the canvas:

| Artboard | Node |
| --- | --- |
| Home · Desktop | `1:94` |
| Campus future · Desktop | `1:559` |
| Power plant & fuel supply · Desktop | `1:655` |
| Campus history · Desktop | `1:793` |
| Development timeline · Desktop | `1:863` |
| Who we are · Desktop | `1:925` |
| Meet the workforce · Desktop | `1:1031` |
| Job opportunities · Desktop | `1:1128` |
| Community stewardship · Desktop | `1:1206` |
| Water · Desktop | `1:1279` |
| Health & safety · Desktop | `1:1387` |
| Economic impact · Desktop | `1:1465` |
| Charitable giving · Desktop | `1:1560` |
| FAQs · Desktop | `1:1577` |
| News & resources · Desktop | `1:1681` |
| Article · Desktop | `1:1724` |
| Photos, videos & voices · Desktop | `1:1757` |
| Contact us · Desktop | `1:1782` |

---

## 2. Content

### 2.0 Global chrome (on every artboard)

**Primary nav, desktop** (`Kit / Nav / On photo`, `Kit / Nav / On light`):
What we’re building ▾ · Who we are · Careers ▾ · Community stewardship ▾ ·
FAQs · News & resources ▾ · button "Contact us". The wordmark is
[PLACEHOLDER] `wordmark (raster from moodboard — vector needed)`.

**Mobile menu** (`1:10262`): Logo · Close · What we’re building · Who we are ·
Careers · Community stewardship · FAQs · News & resources · Contact.
Mobile says "Contact" here, while desktop says "Contact us".

**Alert bar, desktop** (`Kit / Alert bar`, for example `1:95`):
[img: Photo / Announcement thumbnail] "News · 4 September 2026" /
"Homer City Energy Campus workforce grows to more than 1,800 workers,
including members of 9 building and construction trade unions" / "View All".

**Alert bar, mobile** (`Kit / Mobile / Alert bar`, for example `1:10088`):
"What’s happening at the Homer City Energy Campus" / "Heavy equipment
transport to Homer City Energy Campus begins September 16."
**The desktop and mobile alerts carry different messages.**

**Footer** (`Kit / Footer`, for example `1:269`):

- Column 1: Home · What we’re building · Who we are · Careers · Community
  stewardship · FAQs · News & resources · Contact us
- Column 2:

  | Audience | Address |
  | --- | --- |
  | Job seekers | HomerCity.Info@Kiewit.com |
  | Community members | info@homercityredevelopment.com |
  | Vendors & partners | HomerCity.Info@Kiewit.com |
  | Media inquiries | press@homercityredevelopment.com |

- Column 3: Facebook
- Column 4: Privacy · Accessibility
- Bottom: [PLACEHOLDER] raster wordmark. "Homer City Energy Campus /
  1750 Power Plant Rd / Homer City, PA 15748". "© 2026 Homer City
  Generation".

**Standard closing module**: "Learn more about the campus", followed by six
link rows. The set of rows changes per page.

---

### 2.1 Direction page: "Modern" section (`1:14853`)

This is an alternative visual direction. Its copy partly differs from the
Desktop artboards.

- **Type specimen** (`Modern > Type`): Geist Bold, SemiBold, Medium, Regular
  and Light.
- **Hero** (`hero theme-dark`)
  - Nav: The campus · Who we are · Community · Careers · FAQs · News ·
    Contact.
  - H1 (`1:14867`): "Building America’s energy future by drawing on
    Pennsylvania’s proud past."
  - Intro (`1:14868`): "A 3,200+ acre natural gas-powered campus under
    construction on the site of the former Homer City Generating Station, in
    Indiana County, Pennsylvania."
  - Button: "See what we’re building →"
  - News card: "News · September 2026", "Homer City Energy Campus workforce
    grows to more than 1,800 workers, including members of 9 building and
    construction trade unions".
  - News card: "Milestone · June 2026", "Completed major demolition and
    transitioned into full construction phase".
- **Numbers** (`section theme-dark#numbers`)

  | Qualifier | Figure | Label | Note |
  | --- | --- | --- | --- |
  | Up to | 4.4 GW | Energy expected to be produced on-site | |
  | | 3,200+ acres | Natural gas-powered campus designed to meet the needs of America’s digital future | |
  | Projected | $10 Billion | Initial capital investment for power infrastructure and site readiness | |
  | Anticipated | 10,000+ | Direct on-site construction-related jobs | Footnote 1, verbatim |
  | Anticipated | ~1,000 | Total direct & indirect permanent high-paying positions in technology, operations and energy infrastructure | Footnote 2, verbatim |
  | | ~3M cubic meters | Earth moved, roughly the volume required to build Egypt’s Great Pyramid of Giza | |

- **Pillars** ("Community stewardship" eyebrow), shown as toggles: Safety,
  Infrastructure, Community, Energy Future. Only Safety is expanded:
  - "Safety is every Homer City Generation employee’s #1 priority; we are
    accountable for our actions and responsive to concerns."
  - Link: "Read the safety questions →"
- **Workforce** ("Careers" eyebrow). Heading: "Meet the tradesmen and women
  building the campus".

  | Figure | Label | Note |
  | --- | --- | --- |
  | 1,800+ | Direct-hire tradespeople and skilled contractors active on site | "As of September 2026" |
  | ~95% | Of the skilled direct-hire craft workforce is from the local area | |
  | 135+ | Apprentices training alongside experienced journeymen | |
  | 9 | Local union organizations represented on site | |

  - Button: "Find work on the campus →"
  - "Nine trades on site": Boilermakers, Carpenters, Electricians,
    Ironworkers, Laborers, Millwrights, Operators, Pipefitters, Teamsters.
    Each has a Material Symbols icon.
- **History** ("Who we are" eyebrow). Heading: "From past to present".
  - "The Homer City Generating Station produced power on this site from 1969
    to 2023."
  - "In April 2025, a plan was unveiled to build the Homer City Energy Campus
    in its place, in partnership with Kiewit Power Constructors Co.
    Demolition of the stacks and towers began the month before."
  - Media caption: "After the stacks and towers came down", dated "November
    2025".
- **FAQ**: "Common questions"
  - "What is being built?" A: "A 3,200+ acre natural gas-powered campus on
    the site of the former Homer City Generating Station, designed to meet
    the needs of America’s digital future. It is expected to produce up to
    4.4 GW."
  - Collapsed, no answer shown: "Who is building it?" · "How many people are
    working on site?" · "Has the project been approved?"
  - Button: "See all the questions →"
- **Timeline** (`section is-surface#timeline`). Heading: "Key milestones".
  Intro: "From demolition in March 2025 to what comes next."

  | Phase | Date | Milestone |
  | --- | --- | --- |
  | 2025 · Demolition & site development | March 2025 | Demolition of the stacks and towers at the former Homer City Generating Station begins |
  | | April 2025 | Plan unveiled to build the Homer City Energy Campus in partnership with Kiewit Power Constructors Co. |
  | | April 2025 | GE Vernova confirmed to provide seven high-efficiency 7HA.02 natural gas turbines for the campus |
  | | April 2025 | Corey Hessen appointed as CEO, bringing significant experience in power generation operations |
  | | June 2025 | Launch of Safety & Security Community Collaborative Team and Integrated Emergency Management Team |
  | | July 2025 | Hosted first community open house, convening hundreds of residents from across Indiana County |
  | | July 2025 | Participated in Senator McCormick’s Inaugural Pennsylvania Energy & Innovation Summit |
  | | November 2025 | PA DEP approved Homer City Generation’s air quality plan, authorizing construction and initial operations |
  | 2026 · Construction | March 2026 | Mobilized construction workforce with Kiewit and local unions; crossed 1,000+ workers active on site |
  | | April 2026 | Crossed first steel threshold with commencement of vertical construction |
  | | June 2026 | Completed major demolition and transitioned into full construction phase |
  | Upcoming · What comes next | 2026 | Installation of first equipment, including first deliveries of GE Vernova turbines expected in 2026 |
  | | To be announced | Anticipated announcement of customer(s) |

---

### 2.2 Desktop page artboards

#### Home · Desktop (`1:94`)

- **Hero** ("Hero — About the campus", `1:96`)
  - [PLACEHOLDER] [img: Photo / context — oblique aerial of the campus in its
    wooded terrain (placeholder)]
  - H1 (`1:101`): "Building America’s energy future while honoring
    Pennsylvania’s proud past."
  - Intro (`1:102`): "We are transforming the site of the former Homer City
    Generating Station into a state-of-the-art energy campus powered by one
    of the country’s largest natural gas power plants, bringing new jobs and
    economic opportunity back to Indiana County."
  - Buttons: "What we’re building" · "Local alerts & advisories"
- **Statement** (`1:106`). Label: "Homer City Energy Campus". Text (`1:112`):
  "We are building the Homer City Energy Campus, a 3,200+ acre natural
  gas-powered energy campus that brings back family-sustaining jobs,
  generates tax revenue for local schools and townships, and keeps Indiana
  County in the business of producing power."
- **Story text** (`1:113`)
  - Tabs: From past to present · Meet the workforce · See what we’re
    building
  - [img: Photo / haul truck on benched slope]
  - Button: "Meet the tradesmen and women"
- **A re-energized future** (`1:130`)
  - [img: Render / concept — campus reusing existing switchyard]
  - Text (`1:135`): "The Homer City Generating Station came online in 1969
    and ran until July 2023. On April 2, 2025, Homer City Redevelopment and
    Kiewit Power Constructors Co. announced the future of the former Homer
    City Generating Station with a plan to transform the decommissioned plant
    into the state-of-the-art natural gas-powered Homer City Energy Campus."
  - Button: "Site history"
- **Campus by the numbers** (`1:137`, stat ledger)

  | Qualifier | Figure | Unit | Label | Note / as-of |
  | --- | --- | --- | --- | --- |
  | Up to | 4.4 | GW | Energy expected to be produced on site | |
  | | 3,200+ | acres | Across the energy campus | |
  | | 1,800+ | workers | On site, and growing | "As of September 4, 2026" |
  | | 54 | years | Producing power on this site, 1969 to 2023 | |
  | Projected | $10 | Billion+ | Initial capital investment for power infrastructure & site readiness | "With data center development to add billions more." |

  Button: "Download fact sheet"
- **Homer City’s unique differentiators** ("Link — meet the workforce",
  `1:147`)
  - "Building the future of Pennsylvania energy." "The Homer City Energy
    Campus will be one of the largest natural gas power plants in the
    country, designed to produce up to 4.4 GW of energy – enough to serve
    large customers and thousands of homes on the local grid."
  - "A 54-year legacy producing power for Western Pennsylvania." "The former
    Homer City Generating Station generated power on this site from 1969
    until 2023. We’re rebuilding on the same ground — reusing the same land,
    water, substations and infrastructure."
  - "A workforce steeped in energy expertise." "More than 1,800 skilled
    tradespeople and contractors are building this campus, and 95% of the
    direct-hire craft workers are local – many from families who worked at
    the former plant."
  - Note (`1:166`): "Local refers to workers dispatched from the local union
    halls with jurisdiction over the project."
  - [img: Render / concept — campus reusing existing switchyard], labelled
    "Concept rendering"
- **Unions on site** (`1:170`)
  - "Boilermakers Local 154", "IBEW Local 5" and "Plumbers & Pipefitters
    Local 354", each with [PLACEHOLDER] "Logo needed".
  - Six tiles read [PLACEHOLDER] "Union name and logo needed".
- **Full-bleed photo**: [img: Photo / All-hands on site] (`1:195`)
- **Scroll story — community stewardship** (`1:197`)
  - Tabs: Construction alerts · Water · Health & safety · Economic impact ·
    Charitable giving
  - Active tab: "Sign up for text alerts about traffic and construction near
    the site." Button: "Construction alerts"
- **The latest news** (`1:221`). Label "News & resources". Heading "The
  latest news". Button "All news".

  | Meta | Headline | Source | Image |
  | --- | --- | --- | --- |
  | Press release · 4 September 2026 | Homer City Energy Campus workforce grows to more than 1,800 workers, including members of 9 building and construction trade unions | Homer City Generation | Photo / steel columns |
  | Coverage · 8 September 2026 | Indiana In the Morning interview: Corey Hessen and Becky Ford | Renda Media | Photo / Broadcast microphone |
  | Local advisory | Kiewit Power Constructors Co. announces planned traffic improvements for Homer City Energy Campus | Kiewit Power Constructors Co. | Photo / curved road aerial |

- **Learn more about the campus**: Meet the workforce · Who we are · Campus
  history · Water stewardship · Power plant & fuel supply · Economic impact
- **Common questions** (`1:256`). Label "FAQs". Button "All questions".
  - Q: "When will the campus be operational?" A: "The campus is advancing
    toward its target of producing first power in early 2028." Source:
    "Source: Power plant & fuel supply fact sheet, September 2026"
  - Collapsed, no answer shown: "Who is Homer City Generation?" · "Who is
    building the data center?" · "How much water will be used on site?"
- Footer (§2.0).

#### Campus future · Desktop (`1:559`)

- **Header — About the Homer City Energy Campus**. Title: "About the Homer
  City Energy Campus". [img: Photo / siteAerial]. Description:
  > For 54 years, the Homer City Generating Station produced power on this
  > site. Today, we are rebuilding that site into one of the largest natural
  > gas power plants in the country — drawing on the infrastructure,
  > transmission connections and the energy expertise that were already
  > here.
  >
  > In partnership with a hard-working community steeped in generations of
  > energy expertise, Homer City Generation and Kiewit Power Constructors Co.
  > announced a plan in April 2025 to transform the site’s legacy energy
  > infrastructure into a reliable provider of safe power and connectivity
  > solutions. At a moment when America needs leadership and modern grid
  > infrastructure, our team and partners have established a model that
  > creates shared value for our neighbors and energy customers alike.
- **The vision for Homer City**. "Honoring our past, reimagining our future."
  The statement repeats the Home statement word for word.
- **Homer City Energy Campus at a glance**

  | Qualifier | Figure | Label |
  | --- | --- | --- |
  | Up to | 4.4 GW | Energy expected to be produced on site |
  | | 3,200+ acres | Natural gas-powered campus designed to meet the needs of America’s digital future |
  | Anticipated | Early 2028 | First power on site |
  | | 7 | GE Vernova 7HA.02 high-efficiency natural gas turbines in the Power Block |

  Button: "Download fact sheet"
- **Full-bleed — overall site plan**: [PLACEHOLDER] [img: Render / concept —
  campus plan (stand-in for Kimley-Horn plan)], markers 1, 2 and 3, labelled
  "Concept rendering".
- **What we’re building — site plan**
  - Intro: "Select a point on the plan to read about it. The same points are
    listed here."
  - "1 · The energy campus": "A 3,200+ acre site transformed into a
    state-of-the-art energy campus."
  - "2 · The power plant": "A natural gas-powered plant with up to 4.4 GW of
    energy production."
  - "3 · Two Lick Reservoir": "The water source the former plant used, owned
    and operated by Homer City Generation."
- **Unique site attributes** (link rows): Power in front of the meter · A
  dedicated water source we own · An experienced workforce · Best-in-class
  project partners
- **Local economic & job benefits**

  | Qualifier | Figure | Label | Note |
  | --- | --- | --- | --- |
  | Projected | $10 Billion+ | Initial capital investment for power infrastructure and site readiness | With data center development to add billions more. |
  | Anticipated | 10,000+ | Direct on-site construction-related jobs | Footnote 1, verbatim |
  | Anticipated | ~1,000 | Total direct & indirect permanent high-paying positions in technology, operations and energy infrastructure | Footnote 2, verbatim |

  Button: "Download fact sheet"
- **A re-energized future for Indiana County and beyond**
  - "Workforce development." "Homer City Generation along with local labor
    and educational institutions will develop a pipeline for tech, energy and
    skilled trade jobs."
  - "Local power." "The campus will supply power to thousands of homes on the
    local grid."
- **Learn more**: Meet the workforce · Who we are · Campus history · Water
  stewardship · Power plant & fuel supply · Economic impact

#### Power plant & fuel supply · Desktop (`1:655`)

- **Header**. Title: "Power plant & fuel supply". Description: "Homer City is
  building on its energy legacy. The site of the former Homer City
  Generating Station is being transformed into a modern energy campus
  designed to create jobs, attract major investment and use Pennsylvania
  natural gas to produce dependable power."
- **Full-bleed**: [img: Render / concept — seven-unit power block, oblique],
  labelled "Concept rendering".
- **The power plant at a glance** (`1:668`): "The Homer City Energy Campus
  will use seven GE Vernova 7HA.02 high-efficiency natural gas turbines. At
  up to 4.4 gigawatts, the plant is designed to generate more electricity
  than the campus’ customer will need, enabling it to provide dependable
  power for the campus while also supplying electricity to the local grid."

  | Qualifier | Figure | Label |
  | --- | --- | --- |
  | Up to | 4.4 GW | Energy expected to be produced on site |
  | | 7 | GE Vernova 7HA.02 high-efficiency natural gas turbines in the Power Block |
  | Anticipated | Early 2028 | First power on site |
  | | Front of the meter | Power |

  Button: "Download fact sheet"
- **Key facts**
  - "A productive future for a legacy site." "As a brownfield site, the
    project reuses the former plant’s site infrastructure including the
    existing transmission connections, substations and water
    infrastructure."
  - "More efficient power generation." "The new natural gas-fired combined
    cycle units will be 40% more efficient than the former generating units
    and will emit 60% less carbon dioxide per megawatt-hour than the former
    plant."
  - "Power in front of the meter." "All power produced on the Homer City
    Energy Campus will flow directly to the grid as a front of the meter
    transaction, and our customer will only take a portion of that power."
  - "More than $10 billion in initial investment in the power plant." "Power
    infrastructure and site readiness will exceed $10 billion, with data
    center development expected to add billions more."
  - "Built by experienced partners." "Kiewit Power Constructors is leading
    engineering, procurement and construction, and GE Vernova is supplying
    the turbines and combined-cycle equipment."
  - "Powering homes and America’s digital future." "The Homer City Energy
    Campus will have enough generating capacity to serve multiple on-site
    customers and to supply power to thousands of homes on the local grid."
- **How it works**: "The power plant at the heart of the Homer City Energy
  Campus is designed to generate more electricity than our customer needs."
  - "In front of the meter." "The power is generated “in front of the
    meter,” meaning it is all sold onto the public grid."
  - "A long-term contract." "Our customer will draw an agreed amount of power
    at an agreed price under a long-term contract known as a Power Purchase
    Agreement (PPA)."
  - "The rest stays on the grid." "Because the plant will produce more power
    than the customer consumes, the rest stays on the grid – creating a new
    supply of electricity for everyone in this region at a time when demand
    is growing fast."
  - Diagram labels (`13:58xx`): Power plant / Generates power → Public grid /
    Metered delivery → Customer / Contracted power defined in Power Purchase
    Agreement; Local homes / Remaining capacity.
- **Statement — PJM** (`1:748`): "The Homer City Energy Campus will help
  relieve pressure on the Mid-Atlantic region, which PJM — the nation’s
  largest grid operator — predicts could face an energy capacity deficiency
  by the end of this decade."
- **Pennsylvania gas. Two supply paths.**
  - "Reliable power begins with reliable fuel." "Homer City Generation’s fuel
    plan is designed to connect the campus to two major interstate pipeline
    systems, providing more than one route for Pennsylvania-produced
    Marcellus natural gas to reach the plant."
  - "Multiple supply paths available." "The plan can draw from both Texas
    Eastern Transmission and Eastern Gas Transmission and Storage, providing
    an alternate supply path if one source is constrained."
  - "Two underground connections." "The site has two underground “lateral”
    lines that connect Homer City to the existing natural gas network serving
    the region. Main line: a 20-mile pipeline from Delmont to Homer City.
    Backup line: a 6-mile line from Blairsville to Homer City."
  - "A more efficient fuel source." "The new natural gas power plant will tap
    into a more efficient and environmentally responsible fuel source with
    natural gas from the Marcellus Shale delivered safely and quietly through
    underground pipelines."
- **Common questions**
  - Q: "How much power will the plant generate compared to the former
    plant?" A: "The former Homer City Generating Station generated
    approximately 1.8 GW when it was operational. By comparison, the new
    natural gas power plant is designed to generate up to 4.4 GW while
    emitting 60% less carbon dioxide per megawatt-hour." Source: "Source:
    Power plant & fuel supply fact sheet, September 2026"
  - Collapsed: "As the campus grows, will it drive up my power bill?" · "How
    much of the plant’s power generation will go to your customer, and how
    much will be available for regular people who live and work here?"
- **Learn more**: Meet the workforce · Who we are · Campus history · Water
  stewardship · Economic impact · Health & safety

#### Campus history · Desktop (`1:793`)

- **Header**. Title: "Homer City’s history". Description:
  > The Homer City Generating Station began operations in 1969, providing
  > thousands with jobs and millions of customers with energy.
  >
  > The facility was directly connected to both the PJM Interconnection,
  > L.L.C. (PJM) and New York Independent System Operator (NYISO)
  > transmission systems.
  >
  > After powering the region for 54 years, the power plant was permanently
  > decommissioned on July 1, 2023.
- **Full-bleed**: [PLACEHOLDER] [img: Photo / stand-in — demolition video
  still]
- **Why Homer City: legacy site attributes**: "As a brownfield site, the
  Homer City Energy Campus benefits from the fact that much of the critical
  infrastructure for the project is already in place from the former plant,
  including:" Transmission lines connected to the power grid · Substations ·
  Water access · Experienced local workforce
- **Then & now**: "With the date each photograph was taken." A carousel,
  counter "1 / 12". Every image is a [PLACEHOLDER] "Photo / stand-in — …
  (real dated photo needed)".

  | Caption | Date |
  | --- | --- |
  | Homer City Generating Station | 1969 to 2023 |
  | Inflection point | March 2025 |
  | After the stacks and towers came down | November 2025 |
  | View from the north | February 2026 |
  | Concrete base of the gas insulated switchgear (GIS) slab | February to March 2026 |
  | First steel, going vertical | March 2026 |
  | Power Block aerial, looking north | April 2026 |
  | Gas insulated switchgear (GIS) building and foundations | April 2026 |
  | Water treatment area | April 2026 |
  | Module yard: pipe rack fabrication | July 2026 |
  | GIS: working at height | July 2026 |
  | Unit 5 heat recovery steam generator (HRSG) | July 2026 |

- **Learn more**: Meet the workforce · Who we are · Water stewardship · Power
  plant & fuel supply · Economic impact · Health & safety

#### Development timeline · Desktop (`1:863`)

- **Header**. Title: "Campus development timeline". Description: "From
  demolition in March 2025 to first power, anticipated in early 2028."
  [img: Photo / steel]

| Phase | Date | Milestone | Status / image |
| --- | --- | --- | --- |
| 2025 · Demolition & site development | March 2025 | Demolition of the stacks and towers at the former Homer City Generating Station begins | stand-in photo |
| | April 2025 | Plan unveiled to build the Homer City Energy Campus in partnership with Kiewit Power Constructors Co. | |
| | April 2025 | GE Vernova confirmed to provide seven high-efficiency 7HA.02 natural gas turbines for the campus | |
| | June 2025 | Launch of Safety & Security Community Collaborative Team and Integrated Emergency Management Team | |
| | July 2025 | Hosted community open house, convening hundreds of residents from Indiana County | |
| | November 2025 | The Pennsylvania Department of Environmental Protection (PA DEP) approved Homer City Generation’s air quality plan, authorizing construction and initial operations | stand-in photo |
| 2026–2027 · Construction | March 2026 | Mobilized construction workforce with Kiewit and local unions; crossed 1,000+ workers active on site | stand-in photo |
| | April 2026 | Crossed first steel threshold with commencement of vertical construction | stand-in photo |
| | June 2026 | Completed major demolition and transitioned into full construction phase | stand-in photo |
| | September 2026 | Delivery of GE Vernova turbines and other heavy energy equipment began | **"In progress"** |
| 2028 · Operations begin | | (mobile only: "Early 2028" / "Anticipated first power on site", qualifier "Anticipated") | [img: Render / concept — operating plant at dusk], labelled "Concept rendering" |

- **Common questions**
  - Q: "How large is the energy campus?" A: "The Homer City Energy Campus
    covers more than 3,200 acres." Source: "Source: Quick facts, September
    2026"
  - Collapsed: "When will the campus be operational?" · "Who is building the
    data center?" · "How much water will be used on site?"
- **Learn more**: the standard six rows.

#### Who we are · Desktop (`1:925`)

- **Header**. Title: "Who we are". [img: Photo / steelCrane]. Description: "A
  project this size is only possible with best-in-class partners, vendors
  and contractors and an exceptional workforce. By working in close
  collaboration with best-in-class partners and a community steeped in
  generations of energy expertise, we hope to establish a model that creates
  shared value for our neighbors and energy customers alike."
- **Campus pillars**
  - "Safety." "Safety is our #1 priority; we are accountable for our actions
    and responsive to concerns."
  - "Infrastructure." "We are building world-class energy infrastructure at
    unprecedented scale."
  - "Community." "We are investing in Pennsylvania for the long term,
    operating as a genuine community partner and becoming one of the state’s
    leading employers."
  - "Energy future." "We are shaping American innovation, securing energy
    independence and powering the nation’s digital future."
- **Campus partners**. Every logo is [PLACEHOLDER] "Logo — vector needed".

  | Partner | Role line | Description | Link |
  | --- | --- | --- | --- |
  | Homer City Generation | Overseeing the site transformation and power plant development | Homer City Generation is the local development organization overseeing the transformation of the former Homer City Generating Station into a natural gas-powered energy campus. | none |
  | Kiewit | Building the Homer City Energy Campus and managing project construction and hiring | Kiewit is one of the country’s leading engineering, procurement and construction (EPC) contractors. | Visit kiewit.com |
  | GE Vernova | Building the seven high-efficiency 7HA.02 gas-fired turbines that will power the natural gas plant | GE Vernova is a global energy company. | Visit gevernova.com |
  | NextEra Energy | Delivering the natural gas that will power the Energy Campus and its customers | NextEra is America’s leading energy infrastructure builder. | Visit nexteraenergy.com |

- **Local partners**. Every logo is [PLACEHOLDER] "Logo — vector needed".

  | Partner | Role |
  | --- | --- |
  | Independence Excavating | Site demolition |
  | Kovalchick Corporation | Site salvage and recycling |
  | Aquatech | Water technology partner |
  | Edwards Moving & Rigging | Heavy energy equipment transport |

- **Link — meet the workforce**: [PLACEHOLDER] [img: Photo / action —
  tradespeople at work (placeholder)]. "Meet the tradesmen and women" /
  "Learn more about the workforce bringing the campus to life." Button: "Meet
  the workforce".
- **Common questions**: the same four questions as the Development timeline
  page, with the 3,200 acres answer expanded.
- **Learn more**: Meet the workforce · Campus history · Water stewardship ·
  Power plant & fuel supply · Economic impact · Health & safety

#### Meet the workforce · Desktop (`1:1031`)

- **Header**. Title: "Meet the tradesmen and women building the campus".
  [img: Photo / foundations]. Description: "By transforming the site of the
  former Homer City Generating Station into the Homer City Energy Campus,
  this project is poised to bring an unprecedented level of economic
  opportunity to the region while returning thousands of jobs back to the
  community. To do so, Homer City Generation and Kiewit are drawing directly
  from the skilled labor force across Indiana County and Pennsylvania."
- **About our workforce**
  - "Engaging the building & construction trades." "Our fast-growing
    workforce includes boilermakers, carpenters, electricians, ironworkers,
    laborers, millwrights, operators, pipefitters, teamsters and other
    skilled contractors and craftspeople from across Western Pennsylvania."
  - "Training the next generation." "The workforce also includes apprentices
    gaining hands-on training alongside experienced journeymen working at the
    Homer City Energy Campus."
  - "Prioritizing safety." "Safety is every Homer City Generation employee’s
    #1 priority and we operate in accordance with the highest possible safety
    standards – to date, we have achieved zero Occupational Safety and Health
    Administration (OSHA) recordable incidents, as of September 4, 2026."
- **Workforce by the numbers**

  | Qualifier | Figure | Label | Note |
  | --- | --- | --- | --- |
  | | 1,800+ | Skilled contractors and direct-hire tradespeople currently active onsite, with the expectation to grow to 2,000 total workers by the end of 2026 | As of September 4, 2026 |
  | | 9 | Union organizations represented across the project’s direct-hire workforce | Direct-hire workforce excludes contractors. Data as of September 4, 2026. |
  | | 95% | Of direct-hire craft workers onsite are local | Local refers to workers dispatched from the local union halls with jurisdiction over the project. |
  | | 135+ | Apprentices currently gaining hands-on training and career experience as part of the direct-hire workforce | (none) |
  | Anticipated | 10,000+ | Direct on-site construction-related jobs expected over the life of the project | Footnote 1, verbatim |
  | Anticipated | ~1,000 | Total direct and indirect permanent high-paying positions in technology, operations and energy infrastructure once the campus is fully operational | Footnote 2, verbatim |

  Button: "Download fact sheet"
- **Scroll story — worker spotlights**
  - Tabs: "Shawn - Trafford, PA" · "Isaac - Penn Hills, PA". Mobile uses an
    em dash here.
  - [PLACEHOLDER] [img: Photo / stand-in — Shawn spotlight video still]
  - Caption: "IBEW Local 5 worker spotlight: Shawn, Trafford, PA."
  - Button: "Job opportunities"
- **Our workforce commitments**
  - "Safety is our #1 priority; we are accountable for our actions and
    responsive to concerns."
  - "The project will create a pipeline of family-sustaining union careers
    for both experienced tradespeople and the next generation of
    apprentices."
  - "This is not a one and done job; workers on the project will power the
    next generation of Pennsylvania construction and building trades once the
    project is complete."
- **Unions on site**: same as Home. Three named unions, each with
  [PLACEHOLDER] "Logo needed", and six tiles reading [PLACEHOLDER] "Union
  name and logo needed".
- **Community commentary**. Every portrait is [PLACEHOLDER] "Portrait".
  1. "“For years, our local didn’t take in a single apprentice because the
     work simply wasn’t here – but now, the Homer City Energy Campus is
     creating life-changing opportunities for our members and apprentices
     here in their own community, and we cannot hire fast enough. This
     project is allowing us to showcase the talent and expertise of
     Pennsylvania’s own union workforce. We are proud to have our local
     members playing a leading role in building a project that will support
     jobs, economic growth and energy development for decades to come. The
     future could not be brighter for our members and our apprentices – and
     that’s something worth celebrating.”"
     **Shawn Steffee**, Business Agent, International Brotherhood of
     Boilermakers Local 154; President, South-Central Building Trades
  2. "“I.B.E.W. Local 5 has worked for generations in the powerhouses of
     Indiana County. Homer City Generation provides our members with decades’
     worth of work, all while modernizing America’s grid infrastructure and
     building clean, reliable power. Our electricians are an integral part of
     the community, and we are excited to share in the prosperity this
     project brings.”"
     **Ben Steinmeyer**, Business Agent, I.B.E.W. Local 5
  3. "“The Homer City project has been a major win for Plumbers & Pipefitters
     Local 354 and, more importantly, for the hardworking men and women who
     make up our membership. It has created new opportunities for our
     apprentices, including making it possible to sell our three previous
     schools and create one larger combined location for the apprenticeship,
     expanding our workforce and positioning our Local for continued growth.
     As a Business Manager, I’m proud to see projects like Homer City
     demonstrate what union labor can accomplish. When we grow our union
     workforce, we’re not just creating good-paying careers; we’re
     strengthening families, communities and the economy of the entire
     Commonwealth of Pennsylvania.”"
     **Chad Morrison**, Business Manager / Financial Secretary-Treasurer,
     Plumbers & Pipefitters Local #354
  4. "“The significant expansion of the workforce at the Homer City Energy
     Campus is an exciting and encouraging development. Fresh job
     opportunities for skilled trade workers and the ability for apprentices
     to have hands-on learning opportunities are helping to strengthen
     regional economic growth and competitiveness.”"
     **Joe Pittman**, Pennsylvania State Senate Majority Leader
  5. "“It is exciting to see the next generation of highly skilled workers
     building generational projects right here in Indiana County. The
     partnership between the business community in Homer City Generation with
     local labor unions is a model for our Commonwealth and nation. When we
     partner business with trade unions, the sky is the limit.”"
     **Jim Struzzi**, Pennsylvania State Representative, 62nd Legislative
     District
- **Learn more**: Who we are · Campus history · Water stewardship · Power
  plant & fuel supply · Economic impact · Health & safety

#### Job opportunities · Desktop (`1:1128`)

- **Header**. Title: "Job opportunities". [img: Photo / offices]. No
  description.
- **Job board**: "Kiewit Power Constructors leads construction hiring in
  coordination with our local unions. Each row opens Kiewit’s union craft
  opportunities page."

  Every row reads "Union craft · Hiring via Kiewit · Homer City Energy Campus
  · Indiana County, PA".

  | Trade | Union local shown |
  | --- | --- |
  | Boilermakers | Boilermakers Local 154 |
  | Carpenters | none |
  | Electricians | IBEW Local 5 |
  | Heavy equipment operators | none |
  | Ironworkers | none |
  | Laborers | none |
  | Millwrights | none |
  | Pipefitters | Plumbers & Pipefitters Local 354 |
  | Teamsters | none |

- **Nine trades on site**: "On the Homer City Energy Campus, our workforce
  includes a wide range of skilled trade crafts:"

  | Trade | Description |
  | --- | --- |
  | Boilermakers | Supporting critical mechanical construction and equipment installation activities. |
  | Carpenters | Who perform concrete form work, scaffolding and other critical construction activities. |
  | Electricians | Supporting all aspects of electrical work on the site. |
  | Heavy equipment operators | Specializing in the construction industry. |
  | Ironworkers | Specializing in structural steel erection, concrete/reinforcing steel, pre-engineered metal buildings, welding, rigging/machinery moving and other industrial construction activities. |
  | Laborers | Experienced in large-scale construction and the operation of related heavy machinery. |
  | Millwrights | Trained to install, maintain, diagnose, repair, assemble and align complex industrial machinery. |
  | Pipefitters | Who specialize in installing all piping systems and equipment on site. |
  | Teamsters | Engaged in jobsite transportation, logistics and materials handling. |

  The Operators and Laborers descriptions look swapped. "Specializing in the
  construction industry" is generic, and "operation of related heavy
  machinery" sits under Laborers.
- **Community commentary**: "Read more about the opportunities on the Homer
  City Energy Campus from Shawn Steffee, Business Agent for the International
  Brotherhood of Boilermakers Local 154 and President of the South-Central
  Building Trades." It is followed by the Steffee quote, as on Meet the
  workforce.
- **How to get hired**: "Interested in working on the Homer City Energy
  Campus? Kiewit Power Constructors leads construction hiring in coordination
  with our local unions. For more information on open positions, visit
  Kiewit’s dedicated website." Links: "Kiewit union craft opportunities" ·
  "HomerCity.Info@Kiewit.com"

#### Community stewardship · Desktop (`1:1206`)

- **Header**. Title: "Our commitments to the community". [img: Photo /
  farmAerial]. Description: "We live in this community too, and we
  understand the importance of Western Pennsylvania’s natural resources. We
  take seriously our responsibility and stewardship to ensure the safety of
  natural areas and resources near the site and that they remain healthy and
  thrive as the site redevelops and transforms."
- **Environmental responsibility**: "Through the construction process and in
  our operations, once the plant is up and running, we are and will remain
  committed to the highest environmental and safety standards, in full
  compliance with all state and federal regulatory requirements and
  permitting processes."
  - "Cleaner energy." "Once in operation, the power plant will emit 60% less
    carbon dioxide per megawatt-hour than the former Homer City Generating
    Station."
  - "Water reuse." "Throughout operations we will treat and reuse water on
    site, reducing the environmental impact on the local water supply."
  - "Energy input vs electrical output." "New natural gas-fired combined
    cycle units will be 40% more efficient than the former generating
    units."
  - "Modern fuel delivery." "Instead of solid fuel being delivered by truck
    and train, the plant will be powered by cleaner burning natural gas,
    delivered quietly and safely via underground pipelines."
- **Our community commitments** (tabs: Power · Water · Health & safety ·
  Economic impact · Charitable giving)
  - Power (visible): "The power plant at the heart of the Homer City Energy
    Campus is designed to generate more electricity than our customer
    needs." [img: Photo / switchyard close]. Button: "Power".
  - Water (HIDDEN tab panel): "The Homer City Energy Campus uses the same
    water source that served the former Homer City Generating Station for
    over 50 years — the Two Lick Reservoir, which is owned and operated by
    Homer City Generation."
  - Health & safety (HIDDEN): "At Homer City Generation, our highest
    priorities are the health, safety and the environment of our workers and
    the community. We are committed to building a world-class advanced,
    efficient, and environmentally responsible natural gas power plant."
  - Economic impact (HIDDEN): "By transforming the site of the former Homer
    City Generating Station into the state-of-the-art Homer City Energy
    Campus, this project is poised to bring an unprecedented level of
    economic opportunity to the region while returning thousands of jobs back
    to the local community."
  - Charitable giving (HIDDEN): no copy. [PLACEHOLDER] [img: Photo /
    stand-in — charitable giving tab]

#### Water · Desktop (`1:1279`)

- **Header**. Title: "Water stewardship". [img: Photo / pond edge with
  riprap (water)]. Description: "The Homer City Energy Campus uses the same
  water source that served the former Homer City Generating Station for over
  50 years — the Two Lick Reservoir, which is owned and operated by Homer
  City Generation."
- **Key facts**: "As a result of our plans to manage water usage
  campus-wide, total water use across the Homer City Energy Campus —
  including the power plant and the future data centers — will be in line
  with the historical usage levels of the former plant when it was
  operational."
  - "Two Lick Reservoir will continue as the source of water." "Two Lick
    Reservoir was constructed as part of the former plant and will continue
    to be owned and operated by Homer City Generation. Forecast water usage
    for the Energy Campus will align with historical withdrawal levels."
  - "We treat and reuse water onsite." "Homer City Generation’s
    state-of-the-art water treatment system will treat onsite stormwater and
    water withdrawn from Two Lick Creek. The state-of-the-art cooling systems
    will recycle treated water throughout the Energy Campus to minimize the
    withdrawal rate from Two Lick Creek."
  - "We are building a modern water treatment facility." "We are investing
    hundreds of millions of dollars to create a modern water treatment
    facility that will improve the efficiency of the water withdrawn. This
    represents an important environmental investment that will deliver
    meaningful benefits by improving water quality before it is returned to
    the watershed, supporting long-term ecosystem health."
- **How our water treatment system works**: "The water treatment system is
  designed to capture, treat, and recycle water on the Homer City Energy
  Campus. The system will also collect and reuse stormwater from on-site
  stormwater ponds, reducing demand on withdrawals from Two Lick Creek."
  Diagram labels: Reservoir · Water intake · Water treatment · Capture and
  reuse water · Data center · Power plant · Power grid · Cooling water
  treatment · Water discharge · Two Lick Creek. Legend: Water · Electricity.
- **Our commitment on water**: "At Homer City Generation, we are committed to
  being good stewards of the water we use in Indiana County." / "Throughout
  the construction process and once the power plant is operational, we are
  and will remain committed to the highest environmental and safety
  standards, in full compliance with all state and federal regulatory
  requirements."
- **Common questions** (all collapsed, no answers in the file):
  - "How much water will the Homer City Energy Campus use across both the
    power plant and future data centers?"
  - "What water source will the power plant draw on? How will you limit the
    strain on local water supplies?"
  - "What steps are you taking to produce power in a water-efficient
    manner?"

#### Health & safety · Desktop (`1:1387`)

- **Header**. Title: "Health & safety". [img: Photo / guarded walkway
  (safety)]. Description: "At Homer City Generation, our highest priorities
  are the health, safety and the environment of our workers and the
  community. We are committed to building a world-class advanced, efficient,
  and environmentally responsible natural gas power plant."
- **Our safety record**: figure **Zero**, label "Occupational Safety and
  Health Administration (OSHA) recordable incidents to date", note "As of
  September 4, 2026." Button: "Download fact sheet".
- **Construction & community**
  - "Skilled union labor." "From start to finish, this project will be
    developed in partnership with skilled local craftsman-union labor, where
    “safety first and foremost” is ingrained in all they do — both on the job
    and in their communities."
  - "A collaborative worksite." "Before the first shovel hit the ground,
    Homer City Generation engaged with local police, fire, and EMS —
    informing them of our project plan and making sure they know we will
    maintain an active, transparent and “one team” relationship through all
    phases of construction."
  - "Environment and logistics management." "A construction project of this
    scale will add truck traffic to the roads and will generate dust on site.
    We will implement measures to manage both to minimize their impact during
    the construction phase."
- **Our core safety values**: "We are building a world-class energy facility
  and that means having world-class safety practices."
  1. "Safety first for all partners and community." "Safety and
     environmental stewardship take precedence over speed, convenience, and
     cost for the project and surrounding community."
  2. "Empowerment to stop work." "Every individual has the authority and
     responsibility to stop work for any reason without fear of
     repercussion."
  3. "Nobody gets hurt." "We strive to create a culture in which everyone
     returns home safely in the same condition they arrived to work each
     day."
  4. "Professional accountability has no barriers." "Everyone, from
     frontline workers to management, is accountable for each other’s
     safety; if you see something, say something."
  5. "Continuous improvement." "Fostering an environment of continuous
     improvement in every aspect of the project."
- **Common questions**
  - Q: "What is your safety track record to date?" A: "Safety is every Homer
    City Generation employee’s #1 priority, and we operate in accordance with
    the highest possible safety standards – to date, we have achieved zero
    OSHA-recordable incidents." Source: "Source: Economic impact & workforce
    fact sheet, September 2026 (as of September 4, 2026)"
  - Collapsed: "What is the purpose of the Safety & Security Community
    Collaborative Team?"

#### Economic impact · Desktop (`1:1465`)

- **Header**. Title: "Economic impact". [img: Photo / farm and barn aerial].
  Description: "By transforming the site of the former Homer City Generating
  Station into the state-of-the-art Homer City Energy Campus, this project is
  poised to bring an unprecedented level of economic opportunity to the
  region while returning thousands of jobs back to the local community."
- **Economic impact by the numbers**: "As the largest natural gas power plant
  under construction in the nation and one of the largest capital
  investments in Pennsylvania’s history, the project is a long-term
  investment in the Commonwealth."

  | Qualifier | Figure | Label | Note |
  | --- | --- | --- | --- |
  | Projected | $10 Billion+ | Initial capital investment for power infrastructure and site readiness | With data center development to add billions more. |
  | | 3,200+ acres | Site being transformed from the former Homer City Generating Station into a modern energy campus | |
  | | Thousands of homes | Local grid customers the campus is expected to help supply alongside its on-site customers | |
  | Anticipated | 10,000+ | Direct on-site construction-related jobs | Footnote 1, verbatim |
  | Anticipated | ~1,000 | Total direct and indirect permanent high-paying positions in technology, operations and energy infrastructure | Footnote 2, verbatim |

  Button: "Download fact sheet"
- **Investment that stays here**
  - "Capital investment." "An initial capital investment projected to exceed
    $10 billion for power infrastructure and site readiness, making this one
    of the largest such investments in Pennsylvania’s history."
  - "Jobs." "Creation of 10,000+ direct on-site construction-related jobs
    along with approximately 1,000 total direct and indirect permanent
    high-paying positions in technology, operations and energy
    infrastructure." **This copy has no footnotes.**
  - "Workforce development & training." "A pipeline of family-sustaining
    careers for both experienced tradespeople and the next generation of
    apprentices who are gaining hands-on training on the Homer City Energy
    Campus."
  - "Tax and other revenue." "The Homer City Energy Campus will boost local
    school budgets, townships and the county through property taxes, as well
    as through taxes paid by the thousands of people who work to build and
    operate the site."
  - "Business community." "The Homer City Energy Campus is already generating
    significant economic activity throughout Indiana County and the
    surrounding region, supporting local businesses, restaurants and lodging
    providers while also engaging local partners on-site."
  - "Local power." "All power generated will be placed on the local grid, and
    our customer will only utilize a portion. The surplus power will be more
    than sufficient to supply electricity to thousands of homes and
    businesses throughout the region."
- **Full-bleed photo**: [img: Photo / slab with boom lift aerial]
- **Being a good neighbor**
  - "Traffic and safety." "Traffic improvements have been developed at
    intersections across Center, Burrell, Black Lick and White townships —
    new signals, turn lanes and signage — to keep traffic moving safely
    around the site."
  - "Emergency planning." "A Safety & Security Community Collaborative Team
    and an Integrated Emergency Management Team have been established to
    bring together local police, fire, EMS and hospitals, so first responders
    know our plans at every phase."
  - "Open communication." "Open houses, public meetings and ongoing
    coordination will continue to occur with local leaders, unions and
    regulators to keep the community aware of the project status."
  - "Partnering with IUP." "In July 2026 we hosted leadership, faculty and
    staff from Indiana University of Pennsylvania on site to explore
    research, student learning and workforce development collaboration."
- **Common questions** (collapsed): "What impact will this project have on
  the area tax base?" · "What commitments have you made to support local
  businesses?"

#### Charitable giving · Desktop (`1:1560`)

- Title: "Charitable giving". Section "Giving back — content needed": heading
  "Giving back".
- Three cards with [PLACEHOLDER] labels "Giving back 1/2/3" and images
  [img: Photo / switchyard (real)], [img: Photo / crews on slab and rebar
  (aerial)] and [img: Photo / steel frame bays].
- **No content yet.**

#### FAQs · Desktop (`1:1577`)

- Title: "Questions about the campus, answered with sources"
- Search field: "Search". Filters: All · Campus plans · Construction ·
  Environment & water stewardship · Power generation · Economic & community
  impacts · Job & partnership opportunities
- **Answers exist in the file for only 3 of 32 questions.** The other 29 are
  collapsed instances that hold no answer text.

**Campus plans**

1. What are the plans for the Homer City Generating Station?
   A: "The site of the former Homer City Generating Station is being
   transformed into the Homer City Energy Campus: a 3,200+ acre natural
   gas-powered campus designed to meet the needs of America’s digital future.
   Seven GE Vernova 7HA.02 high-efficiency natural gas turbines are expected
   to produce up to 4.4 GW of energy on site."
   Source: "Sources: Quick facts and Power plant & fuel supply fact sheets,
   September 2026"
2. When will the project be completed?
3. What is the difference between Homer City Redevelopment and Homer City
   Generation?
4. Who is Homer City Generation partnering with on the project?
5. Who is providing the financing for the project?
6. Where can I see renderings of the Homer City Energy Campus?
7. Has a customer been selected yet for the Homer City Energy Campus? If not,
   when will it be announced?
8. Who is responsible for building the prospective data centers?
9. Who is Homer City Generation?
10. How large is the energy campus?
11. When will the campus be operational?

**Construction**

1. How long will the construction be occurring on the campus?
2. Where can I sign up for alerts on traffic and other construction-related
   changes?
3. What is the safety record on the project site?
   A: "Safety is every Homer City Generation employee’s #1 priority, and we
   operate in accordance with the highest possible safety standards – to
   date, we have achieved zero OSHA-recordable incidents."
   Source: "Source: Economic impact & workforce fact sheet, September 2026
   (as of September 4, 2026)"
4. What is the purpose of the Safety & Security Community Collaborative Team?

**Environmental considerations & water stewardship**

1. The Homer City Energy Campus is positioned near many of the community’s
   most cherished natural areas. How will the new site ensure that these
   natural areas remain intact?
2. How much water will the Homer City Energy Campus use across both the power
   plant and future data centers?
3. What water source will the power plant draw on? How will you limit the
   strain on local water supplies?
4. What steps are you taking to produce power in a water-efficient manner?

**Power generation**

1. What areas is the new Homer City Energy Campus going to serve?
2. Is Homer City planning to use the generation on-site, or will excess
   capacity go onto the grid?
3. How much power will the plant generate compared to the former plant?
4. When will the plant be up and running?
5. How much of the plant’s power generation will go to your customer, and
   how much will be available for regular people who live and work here?
6. As the campus grows, will it drive up my power bill?
   A: "Electricity rates are reviewed and approved by the Pennsylvania Public
   Utility Commission, and we do not have a role in determining those rates
   for the community. However, the plant is designed to increase the
   availability of electricity for local homes and businesses, which relieves
   pressure on the grid. In addition, the plant will operate 40% more
   efficiently on a heat rate basis than the former plant."
   Source: "Source: Power plant & fuel supply fact sheet, September 2026"

**Economic & community impacts**

1. What are the economic impacts of the Homer City Energy Campus?
2. How many jobs will the campus create over the short and long term?
3. Where is the project’s workforce from? Are they local or are they from
   out-of-state?
4. How many jobs is the project creating, and will they disappear once the
   construction process is complete?
5. What kinds of work are being done on the site, and by whom?
6. What impact will this project have on the area tax base?
7. What commitments have you made to support local businesses?

**Job & partnership opportunities**

1. How can I learn about employment opportunities at the Homer City Energy
   Campus?
2. Who is overseeing hiring on the project site?
3. I’m a vendor or contractor looking to sell my product/services for the
   site’s construction. How do I get in touch with you?

**Didn’t find your question?** "Community members can write to the project
team directly." Links: info@homercityredevelopment.com · Contact us

Answers that appear on other pages, collected here:

- **When will the campus be operational?** "The campus is advancing toward
  its target of producing first power in early 2028." (Source: Power plant &
  fuel supply fact sheet, September 2026)
- **How large is the energy campus?** "The Homer City Energy Campus covers
  more than 3,200 acres." (Source: Quick facts, September 2026)
- **How much power will the plant generate compared to the former plant?**
  The answer is quoted under Power plant & fuel supply above.
- **What is your safety track record to date?** The wording matches the
  Construction #3 answer.
- **What is being built?** (Direction page only) The answer is quoted in
  §2.1.

#### News & resources · Desktop (`1:1681`)

- Title: "News & resources"
- **Community alerts & advisories**

  | Status | Date | Title |
  | --- | --- | --- |
  | Active | From September 16 | Heavy equipment transport to Homer City Energy Campus begins September 16 |
  | Active | (none) | Kiewit Power Constructors Co. announces planned traffic improvements for Homer City Energy Campus |

- **Text alert sign-up**: "Sign up for text alerts about traffic and
  construction near the site." Button: "Text alerts".
- **Latest news**. Filters: All · Press releases · Coverage · Commentary.

  | Meta | Title | Source | Image |
  | --- | --- | --- | --- |
  | Press release · 4 September 2026 | Homer City Energy Campus workforce grows to more than 1,800 workers, including members of 9 building and construction trade unions | Homer City Generation | Photo / slab with anchor bolts (aerial) |
  | Coverage · 8 September 2026 | Indiana In the Morning interview: Corey Hessen and Becky Ford | Renda Media | [PLACEHOLDER] Photo / field edge aerial (stand-in — publisher thumbnail needs permission) |
  | Coverage (undated) | EXCLUSIVE: How 1,800 local tradespeople are powering Pennsylvania’s ultimate energy and data innovation campus | Washington Examiner | Photo / site offices with crew |
  | Local commentary (undated) | AS I SEE IT: This Labor Day, I need workers | Local commentary | Photo / steel beam with crane |

- **Fact sheets & media**: "Download the September 2026 fact sheets.
  Reporters and editors can reach the media team directly." Link:
  press@homercityredevelopment.com.

  | Document | Format · date · size |
  | --- | --- |
  | Homer City Energy Campus quick facts | PDF · September 2026 · 288 KB |
  | Power plant & fuel supply | PDF · September 2026 · 191 KB |
  | Economic impact & workforce | PDF · September 2026 · 144 KB |

#### Article · Desktop (`1:1724`)

- Title: "Homer City Energy Campus workforce grows to more than 1,800 workers,
  including members of 9 building and construction trade unions"
- Description: "Press release · 4 September 2026 · Homer City Generation".
  [img: Photo / foundation pads aerial]
- **Article body** (`1:1727`): the Left and Right frames are **empty**. There
  is no body copy.
- **Media inquiries**: "Reporters and editors can reach the media team
  directly." Link: press@homercityredevelopment.com

#### Photos, videos & voices · Desktop (`1:1757`)

- Title: "Photos, videos & voices"
- **Photos & videos**. Every image is a [PLACEHOLDER] "Photo / stand-in — …
  (real dated photo needed)". The first two captions appear twice.

  | Caption | Date |
  | --- | --- |
  | Power Block aerial, looking north | April 2026 |
  | Water treatment area | April 2026 |
  | Demolition of the stacks and towers | March 2025 |
  | Power Block aerial, looking north | April 2026 |
  | Water treatment area | April 2026 |

- **Soundbites from the community**: the Joe Pittman and Jim Struzzi quotes,
  as on Meet the workforce, with [PLACEHOLDER] "Portrait".

#### Contact us · Desktop (`1:1782`)

- Title: "Contact us"
- **Four inboxes**

  | Heading | Description | Address |
  | --- | --- | --- |
  | General inquiries | Questions about the campus from neighbors and community members. | info@homercityredevelopment.com |
  | Press inquiries | Reporters and editors. | press@homercityredevelopment.com |
  | Job opportunities | Kiewit Power Constructors leads construction hiring in coordination with our local unions. | HomerCity.Info@Kiewit.com |
  | Vendor inquiries | Suppliers and contractors offering products or services for the site’s construction. | HomerCity.Info@Kiewit.com |

- **Statement — Facebook**: "Follow Homer City Redevelopment on Facebook."
  Button: "Facebook".

#### Kit · Desktop (`1:270`)

The component library. Its text is generic placeholder copy such as "Button
label", "Question?", "Answer.", "Source: document, date", "Type · Date",
"Headline", "Qualifier / 0 / unit / Label / Note", "Month Year / Status /
Milestone description.", "“Quote.” / Portrait / Name / Role, organization",
"Document / PDF · Date · Size" and "Active / Date / Alert title".

The Patterns group holds two production notes:

- "Off-white #F0EFE9 panel, 24 radius, inset 8px from the page edge."
- "Navy: one moment per page at most. White text; body at 78%, footnotes at
  60%, dividers white at 20%."

---

### 2.3 Mobile page artboards (`1:10086`)

The mobile copy matches the desktop copy word for word, apart from these
differences:

| Artboard | Difference from desktop |
| --- | --- |
| All | The alert bar reads "What’s happening at the Homer City Energy Campus / Heavy equipment transport to Homer City Energy Campus begins September 16." Desktop shows the 4 Sep press release instead. |
| Home · Mobile `1:10087` | The hero has the H1 and buttons but **no intro paragraph**. Story cards replace tabs: From past to present · Meet the tradesmen and women · See what we’re building. There is no full-bleed "All-hands" photo. |
| Menu · Mobile `1:10262` | The last item reads "Contact", not "Contact us". |
| Development timeline · Mobile `1:10740` | The 2028 phase adds a stat: qualifier "Anticipated", figure "Early 2028", label "Anticipated first power on site". |
| Meet the workforce · Mobile `1:10979` | Spotlight tabs use an em dash: "Shawn — Trafford, PA", "Isaac — Penn Hills, PA". |
| Job opportunities · Mobile `1:11172` | Rows without a union local hide the field. |
| Community stewardship · Mobile `1:11394` | Same as desktop, including the hidden tab panels. |
| Several stat ledgers | Empty qualifier and note nodes exist but are HIDDEN. They contain nothing. |
| Kit · Mobile `1:10261` | Alert bar, top bar ("Menu"), inner header ("Page title / Description of the page."), footer. |

---

### 2.4 Content outline frames (Desktop page, above each artboard)

Twenty frames titled "Content outline (9.28.26) — {page}". Each frame
carries the line "Slides … · Source: Homer City Website New Content Outline,
9.28.26 5:30 PM" and holds **raster images** of the client's 44-slide
content outline (`6:3423` to `6:3466`).

| Frame | Node | Slides |
| --- | --- | --- |
| Website structure | `6:3467` | 1 |
| Homepage | `6:3470` | 2–5 |
| What we’re building · Campus future (+ slide 12, data centers — no page yet) | `6:3473` | 6–8, 12 |
| Power plant & fuel supply | `6:3476` | 9–11 |
| Campus history | `6:3479` | 13 |
| Campus development timeline | `6:3482` | 14 |
| Who we are | `6:3485` | 15–17 |
| Careers · Meet the workforce | `6:3488` | 18–21 |
| Careers · Job opportunities | `6:3491` | 22 |
| Community stewardship | `6:3494` | 23–24 |
| Water stewardship | `6:3497` | 25–26 |
| Health & safety | `6:3500` | 27 |
| Economic impact | `6:3503` | 28–29 |
| Giving back | `6:3506` | 30 |
| FAQs | `6:3509` | 31–32 |
| News & resources | `6:3512` | 33–34 |
| Article (press release list, slide 34) | `6:3515` | 34 |
| Photos & videos | `6:3519` | 35 |
| Contact us | `6:3522` | 36–37 |
| Appendix — reference sites & examples | `6:3525` | 38–44 |

**Not transcribed.** The slides are images, not text, and only slide 02 was
viewed. Slide 02 is a section divider that reads "Homepage". The outline
probably contains the FAQ answers that are missing from the artboards.

---

## 3. Differences from repo sources

This section compares the QA file against root `CLAUDE.md` §6,
`docs/source/fact-sheet.md` (May 2026), `docs/source/iup-deck.md`
(July 2026) and `docs/source/site-structure.md`. Every item is **flagged,
not resolved**.

### 3.0 Headline finding: the QA file cites sources the repo does not have

- **September 2026 fact sheets.** "Quick facts", "Power plant & fuel supply"
  and "Economic impact & workforce", all dated September 2026, are offered
  as downloads and cited as sources in FAQ answers. The repo holds only the
  **May 2026** fact sheet and the **July 2026** deck. A large share of the
  numbers below may trace to these newer documents.
- **"Homer City Website New Content Outline, 9.28.26 5:30 PM"**, a 44-slide
  client outline (§2.4), is not in `docs/source/`.
- Until both are obtained, every item marked **"not in docs/source"** cannot
  be verified against a primary document.

### 3.1 Canonical figures (CLAUDE.md §6)

| Figure | Repo canonical | QA file | Flag |
| --- | --- | --- | --- |
| Workers on site | 1,800+ "Direct-hire tradespeople and skilled contractors active on site *as of September 2026*". Tier A, confirm wording | 1,800+ with "As of September 4, 2026" (Home, Meet the workforce, mobile). Home label: "On site, and growing", unit "workers". Workforce label: "Skilled contractors and direct-hire tradespeople currently active onsite…" | The date is more precise than the repo's (4 Sep). Labels are reworded. Home body copy "More than 1,800 skilled tradespeople…" (`1:164`) has **no as-of date**. The alert bar and headlines say "more than 1,800" with no as-of date, though they do carry the press release date. |
| 10,000+ | Footnote 1 required | Footnote 1 present and verbatim on every stat row (Campus future, Meet the workforce, Economic impact, Direction) | **Economic impact "Jobs." body copy (`1:1495`, mobile `1:11737`) states 10,000+ with no footnote.** Meet the workforce label adds "expected over the life of the project", while the footnote says "over an expected five-year period". |
| ~1,000 | Footnote 2 required | Footnote 2 present on stat rows | **`1:1495` says "approximately 1,000" with no footnote.** Meet the workforce label adds "once the campus is fully operational". |
| Up to 4.4 GW | Stable | Consistent: "Up to 4.4 GW" and "up to 4.4 gigawatts" | OK. **4.5 GW appears nowhere.** |
| $10 Billion | "Projected initial capital investment…" | "$10 Billion+" on Home, Campus future and Economic impact ledgers. "More than $10 billion in initial investment in the power plant", "will exceed $10 billion" and "projected to exceed $10 billion" in body copy. Note: "With data center development to add billions more." | The **"+", "more than" and "exceed"** wording is not in docs/source, which says "$10 Billion". So is "data center development to add billions more". The Direction page uses "$10 Billion", matching the source. |
| 3,200+ acres | Stable | Consistent. Labels vary: "Across the energy campus", "Site being transformed…", and the canonical label | OK |
| ~3M cubic meters | Stable | **Direction page only.** Absent from every Desktop and Mobile artboard | Missing from the page designs |
| 7 × GE Vernova 7HA.02 | Stable | Consistent. "Power Block" as two words throughout | OK |
| 9 unions | Tier A | Present. Note: "Direct-hire workforce excludes contractors. Data as of September 4, 2026." | The note is not in docs/source. **Three unions are named**: Boilermakers Local 154, IBEW Local 5, Plumbers & Pipefitters Local 354. CLAUDE.md says the roster is not public (open question #2). This is a partial answer that needs confirming. Six tiles remain "Union name and logo needed". |
| ~95% local | Tier A, "~95%" | **"95%"** with no tilde (Workforce ledger, Home body `1:164`). The Direction page uses "~95%" | The tilde is dropped. The definition "Local refers to workers dispatched from the local union halls with jurisdiction over the project." is not in docs/source. |
| 135+ apprentices | Tier A | Present | **No as-of date** on this row, although it is a moving figure. |
| ~2,000 by year-end | Tier A, "Projected" | Folded into the 1,800+ label as "with the expectation to grow to 2,000 total workers by the end of 2026" | The tilde is dropped. There is no "Projected" qualifier, though "expectation" carries the sense. |
| Contact routing | 4 inboxes | Footer and Contact page match. Contact headings are renamed "General inquiries / Press inquiries / Job opportunities / Vendor inquiries" | OK on the addresses |
| Site address | 1750 Power Plant Rd, Homer City, PA 15748 | Matches | OK |

### 3.2 Wording that differs from the fact sheet

- **Hero H1** (Home desktop and mobile): "Building America’s energy future
  **while honoring** Pennsylvania’s proud past." The fact sheet says "…**by
  drawing on** Pennsylvania’s proud past." The Direction page uses the fact
  sheet wording.
- **Safety pillar.** Who we are and Workforce commitments say "Safety is
  **our** #1 priority…". The source (IUP deck form) says "Safety is every
  Homer City Generation employee’s #1 priority". The Direction page and the
  FAQ answers use the source form.
- **Pillar names** are written "Safety. / Infrastructure. / Community. /
  Energy future." with sentence case and trailing periods. CLAUDE.md says
  pillar names are fixed ("Energy Future"). Flag in case the sentence-case
  rule conflicts with that.
- **Timeline, July 2025** (Development timeline page): "Hosted community open
  house, convening hundreds of residents from Indiana County". The source
  says "Hosted **first** community open house… from **across** Indiana
  County".
- **The Development timeline page omits** two items: Apr 2025 "Corey Hessen
  appointed as CEO…" and Jul 2025 "Participated in Senator McCormick’s
  Inaugural Pennsylvania Energy & Innovation Summit". It also omits the
  "Upcoming: Anticipated announcement of customer(s)" item. The Direction
  page includes all three.
- **A new milestone not in docs/source.** "September 2026 · Delivery of GE
  Vernova turbines and other heavy energy equipment began", status "In
  progress". The deck lists turbine deliveries as *upcoming, expected in
  2026*. The newer status needs confirming.
- **First steel.** The caption is dated March 2026 and the timeline item
  April 2026. This matches the repo's working assumption for open question
  #12, but both dates are on the site.
- **Positioning paragraph** (Campus future header) adapts the fact sheet
  statement: "Homer City Generation **and Kiewit Power Constructors Co.
  announced a plan in April 2025 to transform the site’s** legacy energy
  infrastructure…".

### 3.3 Inconsistencies inside the QA file

- **Who announced the plan.** Home (`1:135`) says "On April 2, 2025, **Homer
  City Redevelopment** and Kiewit Power Constructors Co. announced…". Campus
  future says "**Homer City Generation** and Kiewit Power Constructors Co.
  announced a plan in April 2025". The exact date "April 2, 2025" is not in
  docs/source.
- **Water source naming.** The water pages name both "Two Lick **Reservoir**"
  (the source) and "water withdrawn from Two Lick **Creek**".
- **Alert content differs** between desktop (press release) and mobile
  (equipment transport).
- **Trade descriptions** for Heavy equipment operators and Laborers look
  swapped (§2.2, Job opportunities).
- **Nav label**: "Contact us" (desktop and footer) vs "Contact" (mobile menu).
- **Spotlight names**: a hyphen on desktop, an em dash on mobile.
- **Photos page** repeats two captioned photos.

### 3.4 Claims and figures not present in docs/source

Each of these needs a primary source. Several may be in the September 2026
fact sheets.

**Power and history**

- "54" years / "A 54-year legacy" / "came online in 1969 and ran until July
  2023" / "permanently decommissioned on July 1, 2023". The 1969–2023 span is
  in the IUP deck photo strip. The exact decommission date is only in
  external-context (tier B).
- "Early 2028" first power ("Anticipated"), "2028 · Operations begin", and
  the FAQ answer "target of producing first power in early 2028".
- 40% more efficient (also "on a heat rate basis"). 60% less CO₂ per MWh.
  The former plant "approximately 1.8 GW".
- "Front of the meter", "Power Purchase Agreement (PPA)", "our customer"
  (singular), "serve multiple on-site customers", "thousands of homes on the
  local grid".
- PJM capacity-deficiency statement. PJM and NYISO interconnection of the
  former plant.
- Fuel supply: Texas Eastern Transmission and Eastern Gas Transmission and
  Storage, Marcellus Shale, a 20-mile Delmont line and a 6-mile Blairsville
  backup line.
- "one of the largest natural gas power plants in the country"; "the largest
  natural gas power plant under construction in the nation" (tier A claim in
  external-context only); "one of the largest capital investments in
  Pennsylvania’s history".

**Water (open question #14 is still open)**

- Two Lick Reservoir as the source, "owned and operated by Homer City
  Generation", "A dedicated water source we own", "constructed as part of the
  former plant", usage "in line with the historical usage levels", "hundreds
  of millions of dollars" water treatment facility, stormwater reuse, Two
  Lick Creek withdrawals. **None of these is in the canonical sources.**
  Root CLAUDE.md flags this as blocking at launch.

**Safety**

- Zero OSHA recordable incidents as of September 4, 2026.
- The five core safety values.
- Police, fire and EMS engagement.

**Community**

- Traffic improvements in Center, Burrell, Black Lick and White townships.
- The IUP visit in July 2026. This is consistent with the existence of the
  7.28.26 IUP deck, but the copy is new.
- Hospitals in the emergency team.
- Text-alert sign-up.
- Heavy equipment transport from September 16.

**Partners**

- NextEra Energy as gas supplier, and its descriptor.
- Aquatech (water technology).
- Edwards Moving & Rigging (heavy equipment transport).
- Independence Excavating "Site demolition" and Kovalchick Corporation "Site
  salvage and recycling". These partly answer open question #3.
- The Kiewit, GE Vernova and NextEra descriptor lines.
- The site-plan stand-in names **Kimley-Horn** as the source of the real
  plan.

**Quotes**

- Shawn Steffee, Ben Steinmeyer, Chad Morrison, Joe Pittman and Jim Struzzi.
  None is in docs/source. **Every portrait is a placeholder.** CLAUDE.md §5.6
  says a quote runs only with a real photo.

**News**

- Renda Media "Indiana In the Morning" (8 Sep 2026), with Becky Ford named.
- Washington Examiner "EXCLUSIVE…", undated.
- "AS I SEE IT: This Labor Day, I need workers", undated, with no named
  author.
- Kiewit traffic-improvements advisory, undated.

**Workers**

- Worker spotlights "Shawn - Trafford, PA" and "Isaac - Penn Hills, PA".

**Misc**

- "Follow Homer City Redevelopment on Facebook". The brand pivot is toward
  the Energy Campus; see open question #9.

### 3.5 Banned or watched terms

- **"Coal"**: not found anywhere in the file. "Instead of solid fuel being
  delivered by truck and train" is the euphemism used.
- **"4.5 GW"**: not found.
- **"Powerblock"** (one word): not found. "Power Block" is used throughout.
- **Undated news or alerts**: two news items and one alert have no date
  (§2.2, News & resources).

### 3.6 Gaps and placeholders that block publishing

| Gap | Where |
| --- | --- |
| No answers for 29 of 32 FAQs. Every water question is unanswered. | FAQs page |
| Article body is empty | Article page |
| Charitable giving has no content | Charitable giving page and the hidden tab |
| 6 of 9 union names, and all union logos | Home, Meet the workforce |
| All partner logos ("vector needed") | Who we are |
| All quote portraits | Meet the workforce, Job opportunities, Photos |
| All dated photos in Then & now and Photos & videos are stand-ins | Campus history, Photos |
| Hero aerial, site plan and demolition video still are stand-ins | Home, Campus future, Campus history |
| Wordmark is a raster from the moodboard | Nav, footer |
| A news thumbnail "needs permission" | News & resources |

---

## 4. Design-system notes (reference only)

- **No local variables, text styles, paint styles or effect styles** in the
  file. Colours and type are hard-coded. Only `itemSpacing` shows a variable
  binding, probably from a library.
- **Type**: Geist throughout, in Light, Regular, Medium, SemiBold and Bold.
  Material Symbols Rounded Light is used for icons on the Direction page.
  - Home desktop sizes: 11, 12, 13, 14, 15, 16, 22, 24, 26, 28 and 32.
    Display sizes: 36 Regular and 64–65 Light.
  - Body text is mostly Regular, and headlines and figures are Light.
  - The Direction page is scaled (non-integer sizes, up to about 122px).
- **Home desktop colours** (warm neutrals):

  | Hex | Use |
  | --- | --- |
  | `#322d2a` | Primary text and dark fill (55 uses) |
  | `#f0efe9` | Off-white panel |
  | `#cccac6` | Divider |
  | `#8c8782` | Muted text |
  | `#1b1914`, `#2b2926` | Near-black |
  | `#143251` | Client navy |
  | `#ffffff` | Text on photos, at 16–82% opacity |
  | `#141414` at 0.82 | Scrim |

- **Direction page colours** (cooler):

  | Hex | Use |
  | --- | --- |
  | `#1c1c1f`, `#1d1d1f` | Text |
  | `#66666b`, `#575759` | Greys |
  | `#143352`, `#1c4270` | Navy |
  | `#9eb5cf`, `#c9d9eb` | Pale blue |
  | `#0a73bd` | Link blue |
  | `#f5f5f2`, `#f7f7f5`, `#f8f7f6` | Grounds |

- **Kit pattern notes**: off-white `#F0EFE9` panels with 24 radius, inset 8px
  from the page edge. Navy "one moment per page at most", with body text at
  78% white, footnotes at 60% and dividers at 20% white.
- **Differences from the Longacre system** (root `CLAUDE.md` §7):
  - The 24px panel radius differs from `radius/surface` = 0.
  - Off-white panels are filled boxes, which Longacre's "no cards" rule
    forbids.
  - The Direction page "Modern" section uses Material Symbols icons per trade
    and a stat ledger with qualifier eyebrows and footnotes in the label
    column, both in line with Longacre's patterns.
- **Kit components**: Alert bar, Footer, Nav (on photo / on light), Button,
  Section label, Sub-nav item, Image placeholder, Link row, FAQ item (with a
  Source field), News card, Tile, Stat row (qualifier / figure / unit /
  label / note / as-of), Captioned photo (caption and date as separate
  fields), Timeline row (with Status), Quote, Job row, Download row, Alert
  row, Header / Short and Header / Inner.

## 5. What could not be read

- **The 44 content-outline slides** are raster images. They were not OCR'd,
  and only slide 02 ("Homepage" divider) was viewed.
- **Collapsed FAQ answers.** Collapsed FAQ items are a variant with no answer
  layer, so their answers do not exist in the file. Hidden layers inside
  instances were skipped (the plugin's `skipInvisibleInstanceChildren`
  setting was left unchanged, to avoid altering anything). A few
  hidden-but-present answers inside instances could therefore have been
  missed. Hidden layers outside instances (the Community stewardship tab
  panels) were read and are marked HIDDEN above.
- **Imagery page**: 32 raster images with no text. They were not viewed.
