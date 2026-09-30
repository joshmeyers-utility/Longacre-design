import { useId } from 'react';
import { Icon } from './primitives';

/**
 * The trade tile, shared: an icon, a name and a description that eases in
 * as ink spreads from the corner, the + turning into ↗ for a link that
 * leaves the site. On touch the description sits on the tile face. Used
 * for the nine trades (Careers) and the campus partners.
 */
export function LinkTile({ icon, name, description, href, hidden }: { icon: string; name: string; description: string; href?: string; hidden?: string }) {
  const descId = useId();
  const inner = (
    <>
      <Icon name={icon} size="md" className="trade-tile_icon" />
      <span className="trade-tile_name heading-sm">
        {name}
        {hidden && <span className="sr-only">{hidden}</span>}
      </span>
      <span className="icon-button trade-tile_more" aria-hidden="true">
        <span className="trade-tile_wash" />
        <Icon name="add" className="trade-tile_more-icon is-add" />
        <Icon name="arrow_outward" className="trade-tile_more-icon is-out" />
      </span>
      <span className="trade-tile_desc body-md" id={descId}>
        {description}
      </span>
    </>
  );
  return (
    <li className="trade-tile">
      {href ? (
        <a className="trade-tile_link" href={href} target="_blank" rel="noopener" aria-describedby={descId}>
          {inner}
        </a>
      ) : (
        <div className="trade-tile_link" tabIndex={0} aria-describedby={descId}>
          {inner}
        </div>
      )}
    </li>
  );
}
