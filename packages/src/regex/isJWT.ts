/**
 * Checks if a string is a valid JWT (JSON Web Token).
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string is a valid JWT, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isJWT(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(value);
}