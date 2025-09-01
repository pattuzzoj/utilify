import { isServer } from '../env';

/**
 * Checks if the current device supports touch events.
 * @returns {boolean|undefined} True if touch device, false if not, undefined if server.
 */
export default function isTouchDevice(): boolean | undefined {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
