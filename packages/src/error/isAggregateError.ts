/**
 * Checks if a value is an AggregateError.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is an AggregateError, false otherwise.
 */
export default function isAggregateError(value: any): value is AggregateError {
  return typeof AggregateError !== 'undefined' && value instanceof AggregateError;
}