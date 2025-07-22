import { isServer } from '../env';
import isShareable from './isShareable';

export default function share(data: ShareData): Promise<void> {
  // @ts-ignore
  if (isServer()) return;

  if (!isShareable(data)) {
    return Promise.reject(new Error('The Web Share API is not available or the data is not shareable.'));
  }

  return navigator.share(data);
}