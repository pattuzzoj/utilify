import { isServer } from '../env';

/**
 * Checks if the fullscreen API is enabled in the browser.
 * @returns {boolean|undefined} True if enabled, false if not, undefined if server.
 */
export default function isFullscreenEnabled(): boolean {
	// @ts-ignore
  if (isServer()) return;

  return !!(
    document.fullscreenEnabled ||
    // @ts-expect-error: Support Chrome, Safari and Opera
    document.webkitFullscreenEnabled ||
    // @ts-expect-error: Support Firefox
    document.mozFullScreenEnabled ||
    // @ts-expect-error: Support IE/Edge
    document.msFullscreenEnabled
  );
}