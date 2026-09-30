import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { StatBlock } from '../components/Sections';
import { CopyButton, Flag, Icon } from '../components/primitives';
import { workforce } from '../content/home';
import { workforceRelease as page } from '../content/news';

/**
 * A news item — docs/02-plan.md §5.6: date, a share link and the press
 * contact. Webflow: the News collection template page.
 */
export function NewsItemPage() {
  const { item } = page;
  return (
    <PageShell
      current="news"
      hero={
        <PageHero current="news" tone="light" eyebrow={`${item.type} · ${item.date}`} headline={item.headline!} intro={item.summary!} media={item.media}>
          <CopyButton text={typeof location === 'undefined' ? '' : location.href} label="Copy a link to this release">
            Copy link
          </CopyButton>
        </PageHero>
      }
    >
      <section className="section" aria-label="The release">
        <div className="container article">
          <a className="text-link article_back" href="news.html">
            <Icon name="arrow_back" />
            All news
          </a>
          <div className="article_body">
            {page.body.map((p) => (
              <p className="body-lg" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
            <Flag provenance={page.bodyProvenance} />
          </div>
        </div>
      </section>
      <section className="section theme-dark" aria-labelledby="release-numbers">
        <div className="container">
          <h2 className="heading-sm numbers_title" id="release-numbers">
            The figures in this release
          </h2>
          <div className="numbers_grid">
            {workforce.stats.map((s) => (
              <StatBlock stat={s} key={s.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="section is-surface" aria-labelledby="press-title">
        <div className="container apply">
          <h2 className="heading-lg" id="press-title">
            Media inquiries
          </h2>
          <div className="apply_body">
            <p className="body-lg text-secondary">Reporters and editors can reach the media team directly.</p>
            <a className="apply_email heading-md" href={`mailto:${page.press}`}>
              {page.press}
              <Icon name="arrow_forward" size="md" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
