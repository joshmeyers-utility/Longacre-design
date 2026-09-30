import { AlertBar } from './components/Header';
import { Faq, Hero, History, Numbers, Pillars, PowerBlock, SiteFooter, Timeline, Workforce } from './components/Sections';

/**
 * Homepage. Section order follows docs/02-plan.md §5.1 (numbers early,
 * workforce added), laid out after the Figma direction board. Grounds
 * alternate dark / white / greige; no two photographic bands touch.
 */
export function App() {
  return (
    <>
      <a className="sr-only" href="#main">
        Skip to content
      </a>
      <AlertBar />
      <div id="top">
        <Hero />
      </div>
      <main id="main">
        <Numbers />
        <Workforce />
        <PowerBlock />
        <History />
        <Timeline />
        <Pillars />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
