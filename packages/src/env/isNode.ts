/**
 * Checks if the current environment is Node.js.
 * @returns {boolean} True if running in Node.js, false otherwise.
 */
export default function isNode(): boolean {
  return typeof global !== "undefined" && typeof process !== "undefined";
}