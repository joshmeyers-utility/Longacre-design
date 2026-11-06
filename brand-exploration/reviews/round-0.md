# Round 0: Checkpoint 1 critique (brand and aesthetics)

6 November 2026. Evidence: the five briefs, every board and 375 capture,
and the mood-board HTML (boards at 2880px are only legible as layout, so the
copy was checked in source). Ørsted and Kiewit references were re-read.
`grep` across all boards found no "coal" and no 4.5 GW.

## Per direction

**01 Evolution (the control).**
Strongest: the receipt. "Footnote 1" as a run-in at 14px, a receipt line
naming the document, and the as-of stamp in the qualifier slot. At 375 it is
the clearest, calmest unit of the five. Weakest: by design it *is* the
current design restyled (Geist, white and navy, the same ledger). Its dusk
hero above a navy band is Kiewit's photo grammar, and at 375 the gold alert
sits directly on the navy hero, which breaks its own "gold never touches
navy" rule. Cohesive, yes. Would a top studio sign it? It is competent, but
it isn't anyone's signature. Sceptic: high. Webflow: zero custom code.

**02 Daylight.**
Strongest: Outfit 200 at 44/104 on haze. It is the only direction that
captures Ørsted's lightness, and it puts no text on a photograph. Weakest:
pill buttons plus a pale ground plus one blue is the data-centre-community
cliché, and the thin blue figures (3.60:1, large-only) are the system's
lowest margin. Below the display sizes, Figtree is close to Geist. Cohesive:
type, grade and motion ("light coming up") agree. Studio quality: closest to
signable once real daylight photography exists. Sceptic: medium. Big
airy blue numerals drift toward marketing, though the verbatim footnotes and
the source line pull it back. Webflow: native. Only 02 shows all four
contact inboxes.

**03 The Record.**
Strongest: the most crafted and the most distinctive. Fraunces at opsz 72
over Newsreader on paper, a bold run-in "Note 1.", and a sidenote "Source:"
column. It is the sceptic-first register, and it reads current, not quaint.
Weakest: the 1,800+ row breaks the unit's own grammar. Its as-of date is a
run-in *after* the figure, while every other row puts the qualifier above
it. The `#F3F1D0` ledger band and the placeholder read khaki at 375. Serif
body text in long FAQ answers is untested on cheap Android. Cohesive: yes,
the strongest of the five. Studio quality: yes. Sceptic: highest. Webflow:
`opsz` needs a small style embed, which is flagged.

**04 Crew.**
Strongest: the energy, and the only direction that delivers on "workforce
gets the most room". The workforce ledger, the nine-trade
hover/focus/tap button, and the warm/cool photograph/rendering grade are all
well thought through. Weakest: heavy condensed cream on navy is the Kiewit
register at a glance, which the synthesis itself predicted ("heavy condensed
reads as contractor"). At display weight, cream reads pale yellow. The
homepage H1 has been swapped for the Workforce heading, and content is
locked. It can't be judged without portraits. Sceptic: lowest. It reads as
recruitment. Webflow: native plus one aria embed, but it needs a
commissioned shoot.

**05 Survey.**
Strongest: the most original idea. The receipt is an annotation, a leader
points at a keyed note, and every schematic disclaims itself. The title
block ("Drawn for neighbours…") is a superb trust device. Weakest: 12px mono
everywhere, plus "Sheet 01.2" navigation, is a mental-model tax on a
neighbour. The contour drawings will get screenshotted as "the site plan".
Cohesive: yes. Studio quality: yes, as a concept. Sceptic: high, unless the
drawings are misread. Webflow: the costliest. It needs static width
instances as custom fonts, an SVG draw in custom code (the wipe fallback is
fine), and one SVG per sheet.

## Receipt at 375

| | Figure | Qualifier | Footnote in row | As-of | Source |
| --- | --- | --- | --- | --- | --- |
| 01 | ✓ | ✓ | ✓ run-in | ✓ above | ✓ |
| 02 | ✓ | ✓ / aqua chip | ✓ left rule | ✓ above | ✓ |
| 03 | ✓ | ✓ italic | ✓ gold bar | ⚠ after figure | ✓ |
| 04 | ✓ | ✓ | ✓ | ✓ main ledger · ✗ workforce rows | ✓ |
| 05 | ✓ | ✓ boxed | ✓ keynote | ✓ | ⚠ carries production note |

## Distinctness

| | Type | Ground | Accent | Imagery | Motion |
| --- | --- | --- | --- | --- | --- |
| 01 | Geist | White / navy | Blue link | Place at dusk | Settled fades |
| 02 | Outfit 200 + Figtree | White / cool haze | Blue figures | Place in daylight | One brightening |
| 03 | Fraunces + Newsreader + Plex Mono | Cream paper | Gold rule | Dated sequence | Still |
| 04 | Big Shoulders + Hanken | Navy (+ cream paper) | Aqua | Faces, duotone | Staggered, energetic |
| 05 | Archivo wide + JetBrains Mono | White / vellum | Datum blue, linework | Plates with callouts | Line plots |

**Converging pairs:**
- **01 vs current:** identical by intent. It is a control, not a direction.
- **01 vs 05:** both white and navy with a square navy button, and the
  same five-slot ledger at 375. They separate only through linework and
  type, so 05 must keep the leader visible in every row.
- **03 vs 04:** paper `#FAF8EC` vs `#FAF9EE`. Crew's reading surface is
  The Record's ground, and the two are indistinguishable.
- **04 vs Kiewit:** partial convergence (see above).
- **02 Outfit vs Geist:** distinct only at weight 200 and display size.
  Below 22px, Figtree plus navy reads as the current site.
- **01 dusk vs Kiewit dusk:** the same photo subject over navy.

## Fact check (root §6)

Every 10,000+ and ~1,000, including 01's social card, carries its footnote
verbatim. 4.4 GW is always "Up to", $10 Billion is "Projected", and 1,800+
is "as of September 2026". Stand-ins are labelled inside the image.

**Blocking:**
1. **04 brief §9:** "1,000+ workers were active on site" is a moving
   figure with no as-of date. Add "As of May 2026" or cut it.
2. **04 workforce ledger:** ~95%, 135+ and 9 have no as-of stamp. They move.
   Add "As of 4 September 2026" in the eyebrow.

**Must fix (rule breaches):**
- Production notes in published fields (root §7, third rule). 02 caption:
  "Caption and Kind fields: real photograph needed" / "Date field". 01
  caption: "{month year}" and "Real photograph needed." (people
  figcaption). 05 source line: "CMS field · updated monthly · tier A,
  confirm wording".
- 04 names three union locals (marked "unconfirmed"). §6 says no names in
  public. Use "Union name needed" on all nine.
- 01 H1 "while honoring" is the QA wording. Use the fact sheet's "by
  drawing on" until Josh decides.
- 05 "Approximately ~3M": the qualifier is invented and doubled. Drop the
  eyebrow, because the tilde is the source's qualifier.
- 05 title block "1,800+ workers" truncates the label. Use the canonical
  label.

## Recommendation

1. **03 The Record:** highest craft, highest trust, most distinct.
2. **02 Daylight:** Josh's Ørsted register, and nearly native in Webflow.
3. 05 Survey: keep it in reserve, and borrow its title block.
4. 01 Evolution: the control. It is the existing Longacre design with
   tokens re-pointed, so test it there rather than rebuilding it.
5. 04 Crew: on hold until real portraits exist. Fold its trades module into
   the winner.

**Build 03 and 02 first.** This departs from the settings' "01 and 02".
Josh decides.

## Notes to designers

- **01:** Put a white or stone gap between the gold alert and the navy hero.
  Swap the dusk hero for a daylight one, or justify the dusk choice against
  Kiewit side by side. Move superscript 2 to the end of the ~1,000 label.
- **02:** Use `radius/control` 2px instead of pills. Try navy figures with a
  blue qualifier rule to test whether the blue is needed. Give Figtree
  something of its own (size or weight) so it doesn't read as Geist.
- **03:** Put the 1,800+ as-of in the qualifier slot above the figure. Run
  the ledger band on paper, not `#F3F1D0`, or prove it on a cheap panel. Set
  one long FAQ answer at 375.
- **04:** Restore the locked home H1, or label the frame "Workforce page".
  Make the review flags visibly unlike the Rendering tag. Test Sofia Sans
  Extra Condensed and move the paper off 03's hex. Put a Kiewit
  side-by-side on the board.
- **05:** Set mono at 13px minimum. Use plain nav labels with sheet numbers
  as secondary. Stamp "Schematic, not a site plan" on every contour frame,
  and show the four contact inboxes.
- **All except 02:** Show the four inboxes and one long FAQ answer at 375.
