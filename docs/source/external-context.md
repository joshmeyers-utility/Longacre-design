# Source: External context (secondary)

> ⚠️ **NOT approved copy.** Nothing in this file goes on the site as-is.
>
> Everything here was gathered via web search on 11 Sep 2026, because this
> environment has **no general internet egress** — the live site could not be
> fetched directly (see note at the bottom). It is planning intelligence only.
>
> Three tiers of trust, marked below:
> - **A — Client-published.** From Homer City Generation's own newsroom or a
>   partner's press release. Authoritative, but confirm exact wording against
>   the primary document before it becomes site copy.
> - **B — Press coverage.** Reported facts. Useful for planning. Verify with the
>   client before publishing.
> - **C — Opposition / third-party claims.** Not for publication. This is what
>   the site has to be credible *against*.

---

## Current site structure (tier B — from indexed page titles)

The site being replaced is at `homercityredevelopment.com`, apparently built on
Wix (`/post/` slugs on news items):

| Path | Title |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/project-overview` | Project Overview |
| `/faq` | FAQs |
| `/fact-sheets` | Fact Sheets |
| `/power-plant-fact-sheet` | Power Plant Fact Sheet |
| `/resources` | Resources |
| `/videos` | Videos |
| `/post/{slug}` | News items |

**What this tells us.** The current site has **no Workforce page, no Community or
Partners page, and no Contact page.** Its whole architecture is corporate-about +
document-download — which is exactly the diagnosis in the brief. The new Phase 1
structure isn't a reorganisation; it's three genuinely new sections.

Redirect mapping in `docs/04-build-notes.md` at Stage 4. `/fact-sheets`,
`/power-plant-fact-sheet` and `/resources` all collapse into the new
FAQ / Resources page.

---

## Workforce — client press release, 4 Sep 2026 (tier A)

> **"Homer City Energy Campus Workforce Grows to More Than 1,800 Workers,
> Including Members of 9 Building and Construction Trade Unions"**
> Published to the client newsroom and carried by Business Wire, WCCS/WDAD radio,
> and national syndication.

**This answers the workforce stats the brief asked for and no supplied PDF
contained.** Confirm exact figures against the release before publishing.

| Figure | Detail |
| --- | --- |
| **1,800+** | Direct-hire tradespeople and skilled contractors active on site, as of Sep 2026 |
| **9** | Local union organizations represented |
| **~95%** | Of the skilled direct-hire craft workforce is from the local area |
| **135+** | Apprentices training alongside experienced journeymen |
| **~2,000** | Expected total workers by year-end 2026 |

**Trades represented:** boilermakers, carpenters, electricians, ironworkers,
laborers, millwrights, operators, pipefitters, teamsters — "and other skilled
contractors and craftspeople from across Western Pennsylvania."

> ⚠️ The nine unions are counted but **not named** in the coverage. The brief
> calls for per-union descriptions with rollover detail, so the named list and
> local numbers still have to come from the client.

**Claim made in the release:** "the largest natural gas-powered plant currently
under construction in the U.S."

### The workforce number's full trajectory

| Date | Figure | Source |
| --- | --- | --- |
| Mar 2026 | 1,000+ | Business Wire release |
| May 2026 | ~1,300 | Fact sheet (tier A, supplied) |
| Jul 2026 | ~1,500 | IUP deck (tier A, supplied) |
| Sep 2026 | 1,800+ | Press release (tier A) |
| Year-end 2026 | ~2,000 projected | Press release (tier A) |

**Roughly +100/month, and it has moved twice since the newest document I was
given.** This is the clearest possible case for the CMS field and the visible
"as of" date. Design the stat module so a number change is a one-field edit that
also updates the date.

---

## Site & project context (tier B)

- Homer City Generating Station was **permanently decommissioned 1 July 2023**.
- The site sits **~50 miles east of Pittsburgh**, and within ~300 miles of New
  York, Philadelphia, Baltimore, Washington DC, Columbus and Cleveland. *Good
  material for the labelled map module the brief asks for* — it explains
  why here, which is a question neighbours actually ask.
- Water source is the **Two Lick Reservoir**; the company has said usage will be
  "roughly the same" as the former coal plant's.
- At construction peak, ~3,000 craft workers are anticipated.
- Once operational, ~150–250 people run the plant and surrounding infrastructure.
  (Not in conflict with the ~1,000 figure, which covers plant *plus* all aspects
  of the data center campus at full capacity.)
- Leadership named publicly: **Corey Hessen**, CEO; **Robin Gorman**, VP for
  Government and Public Relations. Both act as spokespeople.

### ⚠️ Figure conflict: 4.4 vs 4.5 GW

The April 2025 GE Vernova announcement and much subsequent coverage say **4.5
GW**. Both supplied client documents — May 2026 and July 2026 — say **up to 4.4
GW**.

**Use 4.4 GW.** The client documents are newer and are the authority. Flag the
discrepancy to the client, since stale 4.5 GW figures are widespread and a
sceptical reader may notice the difference.

---

## What the site is arguing against (tier C — never publish)

The brief's instruction to "correct misperceptions" is not abstract. There is an
organised, documented opposition:

- **The PA DEP air quality permit is under appeal.** Environmental groups, joined
  by Our Children's Trust, filed in December 2025 — after the November 2025
  approval the fact sheet lists as a milestone.
- **Water.** Opponents note Two Lick Reservoir is EPA-designated "impaired for
  aquatic life use," and question drinking water impact.
- **Noise and odor.** Raised as quality-of-life concerns for nearby residents.
- **Air quality and health.** Groups have claimed the plant's emissions could
  cause premature deaths.
- **"Minimal return benefits."** The argument that the community bears the costs
  while the benefits flow to data center tenants — this is the one the workforce
  and economic-impact content exists to answer.

### Why this matters for the design

1. **The FAQ is not a utility page. It is the most important page on the site.**
   It is where a sceptical neighbour goes first. It needs categories that name
   the hard topics — water, air, noise, traffic, benefit — rather than routing
   around them.
2. **This explains the brief's icon list.** "Health, Safety, Environment (Water),
   Economic Impact, Workforce Development, Giving Back" maps almost exactly onto
   the objections. Water is called out specifically *because* it is contested.
3. **Sourcing is the whole product.** Against organised opposition citing EPA
   designations and permit filings, unsourced assertion loses. Every claim needs
   a date, a source, and ideally a document to download.
4. **Don't pretend the appeal isn't happening.** A transparency site that omits a
   live regulatory challenge hands the opposition its best argument. How to
   handle it is a client decision — but it is a decision, not an oversight.

---

## Note on environment access

All outbound HTTPS from this session is blocked by the environment's network
egress policy — not just the client domain. `example.com`, `anthropic.com` and
`wikipedia.org` are all refused at the proxy with a 403 on CONNECT. Web *search*
still works, because it routes through the Anthropic API rather than the proxy,
which is how this file was assembled.

To enable direct page fetches, the environment's network policy needs changing —
see <https://code.claude.com/docs/en/claude-code-on-the-web>.
