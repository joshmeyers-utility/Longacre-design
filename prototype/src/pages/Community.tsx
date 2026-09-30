import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { Flag, Icon, SectionHead } from '../components/primitives';
import { communityHub as page } from '../content/community';

/**
 * Community hub — docs/02-plan.md §5.4. Three routes, each with its
 * strongest single figure, then the two community milestones from 2025.
 * Target of the homepage's Community pillar.
 */
export function CommunityPage() {
  const { hero } = page;
  return (
    <PageShell current="community" hero={<PageHero current="community" tone="light" eyebrow={hero.eyebrow} headline={hero.headline} intro={hero.intro} media={hero.media} />}>
      <section className="section" aria-labelledby="routes-title">
        <div className="container">
          <h2 className="sr-only" id="routes-title">
            In this section
          </h2>
          <ul className="route-cards">
            {page.routes.map((r) => (
              <li key={r.id}>
                <a className="route-card" href={r.href}>
                  <span className="heading-md">{r.title}</span>
                  <span className="text-secondary">{r.body}</span>
                  {r.stat && (
                    <span className="route-card_stat">
                      <span className="stat_figure is-large">{r.stat.figure}</span>
                      <span className="label-sm text-secondary">{r.stat.label}</span>
                    </span>
                  )}
                  <span className="icon-button route-card_arrow" aria-hidden="true">
                    <Icon name="arrow_forward" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section theme-dark" aria-labelledby="moments-title">
        <div className="container moments">
          <SectionHead eyebrow="2025" title={page.moments.heading} id="moments-title" />
          <ul className="fact-list">
            {page.moments.items.map((m) => (
              <li className="fact" key={m.text}>
                <span className="eyebrow">{m.date}</span>
                <span className="heading-xs">{m.text}</span>
              </li>
            ))}
          </ul>
          <Flag provenance={page.moments.provenance} />
        </div>
      </section>
    </PageShell>
  );
}
