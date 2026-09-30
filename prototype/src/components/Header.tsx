import { useEffect, useRef, useState } from 'react';
import { alert, nav, navCta, site } from '../content/home';
import { Flag, Icon } from './primitives';

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
 * Logo, frosted nav pill, and a full-screen menu below 1200px. Fixed to the
 * viewport; after 80px of scroll the logo docks into the pill and the bar
 * becomes one glass capsule (T1). Webflow: "while page is scrolling" on the
 * bar, or a second, fixed header that fades in past 80px.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setDocked(window.scrollY > 80);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

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
    <header className={`site-header theme-dark${open ? ' is-menu-open' : ''}${docked ? ' is-docked' : ''}`}>
      <div className="site-header_bar">
      <a className="site-header_logo" href="#top" aria-label={`${site.name}, home`}>
        <span className="site-header_mark" aria-hidden="true" />
        <span className="site-header_wordmark">{site.name}</span>
      </a>

      <nav className="nav-pill" aria-label="Main">
        <ul className="nav-pill_list">
          {nav.map((item) => (
            <li key={item.href}>
              <a className="nav-item" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav-item is-primary" href={navCta.href}>
              {navCta.label}
            </a>
          </li>
        </ul>
      </nav>

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

      <div id="mobile-menu" className={`mobile-menu theme-dark${open ? ' is-open' : ''}`} hidden={!open}>
        <ul className="mobile-menu_list">
          {[...nav, navCta].map((item) => (
            <li key={item.href}>
              <a className="mobile-menu_link" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
                <Icon name="arrow_forward" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
