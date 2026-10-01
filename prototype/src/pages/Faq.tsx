import { useEffect, useId, useMemo, useState } from 'react';
import { PageShell } from '../components/Page';
import { PageHero } from '../components/PageHero';
import { Button, Flag, Icon, notesOn } from '../components/primitives';
import { faqCategories, sourceNames } from '../content/faq';
import { footnotes } from '../content/home';
import type { FaqItem } from '../content/types';

/**
 * FAQs — docs/02-plan.md §5.5. Search and category filters above, then
 * every category as its own list of questions. Each answer names its
 * source. Questions with no sourced answer appear only with review notes
 * on; a category with none answered stays off the public page.
 *
 * Every question has its own address (faq.html#water), which opens it.
 *
 * Webflow: one FAQ collection with a Category reference; the search and
 * filter are a small embed (or Finsweet CMS Filter) — flagged in the
 * README.
 */
const categories = faqCategories
  .map((c) => ({ ...c, items: c.items.filter((f) => f.answer || notesOn) }))
  .filter((c) => c.items.length > 0);

export function FaqPage() {
  return (
    <PageShell
      current="faq"
      hero={
        <PageHero
          current="faq"
          tone="light"
          eyebrow="FAQs"
          headline="Questions neighbours ask about the campus, answered with sources."
          intro="Every answer says which document it comes from. If your question isn’t here, write to the project team."
        />
      }
    >
      <Questions />
      <Ask />
    </PageShell>
  );
}

function Questions() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [open, setOpen] = useState<Set<string>>(() => new Set());

  // An address like #water opens that question, on load and whenever the
  // address changes while the page is open (a link to another question).
  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (id && categories.some((c) => c.items.some((f) => f.id === id))) setOpen((prev) => new Set(prev).add(id));
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const shown = useMemo(
    () =>
      categories
        .filter((c) => category === 'all' || c.id === category)
        .map((c) => ({
          ...c,
          items: c.items.filter((f) => {
            const text = `${f.question} ${f.answer ?? ''}`.toLowerCase();
            return words.every((w) => text.includes(w));
          }),
        }))
        .filter((c) => c.items.length > 0),
    [category, words.join(' ')],
  );
  const count = shown.reduce((n, c) => n + c.items.length, 0);

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section className="section is-tight" aria-label="Questions">
      <div className="container faq-page">
        <div className="faq-filter">
          <label className="faq-search">
            <Icon name="search" />
            <span className="sr-only">Search the questions</span>
            <input type="search" placeholder="Search the questions" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
          <div className="chip-row" role="group" aria-label="Category">
            {[{ id: 'all', name: 'All' }, ...categories].map((c) => (
              <button key={c.id} type="button" className={`chip${category === c.id ? ' is-selected' : ''}`} aria-pressed={category === c.id} onClick={() => setCategory(c.id)}>
                {c.name}
              </button>
            ))}
          </div>
          <p className="body-sm text-secondary" aria-live="polite">
            {count === 0 ? 'No questions match. Try fewer words, or write to us below.' : `${count} ${count === 1 ? 'question' : 'questions'}`}
          </p>
        </div>

        <div className="faq-page_groups">
          {shown.map((c) => (
            <div className="faq-group" key={c.id}>
              <h2 className="heading-sm faq-group_title" id={`category-${c.id}`}>
                {c.name}
              </h2>
              <ul className="faq_list" aria-labelledby={`category-${c.id}`}>
                {c.items.map((f) => (
                  <Row key={f.id} item={f} isOpen={open.has(f.id)} onToggle={() => toggle(f.id)} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ item: f, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const base = useId();
  return (
    <li className={`faq-row${isOpen ? ' is-open' : ''}`} id={f.id}>
      <h3>
        <button className="faq-row_toggle" type="button" aria-expanded={isOpen} aria-controls={`${base}-a`} onClick={onToggle}>
          <span className="heading-xs">{f.question}</span>
          <span className={`icon-button${isOpen ? ' is-open' : ''}`} aria-hidden="true">
            <Icon name="add" size="md" className="faq-row_icon" />
          </span>
        </button>
      </h3>
      <div className="faq-row_body" id={`${base}-a`} inert={!isOpen}>
        <div className="faq-row_answer">
          {f.answer && <p className="body-lg text-secondary">{f.answer}</p>}
          {f.footnote && (
            <p className="footnote">
              <sup>{f.footnote}</sup> {footnotes[f.footnote]}
            </p>
          )}
          {f.answer && <p className="eyebrow">Source: {sourceNames[f.provenance.source]}</p>}
          <Flag provenance={f.provenance} />
        </div>
      </div>
    </li>
  );
}

function Ask() {
  return (
    <section className="section is-surface" aria-labelledby="ask-title">
      <div className="container apply">
        <h2 className="heading-lg" id="ask-title">
          Didn’t find your question?
        </h2>
        <div className="apply_body">
          <p className="body-lg text-secondary">Community members can write to the project team directly.</p>
          <a className="apply_email heading-md" href="mailto:info@homercityredevelopment.com">
            info@homercityredevelopment.com
            <Icon name="arrow_forward" size="md" />
          </a>
          <Button href="contact.html" tier="secondary">
            All four inboxes
          </Button>
        </div>
      </div>
    </section>
  );
}
