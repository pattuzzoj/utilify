/**
 * Checks if a value is a SyntaxError.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is a SyntaxError, false otherwise.
 */
export default function isSyntaxError(value: any): value is SyntaxError {
  return value instanceof SyntaxError;
}