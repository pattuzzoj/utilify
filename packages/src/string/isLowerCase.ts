/**
 * Checks if a string is all lowercase.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is lowercase, false otherwise.
 * @throws {TypeError} If str is not a string.
 */
export default function isLowerCase(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return /^(?!.*[A-Z]).*[a-z].*$/.test(str.replace(/\s+/g, ""));
}