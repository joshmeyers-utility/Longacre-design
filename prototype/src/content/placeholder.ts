/**
 * Stand-in photograph used in every image slot until the client's photo
 * library lands (CLAUDE.md §10 #4). A stock transmission tower, not the
 * campus — so while it is in use, frames show a "Placeholder image" tag and
 * suppress their captions, which describe specific photographs.
 */
import large from '../assets/placeholder-1600.webp';
import small from '../assets/placeholder-800.webp';
import type { Photo } from './types';

export const placeholderPhoto: Photo = {
  src: large,
  srcSet: `${small} 800w, ${large} 1600w`,
  width: 1600,
  height: 890,
  // Keep the tower in frame when the slot crops to a square.
  focus: '78% 60%',
};

/** Alt text while the stand-in shows: describe what is on screen. */
export const placeholderAlt = 'Placeholder photograph: a transmission tower against a clear sky';
