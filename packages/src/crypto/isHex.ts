/**
 * Checks if a string is a valid hexadecimal string.
 * @param {string} value - The string to check.
 * @returns {boolean} True if valid hex, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isHex(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[A-Fa-f0-9]+$/.test(value);
}