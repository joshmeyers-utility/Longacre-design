# Research: motion and interaction (visual pass)

Rewritten 6 November 2026. This pass observed live pages in headless Chromium
(Playwright): load frames at 0, 300, 700, 1200 and 2000 ms; six scroll steps
of 500px; nav hover and keyboard Tab focus; a 375px mobile menu tap (frames at
150, 400, 900 ms); a second run with `prefers-reduced-motion: reduce`; and
WebM recordings for three references. Contact sheets are
`screens/motion/<slug>-sheet-{load,scroll,hoverfocus,reduced,mnav}.jpg`,
the raw frames are `<slug>-<moment>-<n>.jpg`, and a probe of libraries,
running animations and video state is in `screens/motion/probe-summary.json`.

**Limits.** Frames are 300-700 ms apart, so easing is judged from where the
change lands between frames, and only as "feel". Durations quoted from
computed CSS are exact; durations read off frames are +/-150 ms. Headless
Chromium does not show real GPU smoothness. Scroll-triggered reveals may not
fire in a wheel-stepped capture. Anything not seen is marked **unverified**.
Orsted, Foster + Partners and Vestas were dropped: bot-wall (Orsted,
Foster) or a consent modal that hid the page (Vestas).

## Webflow ceiling (carried from the earlier pass, not re-verified)
Native: opacity, transform, stagger, scroll-in-view, scroll progress, hover,
click, page load, nav, tabs, slider, lightbox. Custom or GSAP embed: count-up
numbers, pinned scroll stories, canvas or video scrubbing, smooth scroll
(Lenis), custom cursors, page transitions. Flag all of those in
`docs/04-build-notes.md`.

## References (verified by observation)

### 1. Commonwealth Fusion Systems (cfs.energy)
URL: https://cfs.energy/
Frames: `screens/motion/cfs-sheet-load.jpg`, `cfs-sheet-scroll.jpg`,
`cfs-sheet-hoverfocus.jpg`, `cfs-sheet-mnav.jpg`, `cfs-sheet-reduced.jpg`;
video `screens/motion/video/cfs.webm`
- Look: warm grey ground (#BEBBB6 sampled at frame 1),
  monospaced small-caps nav inside a translucent glass bar, white grotesque
  hero headline over a macro photograph of machined steel; navy (#152536)
  panels; an orange cookie button.
- Load: frame 1 (0 ms) is a flat grey with the headline ghosted at low
  opacity; frame 2 (300 ms) has the photo at about 30%; frame 3 (700 ms) is
  fully resolved. One opacity cross-fade, roughly 600 ms, ease-out feel, no
  travel, no overshoot.
- Scroll: sections stack with large images beside text; no obvious reveal
  between 500px steps (reveals **unverified**, they may have fired too fast).
- Hover/focus: hovering "Technology" turns the item into a solid white box with
  navy text (computed colour #FFFFFF to #152536, background transparent to
  white) and opens a dark dropdown. **Tab focus gives the identical white
  box**, so hover and keyboard are one state.
- Mobile menu (tap at 375): the hamburger draws into a thin-outlined X and the
  navy panel opens; rows arrive staggered, "Careers" still faded at ~150 ms and
  all rows solid at ~400 ms. Each row is an outlined box with a down arrow.
- Reduced motion: the hero still fades in (frame 1 at 0 ms is the same ghosted
  grey), and running animations stayed 1 of 2, so it does not honour the
  preference (seen).
- Webflow: nav hover, dropdown, X morph and row stagger are native;
  hero fade is native (opacity on page load).
- Steal: the white-box hover that is also the focus state; the one-fade hero.
  Avoid: ignoring reduced motion.

### 2. Tideway (tideway.london)
URL: https://www.tideway.london/
Frames: `tideway-sheet-load.jpg`, `-scroll.jpg`, `-mnav.jpg`, `-reduced.jpg`;
video `video/tideway.webm`
- Look: white header with centred logo tab, chunky Cubano headings in teal and
  white, bold caps nav in slate (#5B6770). Full-bleed autoplaying video hero
  with a centred title and a "Play full video" button, a 44px circular
  pause/play control bottom-right.
- Load: 0 to 300 ms is a flat mid-grey placeholder with title and button
  already in place; the video appears between 300 and 700 ms with one fade;
  by 2000 ms the video has moved to a different shot (the loop is cutting
  already).
- Scroll: static, long white page, teal stat block and illustrations; no
  scroll motion seen. Stat block data and footnote are in the civic file.
- Mobile menu: hamburger becomes a dashed green X; a full-height charcoal
  panel (#3A3D44 sampled) with caps items and teal chevrons was **already fully
  open by 150 ms**, no visible transition and no stagger (frames 2-4 identical).
- Reduced motion: the hero video is **paused** (probe: autoplay video
  `paused: true`), showing a still; frame `tideway-reduced-load-3` is a poster
  frame. The pause control remains. Good.
- Webflow: video background has a native Webflow element with pause
  (autoplay off by "Runs On"); custom pause button is custom code.
- Steal: visible pause control and honouring reduced motion. Avoid: autoplay
  video as a default hero on rural mobile.

### 3. Mortenson (mortenson.com)
URL: https://www.mortenson.com/
Frames: `mortenson-sheet-load.jpg`, `-scroll.jpg`, `-mnav.jpg`, `-reduced.jpg`;
video `video/mortenson.webm`
- Look: deep navy (#001E45 sampled at frame 1) full-bleed hero with a huge white condensed
  caps headline "LET'S REDEFINE POSSIBLE", numbered 1-5 pager with a pause
  button; later a charcoal band with a split-colour headline (white then blue
  #007CC2, the nav-hover colour from computed styles).
- Load: frame 1 (0 ms) is a flat blue gradient with faint vertical stripes;
  the stadium photo is in by 300 ms. Fast, one fade.
- Scroll: stacked sections; image tiles overlap the text, a quarter-circle
  graphic drifts beside a timber-ribbed photo (frame 3). Parallax
  **unverified**.
- Mobile menu: rows with blue arrows, hairline dividers; the header bar
  **wipes from blue to green left to right between 400 and 900 ms** (frames 3-4).
  The panel itself is open by 150 ms.
- Reduced motion: running animations fell from **2 to 0**, and frames show the
  hero static. This is the only construction brand seen that visibly honours it.
- Webflow: pager and pause are native slider; colour wipe is native
  background interaction.
- Steal: pause control, header colour wipe, reduced path. Avoid: the 5-slide
  hero rotation.

### 4. Heatherwick Studio (heatherwick.com)
URL: https://www.heatherwick.com/
Frames: `heatherwick-sheet-load.jpg`, `-scroll.jpg`, `-mnav.jpg`, `-reduced.jpg`
- Look: warm off-white (#F6F2EF sampled) paper, high-contrast serif (Didone-like) for
  copy and the white wordmark, tiny tracked caps for "Menu" and "Search".
  Photos are cropped at odd sizes and offset in a staggered two-column layout.
- Load: a flat grey-green field for about 300 ms, then the photo **wipes down
  from the top** (frame 2 shows the top 25% revealed), full photo at 700 ms,
  then the wordmark fades from 15% to 100% between 1200 and 2000 ms. The
  slowest, most theatrical load seen (about 1.7 s) and it is still one move.
- Scroll: staggered tiles of differing size; whether images drift
  (parallax) is **unverified**.
- Mobile menu: a translucent cream overlay with a centred serif list, open by
  150 ms. Flaw seen: the wordmark behind the overlay stays legible through it,
  colliding with menu text ("About / News").
- Reduced motion: the wipe still plays (reduced frame 1 is the grey field,
  frame 3 the finished photo); the page does not change.
- Stack: GSAP and ScrollTrigger present (probe), plus AOS. **Custom/GSAP**.
- Steal: the calm single wipe; paper ground. Avoid: type on a see-through menu.

### 5. Kiewit (kiewit.com), the on-site contractor
URL: https://www.kiewit.com/
Frames: `kiewit-sheet-load.jpg`, `-scroll.jpg`, `-hoverfocus.jpg`, `-reduced.jpg`
- Look: near-black ground, yellow (#FFD300 sampled) logo tab and a yellow top
  rule, heavy squared grotesque, yellow underlines on eyebrows and pager. The
  hero is a dusk photo of a drag-line structure.
- Hero: carousel with three dot-lozenges (one yellow, two grey) and a circular
  pause control bottom-right. The image changes between 700 and 2000 ms in the
  frames (a cross-fade).
- Stat band (seen mid-animation, `kiewit-scroll-3.jpg`): the figures
  "$18.2B, 34,500, 4,000+, #4" are drawn as **hollow outlined glyphs at low
  opacity while counting up**, labels under each; on a navy band (#193246,
  sampled). Count-up with a stroke-to-fill treatment. It shows exactly what we
  should not do to a date-stamped number: the figure is wrong for about a
  second.
- Hover/focus: hovering a nav item turns the header bar white and opens a
  white mega-panel (title, short blurb, a photo card with an arrow). Tab focus
  gives a thin dark outline on the item **and** opens the same panel.
- Reduced motion: probe showed running animations rise from 0 to 5 (not
  gated). **Unverified visually.**
- Stack: no GSAP found by probe, likely a CMS framework; count-up is **custom**.
- Steal: the mega-panel that opens on focus. Avoid: count-up on any figure.

### 6. Fervo Energy (fervoenergy.com)
URL: https://fervoenergy.com/
Frames: `fervo-sheet-load.jpg`, `fervo-sheet-scroll.jpg`
- Look: indigo-violet tint (about #484968 sampled) over a wind-farm and rig aerial, light
  headline "Delivering 24/7 carbon-free **geothermal energy**." (light
  weight then bold), tiny tracked nav. Lavender-white content ground.
- Load: the hero is static through 2000 ms; at 2000 ms a navy header band
  with a small circular mark pops in at the top (frame 5). Otherwise nothing
  moves.
- Scroll: a video card with a big play button; a carousel with dots and
  prev/next arrows (Swiper 8.4.5 loaded, seen in probe); aerial photo tiles;
  an explainer "Understanding Enhanced Geothermal Systems" with two navy
  cards "Growth" and "Geography".
- Mobile menu: the tap selector failed, **unverified**. Hover and focus
  **unverified** (selector failed).
- Reduced: no animations to remove (0 and 0).
- Webflow: carousel is native slider but hits Swiper-type JS in WordPress;
  the layout is native. Steal: the restrained hero. Avoid: video cards that
  need a click to learn anything.

### 7. Sizewell C (sizewellc.com)
URL: https://www.sizewellc.com/
Frames: `sizewell-sheet-load.jpg`, `-scroll.jpg`; stat row `sizewell-scroll-2.jpg`
- Look: deep blue (#02588B), Montserrat, a rendered aerial of the planned
  plant with the white headline, a small arrow-up button bottom-right.
- Load: no change across 5 frames, static.
- Scroll: stat row of five arc-ringed figures; photo tiles of workers with
  rounded corners; each is a card with a title and a small button.
- Hover: nav text turns orange (#F1860D) with a 0.3 s **linear** transition
  (computed): linear feels mechanical next to the ease curves above.
- Reduced: running animations went from 0 to 8, so it does not honour it.
- Mobile menu: tap selector failed, **unverified**.
- Steal: nothing in motion; the infrastructure-rendering aerial hero is a
  layout reference only. Avoid: unlabelled rendering and 0.3 s linear.

### 8. BIG (big.dk), architecture
URL: https://big.dk/
Frames: `big-sheet-load.jpg`, `big-sheet-scroll.jpg`
- Look: pure black preloader with a tiny white "BIG" wordmark centred, for at
  least 2 s (all five load frames are the same black screen); then a white
  index page: a single narrow centred column of project images with tiny
  caption text, tiny nav at top-right.
- Scroll: six wheel steps moved the page 7692px against about 3000px on every
  other site, so a **smooth-scroll library with momentum (Lenis, seen in
  probe) multiplies the scroll**. Frames show projects flowing past fast.
- Reduced: unchanged, Lenis kept (probe).
- Stack: **custom** (Lenis).
- Steal: a plain image column. Avoid: preloader and smooth-scroll, both of
  which break keyboard, find-in-page and slow connections.

### 9. GOV.UK home (gov.uk)
URL: https://www.gov.uk/
Frames: `govuk-sheet-load.jpg`, `govuk-sheet-mnav.jpg`
- Look: blue (#1D70B8) header, black text, green cookie button.
- Motion: zero animations at load and reduced (probe 0 and 0). Mobile Menu tap:
  the whole page swaps to a plain link list with the "Menu" chevron flipped up,
  **open at 150 ms with no easing**. Yellow focus per earlier file.
- Steal: instant state change as a deliberate choice. It is the reduced-motion
  baseline our motion must degrade to.

### 10. The Pudding (pudding.cool)
URL: https://pudding.cool/
Frames: `pudding-sheet-scroll.jpg`
- Look: story index as a grid of saturated flat-colour tiles (orange, purple,
  turquoise, yellow, pink) with a small serif title under each, tiny nav
  icons at the top.
- Motion: none on the index (probe 0 animations). The scrollytelling
  stories themselves were **not captured**, so the earlier claims about
  pinned steps remain **unverified**.
- Weak for this brief; kept only as the index comparison.

## Weak or dropped
- **NuScale** (nuscalepower.com): viewed scroll frames; a conventional
  corporate energy page, static, dark promo band and "NYSE: SMR" bar. Nothing
  distinctive.
- **Hinkley Point C** (edfenergy.com): static grid of orange-red-link cards, no
  observed motion; the video promo is the only dynamic element.
- **Orsted, Foster + Partners, Vestas**: not usable (see Limits).
- **NYT Snow Fall, ECI** from the earlier file: not re-captured, remain
  unverified.

## Reduced-motion summary (what changed when it was on)

| Site | Result |
| --- | --- |
| Mortenson | animations 2 to 0; hero static (honours) |
| Tideway | autoplay video paused on a still (honours) |
| CFS, Heatherwick | hero fade or wipe still plays (does not honour) |
| Sizewell C, Kiewit | animation count rose or stayed (does not honour) |
| BIG | Lenis smooth-scroll retained (does not honour) |
| Fervo, GOV.UK, Pudding | nothing moves, nothing to change |

## Patterns (visual)

1. **One move on load.** A single fade or wipe, 600-1700 ms, no overshoot (CFS,
   Tideway, Heatherwick, Mortenson). Native.
2. **Hover and focus are the same state.** CFS white box, Kiewit white mega-panel;
   Tab opens what hover opens. Native.
3. **Mobile menu is instant to fast.** Open by 150 ms (Tideway, GOV.UK,
   Heatherwick), or a short row stagger (CFS) or a header colour wipe
   (Mortenson). Native.
4. **A pause control on anything that moves.** Tideway, Mortenson, Kiewit,
   USAspending ("Pause text animation"). Native for sliders, custom for video.
5. **Count-up and smooth-scroll are the two things that read as agencies and
   hurt trust.** Kiewit's stat count-up and BIG's Lenis. Custom.

## Gaps nobody owns
1. **A figure that arrives with its footnote.** Kiewit counts up the number
   alone; Sizewell C gives rings and no footnote; Tideway sets the footnote
   under the block. Nobody animates the row as one unit.
2. **Reduced motion as a designed state.** Only Mortenson and Tideway change
   anything; the rest ignore it. A brand that shows the reduced state as the
   default look would own it.
3. **Dated image sequence for progress.** None of the infrastructure sites
   (Tideway, Sizewell C, Hinkley) shows build progress as a dated, calm frame
   sequence. They use video.
