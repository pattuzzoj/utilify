import { isServer } from '@utilify/environment';

export default function isTouchDevice(): boolean | undefined {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
