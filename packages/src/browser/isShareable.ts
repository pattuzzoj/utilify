import { isServer } from '../env';

export default function isShareable(data?: ShareData): boolean {
  if (isServer() || !navigator.share) {
    return false;
  }

  if (data && navigator.canShare) {
    return navigator.canShare(data);
  }

  return true;
}