/**
 * One function per page. Each composes the shared parts in render.mjs
 * with the content in content.mjs. Section order follows the T1
 * prototype's pages (docs/02-plan.md §5); the visual language is the
 * editorial direction: framed photographs, centred statements, giant
 * cropped words, navy ledgers, hairlines only.
 */
import * as c from './content.mjs';
import { button, closing, faqRows, figures, flag, giant, icon, ledger, mediaFrame, pageHero, phases, picture, shell, srOnly, textLink } from './render.mjs';

const description = 'Facts, figures and construction updates from the Homer City Energy Campus in Indiana County, Pennsylvania.';

/* ================================================================= Home */

export function home() {
  const body = `
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero_frame on-photo">
      <div class="hero_media">${picture(c.hero.media, { sizes: '100vw', eager: true })}<div class="hero_scrim"></div></div>
      <div class="hero_bottom is-home">
        <h1 class="hero_title" id="hero-title"><span class="hero_line">${c.hero.headline}</span></h1>
        <div class="hero_intro">
          <p class="lede hero_lede">${c.hero.intro}</p>
          <div class="button-row hero_actions">
            ${button('campus.html', 'Explore the campus', 'inverse')}
            ${textLink('workforce.html', 'Work here')}
          </div>
        </div>
      </div>
      <p class="media_brief hero_brief" hidden><span class="flag_label">Image brief.</span> ${c.hero.media.brief}</p>
    </div>
  </section>

  <section class="section is-tight-top" id="latest" aria-label="Latest updates">
    <div class="container">
      <ul class="latest_list">
        ${c.announcements
          .map(
            (a) => `<li data-reveal><a class="latest_item" href="${a.href}">
          <span class="eyebrow">${a.kind} · ${a.date}</span>
          <span class="latest_headline">${a.headline}</span>
          ${icon('arrow_forward')}
        </a>${flag(a.provenance)}</li>`,
          )
          .join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="section" id="campus" aria-label="About the campus">
    <div class="container">
      <div class="pair">
        <div class="pair_text" data-reveal>
          <p class="pair_quote">${c.positioning.quote}</p>
          <p class="pair_source"><span class="eyebrow">${c.positioning.source}</span><span class="footnote">${c.positioning.date}</span></p>
        </div>
        <figure class="pair_media" data-reveal>
          <div class="pair_frame">
            ${picture(c.positioning.media, { sizes: '(min-width: 768px) 58vw, 100vw' })}
            <div class="hero_scrim"></div>
            <div class="marquee" aria-hidden="true">
              <div class="marquee_track">
                ${'<span class="marquee_item"><span>Safety</span><span>Infrastructure</span><span>Community</span><span>Energy Future</span></span>'.repeat(2)}
              </div>
            </div>
            <span class="media_brief" hidden><span class="flag_label">Image brief.</span> ${c.positioning.media.brief}</span>
          </div>
        </figure>
      </div>

      <div class="orient" aria-label="What is happening here">
        ${c.orientation.map((o) => `<div class="orient_col" data-reveal><h3 class="heading-3">${o.title}</h3><p>${o.body}</p></div>`).join('\n        ')}
      </div>
    </div>
  </section>

  ${giant('By the numbers')}
  <section class="section is-brand is-after-giant" id="numbers" aria-labelledby="numbers-title">
    <div class="container">
      <div class="numbers_head">
        <h2 class="lede" id="numbers-title">The campus by the numbers</h2>
        <p class="eyebrow">From the May 2026 fact sheet</p>
      </div>
      ${figures(c.stats)}
    </div>
  </section>

  <section class="section" id="workforce" aria-labelledby="workforce-title">
    <div class="container">
      <div class="centred">
        <p class="eyebrow">Careers on the campus</p>
        <h2 class="statement" id="workforce-title" data-reveal>${c.workforce.heading}</h2>
        <div class="button-row" data-reveal>
          ${button('workforce.html#apply', 'Find work on the campus')}
          ${textLink('workforce.html#trades', 'Meet the trades')}
        </div>
      </div>
      <div class="split">
        <div>
          <h3 class="heading-3">On site today</h3>
          ${ledger(c.workforce.stats, { flags: false })}
          <p class="footnote" style="margin-top:12px">${c.workforce.sourceLine}</p>
          ${flag(c.release)}
        </div>
        <div class="split_media" data-parallax>
          ${mediaFrame(c.workforce.media, { ratio: '4/5', sizes: '(min-width: 768px) 40vw, 100vw' })}
        </div>
      </div>
      <div class="trades-home" id="trades">
        <h3 class="heading-3">Nine trades on site</h3>
        <ul class="trades_list">
          ${c.trades.map((t) => `<li class="trades_item" data-reveal>${icon(t.icon)}${t.name}</li>`).join('\n          ')}
        </ul>
      </div>
    </div>
  </section>

  <section class="section is-subtle" id="power-block" aria-labelledby="power-title">
    <div class="container">
      <div class="centred">
        <p class="eyebrow">What we’re building</p>
        <h2 class="statement" id="power-title" data-reveal>${c.powerBlock.heading}</h2>
        <p class="lede text-secondary" style="max-width:36rem" data-reveal>${c.powerBlock.intro}</p>
      </div>
      <div class="band" data-reveal data-parallax>${mediaFrame(c.powerBlock.media, { ratio: '21/9', sizes: '100vw', cls: 'is-wide' })}</div>
      <ul class="facilities">
        ${c.powerBlock.facilities
          .map((f) => `<li class="facility" data-reveal><h3 class="heading-3">${f.name}</h3><p>${f.detail}</p><span class="facility_stamp">${f.stamp}</span></li>`)
          .join('\n        ')}
      </ul>
      <p class="centred" style="margin-top:var(--stack-xl)">${textLink('campus.html#tour', 'Take the site tour')}</p>
    </div>
  </section>

  <section class="section" id="history" aria-labelledby="history-title">
    <div class="container split is-reversed">
      <div class="split_media" data-parallax>
        ${mediaFrame(c.history.media, { ratio: '4/3', sizes: '(min-width: 768px) 58vw, 100vw' })}
      </div>
      <div class="split_copy">
        <p class="eyebrow">Who we are</p>
        <h2 class="heading-2" id="history-title" data-reveal>${c.history.heading}</h2>
        ${c.history.body.map((p) => `<p class="lede text-secondary" data-reveal>${p}</p>`).join('')}
        <p data-reveal>${textLink('history.html', 'See the full history')}</p>
      </div>
    </div>
  </section>

  <section class="section is-subtle" id="timeline" aria-labelledby="timeline-title">
    <div class="container">
      <div class="centred">
        <p class="eyebrow">Key milestones · updated July 2026</p>
        <h2 class="statement" id="timeline-title" data-reveal>Where the build stands.</h2>
      </div>
      <ol class="timeline" data-rail>
        <li class="timeline_step" data-reveal>
          <span class="timeline_marker" aria-hidden="true"></span>
          <p class="eyebrow">Last completed · June 2026</p>
          <h3 class="heading-3">Major demolition complete</h3>
          <p>Completed major demolition and transitioned into full construction phase.</p>
        </li>
        <li class="timeline_step is-current" data-reveal>
          <span class="timeline_marker" aria-hidden="true"></span>
          <p class="eyebrow">Now · 2026–2027</p>
          <h3 class="heading-3">Construction</h3>
          <p>Vertical construction has been under way since first steel in April 2026.</p>
        </li>
        <li class="timeline_step is-next" data-reveal>
          <span class="timeline_marker" aria-hidden="true"></span>
          <p class="eyebrow">Upcoming · expected 2026</p>
          <h3 class="heading-3">First equipment</h3>
          <p>Installation of first equipment, including first deliveries of GE Vernova turbines.</p>
        </li>
      </ol>
      <div class="centred">${textLink('history.html#milestones', 'See the full timeline')}</div>
    </div>
  </section>

  <section class="section pillars-section" id="pillars" aria-labelledby="pillars-title">
    <div class="container centred">
      <p class="eyebrow">Community stewardship</p>
      <h2 class="statement" id="pillars-title" data-reveal>Project pillars.</h2>
    </div>
    <div class="pillars" id="pillars-runway">
      <div class="pillars_stage">
        <div class="container pillars_layout">
          <ul class="pillar-list" id="pillar-list">
            ${c.pillars
              .map(
                (p, i) => `<li class="pillar${i === 0 ? ' is-open' : ''}" id="pillar-${p.id}" data-index="${i}">
              <h3 class="pillar_heading"><button class="pillar_toggle" type="button" id="pillar-${p.id}-t" aria-expanded="${i === 0}" aria-controls="pillar-${p.id}-b"><span class="pillar_mark" style="background:var(--pillar-${p.id})" aria-hidden="true"></span><span class="pillar_name">${p.name}</span>${icon('add', true)}</button></h3>
              <div class="pillar_body" id="pillar-${p.id}-b"><div class="pillar_panel"><p>${p.copy}</p>${textLink(p.href, p.linkLabel)}</div></div>
            </li>`,
              )
              .join('\n            ')}
          </ul>
          <div class="pillars_media" aria-hidden="true">
            ${c.pillars
              .map((p, i) => `<div class="pillars_frame${i === 0 ? ' is-active' : ''}" data-index="${i}">${picture(p.media, { sizes: '(min-width: 1024px) 50vw, 100vw' })}<span class="media_brief" hidden><span class="flag_label">Image brief.</span> ${p.media.brief}</span></div>`)
              .join('\n            ')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="faq" aria-labelledby="faq-title">
    <div class="container centred">
      <p class="eyebrow">Common questions</p>
      <h2 class="statement" id="faq-title" data-reveal>What neighbours ask most.</h2>
      <div class="faq_list">
        ${faqRows(c.homeFaqIds.map((id) => c.allFaqs.find((f) => f.id === id)), { idPrefix: 'home' })}
      </div>
      <div class="button-row" data-reveal>
        ${textLink('faq.html', 'See all the questions')}
        ${textLink('contact.html', 'Ask us a question')}
      </div>
    </div>
  </section>`;
  return shell({ page: 'home', title: 'Home', description, body, onPhoto: true });
}

/* =============================================================== Campus */

export function campus() {
  const p = c.campusPage;
  const body = `
  ${pageHero({ ...p.hero, actions: `${button('#tour', 'Take the tour')}${textLink('#progress', 'See it being built')}` })}

  ${giant('At a glance')}
  <section class="section is-brand is-after-giant" id="numbers" aria-labelledby="numbers-title">
    <div class="container">
      <div class="numbers_head"><h2 class="lede" id="numbers-title">The campus at a glance</h2><p class="eyebrow">From the May 2026 fact sheet</p></div>
      ${figures(p.stats, { cls: 'is-four' })}
    </div>
  </section>

  <section class="section" id="tour" aria-labelledby="tour-title">
    <div class="container tour">
      <div class="tour_head">
        <p class="eyebrow">The site tour</p>
        <h2 class="statement" id="tour-title" data-reveal>${p.tour.heading}</h2>
        <p class="lede text-secondary" data-reveal>${p.tour.intro}</p>
      </div>
      <ol class="tour_list" data-rail>
        ${p.tour.stops
          .map(
            (s, i) => `<li class="tour-stop" id="stop-${s.id}" data-reveal>
          <div class="tour-stop_copy">
            <p class="eyebrow">Stop ${i + 1} of ${p.tour.stops.length}</p>
            <h3 class="heading-2">${s.name}${s.short ? ` <span class="text-secondary">(${s.short})</span>` : ''}</h3>
            <p class="eyebrow">${s.detail}</p>
            <p class="lede text-secondary">${s.body}</p>
            ${s.stages.length ? `<ul class="tour-stop_stages" aria-label="Photographed">${s.stages.map((st) => `<li class="tour-stop_stage"><span class="footnote">${st.date}</span><span>${st.caption}</span></li>`).join('')}</ul>` : ''}
            ${flag(s.provenance)}
          </div>
          <div class="tour-stop_media" data-parallax>${mediaFrame(s.media, { ratio: '4/3', sizes: '(min-width: 1024px) 40vw, 100vw' })}</div>
        </li>`,
          )
          .join('\n        ')}
      </ol>
    </div>
  </section>

  ${essayStrip('progress', 'Build progress', c.essay.heading, c.essay.intro)}

  ${closing({ id: 'next-title', heading: p.next.heading, body: p.next.body, action: `${button('faq.html', 'Read the common questions')}${textLink(`mailto:${p.next.email}`, p.next.email)}` })}`;
  return shell({ page: 'campus', title: 'The campus', description, body, onPhoto: true });
}

/** The deck's twelve dated stages as a horizontal strip on navy. */
function essayStrip(id, eyebrow, heading, intro) {
  return `${giant('Stage by stage')}
  <section class="section is-brand is-after-giant" id="${id}" aria-labelledby="${id}-title">
    <div class="container stages_head">
      <div class="stages_title">
        <p class="eyebrow">${eyebrow} · ${c.essay.stages.length} stages</p>
        <h2 class="lede" id="${id}-title">${heading}</h2>
        <p class="text-secondary">${intro}</p>
        ${flag(c.essay.provenance)}
      </div>
      <div class="stages_controls">
        <button class="round-button" type="button" data-stages-prev aria-label="Earlier stages" aria-controls="${id}-track">${icon('arrow_back', true)}</button>
        <button class="round-button" type="button" data-stages-next aria-label="Later stages" aria-controls="${id}-track">${icon('arrow_forward', true)}</button>
      </div>
    </div>
    <ol class="stages_track" id="${id}-track" tabindex="0" aria-label="Stage by stage, oldest first. Scroll sideways for later stages." data-stages>
      ${c.essay.stages
        .map(
          (s) => `<li class="stage" data-reveal>
        <div class="stage_frame${s.then ? ' is-then' : ''}">${picture(s.media, { sizes: '(min-width: 768px) 22rem, 78vw' })}<div class="stage_scrim"></div><p class="stage_mark" aria-hidden="true">${s.mark}<small>${s.sub}</small></p><span class="media_brief" hidden><span class="flag_label">Image brief.</span> ${s.media.brief}</span></div>
        <div class="stage_text"><p class="eyebrow">${s.date}</p><h3 class="heading-3">${s.caption}</h3><p class="caption"><span>${s.media.kind}</span></p></div>
      </li>`,
        )
        .join('\n      ')}
    </ol>
    <div class="container"><div class="stages_rail" aria-hidden="true"><span class="stages_rail-fill" data-stages-fill></span></div></div>
  </section>`;
}

/* ============================================================== History */

export function history() {
  const p = c.historyPage;
  const body = `
  ${pageHero({ ...p.hero, actions: `${button('#milestones', 'See the milestones')}${textLink('#stages', 'Stage by stage')}` })}

  <section class="section is-subtle" aria-labelledby="pair-title">
    <div class="container">
      <div class="centred"><p class="eyebrow">The site</p><h2 class="statement" id="pair-title" data-reveal>${p.pair.heading}</h2></div>
      <div class="then-now">
        ${[p.pair.before, p.pair.after]
          .map((s) => `<div class="then-now_item" data-reveal>${mediaFrame({ ...s.media, caption: s.caption, date: s.date }, { ratio: '4/3', sizes: '(min-width: 768px) 50vw, 100vw' })}</div>`)
          .join('')}
      </div>
    </div>
  </section>

  <section class="section" id="stages" aria-labelledby="stages-title">
    <div class="container tour">
      <div class="tour_head">
        <p class="eyebrow">${c.essay.stages.length} stages</p>
        <h2 class="statement" id="stages-title" data-reveal>Stage by stage</h2>
        <p class="lede text-secondary" data-reveal>Oldest first, with the date each photograph was taken.</p>
        ${flag(c.essay.provenance)}
      </div>
      <ol class="tour_list" data-rail>
        ${c.essay.stages
          .map(
            (s) => `<li class="tour-stop" id="${s.id}" data-reveal>
          <div class="tour-stop_copy">
            <p class="eyebrow">${s.date}</p>
            <h3 class="heading-2">${s.caption}</h3>
            ${s.note ? `<p class="lede text-secondary">${s.note}</p>` : ''}
          </div>
          <div class="tour-stop_media" data-parallax>${mediaFrame(s.media, { ratio: '4/3', sizes: '(min-width: 1024px) 40vw, 100vw' })}</div>
        </li>`,
          )
          .join('\n        ')}
      </ol>
    </div>
  </section>

  ${giant('Key milestones')}
  <section class="section is-brand is-after-giant" id="milestones" aria-labelledby="milestones-title">
    <div class="container">
      <div class="numbers_head"><h2 class="lede" id="milestones-title">Key milestones</h2><p class="eyebrow">From demolition in March 2025 to what comes next</p></div>
      ${phases(c.milestones)}
    </div>
  </section>

  ${closing({ id: 'next-title', heading: 'What is being built now', body: 'The four stops on the site tour, what each one does, and the figures for the whole campus.', action: button('campus.html', 'See the campus') })}`;
  return shell({ page: 'history', title: 'Our history', description, body, onPhoto: true });
}

/* ============================================================ Workforce */

function growthChart(g) {
  const max = 2000;
  const ticks = [0, 500, 1000, 1500, 2000];
  return `<figure class="chart" aria-labelledby="chart-title" data-reveal>
        <div class="chart_head"><h3 class="heading-3" id="chart-title">${g.title}</h3><p class="footnote">${g.subtitle}</p></div>
        <div class="chart_plot" data-chart>
          <div class="chart_grid" aria-hidden="true">${ticks.map((t) => `<div class="chart_tick${t === 0 ? ' is-base' : ''}" style="bottom:${(t / max) * 100}%"><span>${t.toLocaleString('en-US')}</span></div>`).join('')}</div>
          <div class="chart_bars">${g.points
            .map(
              (p) => `<div class="chart_slot" tabindex="0" aria-label="${p.when}: ${p.figure}${p.projected ? ', projected' : ''}. Source: ${p.source}"><div class="chart_bar${p.projected ? ' is-projected' : ''}" style="--h:${(p.value / max) * 100}%"><span class="chart_value" aria-hidden="true">${p.projected ? '<span class="eyebrow">Projected</span>' : ''}${p.figure}</span><span class="chart_tip" aria-hidden="true">${p.when}<br>${p.source}</span></div><span class="chart_label" aria-hidden="true">${p.label}</span></div>`,
            )
            .join('')}</div>
        </div>
        <figcaption class="footnote chart_note">${g.note}</figcaption>
        <details class="chart_table">
          <summary>Show as a table ${icon('add')}</summary>
          <div class="table-wrap"><table>
            <caption class="sr-only">${g.title}</caption>
            <thead><tr><th scope="col">When</th><th scope="col">People on site</th><th scope="col">Source</th></tr></thead>
            <tbody>${g.points.map((p) => `<tr><td>${p.when}</td><td>${p.figure}${p.projected ? ' (projected)' : ''}</td><td>${p.source}</td></tr>`).join('')}</tbody>
          </table></div>
        </details>
      </figure>`;
}

export function workforce() {
  const p = c.workforcePage;
  const body = `
  ${pageHero({ ...p.hero, actions: `${button('#apply', 'Find work on the campus')}${textLink('#trades', 'See the nine trades')}` })}

  <section class="section is-subtle" id="on-site" aria-labelledby="onsite-title">
    <div class="container">
      <div class="centred"><h2 class="statement" id="onsite-title" data-reveal>Who is on site</h2></div>
      <div class="onsite">
        <div>${ledger(c.workforce.stats, { flags: false })}${flag(c.release)}</div>
        ${growthChart(p.growth)}
      </div>
    </div>
  </section>

  ${giant('Who does what', 'is-fit-13')}
  <section class="section is-brand is-after-giant" id="trades" aria-labelledby="trades-title">
    <div class="container">
      <div class="trades-head"><p class="eyebrow">Nine trades on site</p><h2 class="lede" id="trades-title">Who does what</h2>${flag(c.tradeCopy)}${flag(c.tradeLinks)}</div>
      <ul class="trade-list" id="trade-list">
        ${c.trades
          .map(
            (t, i) => `<li class="trade" data-reveal>
          <button class="trade_toggle" type="button" id="trade-t${i}" aria-expanded="false" aria-controls="trade-b${i}">${icon(t.icon, true)}<span class="trade_name">${t.name}</span>${icon('add', true)}</button>
          <div class="trade_body" id="trade-b${i}" role="region" aria-labelledby="trade-t${i}"><div class="trade_inner"><p class="trade_desc">${t.description}</p>${textLink(t.href, t.union, 'arrow_outward', true)}</div></div>
        </li>`,
          )
          .join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="section" id="apprenticeships" aria-labelledby="appr-title">
    <div class="container split is-reversed">
      <div class="split_media" data-parallax>${mediaFrame(p.apprentices.media, { ratio: '4/5', sizes: '(min-width: 768px) 40vw, 100vw' })}</div>
      <div class="split_copy">
        <p class="eyebrow">Apprenticeships</p>
        <h2 class="heading-2" id="appr-title" data-reveal>${p.apprentices.heading}</h2>
        <div class="big-figure" data-reveal><p class="big-figure_value">135+</p><p class="big-figure_label">Apprentices training alongside experienced journeymen</p></div>
        <p class="lede text-secondary" data-reveal>${p.apprentices.body}</p>
        ${flag(c.release)}
        <p data-reveal>${textLink('contact.html', 'Ask about apprenticeships')}</p>
      </div>
    </div>
  </section>

  <section class="section is-subtle" id="beyond" aria-labelledby="beyond-title">
    <div class="container">
      <div class="centred" style="margin-bottom:var(--stack-2xl)"><h2 class="statement" id="beyond-title" data-reveal>${p.longView.heading}</h2></div>
      ${figures(p.longView.stats, { light: true, cls: 'is-pair' })}
    </div>
  </section>

  <section class="section apply" id="apply" aria-labelledby="apply-title">
    <div class="container centred">
      <h2 class="statement" id="apply-title" data-reveal>${p.apply.heading}</h2>
      <p class="lede text-secondary" style="max-width:36rem" data-reveal>${p.apply.body}</p>
      <p class="apply_email" data-reveal><a class="apply_address" href="mailto:${p.apply.email}">${p.apply.email}</a><button class="copy-button" type="button" data-copy="${p.apply.email}" aria-label="Copy the job seekers address">${icon('content_copy', true)}</button></p>
      <p class="footnote">${p.apply.vendors}</p>
    </div>
  </section>`;
  return shell({ page: 'workforce', title: 'Careers', description, body, onPhoto: true });
}

/* ============================================================ Community */

export function community() {
  const p = c.communityPage;
  const body = `
  ${pageHero({ ...p.hero, actions: `${button('#partners', 'Campus partners')}${textLink('#commitments', 'Our commitments')}` })}

  <section class="section is-tight-top" aria-label="In this section">
    <div class="container">
      <ul class="routes">
        ${p.routes
          .map(
            (r) => `<li class="route" data-reveal>
          <a class="route_link" href="${r.href}">
            <span class="heading-2 route_title">${r.title}</span>
            <span class="text-secondary">${r.body}</span>
            ${r.stat ? `<span class="route_stat"><span class="ledger_value">${r.stat.figure}</span><span class="footnote">${r.stat.label}</span></span>` : '<span class="route_stat"><span class="footnote">No quotes yet. Each needs a name, role and photograph.</span></span>'}
            <span class="route_arrow">${icon('arrow_downward', true)}</span>
          </a>
        </li>`,
          )
          .join('\n        ')}
      </ul>
    </div>
  </section>

  ${giant('Meeting the county')}
  <section class="section is-brand is-after-giant" id="moments" aria-labelledby="moments-title">
    <div class="container">
      <div class="numbers_head"><h2 class="lede" id="moments-title">${p.moments.heading}</h2><p class="eyebrow">2025</p></div>
      <ol class="phase_list">${p.moments.items.map((m) => `<li class="milestone-row" data-reveal><span class="milestone-row_when">${m.date}</span><p class="milestone-row_what">${m.text}</p></li>`).join('')}</ol>
      ${flag(p.moments.provenance)}
    </div>
  </section>

  <section class="section" id="partners" aria-labelledby="partners-title">
    <div class="container centred">
      <p class="eyebrow">Campus partners</p>
      <h2 class="statement" id="partners-title" data-reveal>${p.partners.headline}</h2>
      <p class="lede text-secondary" style="max-width:36rem" data-reveal>${p.partners.intro}</p>
      ${flag(p.partners.linkProvenance)}
    </div>
    <div class="container">
      <ul class="partner-list">
        ${p.partners.items
          .map(
            (pt) => `<li class="partner${pt.provenance.tier === 'unsourced' ? ' is-draft' : ''}" data-reveal${pt.provenance.tier === 'unsourced' ? ' hidden' : ''}>
          <span class="partner_icon">${icon(pt.icon, true)}</span>
          <h3 class="heading-3 partner_name">${pt.name}</h3>
          <p class="text-secondary partner_role">${pt.role}</p>
          ${pt.href ? `<span class="partner_link">${textLink(pt.href, 'Visit', 'arrow_outward', true)}</span>` : ''}
          ${flag(pt.provenance)}
        </li>`,
          )
          .join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="section is-subtle" id="commitments" aria-labelledby="commitments-title">
    <div class="container centred">
      <p class="eyebrow">Our commitments</p>
      <h2 class="statement" id="commitments-title" data-reveal>${p.commitments.headline}</h2>
      <p class="lede text-secondary" style="max-width:40rem" data-reveal>${p.commitments.intro}</p>
    </div>
    <div class="container">
      <ol class="commitment-list">
        ${p.commitments.items
          .map(
            (k, i) => `<li class="commitment" id="commitment-${k.id}" data-reveal>
          <div class="commitment_head"><span class="footnote">0${i + 1}</span><span class="commitment_icon">${icon(k.icon, true)}</span><h3 class="heading-2">${k.name}</h3></div>
          <div class="commitment_body">
            ${k.body ? `<p class="lede">${k.body}</p>` : ''}
            ${k.stats.length ? ledger(k.stats, { flags: false }) : ''}
            ${k.facts.length ? `<ul class="fact-list">${k.facts.map((f) => `<li class="fact"><span class="footnote">${f.date}</span><span>${f.text}</span></li>`).join('')}</ul>` : ''}
            ${flag(k.provenance)}
          </div>
        </li>`,
          )
          .join('\n        ')}
      </ol>
    </div>
  </section>

  <section class="section" id="voices" aria-labelledby="voices-title">
    <div class="container centred">
      <p class="eyebrow">Voices</p>
      <h2 class="statement" id="voices-title" data-reveal>${p.voices.headline}</h2>
      <p class="lede text-secondary" style="max-width:36rem" data-reveal>${p.voices.intro}</p>
      <div class="chip-row" role="group" aria-label="Speakers" data-reveal>
        ${p.voices.speakers.map((s, i) => `<button type="button" class="chip${i === 0 ? ' is-selected' : ''}" aria-pressed="${i === 0}">${s}</button>`).join('')}
      </div>
      <p class="voices_empty" data-reveal>No quotes have been published yet. The first will carry a name, a role and a photograph.</p>
      ${flag(p.voices.provenance)}
    </div>
  </section>`;
  return shell({ page: 'community', title: 'Community', description, body, onPhoto: true });
}

/* ================================================================== FAQ */

export function faq() {
  const cats = c.faqCategories;
  const body = `
  ${pageHero({
    word: 'FAQs',
    headline: 'Questions neighbours ask about the campus, answered with sources.',
    intro: 'Every answer says which document it comes from. If your question isn’t here, write to the project team.',
    eyebrow: 'Common questions',
  })}

  <section class="section is-tight-top" aria-label="Questions">
    <div class="container faq-page">
      <div class="faq-filter" data-reveal>
        <label class="faq-search">${icon('search', true)}${srOnly('Search the questions')}<input type="search" id="faq-search" placeholder="Search the questions" autocomplete="off"></label>
        <div class="chip-row" role="group" aria-label="Category" id="faq-chips">
          <button type="button" class="chip is-selected" aria-pressed="true" data-cat="all">All</button>
          ${cats.map((k) => `<button type="button" class="chip" aria-pressed="false" data-cat="${k.id}">${k.name}</button>`).join('')}
        </div>
        <p class="footnote" id="faq-count" aria-live="polite"></p>
      </div>
      <div class="faq-groups" id="faq-groups">
        ${cats
          .map(
            (k) => `<div class="faq-group" id="category-${k.id}" data-cat="${k.id}">
          <h2 class="heading-2 faq-group_title" data-reveal>${k.name}</h2>
          <div class="faq_list is-wide">${faqRows(k.items, { withSource: true })}</div>
        </div>`,
          )
          .join('\n        ')}
      </div>
      <p class="lede text-secondary faq-none" id="faq-none" hidden>No questions match. Try fewer words, or write to us below.</p>
    </div>
  </section>

  ${closing({ id: 'ask-title', heading: 'Didn’t find your question?', body: 'Community members can write to the project team directly.', action: `${button('contact.html', 'All four inboxes', 'primary')}${textLink('mailto:info@homercityredevelopment.com', 'info@homercityredevelopment.com')}` })}`;
  return shell({ page: 'faq', title: 'FAQs', description, body, scripts: ['faq.js'] });
}

/* ================================================================= News */

export function news() {
  const body = `
  ${pageHero({
    word: 'News',
    headline: 'Press releases, statements and coverage of the campus.',
    intro: 'Newest first. Reporters can reach the media team at press@homercityredevelopment.com.',
    eyebrow: 'News',
  })}

  <section class="section is-tight-top" aria-label="News">
    <div class="container">
      <ul class="news-list">
        ${c.newsItems
          .map((n) => {
            const draft = !n.headline;
            const ext = n.type === 'Coverage';
            const inner = `
            ${n.media.photo ? `<span class="news-row_media">${picture(n.media, { sizes: '(min-width: 768px) 20rem, 100vw' })}</span>` : '<span class="news-row_media is-empty"></span>'}
            <span class="news-row_copy">
              <span class="eyebrow">${n.type} · ${n.date}${n.outlet ? ` · ${n.outlet}` : ''}</span>
              <span class="heading-2 news-row_headline">${n.headline ?? 'Headline not yet supplied'}</span>
              ${n.summary ? `<span class="text-secondary">${n.summary}</span>` : ''}
              ${flag(n.provenance)}
            </span>
            <span class="news-row_arrow">${icon(ext ? 'arrow_outward' : 'arrow_forward', true)}</span>`;
            return `<li class="news-item${draft ? ' is-draft' : ''}" data-reveal${draft ? ' hidden' : ''}>${n.href ? `<a class="news-row" href="${n.href}">${inner}</a>` : `<div class="news-row">${inner}</div>`}</li>`;
          })
          .join('\n        ')}
      </ul>
      <p class="footnote" style="margin-top:var(--stack-xl)">The client migrates earlier releases from the current site’s archive. A collection feed for local outlets goes in the page head in Webflow.</p>
    </div>
  </section>`;
  return shell({ page: 'news', title: 'News', description, body });
}

export function newsItem() {
  const r = c.workforceRelease;
  const body = `
  ${pageHero({
    headline: r.item.headline,
    intro: r.item.summary,
    eyebrow: `${r.item.type} · ${r.item.date}`,
    actions: `<button class="button is-secondary" type="button" data-copy-url aria-label="Copy a link to this release">Copy link ${icon('content_copy')}</button>${textLink('news.html', 'All news', 'arrow_back')}`,
  })}

  <section class="section is-tight-top" aria-label="The release">
    <div class="container article">
      <div class="article_body">
        ${r.body.map((p) => `<p class="lede" data-reveal>${p}</p>`).join('')}
        ${flag(r.bodyProvenance)}
      </div>
    </div>
  </section>

  ${giant('In this release')}
  <section class="section is-brand is-after-giant" aria-labelledby="release-numbers">
    <div class="container">
      <div class="numbers_head"><h2 class="lede" id="release-numbers">The figures in this release</h2><p class="eyebrow">Press release, 4 September 2026</p></div>
      ${figures(c.workforce.stats, { cls: 'is-four' })}
    </div>
  </section>

  ${closing({ id: 'press-title', heading: 'Media inquiries', body: 'Reporters and editors can reach the media team directly.', action: `${textLink(`mailto:${r.press}`, r.press)}` })}`;
  return shell({ page: 'news', title: 'Workforce grows to more than 1,800', description, body });
}

/* ============================================================== Contact */

export function contact() {
  const p = c.contactPage;
  const body = `
  ${pageHero({ headline: p.hero.headline, intro: p.hero.intro, eyebrow: 'Contact' })}

  <section class="section is-tight-top" aria-label="The four inboxes">
    <div class="container">
      <ul class="route-list">
        ${c.contacts
          .map(
            (r) => `<li class="inbox" data-reveal>
          <p class="eyebrow">${r.audience}</p>
          <p class="text-secondary inbox_for">${r.for}</p>
          <div class="inbox_actions"><a class="inbox_email" href="mailto:${r.email}">${r.email}</a><button class="copy-button" type="button" data-copy="${r.email}" aria-label="Copy the ${r.audience.replace('&amp;', 'and').toLowerCase()} address">${icon('content_copy', true)}</button></div>
        </li>`,
          )
          .join('\n        ')}
      </ul>
      ${flag(p.response)}
    </div>
  </section>

  <section class="section is-subtle" aria-labelledby="visit-title">
    <div class="container centred">
      <p class="eyebrow">Location</p>
      <h2 class="statement" id="visit-title" data-reveal>${p.visit.heading}</h2>
      <address class="lede visit_address" data-reveal>${c.site.name}<br>${c.site.address.join('<br>')}</address>
      ${flag(p.visit.provenance)}
      <div class="button-row" data-reveal>${button('faq.html', 'Read the common questions first', 'secondary')}</div>
    </div>
  </section>`;
  return shell({ page: 'contact', title: 'Contact', description, body });
}

/* ================================================================ Stubs */

export function redirect(title, target) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} · Homer City Energy Campus</title>
<meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="${target}">
<style>body{margin:0;padding:48px 16px;background:#fff;color:#3D3B36;font:16px/1.5 system-ui,sans-serif}a{color:#00597C}</style>
</head><body><p>${title} is now part of the <a href="${target}">Community page</a>.</p></body></html>
`;
}
