/**
 * Contact page — docs/02-plan.md §5.7. Four inboxes, kept apart as the
 * brief asks (CLAUDE.md §6). The addresses are canonical; the one-line
 * "write here for" notes only restate the audience in plain words.
 *
 * Left out on purpose, until the client supplies them:
 * - A response time. No document states one, and a promise the team
 *   cannot keep is worse than none.
 * - A community liaison or hotline. None is named anywhere; if one exists
 *   it becomes the first thing on this page.
 * - The map and the entrance photograph, which wait on a site access
 *   policy (§10 #11).
 */
import type { Provenance } from './types';
import { contacts, site } from './home';

const access: Provenance = {
  tier: 'unsourced',
  source: 'direction-board',
  note: 'No supplied document says whether the public may approach the site (CLAUDE.md §10 #11). Add the access policy here — and only then a map or gate photograph.',
};
const response: Provenance = {
  tier: 'unsourced',
  source: 'direction-board',
  note: 'No response time is stated anywhere. Add one only if the team can keep it; add a community liaison or hotline first if one exists.',
};

/** Plain-language "write here for", keyed on the audience. */
const forWhat: Record<string, string> = {
  'Job seekers': 'Jobs on the campus and how to be hired. Kiewit Power Constructors, who are building the campus, handle hiring.',
  'Community members': 'Questions and concerns from neighbours about the campus and its construction.',
  'Vendors & partners': 'Supplying or working with the construction project. This inbox is also Kiewit’s.',
  'Media inquiries': 'Reporters and editors. Press releases and statements are on the News page.',
};

export const contactPage = {
  hero: {
    eyebrow: 'Contact',
    headline: 'Four inboxes, so your question reaches the people who can answer it.',
    intro: 'Pick the one that fits. Each goes straight to the team responsible — hiring and suppliers to Kiewit, neighbours and reporters to the Homer City team.',
  },
  routes: contacts.map((c) => ({ ...c, for: forWhat[c.audience] })),
  response,
  visit: {
    heading: 'Where the campus is',
    address: [site.name, ...site.address],
    provenance: access,
  },
};
