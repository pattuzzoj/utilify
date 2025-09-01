/**
 * Checks if a string is a valid base64url string.
 * @param {string} value - The string to check.
 * @returns {boolean} True if valid base64url, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isBase64URL(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[A-Za-z0-9_-]+$/.test(value);
}