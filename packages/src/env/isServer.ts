/**
 * Checks if the current environment is a server (not browser).
 * @returns {boolean} True if running on server, false otherwise.
 */
export default function isServer(): boolean {
  return typeof window === "undefined" || typeof document === "undefined";
}