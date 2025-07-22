import { isServer } from '../env';

export default function isCookieEnabled(): boolean | undefined {
  if (isServer()) return;

  return navigator.cookieEnabled;
}