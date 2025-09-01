/**
 * Check if a value is a WeakMap.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a WeakMap, false otherwise.
 */
export default function isWeakMap(value: any): value is WeakMap<object, any> {
  return value instanceof WeakMap;
}