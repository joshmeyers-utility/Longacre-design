import { LinkTile } from '../components/LinkTile';
import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { Flag, notesOn, SectionHead } from '../components/primitives';
import { partnersPage as page } from '../content/community';

/**
 * Campus partners — docs/02-plan.md §5.4. The trade tile, reused: the
 * same hover, focus and touch paths reach each partner's role and link.
 * Partners with no supplied description appear only with notes on.
 */
const partners = page.partners.filter((p) => p.provenance.tier !== 'unsourced' || notesOn);

export function PartnersPage() {
  const { hero } = page;
  return (
    <PageShell current="partners" hero={<PageHero current="partners" tone="light" eyebrow={hero.eyebrow} headline={hero.headline} intro={hero.intro} media={hero.media} />}>
      <section className="section is-surface" aria-labelledby="partners-title">
        <div className="container">
          <SectionHead eyebrow={`${partners.length} partners`} title="What each one does" id="partners-title" />
          <ul className="trade-grid">
            {partners.map((p) => (
              <LinkTile key={p.id} icon={p.icon} name={p.name} description={p.role} href={p.href} hidden={p.href ? ' (opens in a new tab)' : undefined} />
            ))}
          </ul>
          {partners.map((p) => (
            <Flag provenance={p.provenance} key={p.id} />
          ))}
          <Flag provenance={page.partnerLink} />
        </div>
      </section>
    </PageShell>
  );
}
