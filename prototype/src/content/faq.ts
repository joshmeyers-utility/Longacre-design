/**
 * FAQs — docs/02-plan.md §5.5, the most important page on the site.
 * Categories are named for what neighbours worry about (the plan's six),
 * not for what is comfortable to answer.
 *
 * Every answer is assembled from docs/source/ and says which document it
 * came from. A question no source answers keeps its place with no answer:
 * it shows only with review notes on (?notes=on), so the client can see
 * exactly what is still missing — noise, traffic, water, emissions — and a
 * category with nothing answered yet stays off the public page.
 *
 * Not yet here: the "last reviewed" date per answer (a CMS field the client
 * fills when they sign an answer off) and the downloadable resources, which
 * wait on files cleared for the web.
 */
import type { FaqItem, Provenance, SourceId } from './types';

const factSheet = { tier: 'canonical', source: 'fact-sheet' } as const;
const deck = { tier: 'canonical', source: 'iup-deck' } as const;
const release: Provenance = {
  tier: 'confirm',
  source: 'press-release-2026-09-04',
  note: 'From the client’s 4 Sep 2026 press release, not the supplied PDFs. Confirm wording against the release.',
};
const missing = (topic: string): Provenance => ({
  tier: 'unsourced',
  source: 'direction-board',
  note: `No supplied document answers this (${topic}). Needs the client’s own answer before it can be written — do not fill it from press coverage.`,
});

/** Where an answer came from, in words a reader recognises. */
export const sourceNames: Record<SourceId, string> = {
  'fact-sheet': 'Homer City Energy Campus fact sheet, May 2026',
  'iup-deck': 'Site tour presentation, July 2026',
  'press-release-2026-09-04': 'Press release, 4 September 2026',
  'site-structure': 'Homer City Energy Campus',
  'direction-board': 'Homer City Energy Campus',
};

export interface FaqCategory {
  id: string;
  name: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'project',
    name: 'The project',
    items: [
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
        id: 'why-here',
        question: 'What was on the site before?',
        answer:
          'The Homer City Generating Station, which produced power here from 1969 to 2023. Demolition of its stacks and towers began in March 2025, and the plan to build the campus in its place was unveiled in April 2025.',
        provenance: deck,
      },
      {
        id: 'investment',
        question: 'How much is being invested?',
        answer: 'A projected $10 billion initial capital investment for power infrastructure and site readiness.',
        provenance: factSheet,
      },
      {
        id: 'when',
        question: 'When will it be finished?',
        answer:
          'No completion date has been published. Full construction began in June 2026. The next milestones are the installation of the first equipment, including the first deliveries of GE Vernova turbines, expected in 2026, and the anticipated announcement of the campus’s customer or customers.',
        provenance: deck,
      },
      {
        id: 'customers',
        question: 'Who will use the power and the data center?',
        answer: 'No customer has been announced yet. An announcement of the campus’s customer or customers is anticipated.',
        provenance: deck,
      },
      {
        id: 'leadership',
        question: 'Who runs Homer City Generation?',
        answer: 'Corey Hessen was appointed CEO in April 2025, bringing significant experience in power generation operations.',
        provenance: factSheet,
      },
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
      {
        id: 'open-house',
        question: 'Can I talk to someone from the project in person?',
        answer:
          'The first community open house was held in July 2025 and brought together hundreds of residents from across Indiana County. Community members can also write to the project team at info@homercityredevelopment.com.',
        provenance: factSheet,
      },
    ],
  },
  {
    id: 'jobs',
    name: 'Jobs and the local economy',
    items: [
      {
        id: 'workers',
        question: 'How many people are working on site?',
        answer:
          '1,800+ direct-hire tradespeople and skilled contractors as of September 2026, including members of 9 local union organizations. About 2,000 workers are projected by the end of 2026.',
        provenance: release,
      },
      {
        id: 'local',
        question: 'Are the workers local?',
        answer: 'About 95% of the skilled direct-hire craft workforce is from the local area.',
        provenance: release,
      },
      {
        id: 'construction-jobs',
        question: 'How many construction jobs will there be in total?',
        answer: '10,000+ direct on-site construction-related jobs are anticipated.',
        footnote: 1,
        provenance: factSheet,
      },
      {
        id: 'permanent-jobs',
        question: 'How many jobs will there be once it is running?',
        answer: '~1,000 total direct and indirect permanent high-paying positions in technology, operations and energy infrastructure are anticipated.',
        footnote: 2,
        provenance: factSheet,
      },
      {
        id: 'apprentices',
        question: 'Are there apprenticeships?',
        answer: 'Yes. 135+ apprentices are training alongside experienced journeymen on site.',
        provenance: release,
      },
      {
        id: 'apply',
        question: 'How do I apply for a job?',
        answer: 'Kiewit Power Constructors handles hiring. Write to HomerCity.Info@Kiewit.com. The same address takes enquiries from vendors and partners.',
        provenance: factSheet,
      },
      { id: 'taxes', question: 'What will the campus pay in local taxes?', provenance: missing('local tax contribution') },
    ],
  },
  {
    id: 'safety',
    name: 'Safety and emergencies',
    items: [
      {
        id: 'safety-priority',
        question: 'How is the site kept safe?',
        answer: 'Safety is every Homer City Generation employee’s #1 priority; we are accountable for our actions and responsive to concerns.',
        provenance: deck,
      },
      {
        id: 'emergency',
        question: 'Is there an emergency plan with local responders?',
        answer:
          'In June 2025 the project launched a Safety & Security Community Collaborative Team and an Integrated Emergency Management Team.',
        provenance: factSheet,
      },
      { id: 'who-to-call', question: 'Who do I call about something happening on site right now?', provenance: missing('a community liaison or hotline') },
    ],
  },
  {
    id: 'permits',
    name: 'Permits and oversight',
    items: [
      {
        id: 'permit',
        question: 'Has the project been approved?',
        answer: 'In November 2025, PA DEP approved Homer City Generation’s air quality plan, authorizing construction and initial operations.',
        provenance: factSheet,
      },
      {
        id: 'appeal',
        question: 'Is the air quality approval being challenged?',
        answer:
          'Yes. In December 2025, environmental groups, joined by Our Children’s Trust, appealed PA DEP’s November 2025 approval.',
        provenance: {
          tier: 'confirm',
          source: 'direction-board',
          note: 'DRAFT (CLAUDE.md §10 #5). The client decided to address the appeal; this answer is drafted from public filings and needs client and legal sign-off before it ships. Add the current status of the appeal once confirmed.',
        },
      },
      { id: 'other-permits', question: 'What other permits does the campus need?', provenance: missing('the fact sheet’s “key permits and agreements for gas, EPC, and offtake”, which the July deck drops — confirm status first') },
    ],
  },
];

/** The homepage module shows five of these, by id. */
export const homeFaqIds = ['what', 'who', 'workers', 'permit', 'water'];
export const allFaqs = faqCategories.flatMap((c) => c.items);
