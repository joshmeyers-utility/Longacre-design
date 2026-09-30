import { useEffect, useId, useState } from 'react';
import { AlertBar, SiteHeader } from '../components/Header';
import { SiteFooter, StatBlock } from '../components/Sections';
import { Button, Flag, Icon, MediaFrame, notesOn, Picture, PlaceholderTag, SectionHead } from '../components/primitives';
import { placeholderAlt, placeholderPhoto } from '../content/placeholder';
import { workforcePage as page } from '../content/workforce';
import { initReveals, scrollToHash } from '../motion';

/**
 * Workforce page — docs/02-plan.md §5.3. Built from the homepage's parts:
 * the same hero, stat block, split, media frame and footer classes, plus
 * two new ones (growth chart, trade tiles). Section order follows the spec;
 * spotlights and union names wait on content (see content/workforce.ts).
 */
export function WorkforcePage() {
  useEffect(() => {
    scrollToHash();
    return initReveals();
  }, []);
  return (
    <>
      <a className="sr-only" href="#main">
        Skip to content
      </a>
      <AlertBar />
      <PageHero />
      <main id="main">
        <WorkforceNumbers />
        <GrowthChart />
        <Trades />
        <Apprentices />
        <LongView />
        <Apply />
      </main>
      <SiteFooter current="workforce" />
    </>
  );
}

/* ---------------------------------------------------------------- Hero */

/** The homepage hero, shorter and without the news cards. */
function PageHero() {
  const { hero } = page;
  return (
    <section className="hero is-page theme-dark" aria-labelledby="hero-title">
      <div className="hero_media">
        <Picture photo={placeholderPhoto} alt={placeholderAlt} sizes="100vw" eager className="hero_picture" />
      </div>
      <div className="hero_scrim" aria-hidden="true" />
      <SiteHeader current="workforce" />
      {notesOn && (
        <div className="hero_tag">
          <PlaceholderTag media={hero.media} />
        </div>
      )}
      <div className="hero_body">
        <div className="hero_copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="heading-xl" id="hero-title">
            {hero.headline}
          </h1>
          <p className="body-lg hero_intro">{hero.intro}</p>
          <div className="button-row">
            <Button href={`mailto:${page.apply.email}`}>Find work on the campus</Button>
            <Button href="#trades" tier="secondary">
              See the nine trades
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Numbers */

function WorkforceNumbers() {
  return (
    <section className="section theme-dark" aria-labelledby="numbers-title">
      <div className="container">
        <h2 className="heading-sm numbers_title" id="numbers-title">
          Who is on site
        </h2>
        <div className="numbers_grid">
          {page.stats.map((s) => (
            <StatBlock stat={s} flag={false} key={s.id} />
          ))}
        </div>
        {/* All four share one source, so they share one flag. */}
        <Flag provenance={page.stats[0].provenance} />
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Growth chart */

/**
 * Column chart built from plain elements, so Webflow can drive it from the
 * Stats collection: each column's height is its value over the scale
 * maximum, bound as a CMS field into an inline style. One series, so no
 * legend — the title names it. Ink for recorded figures; the projected
 * year-end column is lighter and labelled, never colour alone. Hover or
 * focus a column for its source; the table below holds every value.
 */
function GrowthChart() {
  const { growth } = page;
  const max = 2000;
  const ticks = [0, 500, 1000, 1500, 2000];
  const [active, setActive] = useState<string | null>(null);
  const tableId = useId();
  // Direct labels on the first, latest recorded and projected columns only.
  const labelled = new Set(['mar', 'sep', 'dec']);

  return (
    <section className="section" aria-labelledby="growth-title">
      <div className="container growth">
        <header className="growth_head">
          <h2 className="heading-lg" id="growth-title">
            {growth.title}
          </h2>
          <p className="body-lg text-secondary">{growth.subtitle}</p>
        </header>

        <figure className="growth-chart" aria-describedby={tableId}>
          <div className="growth-chart_plot">
            <ol className="growth-chart_grid" aria-hidden="true">
              {ticks.map((t) => (
                <li className="growth-chart_tick" key={t} style={{ bottom: `${(t / max) * 100}%` }}>
                  <span className="footnote">{t.toLocaleString('en-US')}</span>
                </li>
              ))}
            </ol>
            <ol className="growth-chart_columns">
              {growth.points.map((pt) => {
                const isActive = active === pt.id;
                return (
                  <li className="growth-chart_slot" key={pt.id}>
                    {/* The whole slot is the hover target, not just the column. */}
                    <button
                      className={`growth-chart_hit${isActive ? ' is-active' : ''}`}
                      type="button"
                      aria-label={`${pt.label}: ${pt.figure}${pt.projected ? ' (projected)' : ''}. Source: ${pt.source}`}
                      onMouseEnter={() => setActive(pt.id)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(pt.id)}
                      onBlur={() => setActive(null)}
                    >
                      <span className={`growth-chart_bar${pt.projected ? ' is-projected' : ''}`} style={{ height: `${(pt.value / max) * 100}%` }}>
                        {(labelled.has(pt.id) || isActive) && (
                          <span className="growth-chart_value label-md">
                            {pt.projected && <span className="eyebrow">Projected</span>}
                            {pt.figure}
                          </span>
                        )}
                      </span>
                      {isActive && (
                        <span className="growth-chart_tip body-sm" role="presentation">
                          {pt.source}
                        </span>
                      )}
                    </button>
                    <span className="growth-chart_label label-sm">{pt.label}</span>
                  </li>
                );
              })}
            </ol>
          </div>
          <figcaption className="footnote growth-chart_note">{growth.note}</figcaption>
        </figure>

        <details className="growth-table">
          <summary className="text-link">
            Show as a table
            <Icon name="add" className="growth-table_icon" />
          </summary>
          <table id={tableId}>
            <caption className="sr-only">{growth.title}</caption>
            <thead>
              <tr>
                <th scope="col">When</th>
                <th scope="col">People on site</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              {growth.points.map((pt) => (
                <tr key={pt.id}>
                  <th scope="row">{pt.id === 'dec' ? 'End of 2026' : `${pt.label} 2026`}</th>
                  <td>
                    {pt.figure}
                    {pt.projected ? ' (projected)' : ''}
                  </td>
                  <td>{pt.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Trades */

/**
 * Nine tiles. Pointer: hover previews the description. Touch and keyboard:
 * tap, click or Enter pins it open (aria-expanded). Every description is in
 * the DOM, so search engines and screen readers get all nine regardless.
 * The tile never changes size — the description rises over the tile face.
 */
function Trades() {
  const [open, setOpen] = useState<string | null>(null);
  const base = useId();
  return (
    <section className="section is-surface" id="trades" aria-labelledby="trades-title">
      <div className="container">
        <SectionHead eyebrow="Nine trades on site" title="Who does what" id="trades-title" />
        <ul className="trade-grid">
          {page.trades.map((t) => {
            const isOpen = open === t.name;
            const descId = `${base}-${t.name}`;
            return (
              <li className={`trade-tile${isOpen ? ' is-open' : ''}`} key={t.name}>
                <button
                  className="trade-tile_toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={descId}
                  onClick={() => setOpen(isOpen ? null : t.name)}
                >
                  <Icon name={t.icon} size="md" className="trade-tile_icon" />
                  <span className="heading-sm">{t.name}</span>
                  <span className="icon-button trade-tile_more" aria-hidden="true">
                    <Icon name="add" className="trade-tile_more-icon" />
                  </span>
                </button>
                {/* The name repeats here so it stays in view over the description;
                 * hidden from screen readers, which already have it from the button. */}
                <div className="trade-tile_desc" id={descId}>
                  <span className="trade-tile_desc-name label-md" aria-hidden="true">
                    {t.name}
                  </span>
                  <p>{t.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <Flag provenance={page.tradeProvenance} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Apprentices */

function Apprentices() {
  const a = page.apprentices;
  return (
    <section className="section" id="apprentices" aria-labelledby="apprentices-title">
      <div className="container split">
        <div className="split_copy">
          <SectionHead eyebrow="Apprenticeships" title={a.heading} id="apprentices-title" />
          <StatBlock stat={a.stat} size="large" flag={false} />
          <p className="body-lg text-secondary">{a.body}</p>
          <Flag provenance={a.stat.provenance} />
          <Button href={`mailto:${page.apply.email}`}>Ask about apprenticeships</Button>
        </div>
        <MediaFrame media={a.media} shape="feature-cut" className="split_media" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Long view */

function LongView() {
  return (
    <section className="section theme-dark" aria-labelledby="long-title">
      <div className="container">
        <h2 className="heading-sm numbers_title" id="long-title">
          {page.longView.heading}
        </h2>
        <div className="numbers_grid">
          {page.longView.stats.map((s) => (
            <StatBlock stat={s} key={s.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Apply */

function Apply() {
  const a = page.apply;
  return (
    <section className="section is-surface" id="apply" aria-labelledby="apply-title">
      <div className="container apply">
        <h2 className="heading-lg" id="apply-title">
          {a.heading}
        </h2>
        <div className="apply_body">
          <p className="body-lg text-secondary">{a.body}</p>
          <a className="apply_email heading-md" href={`mailto:${a.email}`}>
            {a.email}
            <Icon name="arrow_forward" size="md" />
          </a>
          <p className="body-sm text-secondary">{a.vendors}</p>
        </div>
      </div>
    </section>
  );
}
