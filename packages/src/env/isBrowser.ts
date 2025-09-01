/**
 * Checks if the current environment is a browser.
 * @returns {boolean} True if running in a browser, false otherwise.
 */
export default function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}