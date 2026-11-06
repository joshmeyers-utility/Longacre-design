# Research: energy-campus-sites (visual pass)

Angle: community-facing sites for large energy, data-centre and infrastructure
builds. Revised 2026-11-06 from **rendered screenshots** (Playwright, 1440 and
375 wide) and computed styles. Every hex and face below is from `-styles.json`
or sampled from the screenshot; anything not seen is marked unverified.
Screens: `screens/energy-campus-sites/` (`<slug>-desktop.jpg`, `-desktop-full.jpg`,
`-mobile.jpg`, `-scroll1..3.jpg` where the page scrolls inside a container).
Figures on these sites are theirs, for context only, never publishable here.

**Dropped:** AEP Transmission (blocked, 405/403, never rendered), Georgia Power
Vogtle page (404), Gateway /community (404), Microsoft Quincy page (404).
Gateway Program moved to `architecture-and-construction.md`. Vineyard Wind,
Google Data Centers and Meta Data Centers were added.

## References

### 1. Microsoft in your community (hub)
URL: https://local.microsoft.com/ . Screens: `screens/energy-campus-sites/ms-local-desktop-full.jpg`, `ms-local-mobile.jpg`
- **Type:** Segoe UI body 18px/400 (#000); headings in **Segoe Serif** 45px/400,
  sentence case. The serif headline over a sans body is the one non-generic move.
- **Colour:** white page with a soft green-to-aqua gradient wash behind the hero
  (a pale mint, sampled #D7F4EF on the Quincy band); black text; link blue
  #2A6BB5; neutral grey footer (#EBEBEB). No brand-colour bars.
- **Layout & grid:** centred title, two-column intro (text left, three tall portrait
  photos right), then a 5-up card row (photo, two-line title, arrow), one wide
  mint feature band with a rounded photo, then the global Microsoft footer.
- **Imagery:** stock-feel people portraits (girl with tablet, farmer, technician),
  family at sunset beside turbines, aerial of a datacentre. Warm, soft, generic.
- **Stats/dates/sources:** none on the hub. Commitments are prose, no source or date.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** topic cards named for worries; the serif-over-sans pairing. **Avoid:**
  the gradient wash and stock portraits; commitments with no receipt.
- **Webflow:** easy (card grid, CMS topic collection).

### 2. Microsoft East Point project update
URL: https://local.microsoft.com/blog/east-point-georgia-datacenter-project-update/ . Screens: `ms-eastpoint-desktop.jpg`, `ms-eastpoint-scroll1.jpg`, `ms-eastpoint-mobile.jpg`
- **Type:** Segoe UI 18px/400, line-height about 1.7; the **date is the heading**:
  ~27px Segoe in link blue (~#0078D4, eyeballed not sampled), then a bold one-line label
  ("Community information session recap"), then plain paragraphs.
- **Colour:** white page, black text, one blue. Mobile hero is a flat solid blue
  (~#0078D4, eyeballed) block with the title in white 45px light.
- **Layout & grid:** single reading column about 770px wide centred; dated entries
  stacked newest first, no dividers, no cards. Very sparse.
- **Imagery:** none in the entries seen. Pure text.
- **Stats/dates/sources:** dates are the strongest element: a big blue date opens
  every entry. Named officials listed in the recap. No inline source documents.
- **Mobile:** hero is a blue block, same date-as-heading rhythm; reads well.
- **Steal:** date as the visible heading of each update; one narrow column. **Avoid:**
  the wall of unbroken paragraphs; add a "what changed" line and a document link.
- **Webflow:** easy (CMS Update collection).

### 3. Google Allen County Data Center
URL: https://www.allencountydatacenter.com . Screens: `google-allen-desktop.jpg`, `google-allen-scroll2.jpg`, `google-allen-mobile.jpg`
- **Type:** headings **Zalando Sans Expanded** 700, **all caps**, 40-42px, navy
  #003D7A; body **TASA Orbiter** 18px/400. A wide, heavy display face; loud.
- **Colour:** navy #003D7A/#163063, bright cyan #009DF7 for links and the active
  nav pill, pale ice-blue panel (#EBF8FF) as the hero ground. Body text is
  mid-teal-blue on the pale ground (low-ish contrast, unverified against AA).
- **Layout & grid:** hero is a rounded two-up: pale panel left (eyebrow place
  name, headline, two paragraphs), local drone photo right. Then three-column
  rounded-border cards with icon chips and long prose. Nav as outlined pills
  (Investment, Jobs, News, FAQ, Contact).
- **Imagery:** a real local aerial: farmland, a highway, trucks. Place-specific.
- **Stats/dates/sources:** dollar figures in running prose, no stat tiles, no
  as-of dates. Dense 3-column text cards.
- **Mobile:** panel collapses to one column of large type, hamburger plus a
  persistent "Jobs" pill. Long unbroken paragraphs. Works, but heavy.
- **Steal:** a place-name eyebrow above the headline; real local aerial as hero;
  persistent audience pill in mobile header. **Avoid:** all-caps expanded type,
  icon-chip cards with paragraphs inside.
- **Webflow:** easy. Expanded face needs a licensed or Google Font equivalent.

### 4. Delta Forge 1, Rapides Parish
URL: https://www.rapidesdatacenter.com . Screens: `rapides-desktop-full.jpg`, `rapides-mobile.jpg`
- **Type:** Wix Madefor Display 700 headings (~32px), Wix Madefor Text body, sentence
  case on headings, ALL-CAPS on buttons. Body is tiny on the hero (about 10-13px).
- **Colour:** an all-blue page: duotone-blue aerial hero, mid blue (#6C90CA sampled
  band) , deep navy testimonial band (#0F2A63-ish), tan buttons (#BEB0A1).
  Blue-on-blue text in places is low contrast (unverified numerically).
- **Layout & grid:** hero with partner logo column on the right; a registration
  banner; split photo/text; four testimonial cards with circular headshots, name,
  role and quote; an events row.
- **Imagery:** a server-hall interior (generic), a duotoned aerial render.
- **Stats/dates/sources:** none. Events carry a date. Testimonials are attributed
  with name, role, headshot (the one thing here that meets our attribution rule).
- **Mobile:** not individually reviewed (unverified).
- **Steal:** named, photographed, titled quotes. **Avoid:** everything else:
  monochrome blue, tiny type, partner-logo wall in the hero.
- **Webflow:** easy.

### 5. Purple Line, Maryland
URL: https://www.purplelinemd.com . Screens: `purpleline-desktop-full.jpg`, `purpleline-mobile.jpg`
- **Type:** Mulish (body, 17px) with IBM Plex Sans 200-700 for card headings; a
  light-weight sans headline "Maryland's New Light Rail System" 30px+, plus an
  italic bold subhead. Sentence case.
- **Colour:** brand purple #582B7C as the hero frame, amber card (#FBC059-ish),
  lavender card, white outlined card, light grey band (#F4F3FB). Four-colour
  tile row with no logic to which colour is which.
- **Layout & grid:** rounded purple hero carousel (photo left, title right), four
  coloured quick-link tiles, then a **construction progress bar**: a grey track
  with a purple fill running into a train illustration and a circled "92%".
- **Imagery:** one real train photograph at dusk; illustration for the progress bar.
- **Stats/dates/sources:** the progress bar is the standout: one number, drawn as
  a literal progress track. It carries no date or source on the page.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** a progress graphic that is the figure itself (ours would need an
  "as of" label and source). **Avoid:** the arbitrary multi-colour tile row.
- **Webflow:** easy; progress track is a div with a width, Interactions 2.0 fill.

### 6. Google Data Centers (corporate hub)
URL: https://datacenters.google/ . Screens: `google-dc-desktop.jpg`, `google-dc-desktop-full.jpg`, `google-dc-mobile.jpg`
- **Type:** Google Sans 60px/400 headline, "Building for" in #202124 and
  **"everyone" in green (#1E8E3E-ish)**; Google Sans Text 16px body; sentence case.
- **Colour:** white, near-black #202124, Google blue #1A73E8 for links and the pill
  CTA, cream notice bar (#FEF7E0-ish). Restrained.
- **Layout & grid:** centred hero text, then a wide 1280 video poster with a play
  button over a smiling technician; sticky nav with a pill "Explore locations".
- **Imagery:** a person in an operating hall, saturated yellow cabling; warm, human,
  corporate-editorial.
- **Stats/dates/sources:** none visible above the fold.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** one accent-coloured word in the headline; a single human face as hero.
  **Avoid:** the "everyone" register: any-company copy.
- **Webflow:** easy.

### 7. Meta Data Centers
URL: https://datacenters.atmeta.com/ . Screens: `meta-dc-desktop.jpg`, `meta-dc-desktop-full.jpg`
- **Type:** Optimistic Display 500, 64px white headline centred over video; 36px
  #1C2B33 section headings; sentence case.
- **Colour:** slate #1C2B33 text, Meta blue #0064E0 pill CTA; photography does the rest.
- **Layout & grid:** two-line nav (Meta mark over "Data Centers" plus dropdowns),
  full-bleed looping aerial with centred headline and one pill button, pause control
  bottom right (accessibility good), then centred statement.
- **Imagery:** a drone flyover of a desert data campus beside a housing tract. The
  neighbour proximity is visible, which is the honest version of this image.
- **Stats/dates/sources:** none above the fold.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** aerial that shows the campus beside homes; visible pause control.
  **Avoid:** centred white headline over busy video with no scrim evidence.
- **Webflow:** video background is native; keep it paused by default for
  reduced-motion.

### 8. Vineyard Wind
URL: https://www.vineyardwind.com/ . Screens: `vineyard-desktop-full.jpg`
- **Type:** EB Garamond body 17.6px/400 in navy #243348, with Sofia Pro and
  Minion Pro for letter-spaced caps labels ("PRESS RELEASES"). A serif-led, calm page.
- **Colour:** pale mint ground (#EFF6EF), navy #243348, sea-green labels (~#5FA58A),
  charcoal #353535 footer.
- **Layout & grid:** logo plus small nav, a framed video poster with a real local
  person, three-up press list with dates, then a **double-rule bordered box**
  holding a third-party grievance hotline (phone, web, mobile).
- **Imagery:** a local fisherman-type portrait on a harbour; muted, desaturated.
- **Stats/dates/sources:** press releases dated "September 16, 2026" style, small.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** the independent hotline presented as a first-class framed block; serif
  body for a quieter, local feel. **Avoid:** the carousel chevrons and the small type.
- **Webflow:** easy.

### 9. Intel in Ohio
URL: https://www.intel.com/content/www/us/en/corporate-responsibility/intel-in-ohio.html . Screens: `intel-ohio-desktop.jpg`, `intel-ohio-desktop-full.jpg`
- **Type:** Intel One (light, 40px headline, white on blue), Intel Clear body 16px;
  links with dashed underlines.
- **Colour:** Intel blue #0068B5 full-width band; white and #F5F5F5 alternating.
- **Layout & grid:** blue title band, small render left, text right, grey careers
  band. Narrow, template-like.
- **Imagery:** a rendering of a glass office building with tiny people; **not labelled
  as a rendering**.
- **Stats/dates/sources:** none.
- **Mobile:** not individually reviewed (unverified).
- **Steal:** nothing. **Avoid:** an unlabelled rendering used as if it were the site.
  This is the case our Photograph/Rendering flag exists for.
- **Webflow:** easy.

## Visual patterns (seen on more than one site)
1. **Pill CTAs and outlined pill nav** (Google Allen, Google DC, Meta, Purple Line):
   rounded controls in a single brand blue.
2. **Hero = one real aerial or one human, centred or split** (Google Allen, Meta,
   Google DC, Vineyard). Headline sentence case on three of four; Allen is the outlier.
3. **Pale-tint panels as grounds** (Microsoft mint, Allen ice blue, Vineyard mint):
   the sector reads "soft pastel = friendly". Our current rules forbid tinted grounds.
4. **Update logs are plain text** (East Point): date as heading, no component.
5. **Rounded cards with paragraphs inside** (Allen, Microsoft, Rapides, Purple Line).

## Visual gaps
1. **A figure shown with its date, qualifier and source beside it.** Purple Line draws
   the number; nobody dates or sources it.
2. **Concern shown in the picture.** Only Meta's aerial shows homes next to the
   campus; none shows the thing a sceptic asks about (water, noise, traffic).
3. **A grounded, non-pastel palette.** Every site here is blue, pastel or both.
   Navy plus cream and gold (the brief palette) reads differently.
