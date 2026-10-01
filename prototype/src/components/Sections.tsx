import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';
import { trackScrollProgress } from '../motion';
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
  pageHref,
  pillars,
  powerBlock,
  site,
  stats,
  workforce,
} from '../content/home';
import { placeholderAlt, placeholderPhoto } from '../content/placeholder';
import type { Milestone, Stat } from '../content/types';
import type { PageId } from '../content/home';
import { Button, Flag, Icon, MediaFrame, notesOn, Picture, PlaceholderTag, SectionHead } from './primitives';
import { SiteHeader } from './Header';

/* ---------------------------------------------------------------- Hero */

export function Hero() {
  return (
    <section className="hero theme-dark" aria-labelledby="hero-title">
      <div className="hero_media">
        <Picture photo={placeholderPhoto} alt={placeholderAlt} sizes="100vw" eager className="hero_picture" />
      </div>
      <div className="hero_scrim" aria-hidden="true" />
      <SiteHeader />
      {notesOn && (
        <div className="hero_tag">
          <PlaceholderTag media={hero.media} />
        </div>
      )}
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
              <span className="news-card_thumb">
                <Picture photo={placeholderPhoto} alt="" sizes="100px" eager />
              </span>
              <span className="news-card_copy">
                <span className="eyebrow news-card_meta">
                  {a.kind} · {a.date}
                  <Icon name="arrow_forward" className="news-card_arrow" />
                </span>
                {/* Clamped to two lines on screen; the full headline stays in the markup. */}
                <span className="body-sm news-card_headline">{a.headline}</span>
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

/** `unit="md"`: a smaller unit, so figure and unit share one line in a three-column grid. */
export function StatBlock({ stat, size = 'display', unit = 'lg', flag = true }: { stat: Stat; size?: 'display' | 'large'; unit?: 'lg' | 'md'; flag?: boolean }) {
  return (
    <div className="stat">
      <p className="eyebrow stat_qualifier">{stat.qualifier ?? ' '}</p>
      <p className={`stat_figure is-${size}`}>
        {stat.figure}
        {stat.unit && <span className={`stat_unit${unit === 'md' ? ' is-md' : ''}`}> {stat.unit}</span>}
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
    <section className="section theme-dark" id="numbers" aria-labelledby="numbers-title">
      <div className="container">
        <h2 className="heading-sm numbers_title" id="numbers-title">
          Campus by the numbers
        </h2>
        <div className="numbers_grid is-three">
          {stats.map((s) => (
            <StatBlock unit="md" stat={s} key={s.id} />
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
          <div className="button-row">
            <Button href={workforce.cta.href}>{workforce.cta.label}</Button>
            <Button href="workforce.html" tier="secondary">
              Meet the trades
            </Button>
          </div>
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

/** One year's milestones. Its rail fills as the group scrolls past. */
function MilestoneGroup({ phase, items }: { phase: (typeof phases)[number]; items: Milestone[] }) {
  const list = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = list.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    return trackScrollProgress(el, (p) => el.style.setProperty('--rail-progress', p.toFixed(3)));
  }, []);

  const headingId = `milestones-${phase}`;
  return (
    <section className="timeline_group" aria-labelledby={headingId}>
      {/* Sticks while its milestones scroll by, so the year is always in view. */}
      <div className="timeline_label">
        <h3 className="heading-md" id={headingId}>
          {phase}
        </h3>
        <p className="body-sm text-secondary">{milestonePhases[phase]}</p>
      </div>
      <ol className="timeline_list" ref={list}>
        {items.map((m, i) => (
          <li className="milestone" key={m.id} style={{ '--reveal-order': Math.min(i, 5) } as CSSProperties}>
            <p className="eyebrow milestone_date">
              {m.month}
              {typeof m.year === 'number' ? ` ${m.year}` : ''}
            </p>
            <p className="heading-xs">{m.title}</p>
            <Flag provenance={m.provenance} />
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Every milestone in one continuous scroll, grouped by year. */
export function Timeline() {
  return (
    <section className="section is-surface" id="timeline" aria-labelledby="timeline-title">
      <div className="container">
        <div className="timeline_head">
          <h2 className="heading-lg" id="timeline-title">
            Key milestones
          </h2>
          <p className="body-lg text-secondary">From demolition in March 2025 to what comes next.</p>
        </div>
        <div className="timeline">
          {phases.map((p) => (
            <MilestoneGroup key={p} phase={p} items={milestones.filter((m) => String(m.year) === p)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Pillars */

/**
 * Scroll-driven accordion. The section is a tall track; the stage inside it
 * pins while the reader scrolls, and each quarter of the track opens the next
 * pillar. A click jumps the page to that pillar's quarter, so scroll position
 * and the open pillar never disagree. Where the stage cannot pin (a short
 * landscape phone), it falls back to a plain click accordion.
 */
export function Pillars() {
  const [open, setOpen] = useState(0);
  const track = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const jumping = useRef<number | null>(null);
  const base = useId();

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    return trackScrollProgress(
      el,
      (p) => {
        if (!isPinned(stage.current)) return;
        const i = Math.min(pillars.length - 1, Math.floor(p * pillars.length));
        // While a click is scrolling the page, ignore the pillars it passes.
        if (jumping.current !== null) {
          if (i !== jumping.current) return;
          jumping.current = null;
        }
        setOpen(i);
      },
      (r) => pinnedProgress(r, stage.current),
    );
  }, []);

  const jumpTo = (i: number) => {
    setOpen(i);
    const el = track.current;
    if (!el || !isPinned(stage.current)) return;
    const { travel, pinTop } = pinGeometry(el.offsetHeight, stage.current);
    const top = el.getBoundingClientRect().top + window.scrollY - pinTop + travel * ((i + 0.5) / pillars.length);
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    jumping.current = i;
    window.setTimeout(() => (jumping.current = null), 1200);
    window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
  };

  return (
    <section className="pillars" id="pillars" aria-labelledby="pillars-title" ref={track}>
      <div className="pillars_stage" ref={stage}>
        <div className="container pillars_layout">
          <div className="pillars_copy">
            <p className="eyebrow">Community stewardship</p>
            <h2 className="sr-only" id="pillars-title">
              Project pillars
            </h2>
            <ul className="pillar-list">
              {pillars.map((p, i) => {
                const isOpen = i === open;
                return (
                  <li className={`pillar${isOpen ? ' is-open' : ''}`} key={p.id}>
                    <h3>
                      <button
                        className="pillar_toggle heading-lg"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`${base}-${p.id}`}
                        onClick={() => jumpTo(i)}
                      >
                        {p.name}
                      </button>
                    </h3>
                    {/* Always rendered so it can animate open and shut; `inert`
                     * keeps a closed panel's link out of the tab order and the
                     * accessibility tree, as `hidden` did. */}
                    <div className="pillar_body" id={`${base}-${p.id}`} inert={!isOpen}>
                      <div className="pillar_panel">
                        <p className="body-lg text-secondary">{p.copy}</p>
                        <a className="text-link" href={p.href}>
                          {p.linkLabel}
                          <Icon name="arrow_forward" />
                        </a>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* All four frames are stacked; the open pillar's fades in. */}
          <div className="pillars_media">
            {pillars.map((p, i) => (
              <MediaFrame
                media={p.media}
                shape="feature"
                className={`pillars_frame${i === open ? ' is-active' : ''}`}
                key={p.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const isPinned = (el: HTMLElement | null) => !!el && getComputedStyle(el).position === 'sticky';

/** How far the stage travels while pinned, and where it pins. */
function pinGeometry(trackHeight: number, stage: HTMLElement | null) {
  const pinTop = stage ? parseFloat(getComputedStyle(stage).top) || 0 : 0;
  return { travel: trackHeight - (stage?.offsetHeight ?? window.innerHeight), pinTop };
}

/** 0 when the stage first pins, 1 when it lets go. */
function pinnedProgress(r: DOMRect, stage: HTMLElement | null) {
  const { travel, pinTop } = pinGeometry(r.height, stage);
  return travel > 0 ? (pinTop - r.top) / travel : 0;
}

/* ----------------------------------------------------------------- FAQ */

/** Questions without a sourced answer only appear with review notes on. */
const shownFaqs = faqs.filter((f) => f.answer || notesOn);

export function Faq() {
  const [open, setOpen] = useState<string | null>(shownFaqs[0].id);
  const base = useId();
  return (
    <section className="section theme-dark" id="faq" aria-labelledby="faq-title">
      <div className="container faq">
        <div className="faq_intro">
          <h2 className="heading-lg" id="faq-title">
            Common questions
          </h2>
          <div className="button-row">
            <Button href="faq.html">See all the questions</Button>
            <Button href={navCta.href} tier="secondary">
              Ask us a question
            </Button>
          </div>
        </div>
        <ul className="faq_list">
          {shownFaqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <li className={`faq-row${isOpen ? ' is-open' : ''}`} key={f.id}>
                <h3>
                  <button
                    className="faq-row_toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${base}-${f.id}`}
                    onClick={() => setOpen(isOpen ? null : f.id)}
                  >
                    <span className="heading-md">{f.question}</span>
                    {/* One + that turns a quarter-and-a-half into ×, rather than a swapped glyph. */}
                    <span className={`icon-button${isOpen ? ' is-open' : ''}`} aria-hidden="true">
                      <Icon name="add" size="md" className="faq-row_icon" />
                    </span>
                  </button>
                </h3>
                {/* Same open/shut technique as the pillars; `inert` stands in for `hidden`. */}
                <div className="faq-row_body" id={`${base}-${f.id}`} inert={!isOpen}>
                  <div className="faq-row_answer">
                    {f.answer && <p className="body-lg text-secondary">{f.answer}</p>}
                    <Flag provenance={f.provenance} />
                  </div>
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

export function SiteFooter({ current = 'home' }: { current?: PageId }) {
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
            {nav.map((n) => (
              <li key={n.href}>
                <a className="footer-nav_link body-sm" href={pageHref(n.href, current)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container site-footer_base">
        <p className="footnote">© {new Date().getFullYear()} Homer City Generation</p>
        <p className="footnote">Prototype: a reference implementation for the Webflow build. Not the live site.</p>
      </div>
    </footer>
  );
}
