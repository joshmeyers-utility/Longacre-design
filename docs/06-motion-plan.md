# 06 — Motion and layout plan: the T1 / Joby feel

Written 30 Sep 2026 from a browser inspection of
<https://t1energy.com/technology/> and <https://www.jobyaviation.com/experience>
at 1440, 1024 and 375px, nine scroll positions each, with every CSS rule
involving pinning, transitions and keyframes dumped and read. The user's
steer: **T1 for interactions, Joby for scroll.** Images on both sites are
served from `cdn.sanity.io`, which the session could not reach, so the
findings below are layout, type, timing and mechanics — not photography.

This is a plan, not a build. Nothing in `prototype/` changes until the
decisions in §6 are made.

---

## 1. What the two sites actually do

### T1 Energy — Technology

| Aspect | Finding |
| --- | --- |
| Stack | Nuxt. **No GSAP, no Lenis, no smooth-scroll library.** Everything is CSS transitions plus a Vue transition class set. |
| Easing | One custom curve everywhere: `linear(0, .164 3.5%, .311 7.2%, .441 11%, … 1)` — an expo-out. Durations 250ms (hover), 500ms (nav, hero), 666ms (image zoom). |
| Page | Single dark ground (`#0f0e12`), 7,847px tall at 1440 (≈ 8.7 screens). Content width 1368px, gutters 36px. |
| Hero | 1000px tall. Content block is `position: sticky; bottom: 0` so headline + CTA hold the bottom edge while the video scrolls behind. The hero background has `transform-origin: center bottom; will-change: transform, border-radius` — as you scroll away it **shrinks slightly and rounds its bottom corners**, so the next section reads as a card sliding over it. |
| Nav | Glass pill (`backdrop-filter: blur(5rem)`, 50% ink), top right. At rest the logo sits at the left of the page; once scrolled, **the logo docks into the pill** as its first item. |
| Media cards | Rounded (≈ 32px), images at `opacity: .8`; on hover the image scales `1.033` over 666ms and a centred glass pill CTA ("→" in a lighter circle) is the click target. |
| Two-up cards | One ink card, one cream card side by side — a light/dark pair on a dark page. Headline + pill chip ("620W & 720W") + one sentence. |
| Stats | Two columns: mono eyebrow with a small square bullet on the left; on the right a heading, then a stack of very large **Light-weight** figures (43px at 1440, 28px on phone) with a mono caption under each. The whole stats content sits at `opacity: 0` until scrolled into view. No count-up. |
| Accordion | Sticky media on the left, rows on the right; closed rows are grey, the open row is white; each row has a round white **+ / –** button. |
| Chip row | Full-width row of pill chips, each with a round arrow well on the right. |
| Buttons | Glass fill on dark, `radius 1.6rem`, and **`:active { transform: scale(.985) }`** — a press. |
| Mobile (375) | Everything stacks. No sticky at all. Headline 28px. The hero becomes an 812px block; the two-up cards stack; chip row wraps. |

### Joby — Experience

| Aspect | Finding |
| --- | --- |
| Stack | Next.js. **No GSAP either.** A scroll tracker writes progress numbers into CSS custom properties (`--translate-y-progress`, `--border-radius-progress`, `--intro-animation-progress`, `--inner-progress`, `--progress`) and every effect is a `calc()` off those. |
| Page | 38,742px tall at 1440 for seven sections — **~4 screens of scroll runway per section**. That runway is the "feel": nothing is on a timer, everything is on the scrollbar. |
| Type | Display 102px / line-height 1.0 / tracking −3%; body 22px. |
| Hero media | Video frame enters by translating up and **losing its corner radius** as `--border-radius-progress` runs 0→1; a title over it fades and lifts (`opacity: 1 − animate-in`). |
| Text slides | Beside the hero, three lines of copy with a **2px vertical rail** whose `scaleY` = `1/3 + 2/3 × progress`. Same mechanism as our timeline rail. |
| Scrolly text | Sticky header; lines of copy scale and reveal one at a time as the section's progress crosses each line. |
| Pinned slider | Image slider pinned in place, pagination dots, image mask scales with progress. |
| Partners | Sticky category list on the left; the **active category is ink, the rest sit at `opacity: .3`**; the right column changes with it. |
| Section entry | Full-bleed media with parallax: `translateY((1 − in) × −60vh) translateY(out × 30vh)`, image `scale(1 + out × .05)`, corners rounding on exit; a 1px vertical "features" rail with `scaleY(progress)`. |
| Links | Underline draws **out to the right then back in from the left** (`scaleX` with a swapped `transform-origin`, 0.6s power4). |
| Mobile (≤ 768) | Parallax is switched off (`transform: none`), sticky elements carry a `skipMobile` class, sections stack plainly. Motion is a desktop layer, not the structure. |

### What they have in common

1. **No animation library.** Both are CSS transforms + one scroll-progress number. That maps cleanly onto Webflow Interactions 2.0 ("while scrolling in view") and onto the `trackScrollProgress` → `--rail-progress` mechanism already in `prototype/src/motion.ts`.
2. **One easing, few durations.** T1's expo-out; Joby's power4. Nothing bounces.
3. **Pin, then reveal on the scrollbar.** Sticky containers with a tall runway; the runway *is* the pacing.
4. **Mobile drops the scroll choreography** and keeps only reveals and hovers-as-taps.
5. **Large, light figures, mono captions, rounded media, glass pills** — all of which our comps already have (Geist Light, `Eyebrow`, `radius/media-lg`, `bg/glass`).

---

## 2. What we take, what we leave

| Take | Why it fits |
| --- | --- |
| T1's easing and press | One curve, two durations, press on every pill. Tokens already exist (`motion/duration/*`); add `motion/ease/out`. |
| T1's hero: sticky content, frame peels away | Same photo, same copy; the photo becomes a card the page slides over. Works with our scrim. |
| T1's nav: logo docks into the pill | Frees the hero's top-left; matches the comps' pill. |
| T1's media cards: dim → hover full, scale 1.033, centred glass CTA | For Power Block facilities and news cards. Keyboard focus gets the same state. |
| T1's stats reveal and column layout | Already close to ours; adopt the left-eyebrow-with-bullet column. |
| T1's + / – accordion with sticky media | FAQ and pillars. Pillars already pin. |
| Joby's runway pacing | Our pinned pillars already do 65svh per item. Extend the pattern to Power Block and Workforce. |
| Joby's rail-as-progress | Already in the timeline. Reuse for trades and facilities. |
| Joby's parallax media inside a rounded frame | Workforce, History, Power Block images: ±8% travel, scale 1.05, inside the existing `media_frame`. |
| Joby's active/inactive list | Pillars and timeline labels. **Inactive floor is `text/tertiary`, not 0.3 opacity** (CLAUDE.md §7). |
| Joby's underline in/out | Inline `text-link`s. |

| Leave | Why |
| --- | --- |
| Full-dark page | The comps are a light canvas with dark *modes* per section; the client's palette is set. Numbers and FAQ stay dark; the rest stays light. |
| Joby's 100vh video hero with a loading intro | Rural connections (CLAUDE.md §9). A still photograph with the peel is enough. |
| Joby's 38,000px runway | Four screens per section on a seven-section homepage is ~30 screens. Cap at **1.5 screens per pinned item**, and pin only where the item count earns it. |
| Count-up figures | Never (transparency rule — the number on screen must always be true). |
| T1's 12px mono at 0.12px tracking as the eyebrow size | Below our AA floor on phones; `Eyebrow` stays at its token size. |
| Any `will-change` on more than the element currently animating | Memory on low-end phones. Set it via the `is-pinned` class, remove after. |

---

## 3. The homepage, section by section

Each row says what moves, what drives it, and what happens at phone width.
"Progress" means the section's scroll progress 0→1 while it is pinned or in
view — the one number Joby uses, and Webflow's "while scrolling in view".

| Section | Desktop (≥ 1024) | Phone (< 768) |
| --- | --- | --- |
| **Header** | Logo at left, nav pill at right. After 80px of scroll the pill widens and the logo docks into it (T1). Glass throughout. | Logo + menu button only; menu button gets the press. |
| **Hero** | Photo frame full-bleed. Copy + button `sticky; bottom` so they hold while the frame scrolls. Frame shrinks to 96% and rounds to `radius/media-lg` over the first 60vh of scroll (T1 peel). News cards ride the bottom-right as now. | Same peel, no sticky copy (T1 does the same). Scrim unchanged. |
| **Numbers** (dark) | T1 stats: eyebrow column with square bullet on the left; figure stack on the right. Figures reveal in order on scroll-into-view (no count-up). Footnotes travel with their figures, as now. | Single column; same reveal. |
| **Workforce** | Pinned split: photo on the left with Joby parallax (±8%, scale 1.05, inside the rounded frame); the four figures then the nine trades reveal down the right against a rail that fills with progress. Runway: 1.5 screens. | Not pinned. Photo static; figures and trades reveal in order. |
| **Power Block** | Chip row of the seven facilities (T1 chip + arrow well). Below it, T1 media cards: dim photo, centred glass CTA, hover/focus brings the photo to full and scales it 1.033 over 666ms. Selecting a chip scrolls the row and highlights its card. | Chips wrap; cards stack two-up from 480px, one-up below. Tap = the hover state. |
| **History** | Joby section entry: full-bleed photo with parallax, corners rounding as it exits; copy sits in the left third. | Static photo; copy above it. |
| **Timeline** | As built (stacked, sticky year label, rail fills). Add Joby's active/inactive treatment: the year whose milestones are in view is `text/primary`, the others `text/tertiary`. | As built. |
| **Pillars** | As built (pinned, 1000px cap, click-to-jump). Add the T1 + / – round toggle and the Joby active/inactive titles. Photo cross-fade stays. | As built; accordion fallback below 640px tall. |
| **FAQ** (dark) | T1 accordion: sticky intro + button on the left; rows on the right, open row white, closed rows `text/secondary`, round + / – toggle. Answer fades. | Intro above rows; same toggles. |
| **Footer** | T1 prefooter: one line, four contact route pills in a row, each with the press. | Pills stack; each ≥ 44px tall. |

Global, every section: the reveal stays "dim, never invisible" (`opacity .35`,
32px rise) so the page reads complete without JavaScript. Every pill gets the
press. Every inline link gets the underline in/out. Easing becomes expo-out.

---

## 4. Responsive rules

- **Breakpoints stay as they are** (768 / 1024 / 1200 / 1440). Nothing here
  adds one.
- **Pinning needs height as well as width.** A stage pins only when it fits in
  `100svh` minus the header; otherwise it stacks (the rule already applied to
  the pillars at < 640px tall). Landscape phones and short laptops get the
  stacked version.
- **Runway is a multiple of the viewport, not a fixed height:** `65svh` per
  item, capped at 1.5 screens per pinned stage. Figures and trades count as one
  stage each.
- **Parallax and peel are desktop-only** (`≥ 1024` and pointer: fine). Joby
  switches them off with `transform: none`; we do the same. Phones get reveals,
  taps and presses.
- **Type scales as now:** hero 64 → 40, figures 128 → 64, plus the existing
  `clamp()` between 768 and 1439. The 1000px stage cap holds.
- **Images:** parallax travel is inside `overflow: hidden` frames, so nothing
  changes the reserved size; no layout shift.

---

## 5. Webflow mapping

| Effect | Interactions 2.0 trigger | Needs an embed? |
| --- | --- | --- |
| Reveals, staggers, hover scale, press, accordion fade | Scroll into view / Hover / Click | No |
| Logo docks into the nav pill | While page is scrolling (0–80px) | No |
| Hero peel (scale + radius) | While scrolling in view, on the hero | No — scale and border-radius are both animatable |
| Rail fills, parallax media | While scrolling in view | No |
| Pinned stages | `position: sticky` on a div, set in the Designer | No |
| Opening the pillar / highlighting the timeline year **from scroll position** | — | **Yes**: a ~40-line script that sets `is-open` from progress, as `prototype/src/motion.ts` does. It also sets `aria-expanded`. Flag in build notes. |
| Underline in/out | Hover with two transform-origins | Custom CSS in an Embed (two-step origin swap) |
| Chip row scrolls to its card | Click | Anchor link; no script |

Both reference sites reach this feel with CSS and one scroll number. There is
no case for GSAP.

---

## 6. Decisions before building

1. **Hero peel: yes or no?** It is the single most "T1" moment and the only
   change that touches the hero's contrast maths (the frame shrinks; the scrim
   shrinks with it — copy stays inside the frame so the measurement holds).
2. **Nav: logo docks into the pill, or stays put?** Docking hides the wordmark
   at rest on the pill's left; the comps show the logo separate.
3. **Which sections pin?** Proposed: Workforce and Pillars (already). Not
   proposed: Power Block (cards are better scanned than paced) and FAQ. Joby
   would pin everything; the homepage would be ~14 screens instead of ~9.
4. **Power Block cards at `opacity .8` until hover** — T1's dimmed photos —
   or full-strength photos with the hover scale only? Dimmed photos over a
   placeholder tag read as "not loaded"; recommend full-strength until real
   photography arrives, then decide.
5. **Underline in/out on links:** a small custom CSS embed in Webflow for a
   detail most visitors will not notice. Recommend skipping it.

Recommendation: 1 yes, 2 dock, 3 as proposed, 4 full-strength, 5 skip.

---

## 7. Sequence

| Phase | Scope | Check |
| --- | --- | --- |
| A — Feel | Easing token, press, reveal timing, underline, nav dock, hero peel | Contrast sample on the hero at 11 sizes; axe |
| B — Scroll scenes | Workforce pinned stage with rail and parallax; History entry; Numbers column layout; timeline and pillar active states | Scroll-sequence test at 12 sizes (the `pillars.cjs` pattern); 60fps trace on a throttled CPU |
| C — Cards and rows | Power Block chips + media cards; FAQ + / –; footer route pills | Keyboard path through every card and chip; tap targets ≥ 44px |

Each phase is one commit and one artifact version, presented before the next
starts.
