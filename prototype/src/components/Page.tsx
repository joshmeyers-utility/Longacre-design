import { StrictMode, useEffect, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import type { PageId } from '../content/home';
import { initReveals, scrollToHash } from '../motion';
import { AlertBar } from './Header';
import { SiteFooter } from './Sections';

/**
 * Every inner page: skip link, alert, hero, main, footer, and the scroll
 * reveals. In Webflow this is the page template the symbols sit in.
 */
export function PageShell({ current, hero, children }: { current: PageId; hero: ReactNode; children: ReactNode }) {
  useEffect(() => {
    scrollToHash();
    return initReveals();
  }, []);
  return (
    <>
      <a className="sr-only" href="#main">
        Skip to content
      </a>
      <AlertBar />
      {hero}
      <main id="main">{children}</main>
      <SiteFooter current={current} />
    </>
  );
}

/** One call per page entry file. */
export function mountPage(page: ReactNode) {
  createRoot(document.getElementById('root')!).render(<StrictMode>{page}</StrictMode>);
}
