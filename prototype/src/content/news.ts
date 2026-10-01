/**
 * News — docs/02-plan.md §5.6. One collection, three types. Coverage items
 * link out and credit the outlet.
 *
 * Only one item is publishable from what was supplied: the 4 Sep 2026
 * workforce release, whose headline and figures are recorded in
 * external-context.md (tier A — confirm against the release). The March
 * 2026 release and the radio coverage are known to exist but their
 * headlines are not, so they show only with review notes on. The client
 * migrates the rest from the current site's /post/ archive.
 */
import type { Media, Provenance } from './types';

export type NewsType = 'Press release' | 'Media statement' | 'Coverage';

export interface NewsItem {
  id: string;
  type: NewsType;
  date: string;
  /** Absent until the real headline is supplied. */
  headline?: string;
  summary?: string;
  /** Detail page. Coverage links out instead. */
  href?: string;
  outlet?: string;
  media: Media;
  provenance: Provenance;
}

const release: Provenance = {
  tier: 'confirm',
  source: 'press-release-2026-09-04',
  note: 'From the client’s 4 Sep 2026 press release, recorded in external-context.md, not the supplied PDFs. Confirm wording against the release.',
};

export const newsItems: NewsItem[] = [
  {
    id: 'workforce-1800',
    type: 'Press release',
    date: '4 September 2026',
    headline: 'Homer City Energy Campus workforce grows to more than 1,800 workers, including members of 9 building and construction trade unions',
    summary: 'More than 1,800 direct-hire tradespeople and skilled contractors are now on site, about 95% of them from the local area.',
    href: 'news-workforce-1800.html',
    media: { kind: 'Photograph', brief: 'Crew on site, faces visible', alt: 'Tradespeople at work on the campus' },
    provenance: release,
  },
  {
    id: 'workforce-1000',
    type: 'Press release',
    date: 'March 2026',
    media: { kind: 'Photograph', brief: 'Workforce mobilization, March 2026', alt: 'The construction workforce on site' },
    provenance: {
      tier: 'unsourced',
      source: 'direction-board',
      note: 'A March 2026 release announced 1,000+ workers on site (external-context.md). Its headline and text were not supplied. Migrate it from the current site.',
    },
  },
  {
    id: 'wccs-1800',
    type: 'Coverage',
    date: 'September 2026',
    outlet: 'WCCS / WDAD radio',
    media: { kind: 'Photograph', brief: 'None: coverage links out', alt: '' },
    provenance: {
      tier: 'unsourced',
      source: 'direction-board',
      note: 'WCCS and WDAD carried the September release (external-context.md, tier B). Needs the story’s headline, link and client sign-off.',
    },
  },
];

/** The one detail page built so far: the release, summarised from its recorded figures. */
export const workforceRelease = {
  item: newsItems[0],
  body: [
    'The Homer City Energy Campus workforce has grown to more than 1,800 direct-hire tradespeople and skilled contractors, as of September 2026, including members of 9 local union organizations.',
    'About 95% of the skilled direct-hire craft workforce is from the local area, and more than 135 apprentices are training alongside experienced journeymen. About 2,000 workers are projected on site by the end of 2026.',
    'The trades on site include boilermakers, carpenters, electricians, ironworkers, laborers, millwrights, operators, pipefitters and teamsters, along with other skilled contractors and craftspeople from across Western Pennsylvania.',
  ],
  bodyProvenance: {
    tier: 'confirm',
    source: 'press-release-2026-09-04',
    note: 'A summary of the release’s figures, not its text. Replace with the release as issued before launch.',
  } as Provenance,
  press: 'press@homercityredevelopment.com',
};
