/**
 * Checks if a value is an EvalError.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is an EvalError, false otherwise.
 */
export default function isEvalError(value: any): value is EvalError {
  return value instanceof EvalError;
}