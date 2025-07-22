import { isServer } from '../env';

export default function isTabActive(): boolean {
	// @ts-ignore
  if (isServer()) return;

  return document.visibilityState === 'visible';
}