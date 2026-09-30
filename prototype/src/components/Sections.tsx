import { useId, useRef, useState, type KeyboardEvent } from 'react';
import {
  announcements,
  contacts,
  faqs,
  footnotes,
  hero,
  history,
  milestonePhases,
  milestones,
  nav,
  navCta,
  pillars,
  powerBlock,
  site,
  stats,
  workforce,
} from '../content/home';
import type { Stat } from '../content/types';
import { Button, Flag, Icon, MediaFrame, SectionHead } from './primitives';
import { SiteHeader } from './Header';

/* ---------------------------------------------------------------- Hero */

export function Hero() {
  return (
    <section className="hero theme-dark" aria-labelledby="hero-title">
      <div className="hero_media" role="img" aria-label={hero.media.alt}>
        <div className="hero_brief" aria-hidden="true">
          <Icon name="photo_camera" />
          <span className="media_kind">{hero.media.kind} needed</span>
          <span className="media_note">{hero.media.brief}</span>
        </div>
      </div>
      <div className="hero_scrim" aria-hidden="true" />
      <SiteHeader />
      <div className="hero_body">
        <div className="hero_copy">
          <h1 className="heading-xl" id="hero-title">
            {hero.headline}
          </h1>
          <p className="body-lg hero_intro">{hero.intro}</p>
          <Button href={hero.cta.href} tier="secondary">
            {hero.cta.label}
          </Button>
        </div>
        <aside className="hero_news" id="news" aria-label="Latest updates">
          {announcements.map((a) => (
            <a className="news-card" href={a.href} key={a.id}>
              <span className="news-card_thumb" aria-hidden="true">
                <Icon name="photo_camera" />
              </span>
              <span className="news-card_copy">
                <span className="eyebrow">
                  {a.kind} · {a.date}
                </span>
                <span className="body-sm">{a.headline}</span>
                <span className="news-card_more">
                  Read more <Icon name="arrow_forward" />
                </span>
              </span>
              <Flag provenance={a.provenance} />
            </a>
          ))}
        </aside>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ By the numbers */

function StatBlock({ stat, size = 'display', flag = true }: { stat: Stat; size?: 'display' | 'large'; flag?: boolean }) {
  return (
    <div className="stat">
      <p className="eyebrow stat_qualifier">{stat.qualifier ?? ' '}</p>
      <p className={`stat_figure is-${size}`}>
        {stat.figure}
        {stat.unit && <span className="stat_unit"> {stat.unit}</span>}
      </p>
      <p className="label-sm stat_label">{stat.label}</p>
      {stat.asOf && (
        <p className="footnote stat_note">
          As of {stat.asOf.month} {stat.asOf.year}
        </p>
      )}
      {stat.footnote && <p className="footnote stat_note">{footnotes[stat.footnote]}</p>}
      {flag && <Flag provenance={stat.provenance} />}
    </div>
  );
}

export function Numbers() {
  return (
    <section className="section theme-dark" aria-labelledby="numbers-title">
      <div className="container">
        <h2 className="heading-sm numbers_title" id="numbers-title">
          Campus by the numbers
        </h2>
        <div className="numbers_grid">
          {stats.map((s) => (
            <StatBlock stat={s} key={s.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Workforce */

export function Workforce() {
  return (
    <section className="section" id="workforce" aria-labelledby="workforce-title">
      <div className="container split">
        <div className="split_copy">
          <SectionHead eyebrow="Careers" title={workforce.heading} id="workforce-title" />
          <div className="workforce_stats">
            {workforce.stats.map((s) => (
              <StatBlock stat={s} size="large" flag={false} key={s.id} />
            ))}
          </div>
          {/* All four share one source, so they share one flag. */}
          <Flag provenance={workforce.stats[0].provenance} />
          <Button href={workforce.cta.href}>{workforce.cta.label}</Button>
        </div>
        <MediaFrame media={workforce.media} shape="feature-cut" className="split_media" />
      </div>
      <div className="container">
        <h3 className="heading-xs trades_title">Nine trades on site</h3>
        <ul className="trades">
          {workforce.trades.map((t) => (
            <li className="trades_item" key={t.name}>
              <Icon name={t.icon} size="md" className="trades_icon" />
              <span className="body-lg">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Power Block */

export function PowerBlock() {
  return (
    <section className="section is-surface" id="power-block" aria-labelledby="power-title">
      <div className="container split is-reversed">
        <div className="split_copy">
          <SectionHead eyebrow="What we’re building" title={powerBlock.heading} id="power-title" />
          <p className="body-lg text-secondary">{powerBlock.intro}</p>
          <ul className="facility-list">
            {powerBlock.facilities.map((f) => (
              <li className="facility" key={f.id}>
                <span className="heading-xs">{f.name}</span>
                <span className="body-sm text-secondary">{f.detail}</span>
                {f.stamp && <span className="eyebrow facility_stamp">{f.stamp}</span>}
              </li>
            ))}
          </ul>
          <Button href={powerBlock.cta.href}>{powerBlock.cta.label}</Button>
        </div>
        <MediaFrame media={powerBlock.media} shape="feature" className="split_media" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- History */

export function History() {
  return (
    <section className="section" id="history" aria-labelledby="history-title">
      <div className="container split">
        <div className="split_copy is-centered">
          <SectionHead eyebrow="Who we are" title={history.heading} id="history-title" />
          {history.body.map((p) => (
            <p className="body-lg text-secondary" key={p}>
              {p}
            </p>
          ))}
          <Button href={history.cta.href}>{history.cta.label}</Button>
        </div>
        <MediaFrame media={history.media} shape="feature" className="split_media" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Timeline */

const phases = ['2025', '2026', 'Upcoming'] as const;

export function Timeline() {
  const [active, setActive] = useState<(typeof phases)[number]>('2026');
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();

  const onKey = (e: KeyboardEvent, i: number) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + phases.length) % phases.length;
    setActive(phases[next]);
    tabs.current[next]?.focus();
  };

  const items = milestones.filter((m) => String(m.year) === active);
  return (
    <section className="section is-surface" id="timeline" aria-labelledby="timeline-title">
      <div className="container">
        <div className="timeline_head">
          <h2 className="heading-lg" id="timeline-title">
            Key milestones
          </h2>
          <div className="tabs" role="tablist" aria-label="Milestone year">
            {phases.map((p, i) => (
              <button
                key={p}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                className="tab"
                role="tab"
                type="button"
                id={`${base}-${p}`}
                aria-selected={active === p}
                aria-controls={`${base}-panel`}
                tabIndex={active === p ? 0 : -1}
                onClick={() => setActive(p)}
                onKeyDown={(e) => onKey(e, i)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="timeline" role="tabpanel" id={`${base}-panel`} aria-labelledby={`${base}-${active}`}>
          <p className="heading-md timeline_phase">
            {active} | {milestonePhases[active]}
          </p>
          <ol className="timeline_list">
            {items.map((m) => (
              <li className="milestone" key={m.id}>
                <span className="milestone_node" aria-hidden="true" />
                <p className="eyebrow milestone_date">
                  {m.month}
                  {typeof m.year === 'number' ? ` ${m.year}` : ''}
                </p>
                <p className="heading-xs">{m.title}</p>
                <Flag provenance={m.provenance} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Pillars */

export function Pillars() {
  const [open, setOpen] = useState(pillars[0].id);
  const base = useId();
  const current = pillars.find((p) => p.id === open) ?? pillars[0];

  return (
    <section className="section" id="pillars" aria-labelledby="pillars-title">
      <div className="container split">
        <div className="split_copy">
          <p className="eyebrow">Community stewardship</p>
          <h2 className="sr-only" id="pillars-title">
            Project pillars
          </h2>
          <ul className="pillar-list">
            {pillars.map((p) => {
              const isOpen = p.id === open;
              return (
                <li className={`pillar${isOpen ? ' is-open' : ''}`} key={p.id}>
                  <h3>
                    <button
                      className="pillar_toggle heading-lg"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${base}-${p.id}`}
                      onClick={() => setOpen(p.id)}
                    >
                      {p.name}
                    </button>
                  </h3>
                  <div className="pillar_panel" id={`${base}-${p.id}`} hidden={!isOpen}>
                    <p className="body-lg text-secondary">{p.copy}</p>
                    <a className="text-link" href={p.href}>
                      {p.linkLabel}
                      <Icon name="arrow_forward" />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <MediaFrame media={current.media} shape="feature" className="split_media" key={current.id} />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ */

export function Faq() {
  const [open, setOpen] = useState<string | null>(faqs[0].id);
  const base = useId();
  return (
    <section className="section theme-dark" id="faq" aria-labelledby="faq-title">
      <div className="container faq">
        <div className="faq_intro">
          <h2 className="heading-lg" id="faq-title">
            Common questions
          </h2>
          <Button href={navCta.href}>Ask us a question</Button>
        </div>
        <ul className="faq_list">
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <li className="faq-row" key={f.id}>
                <h3>
                  <button
                    className="faq-row_toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${base}-${f.id}`}
                    onClick={() => setOpen(isOpen ? null : f.id)}
                  >
                    <span className="heading-md">{f.question}</span>
                    <span className={`icon-button${isOpen ? ' is-open' : ''}`} aria-hidden="true">
                      <Icon name={isOpen ? 'close' : 'add'} size="md" />
                    </span>
                  </button>
                </h3>
                <div className="faq-row_answer" id={`${base}-${f.id}`} hidden={!isOpen}>
                  {f.answer && <p className="body-lg text-secondary">{f.answer}</p>}
                  <Flag provenance={f.provenance} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Footer */

export function SiteFooter() {
  return (
    <footer className="site-footer theme-dark" id="contact">
      <div className="container site-footer_grid">
        <div>
          <p className="eyebrow">Get in touch</p>
          <ul className="contact-list">
            {contacts.map((c) => (
              <li key={c.audience}>
                <span className="body-sm text-secondary">{c.audience}</span>
                <a className="text-link body-lg" href={`mailto:${c.email}`}>
                  {c.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Location</p>
          <address className="body-lg">
            {site.name}
            <br />
            {site.address[0]}
            <br />
            {site.address[1]}
          </address>
        </div>
        <div>
          <p className="eyebrow">Pages</p>
          <ul className="footer-nav">
            {[...nav, navCta].map((n) => (
              <li key={n.href}>
                <a className="footer-nav_link body-sm" href={n.href}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container site-footer_base">
        <p className="footnote">© {new Date().getFullYear()} Homer City Generation</p>
        <p className="footnote">Prototype — reference implementation for the Webflow build. Not the live site.</p>
      </div>
    </footer>
  );
}
