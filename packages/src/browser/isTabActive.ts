import { isServer } from '../env';

/**
 * Checks if the browser tab is currently active (visible).
 * @returns {boolean|undefined} True if tab is active, false if not, undefined if server.
 */
export default function isTabActive(): boolean {
	// @ts-ignore
  if (isServer()) return;

  return document.visibilityState === 'visible';
}