import isServer from './isServer';

/**
 * Checks if the current device is a mobile device.
 * @returns {boolean|undefined} True if mobile, false if not, undefined if server.
 */
export default function isMobile(): boolean | undefined {
  if (isServer()) return;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}