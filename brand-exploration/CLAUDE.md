# Brand exploration: Homer City Energy Campus

The repo's root CLAUDE.md also loads in this folder. Its fact rules (§5),
canonical figures (§6), Webflow constraints (§8) and quality bars (§9) apply
to every direction without exception. Its design-system rules (§7) describe
the *current* direction, not this exploration: directions may depart from
them, and should say so when they do.

The full process lives in `brand-exploration-runbook.md` in this folder.
Paths here are relative to `brand-exploration/`; from the repo root,
`../docs/` is `docs/`.

## Brief
Public website for the Homer City Energy Campus, written for neighbours in
Homer City and Indiana County. Its jobs are transparency, an information hub,
education, and correcting misperceptions. Workforce and economic impact lead.
Source material: ../docs/source/ (canonical: fact-sheet.md, iup-deck.md,
site-structure.md; external-context.md is secondary and NOT publishable).
Site content snapshot: content/homer-city-qa.md, extracted read-only from the
Homer City QA Figma file. Where it conflicts with ../docs/source/ or root
CLAUDE.md §6, the conflict is logged in open-questions.md and the repo figure
is used until Josh decides.
Plan: ../docs/02-plan.md. Current design system: ../docs/03-design-system.md.
Reference territory: energy-sector brands, building and architecture firms,
and civic and public-information sites.
Output: 5 distinct, cohesive brand directions, delivered in Figma, each an
alternative to the current design in the Longacre file.

## Settings
Palette latitude: Anchored (build from #143251 navy, #238FC8 blue,
#AFECF1 aqua, #F3F1D0 cream, #D8B471 gold; vary how they are used)
Logo: Use as-is
First run size: Two directions (01 and 02 first)

## Each direction must include
Concept and positioning line · typography (display, text, mono if needed;
web-licensable) · color system as tokens (primitive → semantic) · motion
principles and motion tokens (Interactions 2.0 feasible) · imagery style ·
voice · website mockups · key moments · components · branded media.

## Figma: one build file, one owner per page

Josh's decision: all exploration work lives in ONE build file, as pages,
instead of seven files.

- Build file: https://www.figma.com/design/KLwTN3TWxX8SV9ty0yCQUw/Untitled
  (fileKey `KLwTN3TWxX8SV9ty0yCQUw`)
  - Page `00 Research Board` (node 0:1): lead only
  - Page `01 Direction` (2:2): direction 01 designer only
  - Page `02 Direction` (2:3): direction 02 designer only
  - Page `03 Direction` (2:4): direction 03 designer only
  - Page `04 Direction` (2:5): direction 04 designer only
  - Page `05 Direction` (2:6): direction 05 designer only
  - Page `99 Overview` (2:7): lead only
- READ ONLY, nobody writes:
  - Longacre (current design, the benchmark):
    https://www.figma.com/design/Jrd1qr29Hi3WvscddRo34r/Longacre
  - Homer City QA (content source):
    https://www.figma.com/design/rPSQ9vdg7YQSbPTptIPlzc/Homer-City-QA

Because Figma variables and styles are file-level, five directions share
one namespace. To keep them from colliding:

- Every variable collection is prefixed with its direction:
  `D01 Primitives`, `D01 Semantic`, `D01 Typography`, `D01 Motion`.
- Every text style, effect style and component name is prefixed `D01/`.
- A designer only creates, edits or deletes collections, styles and
  components carrying its own prefix, and only nodes on its own page.
- Never bind to another direction's variables or styles.
- Each direction page gets sections (Cover, Tokens, Type, Motion, Imagery,
  Hero, By the Numbers, and later Components, Website, Key moments, Media)
  rather than separate pages.
- If two designers' writes conflict or time out on the shared file, run
  designers one at a time and tell Josh.

## Rules
- Never write to a Figma page or prefixed collection you don't own. Never
  write to the Longacre or Homer City QA files. Researchers and critic never
  write to Figma.
- Copy and figures come from ../docs/source/, root CLAUDE.md §6 and
  content/homer-city-qa.md. No lorem ipsum, no invented figures, no rounding
  (~1,300 is not 1.3K).
- Footnotes travel with 10,000+ and ~1,000 everywhere, including social cards.
- Moving figures show "as of {month} {year}".
- Never "coal". Never 4.5 GW. Renderings are labelled as renderings.
- No generated imagery of the campus, the town, or workers. Where a photograph
  is missing, use a labelled placeholder whose brief sits inside the image
  area, never in the caption.
- Design 375px first, then 1440. WCAG 2.2 AA on every screen, including text
  over photographs.
- Build tokens with the figma-design-tokens skill
  (`anthropic-skills:figma-design-tokens`), before drawing any screen.
  Load the figma-use skill before any `use_figma` call.
- Directions must stay distinct. Flag it if two start converging, including
  converging on the current design.
- Write findings and decisions to the matching folder, not only in chat.
- Exploration open questions go to open-questions.md here. Do not edit the
  root CLAUDE.md; propose changes to Josh.
- Stop at each checkpoint and wait for Josh's approval.

## Running in a cloud session
- Sessions open at the repo root. Agent definitions live in the repo's
  `.claude/agents/` so they load there.
- The container is discarded. Commit and push research, briefs, reviews and
  logs at the end of every phase, to the session's designated branch.
- Lead screenshots go to `reviews/screens/` as files, so the critic (who
  cannot see Figma) can review them.
