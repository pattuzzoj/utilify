import { isServer } from '@utilify/environment';

export default function isCookieEnabled(): boolean | undefined {
  if (isServer()) return;

  return navigator.cookieEnabled;
}