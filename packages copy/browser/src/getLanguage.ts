import { isServer } from '@utilify/environment';

export default function getLanguage(): string | undefined {
  if (isServer()) return;

  return navigator.language.slice(0, 2);
}