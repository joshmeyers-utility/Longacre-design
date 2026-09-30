import { useState } from 'react';
import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { Button, Flag, Icon, SectionHead } from '../components/primitives';
import { contactPage as page } from '../content/contact';

/**
 * Contact — docs/02-plan.md §5.7. The four routes as a list of equal rows
 * split by hairlines (not cards: a filled box is not a grouping device for
 * text), then where the campus is.
 */
export function ContactPage() {
  const { hero } = page;
  return (
    <PageShell current="contact" hero={<PageHero current="contact" tone="light" eyebrow={hero.eyebrow} headline={hero.headline} intro={hero.intro} />}>
      <Routes />
      <Visit />
    </PageShell>
  );
}

function Routes() {
  return (
    <section className="section is-tight" aria-labelledby="routes-title">
      <div className="container">
        <h2 className="sr-only" id="routes-title">
          The four inboxes
        </h2>
        <ul className="route-list">
          {page.routes.map((r) => (
            <li className="route" key={r.audience}>
              <p className="eyebrow">{r.audience}</p>
              <p className="text-secondary route_for">{r.for}</p>
              <div className="route_actions">
                <a className="route_email heading-sm" href={`mailto:${r.email}`}>
                  {r.email}
                </a>
                <CopyButton text={r.email} label={`Copy the ${r.audience.toLowerCase()} address`} />
              </div>
            </li>
          ))}
        </ul>
        <Flag provenance={page.response} />
      </div>
    </section>
  );
}

/**
 * Copies the address, for readers whose mail link opens nothing. The
 * address stays selectable text either way. Webflow: a small embed.
 */
function CopyButton({ text, label }: { text: string; label: string }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      window.setTimeout(() => setDone(false), 2000);
    } catch {
      /* Clipboard refused: the address is plain text beside the button. */
    }
  };
  return (
    <button className="copy-button label-md" type="button" onClick={copy} aria-label={label}>
      <Icon name={done ? 'check' : 'content_copy'} />
      <span aria-live="polite">{done ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

function Visit() {
  const v = page.visit;
  return (
    <section className="section is-surface" aria-labelledby="visit-title">
      <div className="container visit">
        <SectionHead eyebrow="Location" title={v.heading} id="visit-title" />
        <div className="visit_body">
          <address className="heading-md visit_address">
            {v.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <Flag provenance={v.provenance} />
          <Button href="faq.html" tier="secondary">
            Read the common questions first
          </Button>
        </div>
      </div>
    </section>
  );
}
