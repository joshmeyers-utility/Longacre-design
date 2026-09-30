import type { ReactNode } from 'react';
import { placeholderAlt, placeholderPhoto } from '../content/placeholder';
import type { Media, Photo, Provenance } from '../content/types';

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

/* ------------------------------------------------------------- Picture */

/**
 * Responsive image. Explicit width/height reserve the space (no layout
 * shift); below-the-fold images load lazily. `sizes` tells the browser which
 * width it needs, so a phone fetches the 800px file.
 */
export function Picture({ photo, alt, sizes, eager = false, className = '' }: { photo: Photo; alt: string; sizes: string; eager?: boolean; className?: string }) {
  return (
    <img
      className={`picture ${className}`}
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
      style={photo.focus ? { objectPosition: photo.focus } : undefined}
    />
  );
}

/** Tag inside a frame while it shows the stand-in photo. Carries the brief. */
export function PlaceholderTag({ media }: { media: Media }) {
  return (
    <span className="placeholder-tag">
      <Icon name={media.kind === 'Rendering' ? 'view_in_ar' : 'photo_camera'} />
      <span>
        <strong>Placeholder image.</strong> {media.kind} needed: {media.brief}
      </span>
    </span>
  );
}

/* --------------------------------------------------------- Media frame */

/**
 * Image slot. Shows the real photograph when there is one; until then the
 * stand-in, with the production brief tagged *inside* the frame and the
 * caption withheld — a caption naming a specific shot would be false under a
 * stock photo. `shape` picks the comps' corner treatment.
 */
export function MediaFrame({ media, shape = 'feature', sizes = '(min-width: 1024px) 50vw, 100vw', className = '' }: { media: Media; shape?: 'feature' | 'feature-cut' | 'card' | 'thumb'; sizes?: string; className?: string }) {
  const photo = media.photo ?? placeholderPhoto;
  const isPlaceholder = !media.photo;
  return (
    <figure className={`media ${className}`}>
      <div className={`media_frame is-${shape}`}>
        <Picture photo={photo} alt={isPlaceholder ? placeholderAlt : media.alt} sizes={sizes} />
        {isPlaceholder && <PlaceholderTag media={media} />}
      </div>
      {!isPlaceholder && (media.caption || media.date) && (
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
