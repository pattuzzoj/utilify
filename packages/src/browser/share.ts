import { isServer } from '../env';
import isShareable from './isShareable';

/**
 * Shares data using the Web Share API.
 * @param {ShareData} data - The data to share.
 * @returns {Promise<void>} Resolves when sharing is complete.
 * @throws {Error} If Web Share API is not available or data is not shareable.
 */
export default function share(data: ShareData): Promise<void> {
  // @ts-ignore
  if (isServer()) return;

  if (!isShareable(data)) {
    return Promise.reject(new Error('The Web Share API is not available or the data is not shareable.'));
  }

  return navigator.share(data);
}