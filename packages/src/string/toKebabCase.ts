/**
 * Converts a string to kebab-case.
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-case string.
 * @throws {TypeError} If str is not a string.
 */
export default function toKebabCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");
}