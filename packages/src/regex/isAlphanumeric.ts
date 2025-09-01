/**
 * Checks if a string contains only alphanumeric characters (A-Z, a-z, 0-9).
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string is alphanumeric, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isAlphanumeric(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[a-zA-Z0-9]+$/.test(value);
}