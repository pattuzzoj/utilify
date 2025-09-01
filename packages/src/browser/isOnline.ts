import { isServer } from '../env';

/**
 * Checks if the browser is currently online.
 * @returns {boolean|undefined} True if online, false if not, undefined if server.
 */
export default function isOnline(): boolean | undefined {
  if (isServer()) return;

  return navigator.onLine;
}