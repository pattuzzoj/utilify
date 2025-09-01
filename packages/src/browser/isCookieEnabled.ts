import { isServer } from '../env';

/**
 * Checks if cookies are enabled in the browser.
 * @returns {boolean|undefined} True if enabled, false if not, undefined if server.
 */
export default function isCookieEnabled(): boolean | undefined {
  if (isServer()) return;

  return navigator.cookieEnabled;
}