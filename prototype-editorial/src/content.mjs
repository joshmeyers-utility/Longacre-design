/**
 * Content for every page. Ported field-for-field from the T1 prototype's
 * `prototype/src/content/*.ts` (branch claude/gracious-planck-fm9kww), so a
 * figure never drifts between the two directions. Every string traces to
 * docs/source/; the comment on each block says where.
 *
 * Provenance tiers (CLAUDE.md §5):
 *   canonical — fact sheet, IUP deck, IA brief
 *   confirm   — client-published but not in the supplied PDFs
 *   unsourced — no source at all; must not ship as written
 */

export const factSheet = { tier: 'canonical', source: 'fact-sheet' };
export const deck = { tier: 'canonical', source: 'iup-deck' };
export const release = {
  tier: 'confirm',
  source: 'press-release-2026-09-04',
  note: 'From the client’s 4 Sep 2026 press release, not the supplied PDFs. Confirm wording against the release.',
};

export const sourceNames = {
  'fact-sheet': 'Homer City Energy Campus fact sheet, May 2026',
  'iup-deck': 'Site tour presentation, July 2026',
  'press-release-2026-09-04': 'Press release, 4 September 2026',
  'site-structure': 'Homer City Energy Campus',
  'direction-board': 'Homer City Energy Campus',
};

export const site = {
  name: 'Homer City Energy Campus',
  address: ['1750 Power Plant Rd', 'Homer City, PA 15748'], // iup-deck slide 6
};

/* ------------------------------------------------------------ Photos */

/**
 * The seven supplied photographs, as the T1 prototype carried them. Alt
 * text describes what is in frame. Each slot below names a photo by
 * number; a slot with no fitting photograph says so and renders a labelled
 * placeholder frame instead of a wrong picture.
 */
export const photos = {
  1: { w: 1500, h: 1124, alt: 'Several hundred workers in hard hats and high-visibility vests gathered on the campus, seen from above' },
  2: { w: 1500, h: 2000, alt: 'A crawler crane on the campus flying an American flag from its hook', focus: '50% 35%' },
  3: { w: 1500, h: 844, alt: 'Aerial view of the campus under construction in winter, with cranes and foundations and the county beyond' },
  4: { w: 1500, h: 1315, alt: 'Workers in hard hats assembling stacked conduit beside a mobile crane' },
  5: { w: 1600, h: 1200, alt: 'A reinforcing steel mat laid out for a concrete slab, with copper grounding wire and workers beyond' },
  6: { w: 1600, h: 1200, alt: 'Rows of grey electrical conduit held in white spacers, curving into a duct bank' },
  7: { w: 1500, h: 1222, alt: 'A worker running a plate compactor in a trench beside an excavator', focus: '60% 50%' },
};

/** `kind` is Photograph | Rendering; `brief` is a production note, never published copy. */
const media = (photo, brief, extra = {}) => ({ kind: 'Photograph', photo, brief, ...extra });

/* --------------------------------------------------------------- Nav */

// Seven top-level pages, as the T1 artifact settled on (flat, no dropdowns).
export const nav = [
  { label: 'The campus', href: 'campus.html', page: 'campus' },
  { label: 'Who we are', href: 'history.html', page: 'history' },
  { label: 'Community', href: 'community.html', page: 'community' },
  { label: 'Careers', href: 'workforce.html', page: 'workforce' },
  { label: 'FAQs', href: 'faq.html', page: 'faq' },
  { label: 'News', href: 'news.html', page: 'news' },
  { label: 'Contact', href: 'contact.html', page: 'contact' },
];

export const footerNav = [{ label: 'Home', href: 'index.html', page: 'home' }, ...nav];

export const alert = {
  id: 'heavy-equipment-2026-09',
  message: 'Heavy equipment transport to the Homer City Energy Campus begins September 16.',
  provenance: {
    tier: 'unsourced',
    source: 'direction-board',
    note: 'Alert text from the direction board. Not in any supplied document; the client publishes real alerts through the CMS.',
  },
};

/* -------------------------------------------------------------- Home */

export const hero = {
  headline: 'Building America’s energy future by drawing on Pennsylvania’s proud past.',
  intro: 'A 3,200+ acre natural gas-powered campus under construction on the site of the former Homer City Generating Station, in Indiana County, Pennsylvania.',
  media: media(3, 'Aerial of the campus under construction, set in the county’s farmland. Must be a photograph: the deck cover is a rendering and cannot run here unlabelled.'),
};

export const announcements = [
  { id: 'workforce-1800', kind: 'News', date: 'September 2026', headline: 'Workforce grows to more than 1,800 workers, including members of 9 building and construction trade unions', href: 'news-workforce-1800.html', provenance: release },
  { id: 'full-construction', kind: 'Milestone', date: 'June 2026', headline: 'Completed major demolition and transitioned into full construction phase', href: 'history.html#milestones', provenance: deck },
  { id: 'first-steel', kind: 'Milestone', date: 'April 2026', headline: 'Crossed first steel threshold with commencement of vertical construction', href: 'history.html#milestones', provenance: deck },
];

// Fact-sheet positioning statement, verbatim.
export const positioning = {
  quote: 'In partnership with a hard-working community steeped in generations of energy expertise, Homer City Generation is transforming legacy energy infrastructure into a reliable provider of safe power and connectivity solutions.',
  source: 'From the Homer City Energy Campus fact sheet',
  date: 'May 2026',
  media: media(1, 'Crew on site, faces visible'),
};

export const orientation = [
  { title: 'What is being built', body: 'A natural gas-powered campus of 3,200+ acres, designed to meet the needs of America’s digital future. Seven GE Vernova turbines are expected to produce up to 4.4&nbsp;GW of energy on&nbsp;site.' },
  { title: 'Where', body: 'On the site of the former Homer City Generating Station, which produced power here from 1969 to 2023. The address is 1750 Power Plant Rd, Homer City.' },
  { title: 'What stage it is at', body: 'Major demolition finished in June 2026 and the site is now in full construction. First deliveries of GE Vernova turbines are expected in 2026.' },
];

// By the numbers — fact-sheet figures, unchanged in the July deck.
export const stats = [
  { id: 'gw', qualifier: 'Up to', figure: '4.4', unit: 'GW', label: 'Energy expected to be produced on-site', provenance: factSheet },
  { id: 'capital', qualifier: 'Projected', figure: '$10', unit: 'Billion', label: 'Initial capital investment for power infrastructure and site readiness', provenance: factSheet },
  { id: 'acres', figure: '3,200+', unit: 'acres', label: 'Natural gas-powered campus designed to meet the needs of America’s digital future', provenance: factSheet },
  { id: 'construction-jobs', qualifier: 'Anticipated', figure: '10,000+', label: 'Direct on-site construction-related jobs', footnote: 1, provenance: factSheet },
  { id: 'permanent-jobs', qualifier: 'Anticipated', figure: '~1,000', label: 'Total direct &amp; indirect permanent high-paying positions in technology, operations and energy infrastructure', footnote: 2, provenance: factSheet },
  { id: 'earth', figure: '~3M', unit: 'cubic meters', label: 'Earth moved, roughly the volume required to build Egypt’s Great Pyramid of Giza', provenance: factSheet },
];

// Verbatim from the fact sheet. Not optional (CLAUDE.md §5.2).
export const footnotes = {
  1: 'Anticipated total number of direct on-site jobs related to the construction of both the natural gas-powered plant and the data center campus over an expected five-year period based on a 2024 data center and power generation economic impact analysis commissioned by Homer City Generation.',
  2: 'Anticipated total number of direct and indirect permanent positions to support the operations of both the natural gas-powered plant and all aspects of the data center campus once running at full capacity following the completion of the construction based on a 2024 data center and power generation economic impact analysis commissioned by Homer City Generation.',
};

export const workforce = {
  heading: 'Meet the tradesmen and women building the campus.',
  stats: [
    { id: 'on-site', figure: '1,800+', label: 'Direct-hire tradespeople and skilled contractors active on site', asOf: 'As of September 2026', provenance: release },
    { id: 'local', figure: '~95%', label: 'Of the skilled direct-hire craft workforce is from the local area', provenance: release },
    { id: 'apprentices', figure: '135+', label: 'Apprentices training alongside experienced journeymen', provenance: release },
    { id: 'unions', figure: '9', label: 'Local union organizations represented on site', provenance: release },
  ],
  sourceLine: 'Source: Homer City Generation, 4 September 2026.',
  media: media(7, 'Portrait of a named local tradesperson on site. Name, trade and union go in the caption once confirmed.'),
};

/** The trades say what each trade does in general, not what it does here. */
export const tradeCopy = {
  tier: 'confirm',
  source: 'direction-board',
  note: 'General description of the trade, written for plain language, not client copy. Confirm with Kiewit or the unions, and add each union’s name and local number (CLAUDE.md §10 #2).',
};
export const tradeLinks = {
  tier: 'confirm',
  source: 'direction-board',
  note: 'Links go to each trade’s international union, not the local on site: the nine locals are not named (CLAUDE.md §10 #2). Swap each for its local’s page once named.',
};

export const trades = [
  { name: 'Boilermakers', icon: 'local_fire_department', href: 'https://boilermakers.org', union: 'International Brotherhood of Boilermakers', description: 'Build, assemble and repair boilers, tanks and other large vessels that hold liquids and gases under pressure.' },
  { name: 'Carpenters', icon: 'carpenter', href: 'https://www.carpenters.org', union: 'United Brotherhood of Carpenters', description: 'Build the forms that concrete is poured into, along with scaffolding, framing and temporary structures.' },
  { name: 'Electricians', icon: 'electrical_services', href: 'https://www.ibew.org', union: 'International Brotherhood of Electrical Workers', description: 'Install and connect the wiring, cable, lighting and electrical equipment that powers and controls the site.' },
  { name: 'Ironworkers', icon: 'construction', href: 'https://www.ironworkers.org', union: 'International Association of Ironworkers', description: 'Raise and connect structural steel, and place the steel reinforcing bar that goes inside concrete.' },
  { name: 'Laborers', icon: 'engineering', href: 'https://www.liuna.org', union: 'Laborers’ International Union of North America', description: 'Prepare and keep up the work site, from excavation and concrete placement to traffic control, and support every other trade.' },
  { name: 'Millwrights', icon: 'settings', href: 'https://www.carpenters.org', union: 'United Brotherhood of Carpenters (millwrights)', description: 'Set, align and maintain heavy machinery to fine tolerances, so equipment that turns runs true.' },
  { name: 'Operators', icon: 'front_loader', href: 'https://www.iuoe.org', union: 'International Union of Operating Engineers', description: 'Run the heavy equipment that moves earth and lifts material into place: cranes, excavators, dozers and loaders.' },
  { name: 'Pipefitters', icon: 'plumbing', href: 'https://ua.org', union: 'United Association (UA)', description: 'Fabricate, install and weld the piping systems that carry gas, water and steam.' },
  { name: 'Teamsters', icon: 'local_shipping', href: 'https://teamster.org', union: 'International Brotherhood of Teamsters', description: 'Drive the trucks that bring materials, equipment and supplies onto the site and move them around it.' },
];

// Fact-sheet pillar copy, verbatim. Same names, same order, everywhere.
export const pillars = [
  { id: 'safety', name: 'Safety', copy: 'Safety is every Homer City Generation employee’s #1 priority; we are accountable for our actions and responsive to concerns.', href: 'faq.html#category-safety', linkLabel: 'Read the safety questions', media: media(1, 'Flagger or safety briefing on site') },
  { id: 'infrastructure', name: 'Infrastructure', copy: 'We are building world-class energy infrastructure at unprecedented scale.', href: 'campus.html', linkLabel: 'See what we’re building', media: media(3, 'Powerblock aerial looking north', { caption: 'Power Block aerial, looking north', date: 'April 2026' }) },
  { id: 'community', name: 'Community', copy: 'We are investing in Pennsylvania for the long term, operating as a genuine community partner and becoming one of the state’s leading employers.', href: 'community.html', linkLabel: 'See the community pages', media: media(2, 'Community open house: residents, not staff') },
  { id: 'energy-future', name: 'Energy Future', copy: 'We are shaping American innovation, securing energy independence and powering the nation’s digital future.', href: 'campus.html#tour', linkLabel: 'See the Power Block', media: media(4, 'GE Vernova turbine delivery or install') },
];

// Tour highlights (iup-deck slide 6) with stages from the dated photo essay.
export const powerBlock = {
  heading: 'Seven turbines at the center of the campus.',
  intro: 'The Power Block holds seven GE Vernova 7HA.02 high-efficiency natural gas turbines. The campus is expected to produce up to 4.4&nbsp;GW of energy on&nbsp;site.',
  facilities: [
    { id: 'power-block', name: 'Power Block', detail: '7 × GE Vernova 7HA.02 natural gas turbines', stamp: 'April 2026' },
    { id: 'hrsg', name: 'Heat recovery steam generator', detail: 'HRSG. Unit 5, pictured on the July 2026 site tour.', stamp: 'July 2026' },
    { id: 'gis', name: 'Gas insulated switchgear', detail: 'GIS. Building and foundations.', stamp: 'April 2026' },
    { id: 'compressor', name: 'Gas compressor station', detail: 'Fuel supply for the turbines.', stamp: '' },
    { id: 'water', name: 'Water treatment facility', detail: 'Water treatment area.', stamp: 'April 2026' },
  ],
};

export const history = {
  heading: 'From past to present',
  body: [
    'The Homer City Generating Station produced power on this site from 1969 to 2023.',
    'In April 2025, a plan was unveiled to build the Homer City Energy Campus in its place, in partnership with Kiewit Power Constructors Co. Demolition of the stacks and towers began the month before.',
  ],
  media: media(3, 'After stacks and towers down (IUP deck photo essay)', { caption: 'After the stacks and towers came down', date: 'November 2025' }),
};

// 2025 from the fact sheet; 2026 and Upcoming from the July deck.
export const milestones = [
  { id: 'demolition', year: '2025', month: 'March 2025', title: 'Demolition of the stacks and towers at the former Homer City Generating Station begins', provenance: factSheet },
  { id: 'plan', year: '2025', month: 'April 2025', title: 'Plan unveiled to build the Homer City Energy Campus in partnership with Kiewit Power Constructors Co.', provenance: factSheet },
  { id: 'turbines', year: '2025', month: 'April 2025', title: 'GE Vernova confirmed to provide seven high-efficiency 7HA.02 natural gas turbines for the campus', provenance: factSheet },
  { id: 'ceo', year: '2025', month: 'April 2025', title: 'Corey Hessen appointed as CEO, bringing significant experience in power generation operations', provenance: factSheet },
  { id: 'safety-team', year: '2025', month: 'June 2025', title: 'Launch of Safety &amp; Security Community Collaborative Team and Integrated Emergency Management Team', provenance: factSheet },
  { id: 'open-house', year: '2025', month: 'July 2025', title: 'Hosted first community open house, convening hundreds of residents from across Indiana County', provenance: factSheet },
  { id: 'summit', year: '2025', month: 'July 2025', title: 'Participated in Senator McCormick’s Inaugural Pennsylvania Energy &amp; Innovation Summit', provenance: factSheet },
  { id: 'dep', year: '2025', month: 'November 2025', title: 'PA DEP approved Homer City Generation’s air quality plan, authorizing construction and initial operations', provenance: factSheet },
  { id: 'mobilized', year: '2026', month: 'March 2026', title: 'Mobilized construction workforce with Kiewit and local unions; crossed 1,000+ workers active on site', provenance: deck },
  { id: 'first-steel', year: '2026', month: 'April 2026', title: 'Crossed first steel threshold with commencement of vertical construction', provenance: deck },
  { id: 'full-construction', year: '2026', month: 'June 2026', title: 'Completed major demolition and transitioned into full construction phase', provenance: deck },
  { id: 'first-equipment', year: 'Upcoming', month: '2026', title: 'Installation of first equipment, including first deliveries of GE Vernova turbines expected in 2026', provenance: deck },
  { id: 'customer', year: 'Upcoming', month: 'To be announced', title: 'Anticipated announcement of customer(s)', provenance: deck },
];

export const milestonePhases = { 2025: 'Demolition &amp; site development', 2026: 'Construction', Upcoming: 'What comes next' };

export const contacts = [
  { audience: 'Job seekers', email: 'HomerCity.Info@Kiewit.com', for: 'Jobs on the campus and how to be hired. Kiewit Power Constructors, who are building the campus, handle hiring.' },
  { audience: 'Community members', email: 'info@homercityredevelopment.com', for: 'Questions and concerns from neighbours about the campus and its construction.' },
  { audience: 'Vendors &amp; partners', email: 'HomerCity.Info@Kiewit.com', for: 'Supplying or working with the construction project. This inbox is also Kiewit’s.' },
  { audience: 'Media inquiries', email: 'press@homercityredevelopment.com', for: 'Reporters and editors. Press releases and statements are on the News page.' },
];

/* ------------------------------------------------------------ Campus */

const explainer = {
  tier: 'confirm',
  source: 'direction-board',
  note: 'General, plain-language description of what this equipment does, not client copy. Confirm with Homer City Generation or Kiewit before launch.',
};
const waterGap = {
  tier: 'unsourced',
  source: 'direction-board',
  note: 'No client document names the water source or volume (CLAUDE.md §10 #14). Add the client’s own answer here before launch; do not fill it from press coverage.',
};

export const campusPage = {
  hero: {
    word: 'The campus',
    headline: 'A natural gas power plant and data center campus, on the site of the former generating station.',
    intro: 'The Homer City Energy Campus covers more than 3,200 acres in Indiana County. At its center are seven GE Vernova 7HA.02 natural gas turbines, and the campus is expected to produce up to 4.4 GW of energy on site. It is being built in partnership with Kiewit Power Constructors Co.',
    media: media(4, 'Power Block under construction, workers in frame'),
  },
  stats: ['gw', 'acres', 'capital', 'earth'].map((id) => stats.find((s) => s.id === id)),
  tour: {
    heading: 'Four stops on the site tour',
    intro: 'The route visitors walk on a site tour, in order, with the dates each stop was photographed going up.',
    stops: [
      { id: 'power-block', name: 'Power Block', detail: '7 × GE Vernova 7HA.02 natural gas turbines', body: 'The turbines burn natural gas to turn generators. Heat recovery steam generators (HRSGs) capture the heat in their exhaust and use it to make steam, which turns more generators.', stages: [{ caption: 'Power Block aerial, looking north', date: 'April 2026' }, { caption: 'Unit 5 HRSG', date: 'July 2026' }], provenance: explainer, media: media(3, 'Power Block aerial looking north (IUP deck photo essay)') },
      { id: 'gis', name: 'Gas insulated switchgear', short: 'GIS', detail: 'Building and foundations', body: 'Switchgear connects the plant to the power grid and protects it, switching and isolating high-voltage circuits. Gas insulated switchgear is sealed in an insulating gas, so it needs far less room than open-air equipment.', stages: [{ caption: 'Concrete base of the GIS slab', date: 'February to March 2026' }, { caption: 'GIS building and foundations', date: 'April 2026' }, { caption: 'GIS working at height', date: 'July 2026' }], provenance: explainer, media: media(4, 'GIS building and foundations (IUP deck photo essay)') },
      { id: 'compressor', name: 'Gas compressor station', detail: 'Fuel supply', body: 'Natural gas arrives by pipeline. The compressor station raises its pressure to the level the turbines need.', stages: [], provenance: explainer, media: media(6, 'Gas compressor station: no frame in the deck yet') },
      { id: 'water', name: 'Water treatment facility', detail: 'Water treatment area', body: 'Water is treated here before it is used on site.', stages: [{ caption: 'Water treatment area', date: 'April 2026' }], provenance: waterGap, media: media(5, 'Water treatment area (IUP deck photo essay)') },
    ],
  },
  next: {
    heading: 'Questions about what’s being built?',
    body: 'The common questions cover the project, the timeline and who to ask. Community members can write to the project team directly.',
    email: 'info@homercityredevelopment.com',
  },
};

// Photo essay, iup-deck slides 7–81, in the deck's order and with its dates.
const essayPhoto = { station: 3, inflection: 6, 'towers-down': 3, north: 3, 'gis-slab': 5, 'first-steel': 2, aerial: 3, gis: 4, water: 5, piperack: 6, 'gis-height': 2, hrsg: 4 };
export const essay = {
  heading: 'From the generating station to the campus',
  intro: 'The site at each stage, from the deck’s dated photo essay.',
  provenance: deck,
  stages: [
    { id: 'station', caption: 'Homer City Generating Station', date: '1969 to 2023', mark: '1969', sub: 'to 2023', then: true, note: 'The Homer City Generating Station produced power on this site from 1969 to 2023.' },
    { id: 'inflection', caption: 'Inflection point', date: 'March 2025', mark: 'Mar', sub: '2025', note: 'Demolition of the stacks and towers at the former Homer City Generating Station begins.' },
    { id: 'towers-down', caption: 'After the stacks and towers came down', date: 'November 2025', mark: 'Nov', sub: '2025', note: 'The former station’s stacks and towers have come down.' },
    { id: 'north', caption: 'View from the north', date: 'February 2026', mark: 'Feb', sub: '2026' },
    { id: 'gis-slab', caption: 'Concrete base of the GIS slab', date: 'February to March 2026', mark: 'Feb–Mar', sub: '2026' },
    { id: 'first-steel', caption: 'First steel, going vertical', date: 'March 2026', mark: 'Mar', sub: '2026', note: 'Photographed in March 2026. The timeline dates the milestone, “crossed first steel threshold with commencement of vertical construction”, to April 2026.' },
    { id: 'aerial', caption: 'Power Block aerial, looking north', date: 'April 2026', mark: 'Apr', sub: '2026' },
    { id: 'gis', caption: 'GIS building and foundations', date: 'April 2026', mark: 'Apr', sub: '2026' },
    { id: 'water', caption: 'Water treatment area', date: 'April 2026', mark: 'Apr', sub: '2026' },
    { id: 'piperack', caption: 'Mod yard piperack fabrication', date: 'July 2026', mark: 'Jul', sub: '2026' },
    { id: 'gis-height', caption: 'GIS working at height', date: 'July 2026', mark: 'Jul', sub: '2026' },
    { id: 'hrsg', caption: 'Unit 5 HRSG', date: 'July 2026', mark: 'Jul', sub: '2026', note: 'One of the heat recovery steam generators (HRSGs), which capture heat from the turbines’ exhaust to make steam for more power.' },
  ].map((s) => ({ ...s, media: media(essayPhoto[s.id], `${s.caption} (IUP deck photo essay, ${s.date})`) })),
};

/* ----------------------------------------------------------- History */

export const historyPage = {
  hero: {
    word: 'History',
    headline: 'The same ground, from 1969 to today.',
    intro: 'The Homer City Generating Station produced power here from 1969 to 2023. These dated photographs show the site since, stage by stage.',
    media: media(5, 'The site as it is now, ground level'),
  },
  pair: { heading: 'Then and now', before: essay.stages[0], after: essay.stages[essay.stages.length - 1] },
};

/* --------------------------------------------------------- Workforce */

export const workforcePage = {
  hero: {
    word: 'Careers',
    headline: 'The campus is being built by local trades.',
    intro: 'About 95% of the skilled direct-hire craft workforce on site is from the local area. More than 1,800 tradespeople and skilled contractors were working here as of September 2026, including members of 9 local union organizations.',
    media: media(1, 'Crew at shift change on site, faces visible, hard hats and union stickers in frame.'),
  },
  growth: {
    title: 'How the workforce has grown in 2026',
    subtitle: 'People working on site, by the date each figure was published',
    points: [
      { label: 'Mar', when: 'March 2026', value: 1000, figure: '1,000+', source: 'IUP tour deck timeline' },
      { label: 'May', when: 'May 2026', value: 1300, figure: '~1,300', source: 'Fact sheet, May 2026' },
      { label: 'Jul', when: 'July 2026', value: 1500, figure: '~1,500', source: 'IUP tour deck, July 2026' },
      { label: 'Sep', when: 'September 2026', value: 1800, figure: '1,800+', source: 'Press release, 4 Sep 2026' },
      { label: 'Year-end', when: 'Year-end 2026', value: 2000, figure: '~2,000', source: 'Press release, 4 Sep 2026', projected: true },
    ],
    note: 'March to July count workers active on site; September counts direct-hire tradespeople and skilled contractors. The year-end figure is a projection.',
  },
  apprentices: {
    heading: 'Learning a trade on the job',
    body: 'More than 135 apprentices are training on site alongside experienced journeymen.',
    media: media(4, 'Apprentice and journeyman working side by side. Names, trade and union in the caption once confirmed.'),
  },
  longView: { heading: 'Beyond this year', stats: stats.filter((s) => s.id === 'construction-jobs' || s.id === 'permanent-jobs') },
  apply: {
    heading: 'How to find work on the campus',
    body: 'Homer City Generation is building the campus in partnership with Kiewit Power Constructors Co. Job seekers can reach Kiewit directly.',
    email: 'HomerCity.Info@Kiewit.com',
    vendors: 'Vendors and partners use the same address.',
  },
};

/* --------------------------------------------------------- Community */

const stat = (id) => [...stats, ...workforce.stats].find((s) => s.id === id);

export const communityPage = {
  hero: {
    word: 'Community',
    headline: 'The campus and Indiana County.',
    intro: 'We are investing in Pennsylvania for the long term, operating as a genuine community partner and becoming one of the state’s leading employers. These pages cover who is building the campus and what it commits to.',
    media: media(2, 'Community open house: residents, not staff. The crane-and-flag frame stands in.'),
  },
  routes: [
    { id: 'partners', title: 'Campus partners', body: 'The companies building the campus, and what each one does.', href: '#partners', stat: { figure: '7 ×', label: 'GE Vernova 7HA.02 natural gas turbines in the Power Block' } },
    { id: 'commitments', title: 'Our commitments', body: 'Safety, water, economic impact and workforce development, each with its figures and sources.', href: '#commitments', stat: { figure: '~95%', label: 'Of the skilled direct-hire craft workforce is from the local area' } },
    { id: 'voices', title: 'Voices', body: 'Neighbours, workers, businesses and officials on the campus, by name.', href: '#voices' },
  ],
  moments: {
    heading: 'Meeting the county',
    items: [
      { date: 'June 2025', text: 'Launch of Safety &amp; Security Community Collaborative Team and Integrated Emergency Management Team' },
      { date: 'July 2025', text: 'Hosted first community open house, convening hundreds of residents from across Indiana County' },
    ],
    provenance: factSheet,
  },
  partners: {
    headline: 'Who is building the campus.',
    intro: 'Homer City Generation is developing the campus, in partnership with Kiewit Power Constructors Co. GE Vernova is providing the turbines.',
    items: [
      { id: 'hcg', name: 'Homer City Generation', icon: 'domain', role: 'Developing the Homer City Energy Campus. Corey Hessen was appointed CEO in April 2025, bringing significant experience in power generation operations.', href: 'https://www.homercityredevelopment.com/', provenance: factSheet },
      { id: 'kiewit', name: 'Kiewit Power Constructors Co.', icon: 'construction', role: 'Building the campus in partnership with Homer City Generation since the plan was unveiled in April 2025, and hiring its workforce with the local unions.', href: 'https://www.kiewit.com/', provenance: factSheet },
      { id: 'ge', name: 'GE Vernova', icon: 'bolt', role: 'Providing the seven high-efficiency 7HA.02 natural gas turbines at the center of the Power Block, confirmed in April 2025.', href: 'https://www.gevernova.com/', provenance: factSheet },
      { id: 'independence', name: 'Independence', icon: 'handshake', role: 'Role not yet supplied.', provenance: { tier: 'unsourced', source: 'site-structure', note: 'Named as a partner in the brief; described in no supplied document (§10 #3). Needs a description, a logo and a link.' } },
      { id: 'kovalchick', name: 'Kovalchick', icon: 'handshake', role: 'Role not yet supplied.', provenance: { tier: 'unsourced', source: 'site-structure', note: 'Named as a partner in the brief; described in no supplied document (§10 #3). Needs a description, a logo and a link.' } },
    ],
    linkProvenance: { tier: 'confirm', source: 'direction-board', note: 'Links go to each company’s main site. Homer City Generation’s points at the current site, which this one replaces. Change it once the domain question (§10 #9) is settled. Logos wait on the brand files.' },
  },
  commitments: {
    headline: 'Six areas the campus is accountable for, and the record behind each.',
    intro: 'Health, safety, the environment, economic impact, workforce development and giving back. Each shows the figures and dated milestones on record for it, and nothing else.',
    items: [
      { id: 'health', name: 'Health', icon: 'health_and_safety', stats: [], facts: [{ date: 'November 2025', text: 'PA DEP approved Homer City Generation’s air quality plan, authorizing construction and initial operations' }], provenance: { tier: 'unsourced', source: 'site-structure', note: 'The approval is sourced; a health commitment is not. No supplied document states one. Needs the client’s commitment, with a number, date and source.' } },
      { id: 'safety', name: 'Safety', icon: 'shield', body: 'Safety is every Homer City Generation employee’s #1 priority; we are accountable for our actions and responsive to concerns.', stats: [], facts: [{ date: 'June 2025', text: 'Launch of Safety &amp; Security Community Collaborative Team and Integrated Emergency Management Team' }], provenance: deck },
      { id: 'environment', name: 'Environment and water', icon: 'water_drop', body: 'A water treatment facility is one of the four stops on the site tour.', stats: [], facts: [{ date: 'April 2026', text: 'Water treatment area photographed under construction' }], provenance: { tier: 'unsourced', source: 'direction-board', note: 'The facts are sourced, but the commitment is not: no document names the water source or volume (§10 #14), and this is the most contested topic. Needs the client’s own words before it ships.' } },
      { id: 'economic', name: 'Economic impact', icon: 'payments', stats: [stat('capital'), stat('construction-jobs'), stat('permanent-jobs')], facts: [], provenance: factSheet },
      { id: 'workforce', name: 'Workforce development', icon: 'school', stats: [stat('local'), stat('apprentices'), stat('unions')], facts: [], provenance: release },
      { id: 'giving', name: 'Giving back', icon: 'volunteer_activism', stats: [], facts: [{ date: 'July 2025', text: 'Hosted first community open house, convening hundreds of residents from across Indiana County' }], provenance: { tier: 'unsourced', source: 'site-structure', note: 'In the brief’s list; no supplied document describes giving, donations or community programmes. The open house is sourced; the commitment needs the client’s own content.' } },
    ],
  },
  voices: {
    headline: 'What neighbours, workers and local leaders say, by name.',
    intro: 'Every quote here carries the speaker’s name, role, organisation and photograph. A quote without them does not run.',
    speakers: ['Residents', 'Workers', 'Businesses', 'Officials'],
    provenance: { tier: 'unsourced', source: 'site-structure', note: 'No attributed quotes have been supplied (CLAUDE.md §5.6). Each needs a name, role, organisation, a real photograph and the speaker’s sign-off. The brief’s Phase 2 adds video.' },
  },
};

/* --------------------------------------------------------------- FAQ */

const missing = (topic) => ({
  tier: 'unsourced',
  source: 'direction-board',
  note: `No supplied document answers this (${topic}). Needs the client’s own answer before it can be written. Do not fill it from press coverage.`,
});

export const faqCategories = [
  {
    id: 'project',
    name: 'The project',
    items: [
      { id: 'what', question: 'What is being built?', answer: 'A 3,200+ acre natural gas-powered campus on the site of the former Homer City Generating Station, designed to meet the needs of America’s digital future. It is expected to produce up to 4.4 GW.', provenance: factSheet },
      { id: 'who', question: 'Who is building it?', answer: 'Homer City Generation, in partnership with Kiewit Power Constructors Co. GE Vernova is providing seven high-efficiency 7HA.02 natural gas turbines.', provenance: factSheet },
      { id: 'why-here', question: 'What was on the site before?', answer: 'The Homer City Generating Station, which produced power here from 1969 to 2023. Demolition of its stacks and towers began in March 2025, and the plan to build the campus in its place was unveiled in April 2025.', provenance: deck },
      { id: 'investment', question: 'How much is being invested?', answer: 'A projected $10 billion initial capital investment for power infrastructure and site readiness.', provenance: factSheet },
      { id: 'when', question: 'When will it be finished?', answer: 'No completion date has been published. Full construction began in June 2026. The next milestones are the installation of the first equipment, including the first deliveries of GE Vernova turbines, expected in 2026, and the anticipated announcement of the campus’s customer or customers.', provenance: deck },
      { id: 'customers', question: 'Who will use the power and the data center?', answer: 'No customer has been announced yet. An announcement of the campus’s customer or customers is anticipated.', provenance: deck },
      { id: 'leadership', question: 'Who runs Homer City Generation?', answer: 'Corey Hessen was appointed CEO in April 2025, bringing significant experience in power generation operations.', provenance: factSheet },
    ],
  },
  {
    id: 'environment',
    name: 'Environment and water',
    items: [
      { id: 'water', question: 'Where will the campus get its water, and how much will it use?', provenance: missing('water source and volume, CLAUDE.md §10 #14') },
      { id: 'water-treatment', question: 'Is water treated on site?', answer: 'Yes. A water treatment facility is one of the four stops on the site tour; the treatment area was photographed under construction in April 2026.', provenance: deck },
      { id: 'emissions', question: 'What will the plant release into the air?', provenance: missing('emissions and air monitoring') },
      { id: 'monitoring', question: 'Who monitors air and water once it is running?', provenance: missing('monitoring') },
    ],
  },
  {
    id: 'nearby',
    name: 'Living nearby',
    items: [
      { id: 'noise', question: 'Will I hear it from my home?', provenance: missing('noise') },
      { id: 'traffic', question: 'How will construction traffic affect local roads?', provenance: missing('traffic and heavy-equipment routes') },
      { id: 'hours', question: 'What are the construction hours?', provenance: missing('construction hours') },
      { id: 'lighting', question: 'Will the site be lit at night?', provenance: missing('lighting') },
      { id: 'open-house', question: 'Can I talk to someone from the project in person?', answer: 'The first community open house was held in July 2025 and brought together hundreds of residents from across Indiana County. Community members can also write to the project team at info@homercityredevelopment.com.', provenance: factSheet },
    ],
  },
  {
    id: 'jobs',
    name: 'Jobs and the local economy',
    items: [
      { id: 'workers', question: 'How many people are working on site?', answer: '1,800+ direct-hire tradespeople and skilled contractors as of September 2026, including members of 9 local union organizations. About 2,000 workers are projected by the end of 2026.', provenance: release },
      { id: 'local', question: 'Are the workers local?', answer: 'About 95% of the skilled direct-hire craft workforce is from the local area.', provenance: release },
      { id: 'construction-jobs', question: 'How many construction jobs will there be in total?', answer: '10,000+ direct on-site construction-related jobs are anticipated.', footnote: 1, provenance: factSheet },
      { id: 'permanent-jobs', question: 'How many jobs will there be once it is running?', answer: '~1,000 total direct and indirect permanent high-paying positions in technology, operations and energy infrastructure are anticipated.', footnote: 2, provenance: factSheet },
      { id: 'apprentices', question: 'Are there apprenticeships?', answer: 'Yes. 135+ apprentices are training alongside experienced journeymen on site.', provenance: release },
      { id: 'apply', question: 'How do I apply for a job?', answer: 'Kiewit Power Constructors handles hiring. Write to HomerCity.Info@Kiewit.com. The same address takes enquiries from vendors and partners.', provenance: factSheet },
      { id: 'taxes', question: 'What will the campus pay in local taxes?', provenance: missing('local tax contribution') },
    ],
  },
  {
    id: 'safety',
    name: 'Safety and emergencies',
    items: [
      { id: 'safety-priority', question: 'How is the site kept safe?', answer: 'Safety is every Homer City Generation employee’s #1 priority; we are accountable for our actions and responsive to concerns.', provenance: deck },
      { id: 'emergency', question: 'Is there an emergency plan with local responders?', answer: 'In June 2025 the project launched a Safety &amp; Security Community Collaborative Team and an Integrated Emergency Management Team.', provenance: factSheet },
      { id: 'who-to-call', question: 'Who do I call about something happening on site right now?', provenance: missing('a community liaison or hotline') },
    ],
  },
  {
    id: 'permits',
    name: 'Permits and oversight',
    items: [
      { id: 'permit', question: 'Has the project been approved?', answer: 'In November 2025, PA DEP approved Homer City Generation’s air quality plan, authorizing construction and initial operations.', provenance: factSheet },
      { id: 'appeal', question: 'Is the air quality approval being challenged?', answer: 'Yes. In December 2025, environmental groups, joined by Our Children’s Trust, appealed PA DEP’s November 2025 approval.', provenance: { tier: 'confirm', source: 'direction-board', note: 'DRAFT (CLAUDE.md §10 #5). The client decided to address the appeal; this answer is drafted from public filings and needs client and legal sign-off before it ships. Add the current status of the appeal once confirmed.' } },
      { id: 'other-permits', question: 'What other permits does the campus need?', provenance: missing('the fact sheet’s “key permits and agreements for gas, EPC, and offtake”, which the July deck drops; confirm status first') },
    ],
  },
];

export const homeFaqIds = ['what', 'who', 'workers', 'permit', 'water'];
export const allFaqs = faqCategories.flatMap((c) => c.items);

/* -------------------------------------------------------------- News */

export const newsItems = [
  { id: 'workforce-1800', type: 'Press release', date: '4 September 2026', headline: 'Homer City Energy Campus workforce grows to more than 1,800 workers, including members of 9 building and construction trade unions', summary: 'More than 1,800 direct-hire tradespeople and skilled contractors are now on site, about 95% of them from the local area.', href: 'news-workforce-1800.html', media: media(1, 'Crew on site, faces visible'), provenance: release },
  { id: 'workforce-1000', type: 'Press release', date: 'March 2026', media: media(4, 'Workforce mobilization, March 2026'), provenance: { tier: 'unsourced', source: 'direction-board', note: 'A March 2026 release announced 1,000+ workers on site (external-context.md). Its headline and text were not supplied. Migrate it from the current site.' } },
  { id: 'wccs-1800', type: 'Coverage', date: 'September 2026', outlet: 'WCCS / WDAD radio', media: media(null, 'None: coverage links out'), provenance: { tier: 'unsourced', source: 'direction-board', note: 'WCCS and WDAD carried the September release (external-context.md, tier B). Needs the story’s headline, link and client sign-off.' } },
];

export const workforceRelease = {
  item: newsItems[0],
  body: [
    'The Homer City Energy Campus workforce has grown to more than 1,800 direct-hire tradespeople and skilled contractors, as of September 2026, including members of 9 local union organizations.',
    'About 95% of the skilled direct-hire craft workforce is from the local area, and more than 135 apprentices are training alongside experienced journeymen. About 2,000 workers are projected on site by the end of 2026.',
    'The trades on site include boilermakers, carpenters, electricians, ironworkers, laborers, millwrights, operators, pipefitters and teamsters, along with other skilled contractors and craftspeople from across Western Pennsylvania.',
  ],
  bodyProvenance: { tier: 'confirm', source: 'press-release-2026-09-04', note: 'A summary of the release’s figures, not its text. Replace with the release as issued before launch.' },
  press: 'press@homercityredevelopment.com',
};

/* ----------------------------------------------------------- Contact */

export const contactPage = {
  hero: {
    headline: 'Four inboxes, so your question reaches the people who can answer it.',
    intro: 'Pick the one that fits. Each goes straight to the team responsible: hiring and suppliers to Kiewit, neighbours and reporters to the Homer City team.',
  },
  response: { tier: 'unsourced', source: 'direction-board', note: 'No response time is stated anywhere. Add one only if the team can keep it; add a community liaison or hotline first if one exists.' },
  visit: {
    heading: 'Where the campus is',
    provenance: { tier: 'unsourced', source: 'direction-board', note: 'No supplied document says whether the public may approach the site (CLAUDE.md §10 #11). Add the access policy here, and only then a map or gate photograph.' },
  },
};
