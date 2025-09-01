/**
 * Checks if a value is a TypeError.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is a TypeError, false otherwise.
 */
export default function isTypeError(value: any): value is TypeError {
  return value instanceof TypeError;
}