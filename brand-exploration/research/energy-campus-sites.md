# Research: energy-campus-sites

Angle: community-facing sites for large energy, data center and infrastructure
builds. Researched 2026-11-06. Brief context: neighbours, tradespeople and
sceptics (docs/02-plan.md §1).

## Method and limits (read first)

- WebFetch returns page text summarised by a small model. **It does not report
  fonts, hex values or motion.** Type, colour and motion notes below are
  marked "not verified" unless the text stated them. Layout, imagery and voice
  are from the fetched text. A designer should open each URL before borrowing
  a visual idea.
- Not fetched or failed: communityoffshorewind.com (host blocked by session
  network policy, would need allowing); Georgia Power Vogtle page and Vineyard
  Wind community page (404); Entergy data-center site (404, seen only in a
  search snippet as LRDataCentersFacts.com, so not included).
- No instruction-like text aimed at an AI was found in any fetched page.
- Mobbin not used.
- Figures quoted from these sites are theirs, for context only. None is
  publishable here (root CLAUDE.md §5).

## References

### 1. Microsoft "Datacenter Community Pledge" hub (local.microsoft.com)
URL: https://local.microsoft.com/
- Layout: utility bar, main nav, hero, then a card grid by topic (energy,
  water, jobs, FAQ, Datacenter Academy, videos, employee spotlights, survey).
  Title: "Learn more about the datacenter topics that matter most to you".
- Type/colour/motion: not verified. A banner file name hints at a green-blue
  gradient (inference only).
- Imagery: server racks, solar and wind at sunset, employees. Generic.
- Voice: plain, second person, concedes concerns up front ("We know
  communities have questions"). Makes commitments (cover its own electricity
  costs, replenish more water than it uses).
- Why it matters: topic-first navigation organised by what neighbours worry
  about is the right skeleton. But commitments are stated with no sources on
  the hub page, and noise is absent. That is the sceptic's gap.
- Webflow: easy. Card grid plus CMS topic collection.

### 2. Microsoft East Point, GA project update (blog entry)
URL: https://local.microsoft.com/blog/east-point-georgia-datacenter-project-update/
- Layout: reverse-chronological dated entries. Each: bold date, purpose,
  recap of meetings and feedback, bulleted next steps, named contact.
- Voice: "we" to "you", explains technical terms, "We're listening and
  working to address your feedback."
- Specifics a neighbour can use: signal at the main entrance, traffic marshal,
  second construction entrance, permitted work hours, rock-excavation limits,
  noise fact sheet, water truck for dust, street sweeper.
- Why it matters: best model found for the construction-update format.
  Concrete mitigation, a named person with phone and email. Gives no jobs
  figures.
- Webflow: easy. CMS "Update" collection with date, body, contact reference.

### 3. Google Allen County data center resource site
URL: https://www.allencountydatacenter.com
- Layout: single scrolling page. Nav: Jobs, Investment, News, FAQ, Contact.
  Sections: investment, energy, community, economic impact, FAQ, updates,
  news, quotes. Stat callouts break up the text. Dated status line
  ("Ongoing" construction status) above a newest-first news list that mostly
  links to local press.
- FAQ has ten questions (jobs, regulation, infrastructure costs, traffic,
  water and energy, who pays for electricity, noise, schools).
- Voice: warm, promotional. Supporter quotes include officials and a union
  leader. Direct email for residents.
- Type/colour/imagery: not verified. Imagery reads as local (a highway, the
  town square) rather than generic.
- Why it matters: closest structural match to the plan (jobs, FAQ, updates,
  contact on one scroll). Linking out to independent local press is a
  trust move worth copying. Answers were not visible in the fetch, so check
  how deep they go.
- Webflow: easy.

### 4. Delta Forge 1 Data Center, Rapides Parish (RapidesDataCenter.com)
URL: https://www.rapidesdatacenter.com
- Layout: title block, action buttons (FAQs, Resources, Apply Now), vendor,
  construction and employment logo links, "Community Insights" testimonial
  cards, "Upcoming Informational Events".
- Type: all-caps labels and buttons (the opposite of this repo's sentence-case
  rule).
- Imagery: logos and an event thumbnail; no facility photography seen.
- Voice: promotional ("state-of-the-art", "our region"). Testimonials say
  "high-paying" and "living-wage" with no numbers.
- Why it matters: a cautionary example. Three audience doors (jobs, vendors,
  FAQ) are good and match our contact routing. Adjectives instead of figures
  is exactly what the brief rules out.
- Webflow: easy.

### 5. AEP Transmission project pages (example: Carbondale-Kincaid, WV)
URL: http://www.aeptransmission.com/westvirginia/Carbondale-Kincaid/
- Layout: single column. Intro, dated updates, releases, map and timeline,
  structure heights and right-of-way widths, then an overview map plus 15
  numbered detail maps, a contact card and a comment form.
- Neighbour tooling: find your area on the overview, open the matching
  detail map. Named outreach specialist, phone line, email, update
  subscription, comment form.
- Voice: formal, third person, passive ("crews plan to").
- Imagery: sparse; one structure photo, PDFs for maps.
- Why it matters: shows the "is it on my property?" job done thoroughly, and
  also how credibility erodes. Update log entries contradict each other on
  dates, and a feedback deadline from 2020 is still displayed. Stale dates
  are the failure root CLAUDE.md §5.3 guards against.
- Webflow: maps as PDFs are easy. An interactive parcel-level map is not
  native (embed, flag in build notes).

### 6. Gateway Program (Hudson Tunnel Project)
URL: https://www.gatewayprogram.org
- Layout: stacked single column. Headline ("Delivering the Most Urgent
  Infrastructure Project in America"), job and economic stats block,
  per-package project cards with photo, purpose, jobs and location, an
  interactive site-camera viewer (drag, zoom, older photos), quick links,
  separate contact emails for each side of the river.
- Voice: formal, confident, national-scale. Neighbour handling is thin: a
  link to a Community Engagement page and contact emails.
- Why it matters: per-package jobs figures and a live site camera with an
  archive are strong "show, don't tell" progress devices. Fits the dated
  photo essay in iup-deck.md. Camera feeds need explicit dates and a
  non-motion fallback.
- Webflow: cards easy. A pannable camera viewer is a third-party embed.

### 7. Purple Line, Maryland
URL: https://www.purplelinemd.com
- Layout: nav grouped by About, Construction, Business Engagement,
  Resources, Get In Touch. Feature cards (testing, gallery, newsletter,
  video, small-business spotlights), a "92%" construction progress figure,
  quick-link tiles, funder logos.
- Neighbour tooling: Updates & Detours page with interactive map, Testing &
  Safety page, Noise Waivers page, public meetings.
- Local-benefit handling: Business Spotlight, DBE information, small
  business grants.
- Why it matters: the best local-business story found. It puts named
  neighbouring businesses on the project's own site. Relevant to Homer City's
  vendors and partners audience. A single progress percentage is a
  simple, dateable device, but only if it is dated and sourced.
- Webflow: easy except the interactive map (embed).

### 8. Intel Ohio ("Silicon Heartland") page
URL: https://www.intel.com/content/www/us/en/corporate-responsibility/intel-in-ohio.html
- Layout: headline, careers block, four focus cards (Economic Impact,
  Education and Workforce, Sustainability, Community Needs), "by the
  numbers", icon resource grid.
- Voice: upbeat, mission-driven ("We are excited to be building the Silicon
  Heartland in Ohio").
- Gaps (what to avoid): no dated progress, no FAQ, no comment process. Water
  appears only as an aim to conserve, with no local data. Job figures given as
  "tens of thousands" of indirect jobs.
- Why it matters: a clear example of the generic corporate register this
  brief rejects. A useful contrast case.
- Webflow: easy.

### 9. Meta "Debunking the Biggest Data Center Myths"
URL: https://about.fb.com/news/2026/10/debunking-the-biggest-data-center-myths/
- Structure: "Myth #N: claim" heading, short rebuttal. Three myths: water,
  energy bills, jobs.
- Voice: first person, conciliatory, hedged ("can't speak for all data
  centers"). Written by an outside content creator after site visits.
- Weakness: no independent sources. The evidence is the author's visits, the
  company's own pages, and an unsourced golf-course water comparison. Noise is
  not addressed. Corporate rebuttals of this kind are what sceptics discount.
- Why it matters: the claim-then-answer format is right for
  "correct misperceptions", but only works if each answer carries a source,
  date and document. That is the Test 3 in docs/02-plan.md.
- Webflow: easy. FAQ CMS collection with a source field.

## Patterns (3-5)

1. **Topic doors named for neighbour worries** (water, power bills, noise,
   traffic, jobs, schools). Microsoft, Google, Intel all do it, usually as
   a card grid. Easy to build; the differentiator is what is behind the card.
2. **A named human with phone and email closes updates.** Microsoft East Point,
   AEP, Gateway. Fits the four-inbox routing in CLAUDE.md §6.
3. **Dated, reverse-chronological update log with concrete mitigation**
   (work hours, entrances, dust control). Only the East Point pages do it with
   real specifics.
4. **Progress shown as a number or camera** (Purple Line 92%, Gateway site
   camera). Strong, and exposed to staleness unless date-stamped.
5. **Three audience doors, one page** (jobs, vendors, FAQ). Rapides, Google,
   Purple Line.

## Gaps nobody owns (2-3)

1. **Sources next to claims.** Across everything fetched, commitments and
   rebuttals (water replenishment, "golf course" comparisons, "high-paying")
   have no inline source, document or date. A site where every claim carries a
   source, date and downloadable document would be unique in this set.
2. **Named workforce, not job counts.** Sites give totals ("7,000 jobs",
   "tens of thousands") or supporter adjectives. None shows trades, union
   locals, local-residence share or apprentices as a ledger. The brief's
   workforce focus is open ground.
3. **Dated honesty about what is not yet decided or confirmed.** Stale
   pages (AEP) and conflicting dates erode trust. No site found flags
   "as of" per figure, labels projections, or shows open questions and
   pending appeals openly. Relevant to the permit appeal and water answers.

## Note on visual direction

This category skews generic: gradient hero, stock server racks, promotional
voice, all-caps buttons (Rapides). Visual distinctiveness here comes from
place-specific photography and plain civic typography, not from borrowing
these sites' styling. Reference sites in adjacent angles (civic information,
architecture) are likely better sources for type and colour.
