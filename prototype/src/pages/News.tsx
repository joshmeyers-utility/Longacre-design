import { useState } from 'react';
import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { Flag, Icon, MediaFrame, notesOn } from '../components/primitives';
import { newsItems, type NewsType } from '../content/news';

/**
 * News — docs/02-plan.md §5.6. Newest first; type chips appear once there
 * is more than one type to choose between. Items without a supplied
 * headline appear only with review notes on.
 *
 * Webflow: a News collection list, filtered by the Type option field; the
 * collection's RSS feed goes in the page head for local outlets.
 */
const items = newsItems.filter((n) => n.headline || notesOn);
const types = [...new Set(items.map((n) => n.type))];

export function NewsPage() {
  const [type, setType] = useState<NewsType | 'all'>('all');
  const shown = items.filter((n) => type === 'all' || n.type === type);
  return (
    <PageShell
      current="news"
      hero={
        <PageHero
          current="news"
          tone="light"
          eyebrow="News"
          headline="Press releases, statements and coverage of the campus."
          intro="Newest first. Reporters can reach the media team at press@homercityredevelopment.com."
        />
      }
    >
      <section className="section is-tight" aria-label="News">
        <div className="container news-page">
          {types.length > 1 && (
            <div className="chip-row" role="group" aria-label="Type">
              {(['all', ...types] as const).map((t) => (
                <button key={t} type="button" className={`chip${type === t ? ' is-selected' : ''}`} aria-pressed={type === t} onClick={() => setType(t)}>
                  {t === 'all' ? 'All' : t}
                </button>
              ))}
            </div>
          )}
          <ul className="news-list">
            {shown.map((n) => {
              const external = n.type === 'Coverage';
              const inner = (
                <>
                  <MediaFrame media={n.media} shape="card" sizes="(min-width: 768px) 20rem, 100vw" className="news-row_media" />
                  <span className="news-row_copy">
                    <span className="eyebrow">
                      {n.type} · {n.date}
                      {n.outlet && ` · ${n.outlet}`}
                    </span>
                    <span className="heading-sm news-row_headline">{n.headline ?? 'Headline not yet supplied'}</span>
                    {n.summary && <span className="text-secondary">{n.summary}</span>}
                    <Flag provenance={n.provenance} />
                  </span>
                  <Icon name={external ? 'arrow_outward' : 'arrow_forward'} className="news-row_arrow" />
                </>
              );
              return (
                <li key={n.id}>
                  {n.href ? (
                    <a className="news-row" href={n.href}>
                      {inner}
                    </a>
                  ) : (
                    <div className="news-row is-draft">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
