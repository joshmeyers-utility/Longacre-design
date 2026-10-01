import type { ReactNode } from 'react';
import type { PageId } from '../content/home';
import { placeholderAlt, placeholderPhoto } from '../content/placeholder';
import type { Media } from '../content/types';
import { SiteHeader } from './Header';
import { MediaFrame, notesOn, Picture, PlaceholderTag } from './primitives';

/**
 * The homepage hero, shorter and without the news cards. Shared by every
 * inner page. `tone="light"`: white ground, smaller headline, and the photo
 * in a rounded frame under the copy instead of behind it — or no photo
 * at all, for pages that are mostly text (Contact, FAQs, News).
 */
export function PageHero({ current, eyebrow, headline, intro, media, tone = 'dark', children }: { current: PageId; eyebrow: string; headline: string; intro: string; media?: Media; tone?: 'dark' | 'light'; children?: ReactNode }) {
  if (tone === 'light') {
    return (
      <section className="hero is-page is-light" aria-labelledby="hero-title">
        <SiteHeader current={current} ground="plain" />
        <div className="hero_body">
          <div className="hero_copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="heading-lg" id="hero-title">
              {headline}
            </h1>
            <p className="body-lg hero_intro">{intro}</p>
            {children && <div className="button-row">{children}</div>}
          </div>
        </div>
        {media && (
          <div className="container hero_frame">
            <MediaFrame media={media} shape="feature" sizes="100vw" />
          </div>
        )}
      </section>
    );
  }
  if (!media) throw new Error('A dark page hero needs its photograph.');
  return (
    <section className="hero is-page theme-dark" aria-labelledby="hero-title">
      <div className="hero_media">
        <Picture photo={media.photo ?? placeholderPhoto} alt={media.photo ? media.alt : placeholderAlt} sizes="100vw" eager className="hero_picture" />
      </div>
      <div className="hero_scrim" aria-hidden="true" />
      <SiteHeader current={current} />
      {notesOn && !media.photo && (
        <div className="hero_tag">
          <PlaceholderTag media={media} />
        </div>
      )}
      <div className="hero_body">
        <div className="hero_copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-xl" id="hero-title">
            {headline}
          </h1>
          <p className="body-lg hero_intro">{intro}</p>
          {children && <div className="button-row">{children}</div>}
        </div>
      </div>
    </section>
  );
}
