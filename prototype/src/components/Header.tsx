import { useEffect, useRef, useState } from 'react';
import { alert, nav, navCta } from '../content/home';
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

/** Logo, frosted nav pill, and a full-screen menu below 1024px. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

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
    <header className={`site-header${open ? ' is-menu-open' : ''}`}>
      {/* Raster stand-in until the vector logo arrives (CLAUDE.md §10 #1).
       * White wordmark: only ever placed on a dark ground. */}
      <a className="site-header_logo" href="#top">
        <img className="site-header_logo-image" src={logo} width={540} height={112} alt="Homer City Generation, home" />
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
