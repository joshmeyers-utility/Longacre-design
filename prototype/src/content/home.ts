/**
 * Homepage content. Every string traces to docs/source/ — the comment on each
 * block says where. Copy from the Figma direction board is layout placeholder
 * and is used only where marked 'direction-board', always with a flag.
 */
import type {
  Alert,
  Announcement,
  ContactRoute,
  Facility,
  FaqItem,
  Milestone,
  Pillar,
  Stat,
} from './types';

const factSheet = { tier: 'canonical', source: 'fact-sheet' } as const;
const deck = { tier: 'canonical', source: 'iup-deck' } as const;
const release = {
  tier: 'confirm',
  source: 'press-release-2026-09-04',
  note: 'From the client’s 4 Sep 2026 press release, not the supplied PDFs. Confirm wording against the release.',
} as const;

export const site = {
  name: 'Homer City Energy Campus',
  address: ['1750 Power Plant Rd', 'Homer City, PA 15748'], // iup-deck slide 6
};

// Nav labels follow the Figma direction board. Items with a page of their own
// link to it; the rest point at the homepage section that covers them.
export type PageId = 'home' | 'workforce' | 'campus';

/** Which page each nav item lives on. `hash` items are homepage sections. */
export const nav = [
  { label: 'What we’re building', href: 'campus.html', page: 'campus' as PageId },
  { label: 'Who we are', href: '#history' },
  { label: 'Careers', href: 'workforce.html', page: 'workforce' as PageId },
  { label: 'Community stewardship', href: '#pillars' },
  { label: 'FAQs', href: '#faq' },
  { label: 'News & resources', href: '#news' },
];
export const navCta = { label: 'Contact us', href: '#contact' };

/**
 * Mega menu (T1): one column under each top-level item, every link pointing
 * at a page or section that exists today. Community's child pages
 * (docs/02-plan.md §2) join the Community column when they are built.
 */
/** An item with `href` and no links is a plain link in the bar, with no column. */
export const navMenu: { label: string; page?: PageId; href?: string; links: { label: string; href: string; page?: PageId }[] }[] = [
  {
    label: 'What we’re building',
    page: 'campus',
    links: [
      { label: 'Overview', href: 'campus.html', page: 'campus' },
      { label: 'The site tour', href: 'campus.html#tour' },
      { label: 'Build progress', href: 'campus.html#progress' },
      { label: 'By the numbers', href: 'campus.html#numbers' },
    ],
  },
  {
    label: 'Who we are',
    links: [
      { label: 'Our history', href: '#history' },
      { label: 'Key milestones', href: '#timeline' },
    ],
  },
  {
    label: 'Careers',
    page: 'workforce',
    links: [
      { label: 'Overview', href: 'workforce.html', page: 'workforce' },
      { label: 'Trades on site', href: 'workforce.html#trades' },
      { label: 'Apprenticeships', href: 'workforce.html#apprentices' },
      { label: 'How to apply', href: 'workforce.html#apply' },
    ],
  },
  {
    label: 'Community stewardship',
    links: [{ label: 'Project pillars', href: '#pillars' }],
  },
  { label: 'FAQs', href: '#faq', links: [] },
  { label: 'News & resources', href: '#news', links: [] },
];

/** The two wide pills along the bottom of the open menu. */
export const navMenuCtas = [
  { label: 'Contact us', href: '#contact', tone: 'light' as const },
  { label: 'Find work on the campus', href: 'mailto:HomerCity.Info@Kiewit.com', tone: 'dark' as const },
];

/**
 * A homepage section link (`#…`) works as-is on the homepage and needs the
 * page in front of it anywhere else. `#contact` is the footer, on every page.
 * Webflow: `/#power-block` and `/workforce`.
 */
export function pageHref(href: string, current: PageId) {
  if (!href.startsWith('#') || current === 'home' || href === '#contact') return href;
  return `index.html${href}`;
}

export const alert: Alert = {
  id: 'heavy-equipment-2026-09',
  severity: 'construction',
  message: 'Heavy equipment transport to the Homer City Energy Campus begins September 16.',
  provenance: {
    tier: 'unsourced',
    source: 'direction-board',
    note: 'Alert text from the direction board. Not in any supplied document — the client publishes real alerts through the CMS.',
  },
};

// Hero — fact-sheet positioning statement, trimmed to a headline.
export const hero = {
  headline: 'Building America’s energy future by drawing on Pennsylvania’s proud past.',
  // Assembled from fact-sheet figures and the deck's construction status.
  intro:
    'A 3,200+ acre natural gas-powered campus under construction on the site of the former Homer City Generating Station, in Indiana County, Pennsylvania.',
  cta: { label: 'See what we’re building', href: 'campus.html' },
  media: {
    kind: 'Photograph',
    brief:
      'Aerial of the campus under construction, set in the county’s farmland. Must be a photograph — the deck cover is a rendering and cannot run here unlabelled.',
    alt: 'Aerial view of the Homer City Energy Campus under construction',
  },
} as const;

export const announcements: Announcement[] = [
  {
    id: 'workforce-1800',
    kind: 'News',
    date: 'September 2026',
    headline:
      'Homer City Energy Campus workforce grows to more than 1,800 workers, including members of 9 building and construction trade unions',
    href: '#news',
    media: {
      kind: 'Photograph',
      brief: 'Crew on site, faces visible',
      alt: 'Tradespeople at work on the campus',
    },
    provenance: release,
  },
  {
    id: 'full-construction',
    kind: 'Milestone',
    date: 'June 2026',
    headline: 'Completed major demolition and transitioned into full construction phase',
    href: '#timeline',
    media: { kind: 'Photograph', brief: 'Power Block, April 2026', alt: 'The Power Block from above' },
    provenance: deck,
  },
];

// By the numbers — fact-sheet figures, unchanged in the July deck. The
// on-site workforce lives in the Workforce section, where it is dated.
export const stats: Stat[] = [
  { id: 'gw', qualifier: 'Up to', figure: '4.4', unit: 'GW', label: 'Energy expected to be produced on-site', provenance: factSheet },
  { id: 'acres', figure: '3,200+', unit: 'acres', label: 'Natural gas-powered campus designed to meet the needs of America’s digital future', provenance: factSheet },
  { id: 'capital', qualifier: 'Projected', figure: '$10', unit: 'Billion', label: 'Initial capital investment for power infrastructure and site readiness', provenance: factSheet },
  { id: 'construction-jobs', qualifier: 'Anticipated', figure: '10,000+', label: 'Direct on-site construction-related jobs', footnote: 1, provenance: factSheet },
  { id: 'permanent-jobs', qualifier: 'Anticipated', figure: '~1,000', label: 'Total direct & indirect permanent high-paying positions in technology, operations and energy infrastructure', footnote: 2, provenance: factSheet },
  { id: 'earth', figure: '~3M', unit: 'cubic meters', label: 'Earth moved — roughly the volume required to build Egypt’s Great Pyramid of Giza', provenance: factSheet },
];

// Verbatim from the fact sheet. Not optional (CLAUDE.md §5.2).
export const footnotes: Record<1 | 2, string> = {
  1: 'Anticipated total number of direct on-site jobs related to the construction of both the natural gas-powered plant and the data center campus over an expected five-year period based on a 2024 data center and power generation economic impact analysis commissioned by Homer City Generation.',
  2: 'Anticipated total number of direct and indirect permanent positions to support the operations of both the natural gas-powered plant and all aspects of the data center campus once running at full capacity following the completion of the construction based on a 2024 data center and power generation economic impact analysis commissioned by Homer City Generation.',
};

export const workforce = {
  heading: 'Meet the tradesmen and women building the campus',
  stats: [
    { id: 'on-site', figure: '1,800+', label: 'Direct-hire tradespeople and skilled contractors active on site', asOf: { month: 'September', year: 2026 }, provenance: release },
    { id: 'local', figure: '~95%', label: 'Of the skilled direct-hire craft workforce is from the local area', provenance: release },
    { id: 'apprentices', figure: '135+', label: 'Apprentices training alongside experienced journeymen', provenance: release },
    { id: 'unions', figure: '9', label: 'Local union organizations represented on site', provenance: release },
  ] satisfies Stat[],
  trades: [
    { name: 'Boilermakers', icon: 'local_fire_department' },
    { name: 'Carpenters', icon: 'carpenter' },
    { name: 'Electricians', icon: 'electrical_services' },
    { name: 'Ironworkers', icon: 'construction' },
    { name: 'Laborers', icon: 'engineering' },
    { name: 'Millwrights', icon: 'settings' },
    { name: 'Operators', icon: 'front_loader' },
    { name: 'Pipefitters', icon: 'plumbing' },
    { name: 'Teamsters', icon: 'local_shipping' },
  ],
  cta: { label: 'Find work on the campus', href: 'mailto:HomerCity.Info@Kiewit.com' },
  media: {
    kind: 'Photograph',
    brief: 'Portrait of a named local tradesperson on site. Name, trade and union go in the caption once confirmed.',
    alt: 'A tradesperson at work on the campus',
  },
} as const;

// Fact-sheet pillar copy, verbatim. Same names, same order, everywhere.
export const pillars: Pillar[] = [
  {
    id: 'safety',
    name: 'Safety',
    copy: 'Safety is every Homer City Generation employee’s #1 priority; we are accountable for our actions and responsive to concerns.',
    href: '#faq',
    linkLabel: 'Read the safety questions',
    media: { kind: 'Photograph', brief: 'Flagger or safety briefing on site', alt: 'A safety briefing on the campus' },
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    copy: 'We are building world-class energy infrastructure at unprecedented scale.',
    href: '#power-block',
    linkLabel: 'See what we’re building',
    media: { kind: 'Photograph', brief: 'Powerblock aerial looking north', alt: 'The Power Block from above, looking north', caption: 'Power Block aerial, looking north', date: 'April 2026' },
  },
  {
    id: 'community',
    name: 'Community',
    copy: 'We are investing in Pennsylvania for the long term, operating as a genuine community partner and becoming one of the state’s leading employers.',
    href: '#workforce',
    linkLabel: 'Meet the workforce',
    media: { kind: 'Photograph', brief: 'Community open house — residents, not staff', alt: 'Residents at the community open house' },
  },
  {
    id: 'energy-future',
    name: 'Energy Future',
    copy: 'We are shaping American innovation, securing energy independence and powering the nation’s digital future.',
    href: '#power-block',
    linkLabel: 'See the Power Block',
    media: { kind: 'Photograph', brief: 'GE Vernova turbine delivery or install', alt: 'A GE Vernova turbine on site' },
  },
];

// Tour highlights (iup-deck slide 6) with stages from the dated photo essay.
export const powerBlock = {
  heading: 'The Power Block',
  intro:
    'Seven GE Vernova 7HA.02 high-efficiency natural gas turbines sit at the center of the campus. Together they are expected to produce up to 4.4 GW.',
  facilities: [
    { id: 'power-block', name: 'Power Block', detail: '7 × GE Vernova 7HA.02 natural gas turbines', stamp: 'Aerial looking north · April 2026' },
    { id: 'hrsg', name: 'Heat recovery steam generator (HRSG)', detail: 'Unit 5', stamp: 'July 2026' },
    { id: 'gis', name: 'Gas insulated switchgear (GIS)', detail: 'Building and foundations', stamp: 'April 2026' },
    { id: 'compressor', name: 'Gas compressor station', detail: 'Fuel supply' },
    { id: 'water', name: 'Water treatment facility', detail: 'Water treatment area', stamp: 'April 2026' },
  ] satisfies Facility[],
  cta: { label: 'Take the site tour', href: 'campus.html#tour' },
  media: {
    kind: 'Photograph',
    brief: 'Powerblock aerial looking north (IUP deck photo essay)',
    alt: 'The Power Block under construction, seen from above',
    caption: 'Power Block aerial, looking north',
    date: 'April 2026',
  },
} as const;

export const history = {
  heading: 'From past to present',
  // Photo essay dates the station 1969–2023 and names no month (docs/04 §12.2).
  body: [
    'The Homer City Generating Station produced power on this site from 1969 to 2023.',
    'In April 2025, a plan was unveiled to build the Homer City Energy Campus in its place, in partnership with Kiewit Power Constructors Co. Demolition of the stacks and towers began the month before.',
  ],
  cta: { label: 'See the timeline', href: '#timeline' },
  media: {
    kind: 'Photograph',
    brief: 'After stacks and towers down (IUP deck photo essay)',
    alt: 'The site after the stacks and cooling towers came down',
    caption: 'After the stacks and towers came down',
    date: 'November 2025',
  },
} as const;

// 2025 from the fact sheet; 2026 and Upcoming from the July deck, which marks
// the construction milestones complete (CLAUDE.md §5.4).
export const milestones: Milestone[] = [
  { id: 'demolition', year: 2025, month: 'March', title: 'Demolition of the stacks and towers at the former Homer City Generating Station begins', provenance: factSheet },
  { id: 'plan', year: 2025, month: 'April', title: 'Plan unveiled to build the Homer City Energy Campus in partnership with Kiewit Power Constructors Co.', provenance: factSheet },
  { id: 'turbines', year: 2025, month: 'April', title: 'GE Vernova confirmed to provide seven high-efficiency 7HA.02 natural gas turbines for the campus', provenance: factSheet },
  { id: 'ceo', year: 2025, month: 'April', title: 'Corey Hessen appointed as CEO, bringing significant experience in power generation operations', provenance: factSheet },
  { id: 'safety-team', year: 2025, month: 'June', title: 'Launch of Safety & Security Community Collaborative Team and Integrated Emergency Management Team', provenance: factSheet },
  { id: 'open-house', year: 2025, month: 'July', title: 'Hosted first community open house, convening hundreds of residents from across Indiana County', provenance: factSheet },
  { id: 'summit', year: 2025, month: 'July', title: 'Participated in Senator McCormick’s Inaugural Pennsylvania Energy & Innovation Summit', provenance: factSheet },
  { id: 'dep', year: 2025, month: 'November', title: 'PA DEP approved Homer City Generation’s air quality plan, authorizing construction and initial operations', provenance: factSheet },
  { id: 'mobilized', year: 2026, month: 'March', title: 'Mobilized construction workforce with Kiewit and local unions; crossed 1,000+ workers active on site', provenance: deck },
  { id: 'first-steel', year: 2026, month: 'April', title: 'Crossed first steel threshold with commencement of vertical construction', provenance: deck },
  { id: 'full-construction', year: 2026, month: 'June', title: 'Completed major demolition and transitioned into full construction phase', provenance: deck },
  { id: 'first-equipment', year: 'Upcoming', month: '2026', title: 'Installation of first equipment, including first deliveries of GE Vernova turbines expected in 2026', provenance: deck },
  { id: 'customer', year: 'Upcoming', month: 'To be announced', title: 'Anticipated announcement of customer(s)', provenance: deck },
];

export const milestonePhases: Record<string, string> = {
  '2025': 'Demolition & site development',
  '2026': 'Construction',
  Upcoming: 'What comes next',
};

export const faqs: FaqItem[] = [
  {
    id: 'what',
    question: 'What is being built?',
    answer:
      'A 3,200+ acre natural gas-powered campus on the site of the former Homer City Generating Station, designed to meet the needs of America’s digital future. It is expected to produce up to 4.4 GW.',
    provenance: factSheet,
  },
  {
    id: 'who',
    question: 'Who is building it?',
    answer:
      'Homer City Generation, in partnership with Kiewit Power Constructors Co. GE Vernova is providing seven high-efficiency 7HA.02 natural gas turbines.',
    provenance: factSheet,
  },
  {
    id: 'workers',
    question: 'How many people are working on site?',
    answer:
      '1,800+ direct-hire tradespeople and skilled contractors as of September 2026, including members of 9 local union organizations. About 95% of the skilled direct-hire craft workforce is from the local area.',
    provenance: release,
  },
  {
    id: 'permit',
    question: 'Has the project been approved?',
    answer:
      'In November 2025, PA DEP approved Homer City Generation’s air quality plan, authorizing construction and initial operations.',
    provenance: factSheet,
  },
  {
    id: 'water',
    question: 'How much water will the campus use?',
    provenance: {
      tier: 'unsourced',
      source: 'direction-board',
      note: 'No supplied document names a water source or usage figure (CLAUDE.md §10 #14). Needs the client’s own words before this answer can be written.',
    },
  },
];

export const contacts: ContactRoute[] = [
  { audience: 'Job seekers', email: 'HomerCity.Info@Kiewit.com' },
  { audience: 'Community members', email: 'info@homercityredevelopment.com' },
  { audience: 'Vendors & partners', email: 'HomerCity.Info@Kiewit.com' },
  { audience: 'Media inquiries', email: 'press@homercityredevelopment.com' },
];
