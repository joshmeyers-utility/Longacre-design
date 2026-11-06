# Research: motion and interaction

Angle: motion on energy, infrastructure, construction and civic/data-journalism
sites, labelled by what Webflow can do natively. Audience per
`docs/02-plan.md` §1: neighbours, tradespeople, sceptics, often on rural mobile.

## Method and honesty note

WebFetch returns static page text only, so **no reference below had its motion
observed live**. "Confirmed" means confirmed from fetched markup or search
results; "Unverified" means it rests on general knowledge of the site and needs
a manual look in a browser (DevTools, Performance and Network panels, with
`prefers-reduced-motion` toggled) before the designer leans on it. Webflow's
help centre returned 403, and its blog returned a header parse error, so the
Webflow section relies on search snippets plus one fetched Webflow lesson page.
Nothing here should go into a direction as a claim about a competitor until
checked.

## Current state of Webflow Interactions (what is native)

Confirmed from search results and Webflow's own pages:

- Webflow announced GSAP is free, including the former paid Club plugins, and
  that SplitText was upgraded (webflow.com/blog/gsap-becomes-free).
- Webflow now has a GSAP-powered Interactions engine. Third-party tutorials
  (Feb-Mar 2026) describe ScrollTrigger-style scroll behaviour, SplitText and
  stagger exposed in the Designer, and say the new engine replaces "Classic
  Interactions" on new sites. **The replacement timing is unverified** (no
  official source retrieved). Classic Interactions still has a help-centre
  section.
- Trigger model (help centre snippet): Element triggers include "While
  scrolling in view (continuous)"; Page triggers include Page load, Page
  scrolled, Mouse move in viewport and While page is scrolling.
- Per-interaction settings (Webflow "Made in Webflow" lesson): **Repeat**
  (interaction or action level), **Runs On** (where it runs, tied to
  performance), **Conditional Playback** (the lesson ties this to
  `prefers-reduced-motion`). So a reduced-motion path is a native setting, not
  an embed. Exact options need checking in the Designer.
- Known pitfall (low-confidence third-party note): scroll-linked interactions
  play in reverse on scroll-up. Plan for that.

Rule of thumb for this repo: opacity, transform, stagger, scroll-in-view
reveals, scroll-scrubbed progress, hover, click, page load and text-split
reveals are **native**. Number count-ups, pinned multi-step scroll stories,
canvas/video frame scrubbing, FLIP/shared-element page transitions, custom
cursors and smooth-scroll (Lenis) are **custom code** and must be flagged in
`docs/04-build-notes.md` per root CLAUDE.md §8.

## References

| # | Name / URL | What is distinctive | Why it matters here | Label |
| --- | --- | --- | --- | --- |
| 1 | **Webflow GSAP Interaction settings lesson** https://webflow.com/made-in-webflow/website/gsap-interaction-settings | Repeat, Runs On, Conditional Playback (reduced motion). Confirmed. | Defines our ceiling and gives a native reduced-motion switch. The hover/tap and reveal specs in `03` §6 map onto it. | Native (Interactions) |
| 2 | **Fervo Energy** https://fervoenergy.com | Confirmed: skip-to-content link, nested nav submenus, a 5-slide newsroom carousel, video embed under a plain hero. WordPress, not Webflow. Motion unverified. | Closest "serious energy operator" register: plain headline, little decoration. Shows restraint is credible. Carousel is the thing to avoid (see gap 2). | Carousel: needs custom code or Webflow slider (native component, not Interactions) |
| 3 | **Commonwealth Fusion Systems** https://cfs.energy | Confirmed: long stacked sections, three-line values stack, labelled submenu toggles (screen-reader attention). Prismic CMS. No stats or timeline in the capture. Motion unverified. | Counter-example: a high-profile energy brand with no number reveals at all. Our ledger can be the differentiator. | n/a (static); layout is native |
| 4 | **Orsted** https://orsted.com | Confirmed: mega-menu with descriptions, drill-down mobile menu ("Back" labels), autocomplete search with arrow-key support, skip navigation. Figures appear as plain text. | Best nav-open reference for a content-heavy utility site. Drill-down mobile menu is the pattern a rural phone user needs. | Nav open and drill-down: native (click interactions, Webflow nav). Autocomplete search: custom code |
| 5 | **The Pudding** https://pudding.cool | Confirmed: story index with tabs, load-more, skip link. Its scroll-driven essays are known from general knowledge only. | Data-journalism benchmark for pinned-visual/text-steps stories. Rarely needs motion to carry meaning. | Pinned steps / step-triggered charts: needs GSAP or custom code (ScrollTrigger pin); simple scroll-scrubbed progress is native |
| 6 | **NYT "Snow Fall" (2012)** https://www.nytimes.com/projects/2012/snow-fall/ | Confirmed by search as the origin of mainstream scrollytelling. Full-bleed media, parallax, text over moving background. Unverified detail. | Cautionary: parallax and autoplay media are exactly what to leave out. Useful as the thing we do the opposite of. | Parallax scrub: native; autoplay background video: native element, heavy on data |
| 7 | **ECI scrollytelling (Gladeye), Awwwards** https://www.awwwards.com/inspiration/scrollytelling-eci | Search tags: scrollytelling, flyover, video, 3D. Page does not say what ECI is; relevance to infrastructure is unconfirmed. | Shows the "aerial flyover scrubbed by scroll" idea, which is the temptation for a 3,200-acre site. Cost to rural mobile is high. | Custom code (video/3D frame scrub, GSAP + canvas). Flag as a deliberate exception only |
| 8 | **GOV.UK / USWDS civic patterns** https://design-system.service.gov.uk and https://designsystem.digital.gov | Known from general knowledge, not fetched: near-zero decorative motion, focus states and disclosure (accordion) patterns first. Unverified here. | Sets the trust baseline for the sceptic: information components behave identically on every device. Source for accordion/disclosure semantics. | Accordion/disclosure: native (click interaction + height auto) |
| 9 | **Webflow native Slider/Tabs/Lightbox** https://webflow.com/feature/interactions-animations | Page failed to fetch (parse error); listed as existing components from general knowledge. Unverified. | Photo essay (1969-2023 to July 2026) and union/partner rollovers can use native tabs and click states, which keeps a keyboard path. | Native components, not GSAP |

Only nine references: the fetch tooling could not show live motion, and padding
the list with sites described from memory would invite invented claims.
Recommended follow-up: a person with a browser verifies 2-5 and 7, and adds
two sites from the infrastructure/architecture side (not reached here).

## Patterns (3-5)

1. **Restraint is the credible register.** Where motion could be observed in
   markup, serious energy and civic sites ship plain heroes, skip links and
   labelled menus (Fervo, CFS, Orsted, GOV.UK). Spectacle belongs to
   scrollytelling pieces (Snow Fall, ECI), not operators. The `03` §6 specs
   (16px travel, 60ms stagger, no overshoot) sit correctly in this pattern.
   *Native.*
2. **Nav is where motion earns its keep.** Mega-menu on desktop, drill-down
   panel on mobile (Orsted). Open/close with `duration/slow` and `ease/transition`.
   *Native; search autocomplete is custom.*
3. **Reveal once, never replay.** Scroll-in-view reveals set to run a single
   time avoid the reverse-on-scroll-up pitfall and cost less. Use Repeat and
   Runs On to cap it. *Native.*
4. **A reduced-motion path as a first-class state.** Webflow's Conditional
   Playback is the native hook. Mirror `03` §6: movement to none, fades stay
   120ms. Define the end state (figures already visible) so content never
   depends on the animation. *Native; verify exact option names in the Designer.*
5. **Content in document order, motion layered on top.** Pinned scroll stories
   (Pudding style) need a stacked fallback for reduced-motion, keyboard and
   fast scrollers. For this site a stat ledger with a one-time stagger gives
   most of the effect without a pin. *Pin is GSAP/custom; stagger is native.*

## Gaps nobody owns (2-3)

1. **Stat reveal that respects a footnote.** No reference was found that
   animates a figure and its required qualifier together. Count-up animations
   also fight the rule that a figure is exact (`~1,300` is not `1.3K`) and
   date-stamped. A direction could own "the figure never animates, only its
   row arrives" and make that a brand trait.
2. **Rollover with a built-in non-hover path.** The union/partner/commitment
   rollovers have no good public example that treats tap, keyboard focus and
   hover as one designed gesture. Carousels (Fervo) are the common substitute
   and are weaker for accessibility.
3. **Construction progress as time, not spectacle.** The 1969-2023 to July 2026
   photo essay is a before/after problem, but no energy or construction site
   found uses a dated, caption-honest scrub (with `Kind = Photograph |
   Rendering`). Whichever direction builds a calm, date-led image sequence
   owns it. Likely tabs or click-through (native) rather than video scrubbing.

## Performance note for rural mobile

Prefer transform/opacity only; avoid autoplay hero video and canvas/3D scrubs
(ECI-style) as defaults; keep GSAP-bundled interactions few, because Webflow
loads the engine whenever any GSAP interaction exists. Use Runs On to disable
heavy interactions on mobile. Any GSAP embed is a maintenance cost and must be
called out in `docs/04-build-notes.md`.
