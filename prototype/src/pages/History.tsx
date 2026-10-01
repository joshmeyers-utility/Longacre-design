import { useEffect, useRef } from 'react';
import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { Timeline } from '../components/Sections';
import { Button, Flag, MediaFrame, SectionHead } from '../components/primitives';
import { historyPage as page } from '../content/history';
import { trackScrollProgress } from '../motion';

/**
 * Our history. Then-and-now pair, the photo essay as a vertical run of
 * dated frames (the tour's rail, reused), then the milestone timeline.
 */
export function HistoryPage() {
  const { hero } = page;
  return (
    <PageShell current="history" hero={<PageHero current="history" tone="light" eyebrow={hero.eyebrow} headline={hero.headline} intro={hero.intro} />}>
      <Pair />
      <Stages />
      <Timeline />
      <section className="section is-surface" aria-labelledby="next-title">
        <div className="container apply">
          <h2 className="heading-lg" id="next-title">
            What is being built now
          </h2>
          <div className="apply_body">
            <p className="body-lg text-secondary">The four stops on the site tour, what each one does, and the figures for the whole campus.</p>
            <Button href="campus.html">See the campus</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Pair() {
  const { pair } = page;
  return (
    <section className="section theme-dark" aria-labelledby="pair-title">
      <div className="container pair">
        <SectionHead eyebrow="The site" title={pair.heading} id="pair-title" />
        <div className="pair_grid">
          {[pair.before, pair.after].map((s) => (
            <div className="pair_item" key={s.id}>
              <MediaFrame media={s.media} shape="card" sizes="(min-width: 768px) 50vw, 100vw" />
              <p className="eyebrow">{s.date}</p>
              <p className="heading-xs">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stages() {
  const list = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = list.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    return trackScrollProgress(el, (p) => el.style.setProperty('--rail-progress', p.toFixed(3)));
  }, []);
  return (
    <section className="section" aria-labelledby="stages-title">
      <div className="container tour">
        <div className="tour_head">
          <SectionHead eyebrow={`${page.stages.length} stages`} title="Stage by stage" id="stages-title" />
          <p className="body-lg text-secondary">Oldest first, with the date each photograph was taken.</p>
          <Flag provenance={page.provenance} />
        </div>
        {/* The tour's list and rail, reused. */}
        <ol className="tour_list" ref={list}>
          {page.stages.map((s) => (
            <li className="tour-stop" id={s.id} key={s.id}>
              <div className="tour-stop_copy">
                <p className="eyebrow tour-stop_number">{s.date}</p>
                <h3 className="heading-md">{s.caption}</h3>
                {s.note && <p className="body-lg text-secondary">{s.note}</p>}
              </div>
              <MediaFrame media={s.media} shape="card" sizes="(min-width: 1024px) 40vw, 100vw" className="tour-stop_media" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
