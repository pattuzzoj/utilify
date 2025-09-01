/**
 * Check if a value is a WeakSet.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a WeakSet, false otherwise.
 */
export default function isWeakSet(value: any): value is WeakSet<object> {
  return value instanceof WeakSet;
}