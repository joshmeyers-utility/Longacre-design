import { useEffect, useRef, type ReactNode } from 'react';
import { bindScrollProgress, throughViewport } from '../motion';
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

/* ---------------------------------------------------------------- Chip */

/**
 * Pill with a label and a round arrow well — T1's chip. One component for
 * facility selectors, contact routes and any short list of choices. Renders
 * a button when `onSelect` is given, a link when `href` is.
 */
export function Chip({ href, onSelect, selected = false, meta, icon = 'arrow_forward', children }: { href?: string; onSelect?: () => void; selected?: boolean; meta?: string; icon?: string; children: ReactNode }) {
  const inner = (
    <>
      <span className="chip_copy">
        <span className="chip_label">{children}</span>
        {meta && <span className="chip_meta">{meta}</span>}
      </span>
      <span className="chip_well">
        <Icon name={icon} />
      </span>
    </>
  );
  const cls = `chip${selected ? ' is-selected' : ''}`;
  if (href) {
    return (
      <a className={cls} href={href}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} type="button" aria-pressed={selected} onClick={onSelect}>
      {inner}
    </button>
  );
}

/* ---------------------------------------------------------- Scroll hook */

/** Drives `--progress` on the element while it passes through the viewport. */
export function useScrollProgress<T extends HTMLElement>(measure: (r: DOMRect) => number = throughViewport, enabled = true) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!enabled || !ref.current) return;
    return bindScrollProgress(ref.current, measure);
  }, [measure, enabled]);
  return ref;
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
export function MediaFrame({ media, shape = 'feature', sizes = '(min-width: 1024px) 50vw, 100vw', className = '', parallax = false }: { media: Media; shape?: 'feature' | 'feature-cut' | 'card' | 'thumb'; sizes?: string; className?: string; parallax?: boolean }) {
  const photo = media.photo ?? placeholderPhoto;
  const isPlaceholder = !media.photo;
  // Joby's section-entry parallax: the photo travels inside its frame as the
  // frame crosses the viewport. Desktop only — the CSS ignores --progress below 1024px.
  const frame = useScrollProgress<HTMLDivElement>(throughViewport, parallax);
  return (
    <figure className={`media ${className}`}>
      <div className={`media_frame is-${shape}${parallax ? ' is-parallax' : ''}`} ref={frame}>
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
