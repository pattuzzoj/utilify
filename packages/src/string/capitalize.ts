/**
 * Capitalizes the first character of a string and lowercases the rest.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 * @throws {TypeError} If str is not a string.
 */
export default function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  return str
  .charAt(0)
  .toUpperCase()
  .concat(str.slice(1).toLowerCase());
}