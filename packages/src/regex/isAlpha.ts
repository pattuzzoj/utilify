/**
 * Checks if a string contains only alphabetic Unicode characters.
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string is alphabetic, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isAlpha(value: string): boolean {
  if (typeof value !== "string") {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^\p{L}+$/u.test(value);
}