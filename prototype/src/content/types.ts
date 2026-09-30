/**
 * Content model for the prototype. Shapes mirror the Webflow CMS collections in
 * docs/02-plan.md §6, so porting is a field-for-field copy.
 *
 * Every piece of copy records where it came from. CLAUDE.md §5: if a figure is
 * not in docs/source/, it does not go on the page — so anything below
 * "canonical" renders with a visible provenance flag until someone resolves it.
 */

export type SourceId =
  | 'fact-sheet' // docs/source/fact-sheet.md — May 2026, approved copy
  | 'iup-deck' // docs/source/iup-deck.md — July 2026, newest supplied source
  | 'press-release-2026-09-04' // docs/source/external-context.md — tier A
  | 'site-structure' // docs/source/site-structure.md — the IA brief
  | 'direction-board'; // Figma file K7Mb6… — design placeholder, not a source

export type Provenance =
  | { tier: 'canonical'; source: SourceId }
  /** Client-published but not in the supplied PDFs. Confirm before launch. */
  | { tier: 'confirm'; source: SourceId; note: string }
  /** No source at all. Must not ship as written. */
  | { tier: 'unsourced'; source: SourceId; note: string };

export type FootnoteId = 1 | 2;

/** CLAUDE.md §5.3: anything that moves is date-stamped, as its own field. */
export interface AsOf {
  month: string;
  year: number;
}

export interface Stat {
  id: string;
  /** Load-bearing source words: "Up to", "Projected", "Anticipated". */
  qualifier?: string;
  figure: string;
  /** Unit set smaller beside the figure. Never abbreviated (§5.1). */
  unit?: string;
  label: string;
  /** Required whenever the figure is 10,000+ or ~1,000 (§5.2). */
  footnote?: FootnoteId;
  asOf?: AsOf;
  provenance: Provenance;
}

export type MediaKind = 'Photograph' | 'Rendering';

/** An image file. Explicit dimensions stop layout shift (CLAUDE.md §9). */
export interface Photo {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  /** object-position, so a crop keeps the subject in frame. */
  focus?: string;
}

/**
 * An image slot. `brief` is a production note and renders *inside* the image
 * area, where a real photograph will cover it. `caption` and `date` are
 * published copy and render outside it. They never share a field (§7).
 */
export interface Media {
  kind: MediaKind;
  brief: string;
  alt: string;
  caption?: string;
  date?: string;
  /** The real photograph. Until it exists, the placeholder stands in. */
  photo?: Photo;
}

export interface Pillar {
  id: string;
  name: 'Safety' | 'Infrastructure' | 'Community' | 'Energy Future';
  copy: string;
  href: string;
  linkLabel: string;
  media: Media;
}

export interface Milestone {
  id: string;
  month: string;
  year: number | 'Upcoming';
  title: string;
  provenance: Provenance;
}

export interface FaqItem {
  id: string;
  question: string;
  /** Omitted when no source answers it — the flag stands in its place. */
  answer?: string;
  /** Required when the answer quotes 10,000+ or ~1,000 (CLAUDE.md §5.2). */
  footnote?: FootnoteId;
  provenance: Provenance;
}

export type AlertSeverity = 'info' | 'construction' | 'urgent';

export interface Alert {
  /** Changing the id re-shows an alert a visitor already dismissed. */
  id: string;
  severity: AlertSeverity;
  message: string;
  provenance: Provenance;
}

export interface Announcement {
  id: string;
  kind: 'News' | 'Milestone';
  date: string;
  headline: string;
  href: string;
  media: Media;
  provenance: Provenance;
}

export interface Facility {
  id: string;
  name: string;
  detail: string;
  /** A dated stage from the IUP deck photo essay. */
  stamp?: string;
}

export interface ContactRoute {
  audience: string;
  email: string;
}
