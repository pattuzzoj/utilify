/**
 * Checks if a value is a ReferenceError.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is a ReferenceError, false otherwise.
 */
export default function isReferenceError(value: any): value is ReferenceError {
  return value instanceof ReferenceError;
}