/**
 * Scroll-into-view reveals. Stands in for a Webflow Interactions 2.0
 * "scroll into view" trigger on each class below — no GSAP, no embed.
 *
 * Content is complete at rest: nothing is hidden unless this script runs,
 * only elements still below the fold are held back, and the held state is
 * dimmed, never invisible. With reduced motion, nothing is held at all.
 */
const TARGETS = [
  '.numbers_title',
  '.section-head',
  '.timeline_head',
  '.stat',
  '.trades_item',
  '.chip-row > *',
  '.facility-stage',
  '.milestone',
  '.faq-row',
  '.split_media',
  '.site-footer_grid > *',
].join(',');

/** Siblings stagger, capped so a long list never waits on its tail. */
const MAX_STAGGER = 5;

export function initReveals(): () => void {
  if (typeof IntersectionObserver === 'undefined') return () => {};
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const fold = window.innerHeight;
  const pending = [...document.querySelectorAll<HTMLElement>(TARGETS)].filter(
    (el) => el.getBoundingClientRect().top > fold,
  );

  for (const el of pending) {
    const siblings = el.parentElement ? [...el.parentElement.children] : [el];
    el.style.setProperty('--reveal-order', String(Math.min(siblings.indexOf(el), MAX_STAGGER)));
    el.classList.add('is-reveal-pending');
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.remove('is-reveal-pending');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  pending.forEach((el) => io.observe(el));

  return () => {
    io.disconnect();
    pending.forEach((el) => el.classList.remove('is-reveal-pending'));
  };
}

/**
 * Scroll progress, 0 → 1, of an element passing the middle of the viewport.
 * Stands in for Webflow's "while scrolling in view" trigger. `measure` swaps
 * the default for another mapping, such as a pinned section's travel.
 */
export function trackScrollProgress(
  el: HTMLElement,
  onProgress: (p: number) => void,
  measure: (r: DOMRect) => number = passingMiddle,
): () => void {
  let frame = 0;
  const update = () => {
    frame = 0;
    onProgress(Math.min(1, Math.max(0, measure(el.getBoundingClientRect()))));
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

export function passingMiddle(r: DOMRect) {
  return (window.innerHeight * 0.6 - r.top) / r.height;
}

/** 0 as the element's top enters at the bottom edge, 1 as its bottom leaves the top. */
export function throughViewport(r: DOMRect) {
  return (window.innerHeight - r.top) / (window.innerHeight + r.height);
}

/** Page scroll as a share of `fraction` of one viewport — for things pinned at the top. */
export const pageScroll = (fraction: number) => () => window.scrollY / (window.innerHeight * fraction);

/**
 * Writes scroll progress (0 → 1) into `--progress` on the element, so CSS can
 * drive transforms from it. One number per element, the way both reference
 * sites work; in Webflow this is a "while scrolling in view" interaction
 * animating the same properties directly.
 */
export function bindScrollProgress(el: HTMLElement, measure: (r: DOMRect) => number = throughViewport): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  return trackScrollProgress(el, (p) => el.style.setProperty('--progress', p.toFixed(3)), measure);
}

/** Toggles a class while the element's progress is inside (0, 1). */
export function bindActiveWhileInProgress(el: HTMLElement, className = 'is-active', measure: (r: DOMRect) => number = passingMiddle): () => void {
  return trackScrollProgress(el, (p) => el.classList.toggle(className, p > 0 && p < 1), measure);
}
