/**
 * Checks if a string is a valid slug (lowercase, numbers, hyphens).
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string is a valid slug, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isSlug(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
