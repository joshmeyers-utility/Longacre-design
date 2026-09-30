import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { StatBlock } from '../components/Sections';
import { Flag, Icon } from '../components/primitives';
import { commitmentsPage as page } from '../content/community';

/**
 * Our commitments — docs/02-plan.md §5.4. The brief's six, in its order,
 * as rows: name on the left, figures and dated facts on the right. The
 * brief asks for rollover icons; here everything is on the page, so
 * there is nothing to reach only by hover. Required footnotes sit under
 * their figures (StatBlock).
 */
export function CommitmentsPage() {
  const { hero } = page;
  return (
    <PageShell current="commitments" hero={<PageHero current="commitments" tone="light" eyebrow={hero.eyebrow} headline={hero.headline} intro={hero.intro} />}>
      <section className="section is-tight" aria-label="The six commitments">
        <div className="container">
          <ul className="commitment-list">
            {page.commitments.map((c) => (
              <li className="commitment" id={c.id} key={c.id}>
                <h2 className="heading-md commitment_name">
                  <Icon name={c.icon} size="md" className="commitment_icon" />
                  {c.name}
                </h2>
                <div className="commitment_body">
                  {c.body && <p className="body-lg">{c.body}</p>}
                  {c.stats.length > 0 && (
                    <div className="commitment_stats">
                      {c.stats.map((s) => (
                        <StatBlock stat={s} size="large" key={s.id} />
                      ))}
                    </div>
                  )}
                  {c.facts.length > 0 && (
                    <ul className="fact-list">
                      {c.facts.map((f) => (
                        <li className="fact" key={f.text}>
                          <span className="eyebrow">{f.date}</span>
                          <span className="heading-xs">{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Flag provenance={c.provenance} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
