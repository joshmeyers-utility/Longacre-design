import { useEffect, useId, useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';
import { alert, groupHas, navMenu, navMenuCtas, pageHref, type NavLink, type PageId } from '../content/home';
import { Flag, Icon } from './primitives';
import logo from '../assets/logo-homer-city.webp';

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
 * Mega menu, from 1024px (T1). One dark shape: the bar across the top and,
 * open, the panel hanging from it, the bar sitting on the panel. Bar and
 * panel share one CSS grid, so each column of pages sits exactly under its
 * heading. Hover opens it on a mouse; click, tap or Enter opens it
 * anywhere; the heading under the pointer (or focus) brightens its column.
 * Escape, clicking outside, moving away or tabbing out closes it. Closed,
 * the panel is inert. Contact is a page, not a heading: a link, with an
 * empty column.
 *
 * Webflow: a grid div with the same placement, a hover/click interaction
 * that adds "is-open", and one that sets "is-active" on the hovered item.
 */
function MegaMenu({ current }: { current: PageId }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);
  const triggers = useRef<(HTMLElement | null)[]>([]);
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
      className={`nav-menu theme-dark${open ? ' is-open' : ''}`}
      aria-label="Main"
      ref={root}
      onPointerLeave={(e) => e.pointerType === 'mouse' && hideSoon()}
      onPointerEnter={() => window.clearTimeout(closeTimer.current)}
      onBlur={(e) => {
        if (!root.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="nav-menu_grid">
        <div className="nav-menu_panel" aria-hidden="true" />
        <div className="nav-menu_bar" aria-hidden="true" />
        {/* The logo lives in the bar (T1). Its column stays empty below. */}
        <Logo current={current} className="nav-menu_logo" />
        {navMenu.map((item, i) => {
          const isActive = open && active === i;
          const col = { gridColumn: i + 2 } as CSSProperties;
          const state = `${isActive ? ' is-active' : ''}${groupHas(item, current) ? ' is-current' : ''}`;
          if (item.href) {
            return (
              <a
                key={item.label}
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                className={`nav-menu_trigger${state}`}
                style={col}
                href={pageHref(item.href, current)}
                aria-current={item.page === current ? 'page' : undefined}
                onPointerEnter={(e) => e.pointerType === 'mouse' && open && setActive(i)}
              >
                {item.label}
              </a>
            );
          }
          return (
            // display: contents — the button and its column are placed on the
            // grid directly; the wrapper only keeps them together in the DOM,
            // so Tab goes item → its links → next item.
            <div className="nav-menu_group" key={item.label}>
              <button
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                className={`nav-menu_trigger${state}`}
                style={col}
                type="button"
                aria-expanded={isActive}
                aria-controls={`${panelId}-${i}`}
                onPointerEnter={(e) => e.pointerType === 'mouse' && show(i)}
                onFocus={() => open && setActive(i)}
                onClick={onTriggerClick(i)}
              >
                {item.label}
              </button>
              <ul className={`nav-menu_column${isActive ? ' is-active' : ''}`} style={col} id={`${panelId}-${i}`} inert={!open} onPointerEnter={() => setActive(i)}>
                {item.links.map((l) => (
                  <li key={l.label}>
                    <NavEntry link={l} current={current} className="nav-menu_link" onPick={() => setOpen(false)} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <div className="nav-menu_ctas" inert={!open}>
          {navMenuCtas.map((c) => (
            <a className={`nav-menu_cta is-compact is-${c.tone}`} href={pageHref(c.href, current)} key={c.label} onClick={() => setOpen(false)}>
              {c.label}
              <Icon name="arrow_forward" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/** Raster stand-in until the vector logo arrives (CLAUDE.md §10 #1). White wordmark, on the ink bar. */
function Logo({ current, className }: { current: PageId; className: string }) {
  return (
    <a className={`site-header_logo ${className}`} href={current === 'home' ? '#top' : 'index.html'}>
      <img className="site-header_logo-image" src={logo} width={540} height={112} alt="Homer City Generation, home" />
    </a>
  );
}

/** A menu entry: a link to a page that exists, or a quiet "Soon" for one that doesn't yet. */
function NavEntry({ link, current, className, onPick, children }: { link: NavLink; current: PageId; className: string; onPick: () => void; children?: ReactNode }) {
  if (!link.href) {
    return (
      <span className={`${className} is-soon`}>
        {link.label}
        <span className="nav-menu_soon">
          <span className="sr-only">, </span>Soon
        </span>
        {children}
      </span>
    );
  }
  return (
    <a className={className} href={pageHref(link.href, current)} aria-current={link.page === current ? 'page' : undefined} onClick={onPick}>
      {link.label}
      {children}
    </a>
  );
}

/**
 * Header: one dark bar with the logo inside it (T1), on every ground —
 * frosted over a photograph, solid over a plain ground (`ground`). At rest
 * it sits at the top of the hero; once the page scrolls past it, it docks
 * to the top of the window and stays there. The slot keeps the header's
 * resting height, so docking never shifts the page. From 1024px the bar is
 * the mega menu; below that it holds the logo and the menu button.
 */
export function SiteHeader({ current = 'home', ground = 'photo' }: { current?: PageId; ground?: 'photo' | 'plain' }) {
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
      <header ref={header} className={`site-header${ground === 'plain' ? ' is-on-plain' : ''}${ground === 'photo' && !docked ? ' is-frosted' : ''}${open ? ' is-menu-open' : ''}${docked ? ' is-docked' : ''}`}>
        <MegaMenu current={current} />
        <div className="site-header_bar theme-dark">
          <Logo current={current} className="site-header_bar-logo" />
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
                {group.href ? (
                  <ul>
                    <li className="mobile-menu_item" style={stagger()}>
                      <NavEntry link={group} current={current} className="mobile-menu_link" onPick={() => setOpen(false)}>
                        <Icon name="arrow_forward" />
                      </NavEntry>
                    </li>
                  </ul>
                ) : (
                  <>
                    <p className="eyebrow mobile-menu_label mobile-menu_item" style={stagger()}>
                      {group.label}
                    </p>
                    <ul>
                      {group.links.map((l) => (
                        <li className="mobile-menu_item" key={l.label} style={stagger()}>
                          <NavEntry link={l} current={current} className="mobile-menu_link" onPick={() => setOpen(false)}>
                            {l.href && <Icon name="arrow_forward" />}
                          </NavEntry>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
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
