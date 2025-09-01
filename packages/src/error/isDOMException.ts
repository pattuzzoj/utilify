/**
 * Checks if a value is a DOMException.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is a DOMException, false otherwise.
 */
export default function isDOMException(value: any): value is DOMException {
  return value instanceof DOMException;
}