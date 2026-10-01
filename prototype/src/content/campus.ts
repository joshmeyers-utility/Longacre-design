/**
 * The Campus page — docs/02-plan.md §5.2. What is being built, in plain
 * language, with sources. Every figure and every dated stage traces to
 * docs/source/; the comment on each block says where.
 *
 * Left out on purpose:
 * - Water source and volume. No client document names either (CLAUDE.md
 *   §10 #14), so the water stop says only what the deck says — that there is
 *   a water treatment facility — and carries a red flag in review mode.
 * - Fuel supply agreements. The fact sheet's "Secured key permits and
 *   agreements for gas, EPC, and offtake operations" is missing from the
 *   newer deck's timeline and needs confirming (iup-deck.md, slide 5).
 * - The labelled site map. No labelled site asset exists yet.
 */
import type { Media, Provenance, Stat } from './types';
import { stats } from './home';

const deck = { tier: 'canonical', source: 'iup-deck' } as const;

/** What each piece of equipment does, in general. Not client copy. */
const explainer: Provenance = {
  tier: 'confirm',
  source: 'direction-board',
  note: 'General, plain-language description of what this equipment does, not client copy. Confirm with Homer City Generation or Kiewit before launch.',
};
const water: Provenance = {
  tier: 'unsourced',
  source: 'direction-board',
  note: 'No client document names the water source or volume (CLAUDE.md §10 #14). Add the client’s own answer here before launch; do not fill it from press coverage.',
};

export interface TourStop {
  id: string;
  name: string;
  /** The acronym, expanded on first use (CLAUDE.md §9). */
  short?: string;
  detail: string;
  body: string;
  /** Photo-essay stages for this stop, from the deck. */
  stages: { caption: string; date: string }[];
  provenance: Provenance;
  media: Media;
}

export interface EssayStage {
  id: string;
  caption: string;
  date: string;
  media: Media;
}

const photo = (brief: string, alt: string): Media => ({ kind: 'Photograph', brief, alt });

export const campusPage = {
  hero: {
    eyebrow: 'What we’re building',
    // Fact sheet: 3,200+ acres, natural gas-powered, up to 4.4 GW, Kiewit.
    headline: 'A natural gas power plant and data center campus, on the site of the former generating station.',
    intro:
      'The Homer City Energy Campus covers more than 3,200 acres in Indiana County. At its center are seven GE Vernova 7HA.02 natural gas turbines, and the campus is expected to produce up to 4.4 GW of energy on site. It is being built in partnership with Kiewit Power Constructors Co.',
  },

  /** Fact-sheet figures that describe the site itself. The job figures live on Careers. */
  stats: stats.filter((s) => ['gw', 'acres', 'capital', 'earth'].includes(s.id)) as Stat[],

  // Tour route: iup-deck slide 6, in the deck's order. Stages: the photo essay.
  tour: {
    heading: 'Four stops on the site tour',
    intro: 'The route visitors walk on a site tour, in order, with the dates each stop was photographed going up.',
    stops: [
      {
        id: 'power-block',
        name: 'Power Block',
        detail: '7 × GE Vernova 7HA.02 natural gas turbines',
        body: 'The turbines burn natural gas to turn generators. Heat recovery steam generators (HRSGs) capture the heat in their exhaust and use it to make steam, which turns more generators.',
        stages: [
          { caption: 'Power Block aerial, looking north', date: 'April 2026' },
          { caption: 'Unit 5 HRSG', date: 'July 2026' },
        ],
        provenance: explainer,
        media: photo('Power Block aerial looking north (IUP deck photo essay)', 'The Power Block from above, looking north'),
      },
      {
        id: 'gis',
        name: 'Gas insulated switchgear',
        short: 'GIS',
        detail: 'Building and foundations',
        body: 'Switchgear connects the plant to the power grid and protects it, switching and isolating high-voltage circuits. Gas insulated switchgear is sealed in an insulating gas, so it needs far less room than open-air equipment.',
        stages: [
          { caption: 'Concrete base of the GIS slab', date: 'February to March 2026' },
          { caption: 'GIS building and foundations', date: 'April 2026' },
          { caption: 'GIS working at height', date: 'July 2026' },
        ],
        provenance: explainer,
        media: photo('GIS building and foundations (IUP deck photo essay)', 'The gas insulated switchgear building under construction'),
      },
      {
        id: 'compressor',
        name: 'Gas compressor station',
        detail: 'Fuel supply',
        body: 'Natural gas arrives by pipeline. The compressor station raises its pressure to the level the turbines need.',
        stages: [],
        provenance: explainer,
        media: photo('Gas compressor station: no frame in the deck yet', 'The gas compressor station'),
      },
      {
        id: 'water',
        name: 'Water treatment facility',
        detail: 'Water treatment area',
        body: 'Water is treated here before it is used on site.',
        stages: [{ caption: 'Water treatment area', date: 'April 2026' }],
        provenance: water,
        media: photo('Water treatment area (IUP deck photo essay)', 'The water treatment area under construction'),
      },
    ] satisfies TourStop[],
  },

  // Photo essay, iup-deck slides 7–81, in the deck's order and with its
  // dates. Captions in sentence case; "Powerblock" as two words (§10 #13).
  essay: {
    heading: 'From the generating station to the campus',
    intro: 'The site at each stage, from the deck’s dated photo essay.',
    stages: [
      { id: 'station', caption: 'Homer City Generating Station', date: '1969 to 2023' },
      { id: 'inflection', caption: 'Inflection point', date: 'March 2025' },
      { id: 'towers-down', caption: 'After the stacks and towers came down', date: 'November 2025' },
      { id: 'north', caption: 'View from the north', date: 'February 2026' },
      { id: 'gis-slab', caption: 'Concrete base of the GIS slab', date: 'February to March 2026' },
      // Dated March in the essay; the timeline dates the milestone April (§10 #12).
      { id: 'first-steel', caption: 'First steel, going vertical', date: 'March 2026' },
      { id: 'aerial', caption: 'Power Block aerial, looking north', date: 'April 2026' },
      { id: 'gis', caption: 'GIS building and foundations', date: 'April 2026' },
      { id: 'water', caption: 'Water treatment area', date: 'April 2026' },
      { id: 'piperack', caption: 'Mod yard piperack fabrication', date: 'July 2026' },
      { id: 'gis-height', caption: 'GIS working at height', date: 'July 2026' },
      { id: 'hrsg', caption: 'Unit 5 HRSG', date: 'July 2026' },
    ].map((s) => ({ ...s, media: photo(`${s.caption} (IUP deck photo essay, ${s.date})`, s.caption) })) satisfies EssayStage[],
    provenance: deck,
  },

  next: {
    heading: 'Questions about what’s being built?',
    body: 'The common questions cover the project, the timeline and who to ask. Community members can write to the project team directly.',
    email: 'info@homercityredevelopment.com',
  },
};
