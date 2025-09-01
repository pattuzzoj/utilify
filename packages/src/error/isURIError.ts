/**
 * Checks if a value is a URIError.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is a URIError, false otherwise.
 */
export default function isURIError(value: any): value is URIError {
  return value instanceof URIError;
}
