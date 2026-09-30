/**
 * Our history — the Phase 2 "Site History" page (docs/02-plan.md §2),
 * built now because its spine already exists: the IUP deck's dated photo
 * essay (slides 7–81). Captions and dates are the deck's; the few lines of
 * text are the fact sheet's and the deck's timeline. Nothing else is said
 * about the station's past — no supplied document tells its story, so the
 * page lets the photographs do it.
 */
import type { Media } from './types';
import { campusPage } from './campus';
import { history, milestones } from './home';

const said = (id: string) => milestones.find((m) => m.id === id)!.title;

/** A line under a stage, where a source says what was happening. */
const notes: Record<string, string> = {
  station: history.body[0],
  inflection: `${said('demolition')}.`,
  'towers-down': 'The stacks and cooling towers of the former station are gone.',
  // §10 #12: the essay dates this March, the timeline April. Say both.
  'first-steel': `Photographed in March 2026. The timeline dates the milestone — “${said('first-steel').toLowerCase()}” — to April 2026.`,
  hrsg: 'One of the heat recovery steam generators (HRSGs), which capture heat from the turbines’ exhaust to make steam for more power.',
};

export const historyPage = {
  hero: {
    eyebrow: 'Our history',
    headline: 'The same ground, from 1969 to today.',
    intro: 'The Homer City Generating Station produced power here from 1969 to 2023. These dated photographs show the site since, stage by stage.',
    media: {
      kind: 'Photograph',
      brief: 'Homer City Generating Station, 1969–2023 (IUP deck photo essay, first frame)',
      alt: 'The Homer City Generating Station',
    } satisfies Media,
  },
  pair: {
    heading: 'Then and now',
    before: campusPage.essay.stages[0],
    after: campusPage.essay.stages.at(-1)!,
  },
  stages: campusPage.essay.stages.map((s) => ({ ...s, note: notes[s.id] })),
  provenance: campusPage.essay.provenance,
};
