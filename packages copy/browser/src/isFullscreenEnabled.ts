import { isServer } from '@utilify/environment';

export default function isFullscreenEnabled(): boolean | undefined {
  if (isServer()) return;

  return document.fullscreenEnabled;
}