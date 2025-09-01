/**
 * Checks if a string is a valid base64 string.
 * @param {string} value - The string to check.
 * @returns {boolean} True if valid base64, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isBase64(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
}