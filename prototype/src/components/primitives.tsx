import type { ReactNode } from 'react';
import type { Media, Provenance } from '../content/types';

/* ---------------------------------------------------------------- Icon */

/**
 * Material Symbols Rounded, weight 300. Decorative by default — the control
 * around it carries the accessible name. Colour comes from the parent role.
 */
export function Icon({ name, size = 'sm', className = '' }: { name: string; size?: 'sm' | 'md'; className?: string }) {
  return (
    <span className={`icon is-${size} ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

/* -------------------------------------------------------------- Button */

type Tier = 'primary' | 'secondary';

/** Pill with a circular arrow well. There is no outlined tier. */
export function Button({ href, tier = 'primary', icon = 'arrow_forward', children }: { href: string; tier?: Tier; icon?: string; children: ReactNode }) {
  const external = href.startsWith('mailto:') || href.startsWith('http');
  return (
    <a className={`button is-${tier}`} href={href} {...(external && !href.startsWith('mailto:') ? { rel: 'noopener', target: '_blank' } : {})}>
      <span className="button_label">{children}</span>
      <span className="button_well">
        <Icon name={icon} />
      </span>
    </a>
  );
}

/* ---------------------------------------------------------------- Flag */

const flagsOn = typeof window === 'undefined' || new URLSearchParams(window.location.search).get('flags') !== 'off';

/**
 * Provenance flag. Marks copy that cannot ship as written. Hidden with
 * ?flags=off for clean screenshots — never removed from the data.
 */
export function Flag({ provenance }: { provenance: Provenance }) {
  if (provenance.tier === 'canonical' || !flagsOn) return null;
  const label = provenance.tier === 'confirm' ? 'Confirm before launch' : 'Not sourced — cannot ship';
  return (
    <span className={`flag is-${provenance.tier}`} role="note">
      <Icon name={provenance.tier === 'confirm' ? 'fact_check' : 'report'} />
      <span>
        <strong className="flag_label">{label}.</strong> {provenance.note}
      </span>
    </span>
  );
}

/* --------------------------------------------------------- Media frame */

/**
 * Image slot. Until photography lands, the production brief sits inside the
 * frame — the region the photograph will cover — so it can never leak into
 * the caption. `shape` picks the comps' corner treatment.
 */
export function MediaFrame({ media, shape = 'feature', className = '' }: { media: Media; shape?: 'feature' | 'feature-cut' | 'card' | 'thumb'; className?: string }) {
  return (
    <figure className={`media ${className}`}>
      <div className={`media_frame is-${shape}`} role="img" aria-label={media.alt}>
        <div className="media_brief" aria-hidden="true">
          <Icon name={media.kind === 'Rendering' ? 'view_in_ar' : 'photo_camera'} />
          <span className="media_kind">{media.kind} needed</span>
          <span className="media_note">{media.brief}</span>
        </div>
      </div>
      {(media.caption || media.date) && (
        <figcaption className="media_caption">
          {media.caption && <span>{media.caption}</span>}
          {media.date && <span className="media_date">{media.date}</span>}
          <span className="media_type">{media.kind}</span>
        </figcaption>
      )}
    </figure>
  );
}

/* ------------------------------------------------------------- Section */

export function SectionHead({ eyebrow, title, id }: { eyebrow?: string; title: string; id?: string }) {
  return (
    <header className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="heading-lg" id={id}>
        {title}
      </h2>
    </header>
  );
}
