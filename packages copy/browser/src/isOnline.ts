import { isServer } from '@utilify/environment';

export default function isOnline(): boolean | undefined {
  if (isServer()) return;

  return navigator.onLine;
}