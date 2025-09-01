/**
 * Checks if a string is all uppercase.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is uppercase, false otherwise.
 * @throws {TypeError} If str is not a string.
 */
export default function isUpperCase(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return /^(?!.*[a-z]).*[A-Z].*$/.test(str.replace(/\s+/g, ""));
}