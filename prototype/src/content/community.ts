/**
 * Community — docs/02-plan.md §5.4: the hub and its three pages, Campus
 * partners, Our commitments and Voices. Every figure is from docs/source/,
 * pulled from the same records the homepage and Careers use, so a number
 * never drifts between pages.
 *
 * Left out on purpose:
 * - Independence and Kovalchick (§10 #3): named as partners in the brief,
 *   described nowhere. Shown only with review notes on.
 * - Health, water and giving back have sourced facts but no sourced
 *   commitment. They show the facts only — no adjectives — and carry a red
 *   flag with notes on until the client supplies the commitment itself.
 * - Every quote (CLAUDE.md §5.6). None supplied with a name, role and photo.
 */
import type { Provenance, Stat } from './types';
import { footnotes, stats, workforce } from './home';

const factSheet = { tier: 'canonical', source: 'fact-sheet' } as const;
const deck = { tier: 'canonical', source: 'iup-deck' } as const;
const release: Provenance = {
  tier: 'confirm',
  source: 'press-release-2026-09-04',
  note: 'From the client’s 4 Sep 2026 press release, not the supplied PDFs. Confirm wording against the release.',
};
const partnerLink: Provenance = {
  tier: 'confirm',
  source: 'direction-board',
  note: 'Links go to each company’s main site. Homer City Generation’s points at the current site, which this one replaces. Change it once the domain question (§10 #9) is settled. Logos wait on the brand files.',
};

const stat = (id: string) => [...stats, ...workforce.stats].find((s) => s.id === id)! as Stat;

export const communityHub = {
  hero: {
    eyebrow: 'Community',
    // The Community pillar, verbatim (fact sheet).
    headline: 'The campus and Indiana County.',
    intro:
      'We are investing in Pennsylvania for the long term, operating as a genuine community partner and becoming one of the state’s leading employers. These pages cover who is building the campus and what it commits to.',
  },
  routes: [
    { id: 'partners', title: 'Campus partners', body: 'The companies building the campus, and what each one does.', href: 'partners.html', stat: { figure: '7 ×', label: 'GE Vernova 7HA.02 natural gas turbines in the Power Block' } },
    { id: 'commitments', title: 'Our commitments', body: 'Safety, water, economic impact and workforce development, each with its figures and sources.', href: 'commitments.html', stat: { figure: '~95%', label: 'Of the skilled direct-hire craft workforce is from the local area' } },
    { id: 'voices', title: 'Voices', body: 'Neighbours, workers, businesses and officials on the campus, by name.', href: 'voices.html' },
  ],
  // Fact sheet, 2025 timeline.
  moments: {
    heading: 'Meeting the county',
    items: [
      { date: 'June 2025', text: 'Launch of Safety & Security Community Collaborative Team and Integrated Emergency Management Team' },
      { date: 'July 2025', text: 'Hosted first community open house, convening hundreds of residents from across Indiana County' },
    ],
    provenance: factSheet,
  },
};

export interface Partner {
  id: string;
  name: string;
  icon: string;
  role: string;
  href?: string;
  provenance: Provenance;
}

export const partnersPage = {
  hero: {
    eyebrow: 'Campus partners',
    headline: 'Who is building the campus.',
    intro: 'Homer City Generation is developing the campus, in partnership with Kiewit Power Constructors Co. GE Vernova is providing the turbines.',
  },
  partners: [
    { id: 'hcg', name: 'Homer City Generation', icon: 'domain', role: 'Developing the Homer City Energy Campus. Corey Hessen was appointed CEO in April 2025, bringing significant experience in power generation operations.', href: 'https://www.homercityredevelopment.com/', provenance: factSheet },
    { id: 'kiewit', name: 'Kiewit Power Constructors Co.', icon: 'construction', role: 'Building the campus in partnership with Homer City Generation since the plan was unveiled in April 2025, and hiring its workforce with the local unions.', href: 'https://www.kiewit.com/', provenance: factSheet },
    { id: 'ge', name: 'GE Vernova', icon: 'bolt', role: 'Providing the seven high-efficiency 7HA.02 natural gas turbines at the center of the Power Block, confirmed in April 2025.', href: 'https://www.gevernova.com/', provenance: factSheet },
    { id: 'independence', name: 'Independence', icon: 'handshake', role: 'Role not yet supplied.', provenance: { tier: 'unsourced', source: 'site-structure', note: 'Named as a partner in the brief; described in no supplied document (§10 #3). Needs a description, a logo and a link.' } },
    { id: 'kovalchick', name: 'Kovalchick', icon: 'handshake', role: 'Role not yet supplied.', provenance: { tier: 'unsourced', source: 'site-structure', note: 'Named as a partner in the brief; described in no supplied document (§10 #3). Needs a description, a logo and a link.' } },
  ] satisfies Partner[],
  partnerLink,
};

export interface Commitment {
  id: string;
  name: string;
  icon: string;
  body?: string;
  stats: Stat[];
  facts: { date: string; text: string }[];
  provenance: Provenance;
}

// The brief's six, in its order.
export const commitmentsPage = {
  hero: {
    eyebrow: 'Our commitments',
    headline: 'Six areas the campus is accountable for, and the record behind each.',
    intro: 'Health, safety, the environment, economic impact, workforce development and giving back. Each shows the figures and dated milestones on record for it, and nothing else.',
  },
  commitments: [
    {
      id: 'health',
      name: 'Health',
      icon: 'health_and_safety',
      stats: [],
      facts: [{ date: 'November 2025', text: 'PA DEP approved Homer City Generation’s air quality plan, authorizing construction and initial operations' }],
      provenance: { tier: 'unsourced', source: 'site-structure', note: 'The approval is sourced; a health commitment is not. No supplied document states one, and the emissions claims (external-context.md, tier C) are what this area has to answer. Needs the client’s commitment, with a number, date and source.' },
    },
    {
      id: 'safety',
      name: 'Safety',
      icon: 'shield',
      body: 'Safety is every Homer City Generation employee’s #1 priority; we are accountable for our actions and responsive to concerns.',
      stats: [],
      facts: [{ date: 'June 2025', text: 'Launch of Safety & Security Community Collaborative Team and Integrated Emergency Management Team' }],
      provenance: deck,
    },
    {
      id: 'environment',
      name: 'Environment and water',
      icon: 'water_drop',
      body: 'A water treatment facility is one of the four stops on the site tour.',
      stats: [],
      facts: [{ date: 'April 2026', text: 'Water treatment area photographed under construction' }],
      provenance: { tier: 'unsourced', source: 'direction-board', note: 'The facts are sourced, but the commitment is not: no document names the water source or volume (§10 #14), and this is the most contested topic. Needs the client’s own words before it ships.' },
    },
    {
      id: 'economic',
      name: 'Economic impact',
      icon: 'payments',
      stats: [stat('capital'), stat('construction-jobs'), stat('permanent-jobs')],
      facts: [],
      provenance: factSheet,
    },
    {
      id: 'workforce',
      name: 'Workforce development',
      icon: 'school',
      stats: [stat('local'), stat('apprentices'), stat('unions')],
      facts: [],
      provenance: release,
    },
    {
      id: 'giving',
      name: 'Giving back',
      icon: 'volunteer_activism',
      stats: [],
      facts: [{ date: 'July 2025', text: 'Hosted first community open house, convening hundreds of residents from across Indiana County' }],
      provenance: { tier: 'unsourced', source: 'site-structure', note: 'In the brief’s list; no supplied document describes giving, donations or community programmes. The open house is sourced; the commitment needs the client’s own content.' },
    },
  ] satisfies Commitment[],
  footnotes,
};

export const voicesPage = {
  hero: {
    eyebrow: 'Voices',
    headline: 'What neighbours, workers and local leaders say, by name.',
    intro: 'Every quote here carries the speaker’s name, role, organisation and photograph. A quote without them does not run.',
  },
  speakers: ['Residents', 'Workers', 'Businesses', 'Officials'] as const,
  provenance: {
    tier: 'unsourced',
    source: 'site-structure',
    note: 'No attributed quotes have been supplied (CLAUDE.md §5.6). Each needs a name, role, organisation, a real photograph and the speaker’s sign-off. The brief’s Phase 2 adds video.',
  } as Provenance,
};
