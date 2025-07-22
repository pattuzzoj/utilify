import { isServer } from '../env';

export default function getLanguage(): string | undefined {
  if (isServer()) return;

  return navigator.language.slice(0, 2);
}