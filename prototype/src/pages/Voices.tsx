import { useState } from 'react';
import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { Button, Flag, notesOn } from '../components/primitives';
import { voicesPage as page } from '../content/community';

/**
 * Voices — docs/02-plan.md §5.4. Quotes filtered by who is speaking,
 * because who vouches matters more than what they say. None has been
 * supplied with a name, role and photograph (CLAUDE.md §5.6), so the
 * public page says so plainly; with notes on, the empty card shows the
 * shape each quote takes.
 *
 * Webflow: a Testimonials collection with a Speaker type option field.
 */
export function VoicesPage() {
  const [who, setWho] = useState<string>('All');
  const { hero } = page;
  return (
    <PageShell current="voices" hero={<PageHero current="voices" tone="light" eyebrow={hero.eyebrow} headline={hero.headline} intro={hero.intro} />}>
      <section className="section is-tight" aria-label="Quotes">
        <div className="container voices">
          <div className="chip-row" role="group" aria-label="Who is speaking">
            {['All', ...page.speakers].map((s) => (
              <button key={s} type="button" className={`chip${who === s ? ' is-selected' : ''}`} aria-pressed={who === s} onClick={() => setWho(s)}>
                {s}
              </button>
            ))}
          </div>
          {notesOn ? (
            <figure className="quote-card">
              <blockquote className="heading-md">“The quote, in the speaker’s own words, as they approved it.”</blockquote>
              <figcaption className="quote-card_by">
                <span className="quote-card_photo" aria-hidden="true" />
                <span>
                  <span className="label-md">Name</span>
                  <br />
                  <span className="body-sm text-secondary">Role, organisation · {who === 'All' ? 'Resident' : who.replace(/s$/, '')}</span>
                </span>
              </figcaption>
              <Flag provenance={page.provenance} />
            </figure>
          ) : (
            <div className="voices_empty">
              <p className="heading-sm">No quotes have been published yet.</p>
              <p className="text-secondary">Every quote on this page will name the person, their role and their organisation, with their photograph.</p>
              <Button href="contact.html" tier="secondary">
                Contact the project team
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
