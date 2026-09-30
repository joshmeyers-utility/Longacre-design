import { useEffect, useRef, useState } from 'react';
import { AlertBar } from '../components/Header';
import { PageHero } from '../components/PageHero';
import { SiteFooter, StatBlock, Timeline } from '../components/Sections';
import { Button, Flag, Icon, MediaFrame, SectionHead } from '../components/primitives';
import { campusPage as page } from '../content/campus';
import { initReveals, scrollToHash, trackScrollProgress } from '../motion';

/**
 * The Campus page — docs/02-plan.md §5.2. Built from the shared parts (page
 * hero, stat block, media frame, timeline, footer) plus two new ones: the
 * tour (numbered stops beside a sticky heading) and the photo essay (a
 * horizontal strip). Water, fuel agreements and the site map wait on
 * content; see content/campus.ts.
 */
export function CampusPage() {
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
      <Hero />
      <main id="main">
        <CampusNumbers />
        <Tour />
        <Essay />
        <Timeline />
        <Next />
      </main>
      <SiteFooter current="campus" />
    </>
  );
}

function Hero() {
  const { hero } = page;
  return (
    <PageHero current="campus" tone="light" eyebrow={hero.eyebrow} headline={hero.headline} intro={hero.intro} media={hero.media}>
      <Button href="#tour">Take the tour</Button>
      <Button href="#progress" tier="secondary">
        See it being built
      </Button>
    </PageHero>
  );
}

function CampusNumbers() {
  return (
    <section className="section theme-dark" id="numbers" aria-labelledby="numbers-title">
      <div className="container">
        <h2 className="heading-sm numbers_title" id="numbers-title">
          The campus at a glance
        </h2>
        <div className="numbers_grid">
          {page.stats.map((s) => (
            <StatBlock stat={s} key={s.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Tour */

/**
 * Numbered stops beside a heading that sticks while they scroll by. The
 * rail beside the stops fills with scroll, as the timeline's does.
 */
function Tour() {
  const list = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = list.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    return trackScrollProgress(el, (p) => el.style.setProperty('--rail-progress', p.toFixed(3)));
  }, []);
  const { tour } = page;
  return (
    <section className="section" id="tour" aria-labelledby="tour-title">
      <div className="container tour">
        <div className="tour_head">
          <SectionHead eyebrow="The site tour" title={tour.heading} id="tour-title" />
          <p className="body-lg text-secondary">{tour.intro}</p>
        </div>
        <ol className="tour_list" ref={list}>
          {tour.stops.map((s, i) => (
            <li className="tour-stop" id={`stop-${s.id}`} key={s.id}>
              <div className="tour-stop_copy">
                <p className="eyebrow tour-stop_number">Stop {i + 1} of {tour.stops.length}</p>
                <h3 className="heading-md">
                  {s.name}
                  {s.short && <span className="text-secondary"> ({s.short})</span>}
                </h3>
                <p className="label-md text-secondary">{s.detail}</p>
                <p className="body-lg">{s.body}</p>
                {s.stages.length > 0 && (
                  <ul className="tour-stop_stages" aria-label="Photographed">
                    {s.stages.map((st) => (
                      <li className="tour-stop_stage body-sm" key={st.caption}>
                        <span className="text-secondary">{st.date}</span>
                        {st.caption}
                      </li>
                    ))}
                  </ul>
                )}
                <Flag provenance={s.provenance} />
              </div>
              <MediaFrame media={s.media} shape="card" sizes="(min-width: 1024px) 40vw, 100vw" className="tour-stop_media" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Photo essay */

/**
 * The deck's photo essay as a horizontal strip. Swipe, scroll or use the
 * arrows; the rail under it shows how far along you are. Snap points keep
 * a card at the left edge. Every card is in the page — nothing loads on
 * demand — so the strip also reads as a plain list.
 */
function Essay() {
  const track = useRef<HTMLOListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 1);
      setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  /** One card's width per press, so the strip moves in steps a reader can follow. */
  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector('li');
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap) });
  };

  const { essay } = page;
  return (
    <section className="section theme-dark essay" id="progress" aria-labelledby="essay-title">
      <div className="container essay_head">
        <SectionHead eyebrow="Build progress" title={essay.heading} id="essay-title" />
        <p className="body-lg text-secondary">{essay.intro}</p>
        <div className="essay_controls">
          <button className="icon-button" type="button" onClick={() => step(-1)} disabled={edge.start} aria-label="Earlier">
            <Icon name="arrow_back" />
          </button>
          <button className="icon-button" type="button" onClick={() => step(1)} disabled={edge.end} aria-label="Later">
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>
      <ol className="essay_track" ref={track} tabIndex={0} aria-label="Photo essay, oldest first. Scroll sideways for later stages.">
        {essay.stages.map((s) => (
          <li className="essay-card" key={s.id}>
            <MediaFrame media={s.media} shape="card" sizes="(min-width: 768px) 20rem, 78vw" />
            <p className="eyebrow essay-card_date">{s.date}</p>
            <p className="heading-xs">{s.caption}</p>
          </li>
        ))}
      </ol>
      <div className="container">
        <div className="essay_rail" aria-hidden="true">
          <span className="essay_rail-fill" style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }} />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Next */

function Next() {
  const n = page.next;
  return (
    <section className="section" aria-labelledby="next-title">
      <div className="container apply">
        <h2 className="heading-lg" id="next-title">
          {n.heading}
        </h2>
        <div className="apply_body">
          <p className="body-lg text-secondary">{n.body}</p>
          <Button href="faq.html">Read the common questions</Button>
          <p className="body-sm text-secondary">
            Community members: <a className="text-link" href={`mailto:${n.email}`}>{n.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
