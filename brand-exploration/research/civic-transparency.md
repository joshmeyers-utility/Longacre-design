# Research: civic-transparency angle

Who it is for: neighbours, tradespeople, sceptics (docs/02-plan.md §1). The
sceptic test is "source, date, and a document to download."

Method note. WebFetch returns text only, so type and colour were NOT visible
in most fetches. Where a type/colour line below is marked (known) it comes
from general knowledge of the system, not from this session's fetch, and
should be checked against a live screenshot. Sound Transit, Canada.ca and an
EPA page failed (DNS / 404); USAspending returned only a title. No
instructions embedded in fetched pages were seen.

## References

### 1. GOV.UK Design System
https://design-system.service.gov.uk/
- Fetched: dates as "15 October 2026" (day, full month, year); month-year when
  vague. Short, direct, "you" voice; verbs on links. Content under Open
  Government Licence with a stated copyright line. Plain stacked sections
  separated by horizontal rules.
- (known) GDS Transport/now GOV.UK Sans, black on white, thick yellow focus
  ring, blue links, no decoration.
- Why: the model for "boring on purpose". Every claim is a link to a source.
  The yellow focus state is a trust signal in itself.
- Webflow: Easy. Focus ring and rule-based layout are native.

### 2. GOV.UK publications and "See all updates"
https://www.gov.uk/government/organisations/hm-treasury
- Fetched: every list row shows date plus document type on its own line
  ("4 November 2026 / Corporate report"). Notes formats ("print, web and HTML
  accessible versions"). It did not show file size in the list.
- (known) Document pages carry "Published" and "Last updated" with a
  collapsible change history of dated change notes; attachments show format
  and size.
- Why: date + type + format is the whole download mechanic. The change history
  is the correction mechanic.
- Webflow: Medium. CMS fields cover date/type; the per-item change log needs a
  multi-reference or rich-text "Updates" field.

### 3. USWDS "official website" banner
https://designsystem.digital.gov/components/banner/
- Fetched: a thin top strip, flag icon, one line, accordion "Here's how you
  know" that teaches the reader how to verify (.gov domain, lock/https). Must
  appear unaltered across sites so the signal is learnt. Background and link
  colour are tokens; text colour auto-adjusts for contrast.
- Why: it explains how to verify the site itself. A CMS-driven strip could say
  "Official source: Homer City Energy Campus; figures as of {month year}" with
  an expand for how we source.
- Webflow: Easy. Native accordion/interaction; dismissal memory needs a small
  embed (already required by root CLAUDE.md §8 for the alert banner).

### 4. Our World in Data (grapher pages)
https://ourworldindata.org/grapher/life-expectancy
- Fetched: chart attribution line names every source and "with major
  processing by Our World in Data". Collapsible "Data sources" with retrieval
  date, URL and original citation "prior to any processing". "Last updated"
  and "Next expected update" as a metadata pair. "How to cite this page/data".
  ZIP download (CSV, JSON metadata, README), CC BY 4.0 stated. Archived-snapshot
  link.
- (known) Serif headlines, restrained navy/vermilion palette.
- Why: the richest source/date mechanics found. "Next expected update" is the
  rare honest promise; processing disclosure is exactly what a sceptic wants.
- Webflow: Medium. Details/summary blocks are native; the metadata pair maps to
  CMS fields. Interactive charts are out of scope, use static figures.

### 5. ProPublica corrections page
https://www.propublica.org/corrections
- Fetched: reverse-chronological list; each entry links the story, then a
  bold correction label with date, then a plain third-person description using
  "originally" ("the story originally said X; it is Y"). Email for reporting
  errors. Also states "transparent financial reporting" on the About page and
  offers republishing ("Steal Our Stories").
- (known) Strong serif/sans editorial pairing.
- Why: a public errata log is the most credible tone available. Admitting
  small errors makes big claims believable.
- Webflow: Easy. A CMS collection sorted by date.

### 6. Texas Tribune "About / ethics / funding"
https://www.texastribune.org/about/
- Fetched: donors listed by year and amount; gifts of $1,000+ disclosed on any
  story mentioning the donor; "Editorial decisions are made by journalists
  alone"; running corrections list; sponsored content labelled "paid content"
  and visually separated.
- Why: transparency about who pays, on the page where it matters. The campus
  site's equivalent is disclosing who funds and operates it next to the claims.
- Webflow: Easy. Labelling is a component variant.

### 7. Census.gov page template
https://www.census.gov/programs-surveys/acs/about.html
- Fetched: federal banner; breadcrumb; left sub-nav; big H1; cards for related
  info; "Page Last Revised - February 19, 2026" at the foot of the main content
  above a "Is this page helpful?" widget; closing line "Thank you for your
  time and effort."
- Why: last-revised at the foot is the common (and weak) placement; the
  feedback widget is the cheap correction channel. Note it gives no inline
  source citations, a gap to beat.
- Webflow: Easy. Yes/no helpful widget needs a form or embed.

### 8. Hudson Tunnel Project (capital-project site)
https://www.gatewayprogram.org/ (resolved to the Hudson Tunnel Project page)
- Fetched: big bold figures with a one-line description ("95,000 jobs,
  $19.6 billion in economic activity, $87 million in monthly purchases");
  "seven of ten packages in progress or completed" with no percentage; live
  site cameras with draggable photos and older-image arrows; opening 2035,
  rehabilitation 2038; Noise Abatement Program page; separate contact emails
  for construction questions by side of the river; board meeting minutes and
  Inspector General linked.
- Weaknesses seen: no budget or cost figure; no interim milestone dates; stats
  carry no source or as-of date; no downloadable reports on the page.
- Why: the nearest comparable. Jobs figures and site cameras are what the
  brief wants, and its misses (undated stats) are what to avoid.
- Webflow: Medium. Camera galleries need an embed or image slider.

### 9. The Pudding "About"
https://pudding.cool/about/
- Fetched: small collective; "visual essays"; stated aim to "inform and
  entertain"; avoids hooks and clickbait; direct, values-led voice. The page
  names no datasets or methods, a gap.
- (known) Each story ends with a methodology/data note and source links;
  bold, playful scroll visuals.
- Why: scrollytelling shows how to make numbers legible; the end-of-story
  "how we did this" note is portable. Tone is too playful for this brief.
- Webflow: Hard for the scroll visuals (GSAP embed per CLAUDE.md §8); the
  methods note itself is Easy.

## Patterns

1. Date plus type on every row. "28 October 2026, Policy paper" (GOV.UK),
   dated correction labels (ProPublica). Maps to CMS fields; no caption string.
2. Two dates, not one: "Last updated" and "Next expected update" (OWID). The
   second is a promise; it deters stale numbers.
3. A source block that records processing, not just origin: retrieval date,
   URL, original citation, "what we changed" (OWID). Applies to every stat.
4. A public errata log in the third person, "originally said / actually"
   (ProPublica, Texas Tribune). Doubles as a news-style CMS collection.
5. Disclose who funds and operates it in the same place as the claim (Texas
   Tribune donor rule), and teach verification on the page itself (USWDS banner).
6. Downloads state format (and, at best, size) next to a title and date.

## Gaps nobody owns

1. A stats ledger with row-level provenance. Hudson Tunnel's big figures carry
   no source or as-of date; OWID has provenance but only on charts. Nobody
   puts a figure, its date, its footnote and its source document in one row.
2. Long answers for a hostile question. The sites above publish errata and
   policy, but none shows a contested topic (permit appeal, water) with the
   claim, the evidence, the document, the date and an open "what we don't know
   yet". Sceptic-grade FAQ is unowned.
3. A project tracker that is plain and local. Capital-project sites lean
   corporate (cameras, job counts); civic sites lean bureaucratic. Neither
   speaks to a neighbour about noise, traffic and a named contact for their
   side of the site, with a dated update log.
