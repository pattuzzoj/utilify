/**
 * Checks if a string is a valid email address.
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string is a valid email, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isEmail(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}