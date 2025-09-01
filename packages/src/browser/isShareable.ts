import { isServer } from '../env';

/**
 * Checks if the Web Share API is available and the data is shareable.
 * @param {ShareData} [data] - The data to check.
 * @returns {boolean} True if shareable, false otherwise.
 */
export default function isShareable(data?: ShareData): boolean {
  if (isServer() || !navigator.share) {
    return false;
  }

  if (data && navigator.canShare) {
    return navigator.canShare(data);
  }

  return true;
}