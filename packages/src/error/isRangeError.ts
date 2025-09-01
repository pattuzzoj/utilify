/**
 * Checks if a value is a RangeError.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is a RangeError, false otherwise.
 */
export default function isRangeError(value: any): value is RangeError {
  return value instanceof RangeError;
}