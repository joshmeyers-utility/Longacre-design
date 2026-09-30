/**
 * Workforce page content — docs/02-plan.md §5.3. Every figure traces to
 * docs/source/; the comment on each block says where. Two gaps the sources
 * leave are left open rather than filled: the nine unions' names (CLAUDE.md
 * §10 #2) and worker spotlights (§5.6 — no quote without a named, photographed
 * person). Neither section is built until that content exists.
 */
import type { Media, Provenance, Stat } from './types';
import { stats, workforce } from './home';

const factSheet = { tier: 'canonical', source: 'fact-sheet' } as const;
const deck = { tier: 'canonical', source: 'iup-deck' } as const;
const release = {
  tier: 'confirm',
  source: 'press-release-2026-09-04',
  note: 'From the client’s 4 Sep 2026 press release, not the supplied PDFs. Confirm wording against the release.',
} as const;
/** The trade descriptions say what each trade does in general, not what it does here. */
const tradeCopy: Provenance = {
  tier: 'confirm',
  source: 'direction-board',
  note: 'General description of the trade, written for plain language — not client copy. Confirm with Kiewit or the unions, and add each union’s name and local number (CLAUDE.md §10 #2).',
};

/** Each tile links out to its trade's international union — a stand-in. */
const tradeLinks: Provenance = {
  tier: 'confirm',
  source: 'direction-board',
  note: 'Links go to each trade’s international union, not the local on site: the nine locals are not named (CLAUDE.md §10 #2). Swap each for its local’s page, or its apprenticeship page, once named.',
};

export const workforcePage = {
  hero: {
    eyebrow: 'Careers',
    headline: 'The campus is being built by local trades.',
    // ~95% and 9 unions: press release. 1,800+ as of Sep 2026: press release.
    intro: 'About 95% of the skilled direct-hire craft workforce on site is from the local area. More than 1,800 tradespeople and skilled contractors were working here as of September 2026, from 9 local union organizations.',
    media: {
      kind: 'Photograph',
      brief: 'Crew at shift change on site, faces visible, hard hats and union stickers in frame. Wide enough to read as a crowd, not a posed group.',
      alt: 'Tradespeople at shift change on the campus',
    } satisfies Media,
  },

  /** Same four figures as the homepage block, from the same release. */
  stats: workforce.stats,

  /**
   * The headcount over 2026, each point from the document that published it.
   * The September release counts "direct-hire tradespeople and skilled
   * contractors"; the earlier documents count "workers active on site". Both
   * definitions are stated under the chart rather than blended silently.
   */
  growth: {
    title: 'How the workforce has grown in 2026',
    subtitle: 'People working on site, by the date each figure was published',
    points: [
      { id: 'mar', label: 'Mar', value: 1000, figure: '1,000+', source: 'IUP tour deck timeline', provenance: deck },
      { id: 'may', label: 'May', value: 1300, figure: '~1,300', source: 'Fact sheet, May 2026', provenance: factSheet },
      { id: 'jul', label: 'Jul', value: 1500, figure: '~1,500', source: 'IUP tour deck, July 2026', provenance: deck },
      { id: 'sep', label: 'Sep', value: 1800, figure: '1,800+', source: 'Press release, 4 Sep 2026', provenance: release },
      { id: 'dec', label: 'Year-end', value: 2000, figure: '~2,000', source: 'Press release, 4 Sep 2026', projected: true, provenance: release },
    ],
    note: 'March to July count workers active on site; September counts direct-hire tradespeople and skilled contractors. The year-end figure is a projection.',
  },

  // Trades: press release. Descriptions: see tradeCopy. Links: see tradeLinks.
  trades: [
    { name: 'Boilermakers', icon: 'local_fire_department', href: 'https://boilermakers.org', union: 'International Brotherhood of Boilermakers', description: 'Build, assemble and repair boilers, tanks and other large vessels that hold liquids and gases under pressure.' },
    { name: 'Carpenters', icon: 'carpenter', href: 'https://www.carpenters.org', union: 'United Brotherhood of Carpenters', description: 'Build the forms that concrete is poured into, along with scaffolding, framing and temporary structures.' },
    { name: 'Electricians', icon: 'electrical_services', href: 'https://www.ibew.org', union: 'International Brotherhood of Electrical Workers', description: 'Install and connect the wiring, cable, lighting and electrical equipment that powers and controls the site.' },
    { name: 'Ironworkers', icon: 'construction', href: 'https://www.ironworkers.org', union: 'International Association of Ironworkers', description: 'Raise and connect structural steel, and place the steel reinforcing bar that goes inside concrete.' },
    { name: 'Laborers', icon: 'engineering', href: 'https://www.liuna.org', union: 'Laborers’ International Union of North America', description: 'Prepare and keep up the work site — excavation, concrete placement, traffic control — and support every other trade.' },
    { name: 'Millwrights', icon: 'settings', href: 'https://www.carpenters.org', union: 'United Brotherhood of Carpenters (millwrights)', description: 'Set, align and maintain heavy machinery to fine tolerances, so equipment that turns runs true.' },
    { name: 'Operators', icon: 'front_loader', href: 'https://www.iuoe.org', union: 'International Union of Operating Engineers', description: 'Run the heavy equipment — cranes, excavators, dozers and loaders — that moves earth and lifts material into place.' },
    { name: 'Pipefitters', icon: 'plumbing', href: 'https://ua.org', union: 'United Association (UA)', description: 'Fabricate, install and weld the piping systems that carry gas, water and steam.' },
    { name: 'Teamsters', icon: 'local_shipping', href: 'https://teamster.org', union: 'International Brotherhood of Teamsters', description: 'Drive the trucks that bring materials, equipment and supplies onto the site and move them around it.' },
  ],
  tradeProvenance: tradeCopy,
  tradeLinkProvenance: tradeLinks,

  apprentices: {
    stat: workforce.stats.find((s) => s.id === 'apprentices')!,
    heading: 'Learning a trade on the job',
    // Press release wording: "apprentices training alongside experienced journeymen".
    body: 'More than 135 apprentices are training on site alongside experienced journeymen.',
    media: {
      kind: 'Photograph',
      brief: 'Apprentice and journeyman working side by side. Names, trade and union in the caption once confirmed.',
      alt: 'An apprentice working alongside a journeyman on site',
    } satisfies Media,
  },

  // Fact sheet, with the required footnotes (CLAUDE.md §5.2).
  longView: {
    heading: 'Beyond this year',
    stats: stats.filter((s) => s.id === 'construction-jobs' || s.id === 'permanent-jobs') as Stat[],
  },

  apply: {
    heading: 'How to find work on the campus',
    // Fact sheet: Job Seekers → HomerCity.Info@Kiewit.com; campus built "in
    // partnership with Kiewit Power Constructors Co."
    body: 'Homer City Generation is building the campus in partnership with Kiewit Power Constructors Co. Job seekers can reach Kiewit directly.',
    email: 'HomerCity.Info@Kiewit.com',
    vendors: 'Vendors and partners use the same address.',
  },
};
