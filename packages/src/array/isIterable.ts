/**
 * Checks if a value is iterable.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is iterable, false otherwise.
 */
export default function isIterable(value: any): value is Iterable<any> {
  return value != null && typeof value[Symbol.iterator] === 'function';
}