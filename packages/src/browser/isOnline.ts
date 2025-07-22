import { isServer } from '../env';

export default function isOnline(): boolean | undefined {
  if (isServer()) return;

  return navigator.onLine;
}