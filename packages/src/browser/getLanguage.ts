import { isServer } from '../env';

/**
 * Gets the user's preferred language (ISO 639-1 code).
 * @returns {string|undefined} The language code or undefined if server.
 */
export default function getLanguage(): string | undefined {
  if (isServer()) return;

  return navigator.language.slice(0, 2);
}