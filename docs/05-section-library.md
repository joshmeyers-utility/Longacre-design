# Section library — Site v2

Stock-take of every section on the 27 pages in Figma `05 · Site v2`
(29 Sep 2026), and the patterns they consolidate into. The masters live in
Figma `02 · Components` › **Section library — site v2** (`175:15`), one
component per pattern, named `Section / …`. Build each once in Webflow as a
symbol plus a flat class set; pages compose them.

## Grounds

Page `#EDEDEC` · white · **cream `#F2EFE9` (new)** · inverse · green · blue ·
photo band. Never two alike adjacent; never a dark band against the footer.

| Ground | Carries | Text allowed |
| --- | --- | --- |
| `surface/cream` (new → `color/cream/100`) | Splits, statement lines, stats with media, questions with media | primary 14.67:1 · meta 4.98:1 · link 5.96:1 |
| `surface/module` (white) | Collections, panels on page, split statements | all light-ground text |
| `surface/page` | Tiles, stat facts, FAQ group alternation | all light-ground text |
| `surface/inverse` | Page heroes, stat grids, footer | inverse, inverse-secondary, link-inverse |
| `surface/green` | One colour moment per page | **text/inverse only**, no text links |
| `surface/blue` | Common questions, panel sets | inverse, inverse-secondary; no text links |

Panels inside a cream section use white, not page grey.

## Patterns

| Pattern | Sections consolidated | Count |
| --- | --- | --- |
| Page hero | Every sub-page hero | 26 |
| Split | Home: From past to present, Community stewardship · Campus future: About, Vision · Power plant: At a glance, Powering homes · History: Past · Workforce: About · Water: Source & treatment, How treatment works | 11 |
| Split statement *(new, after reference)* | Candidates: Campus future Vision, Water commitment | — |
| Stats with media *(new, after reference)* | Economic impact stats (applied) | 1 |
| Stat grid | Home numbers · Workforce numbers · Campus future At a glance, Local benefits · Power plant Key stats | 5 |
| Columns | Differentiators · Front of the meter · Legacy attributes · Environmental responsibility · Construction & community · Investment · Trades · Pillars | 8 |
| Panels | Unique site attributes · Fuel supply · Workforce commitments · Good neighbor · Partners · Local partners · Contact routes · Fact sheets | 8 |
| Tiles | Home building tiles · Learn more ×3 · Our community commitments · Campus future callouts | 6 |
| Questions | Common questions ×7 · FAQ groups ×6 | 13 |
| Questions with media *(new, after reference)* | Candidates: Power plant, Water | — |
| Quotes | Workforce commentary · News & resources commentary | 2 |
| Collection | Home latest news · News hub ×7 · seven News & resources lists · worker videos · Giving back carousel | 17 |
| Line | Media inquiries ×4 · text-alert ×2 · Facebook line · workforce CTA ×2 (were thin green bars) | 9 |
| Content pending | Data centers · Sound · Giving back · History placeholders | 4 |

Shared components already in use: Image band (`31:16`), Footer — site v2
(`168:1544`), Nav pill (`114:84`), Nav panel — expanded (`169:1745`).

**Kept as one-offs:** Home photo hero, Development timeline, the How it works
power-flow diagram, FAQ jump pills.

## Changes made in this pass

- 11 splits and 9 lines moved to cream; the two green workforce-CTA bars
  became Lines with a primary pill.
- Economic impact stats rebuilt as Stats with media (workforce photo,
  May 4, 2026).
- "Pennsylvania gas. / Two supply paths." set two-tone on blue — the only
  deck heading with two parts on a ground where the second tone passes AA.
- Adjacency check: no two like grounds touch on any page.
- Annotation pins re-anchored to their notes; 71 stale notes inherited from
  cloned sections removed.

## Reference treatments adopted

| From the reference | Adopted as | Held back |
| --- | --- | --- |
| Cream ground | `surface/cream` | — |
| Two-tone heading | Split statement; blue panels | Not on green (second tone fails AA); only where the deck supplies both lines |
| Square-marker eyebrow | Eyebrow in new patterns | Sentence case, not capitals; label must be a nav or deck label |
| Stats stacked beside media | Stats with media | Mono labels kept sentence case |
| Accordion beside media | Questions with media | Only where the photo shows the subject |
