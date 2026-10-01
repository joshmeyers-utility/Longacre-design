# Page checklist

Every page on the site, what is built, and what each one still waits on.
Tick a box when it lands; keep this file current with the prototype.

**Key:** ✅ built and checked · 🟡 built, waiting on client content ·
⬜ not started. Numbers like §10 #14 point to the open questions in
`CLAUDE.md`.

Last updated: 1 October 2026 (QA pass below).

---

## Summary

| Page | File | Status |
| --- | --- | --- |
| Home | `index.html` | 🟡 |
| The campus | `campus.html` | 🟡 |
| Our history | `history.html` | 🟡 |
| Careers | `workforce.html` | 🟡 |
| Community | `community.html` | 🟡 |
| Campus partners | `partners.html` | 🟡 |
| Our commitments | `commitments.html` | 🟡 |
| Voices | `voices.html` | 🟡 |
| FAQs | `faq.html` | 🟡 |
| News | `news.html` | 🟡 |
| News item | `news-workforce-1800.html` | 🟡 |
| Contact | `contact.html` | 🟡 |
| Construction calendar (Phase 2) | | ⬜ |
| Testimonial video (Phase 2) | | ⬜ |

Every page is built and passes the same checks: no sideways scroll at 13
widths from 320 to 1920, a clean axe scan (WCAG 2.2 AA), keyboard and touch
paths through every hover, and no dashes in the copy. No page is ✅ yet
because each still waits on something only the client can supply.

---

## Site-wide

- [x] Header: T1 bar, 44px, centred, frosted over photos, docks on scroll
- [x] Mega menu: five headings, pages only, keyboard, touch and hover
- [x] Phone menu: staggered open, every page reachable
- [x] Footer: four inboxes, address, every page
- [x] Alert banner: dismissible, dismissal remembered
- [ ] Real alert copy (the current one is a placeholder from the comps)
- [ ] Logo vector and clear-space rules (§10 #1)
- [ ] Photo library at full resolution, with usage rights (§10 #4)
- [ ] Photo or rendering flag for every supplied image (§10 #10)
- [ ] Domain decision: does the site stay on homercityredevelopment.com (§10 #9)
- [ ] New tokens added to Figma: `radius/nav`, `size/80`,
      `motion/duration/slower`
- [ ] Hero contrast re-measured once the real hero photos are in

## Home

- [x] Hero with the two latest updates
- [x] By the numbers, with both required footnotes
- [x] Workforce figures, dated
- [x] Power Block, History, Timeline, Pillars, FAQ teaser
- [ ] Labelled site map (no labelled asset exists yet)
- [ ] Pillar colours, or keep them uncoloured (§10 #15)

## The campus

- [x] Hero, campus figures, four-stop site tour, photo essay, timeline
- [x] Every acronym expanded on first use (GIS, HRSG)
- [ ] Water stop: the client's own words on source and volume (§10 #14)
- [ ] Fuel supply: confirm "secured key permits and agreements for gas, EPC,
      and offtake operations", which the July deck drops
- [ ] Equipment descriptions confirmed by Homer City Generation or Kiewit
- [ ] Site flyover video (the tour deck's agenda lists one)
- [ ] Labelled site map

## Our history

- [x] Then and now pair, 12 dated stages, milestone timeline
- [x] First steel shows both dates (§10 #12)
- [ ] Full-resolution photographs for each stage (§10 #4)
- [ ] Client decision on March or April for first steel (§10 #12)

## Careers

- [x] Hero, workforce figures, growth chart, nine trade tiles
- [x] Apprentices, long-term figures with footnotes, how to apply
- [ ] The nine unions' names and local numbers (§10 #2)
- [ ] Trade descriptions confirmed by Kiewit or the unions
- [ ] Trade links pointed at each local, not the international
- [ ] Worker spotlights and video: named, photographed people (§5.6)
- [ ] Press release wording confirmed (tier A)

## Community

- [x] Hero, three route cards, 2025 community milestones
- [ ] Open house photograph

## Campus partners

- [x] Homer City Generation, Kiewit, GE Vernova as tiles with outbound links
- [ ] Independence and Kovalchick: descriptions, logos, links (§10 #3)
- [ ] Partner logos

## Our commitments

- [x] All six areas, each with the facts and figures on record
- [x] Economic impact and workforce figures with their footnotes
- [ ] Health: the client's commitment, with a number, date and source
- [ ] Environment and water: the client's commitment (§10 #14)
- [ ] Giving back: the client's programmes or donations

## Voices

- [x] Speaker filter and an honest empty state
- [ ] Quotes with name, role, organisation, photo and sign-off (§5.6)
- [ ] Video interviews (Phase 2)

## FAQs

- [x] 19 sourced answers in six categories, each naming its source
- [x] Search, category filter, a link for every question
- [ ] Ten questions with no source yet: water source and volume, emissions,
      monitoring, noise, traffic, construction hours, lighting, local taxes,
      other permits, a hotline
- [ ] Permit appeal answer: client and legal sign-off (§10 #5)
- [ ] A "last reviewed" date on each answer
- [ ] Downloads: fact sheets and information kits, cleared for the web
- [ ] Construction calendar (Phase 2)
- [ ] Letter templates (Phase 2)

## News

- [x] List page, newest first, type filter
- [x] One item page, with copy link and the press inbox
- [ ] The 4 September release text as issued (the page summarises its
      figures for now)
- [ ] The March 2026 release, and the archive from the current site
- [ ] Supportive coverage items, with headline, outlet and link
- [ ] RSS feed (Webflow collection RSS)

## Contact

- [x] Four inboxes with copy buttons, and the site address
- [ ] A response time, if the team can keep one
- [ ] A community liaison or hotline, if one exists
- [ ] Site access policy, then a map and gate photograph (§10 #11)

---

## QA pass, 1 October 2026

Automated sweep of all 12 pages at 375 and 1440px, plus interaction tests.

| Check | Result |
| --- | --- |
| axe (WCAG 2.2 AA + best practice) | 0 violations, every page, both widths |
| Console errors, failed requests | None |
| Broken page links, broken `#anchor` links | None |
| One `h1` per page, no skipped heading levels | Pass |
| Unnamed buttons or links | None |
| Images: width and height set; lazy below the fold | Pass |
| Sideways scroll, 13 widths from 320 to 1920 | None |
| Stat figures fit their columns, units on the figure's line | Pass, 12 widths |
| No dashes, no "coal", no 4.5 GW | Pass |
| 10,000+ and ~1,000 always with their footnote; 1,800+ always dated | Pass |
| Skip link, `main`, alert and footer on every page | Pass |
| Visible focus ring, first 40 tab stops on Home | Pass |
| Mega menu: hover, keyboard, Escape, touch, current page | Pass |
| Phone menu opens and closes on all 12 pages | Pass |
| Alert dismissal remembered across pages | Pass |
| FAQ search, filters, open rows, deep links | Pass (deep links fixed: a link to another question on the same page now opens it) |
| Contact copy buttons, News to item and back, essay arrows, trade tiles, growth table, Voices filter | Pass |
| Reduced motion collapses every duration | Pass |
| Same gutter (64 / 16px), section spacing and headline sizes across pages | Pass |

**Flagged, not changed (content decisions):**

- The photo essay's 12 stages appear on both The campus and Our history.
- The milestone timeline appears on Home, The campus and Our history.
- Every photograph is the same stand-in until the library arrives (§10 #4).

