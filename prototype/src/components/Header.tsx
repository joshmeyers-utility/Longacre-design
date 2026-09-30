import { useEffect, useId, useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react';
import { alert, navCta, navMenu, navMenuCtas, pageHref, type PageId } from '../content/home';
import { Flag, Icon } from './primitives';
import logo from '../assets/logo-homer-city.webp';
import logoDark from '../assets/logo-homer-city-dark.webp';

const DISMISS_KEY = 'hcec-alert-dismissed';

function readDismissed(): string | null {
  try {
    return window.localStorage.getItem(DISMISS_KEY);
  } catch {
    return null;
  }
}

/**
 * Global construction-update banner. CMS-driven in Webflow; dismissal is
 * remembered per visitor, keyed on the alert id, so a new alert reappears.
 * role="status" — it informs, it never interrupts or traps focus.
 */
export function AlertBar() {
  const [hidden, setHidden] = useState(() => readDismissed() === alert.id);
  if (hidden) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, alert.id);
    } catch {
      /* storage blocked: dismiss for this page view only */
    }
    setHidden(true);
  };

  // The ticker repeats the message for the scrolling look; screen readers get
  // it once, from the visually hidden copy.
  const repeats = Array.from({ length: 6 });
  return (
    <section className={`alert-bar theme-dark is-${alert.severity}`} aria-label="Construction update">
      <p className="sr-only" role="status">
        Construction update: {alert.message}
      </p>
      <div className="alert-bar_track" aria-hidden="true">
        <div className="alert-bar_ticker">
          {repeats.map((_, i) => (
            <span className="alert-bar_item" key={i}>
              {alert.message}
              <span className="alert-bar_dot" />
            </span>
          ))}
        </div>
      </div>
      <button className="alert-bar_close" type="button" onClick={dismiss} aria-label="Dismiss this update">
        <Icon name="close" />
      </button>
      <div className="alert-bar_flag">
        <Flag provenance={alert.provenance} />
      </div>
    </section>
  );
}

/**
 * Mega menu, from 1200px (T1). The bar and the panel below it share one CSS
 * grid, so each column of links sits exactly under its item. Hover opens it
 * on a mouse; click, tap or Enter opens it anywhere; the item under the
 * pointer (or focus) brightens its column. Escape, clicking outside, moving
 * away or tabbing out closes it. Closed, the panel is inert.
 *
 * Webflow: a grid div with the same placement, a hover/click interaction
 * that adds "is-open", and one that sets "is-active" on the hovered item.
 */
function MegaMenu({ current, className = '' }: { current: PageId; className?: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const closeTimer = useRef(0);
  const base = useId();

  const show = (i: number) => {
    window.clearTimeout(closeTimer.current);
    setActive(i);
    setOpen(true);
  };
  const hideSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      (triggers.current[active] ?? triggers.current.find(Boolean))?.focus();
    };
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open, active]);
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // A mouse opens on hover, so its click only focuses the column; keyboard
  // (detail 0) and touch toggle.
  const onTriggerClick = (i: number) => (e: ReactMouseEvent<HTMLButtonElement>) => {
    const byMouse = e.detail > 0 && (e.nativeEvent as PointerEvent).pointerType === 'mouse';
    if (byMouse) return show(i);
    if (open && active === i) setOpen(false);
    else show(i);
  };

  const panelId = `${base}-panel`;
  return (
    <nav
      className={`nav-menu${open ? ' is-open' : ''}${className ? ` ${className}` : ''}`}
      aria-label="Main"
      ref={root}
      onPointerLeave={(e) => e.pointerType === 'mouse' && hideSoon()}
      onPointerEnter={() => window.clearTimeout(closeTimer.current)}
      onBlur={(e) => {
        if (!root.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="nav-menu_grid">
        <div className="nav-menu_bar" aria-hidden="true" />
        <div className="nav-menu_panel" aria-hidden="true" />
        {navMenu.map((item, i) => {
          if (!item.links.length) {
            // A plain link: hovering it while the menu is open dims every column.
            return (
              <a
                className="nav-item nav-menu_trigger"
                style={{ gridColumn: i + 1 } as CSSProperties}
                href={pageHref(item.href!, current)}
                key={item.label}
                onPointerEnter={() => open && setActive(-1)}
                onFocus={() => open && setActive(-1)}
              >
                {item.label}
              </a>
            );
          }
          const isActive = open && active === i;
          return (
            // display: contents — the button and its column are placed on the
            // grid directly; the wrapper only keeps them together in the DOM,
            // so Tab goes item → its links → next item.
            <div className="nav-menu_group" key={item.label}>
              <button
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                className={`nav-item nav-menu_trigger${isActive ? ' is-active' : ''}${item.page === current ? ' is-current' : ''}`}
                style={{ gridColumn: i + 1 } as CSSProperties}
                type="button"
                aria-expanded={isActive}
                aria-controls={`${panelId}-${i}`}
                onPointerEnter={(e) => e.pointerType === 'mouse' && show(i)}
                onFocus={() => open && setActive(i)}
                onClick={onTriggerClick(i)}
              >
                {item.label}
              </button>
              <ul
                className={`nav-menu_column${isActive ? ' is-active' : ''}`}
                style={{ gridColumn: i + 1 } as CSSProperties}
                id={`${panelId}-${i}`}
                inert={!open}
                onPointerEnter={() => setActive(i)}
              >
                {item.links.map((l) => (
                  <li key={l.href}>
                    <a className="nav-menu_link" href={pageHref(l.href, current)} aria-current={l.page === current ? 'page' : undefined} onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <a className="nav-item is-primary nav-menu_contact" href={pageHref(navCta.href, current)}>
          {navCta.label}
        </a>
        <div className="nav-menu_ctas" inert={!open}>
          {navMenuCtas.map((c) => (
            <a className={`nav-menu_cta is-${c.tone}`} href={pageHref(c.href, current)} key={c.label} onClick={() => setOpen(false)}>
              {c.label}
              <Icon name="arrow_forward" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/** Logo, mega menu from 1200px, and a full-screen menu below it. */
/**
 * Header. At rest it sits at the top of the hero. As soon as the page scrolls
 * past it, it docks: fixed to the top of the window as one ink pill holding
 * the logo mark and the nav (T1), and it stays there while you scroll. The
 * slot keeps the header's resting height, so docking never shifts the page.
 * `tone="light"` is for a hero on a white ground: dark wordmark at rest,
 * ink nav pill.
 */
export function SiteHeader({ current = 'home', tone = 'dark' }: { current?: PageId; tone?: 'dark' | 'light' }) {
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const slot = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = slot.current;
    if (!el) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const next = el.getBoundingClientRect().top < 0;
      // Hold the resting height before the header leaves the flow.
      if (next && header.current && !el.style.height) el.style.height = `${header.current.offsetHeight}px`;
      if (!next) el.style.height = '';
      setDocked(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  const light = tone === 'light' && !docked;
  // Menu items enter 35ms apart, capped so the last is never left waiting.
  let order = 0;
  const still = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stagger = (): CSSProperties => ({ transitionDelay: open && !still ? `${80 + Math.min(order++, 10) * 35}ms` : '0ms' });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('is-locked');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-locked');
    };
  }, [open]);

  return (
    <div className="site-header_slot" ref={slot}>
      <header ref={header} className={`site-header${open ? ' is-menu-open' : ''}${docked ? ' is-docked' : ''}${light ? ' is-light' : ''}`}>
        <div className={`site-header_bar${light ? '' : ' theme-dark'}`}>
          {/* Raster stand-in until the vector logo arrives (CLAUDE.md §10 #1).
           * The white wordmark goes on dark grounds; the dark copy (derived from
           * it — the client's own dark version is still needed) on white. */}
          <a className="site-header_logo" href={current === 'home' ? '#top' : 'index.html'}>
            <img className="site-header_logo-image" src={light ? logoDark : logo} width={540} height={112} alt="Homer City Generation, home" />
          </a>

          <MegaMenu current={current} className={light ? 'theme-dark' : ''} />

          <button
            ref={toggleRef}
            className="icon-button is-menu"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size="md" />
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        {/* Same groups as the mega menu, stacked: a label, then its links.
         * Always in the page so it can fade; inert while closed. Items rise
         * in one after another on open (delays inline, so they only apply
         * on the way in) and all leave together on close. */}
        <div id="mobile-menu" className={`mobile-menu theme-dark${open ? ' is-open' : ''}`} inert={!open}>
          <ul className="mobile-menu_list">
            {navMenu.map((group) => (
              <li className="mobile-menu_group" key={group.label}>
                {group.links.length > 0 && (
                  <p className="eyebrow mobile-menu_label mobile-menu_item" style={stagger()}>
                    {group.label}
                  </p>
                )}
                <ul>
                  {(group.links.length ? group.links : [{ label: group.label, href: group.href!, page: undefined }]).map((l) => (
                    <li className="mobile-menu_item" key={l.href} style={stagger()}>
                      <a className="mobile-menu_link" href={pageHref(l.href, current)} aria-current={l.page === current ? 'page' : undefined} onClick={() => setOpen(false)}>
                        {l.label}
                        <Icon name="arrow_forward" />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="mobile-menu_ctas mobile-menu_item" style={stagger()}>
            {navMenuCtas.map((c) => (
              <a className={`nav-menu_cta is-${c.tone}`} href={pageHref(c.href, current)} key={c.label} onClick={() => setOpen(false)}>
                {c.label}
                <Icon name="arrow_forward" />
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
