/**
 * Check if a value is a WeakRef.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a WeakRef, false otherwise.
 */
export default function isWeakRef(value: any): value is WeakRef<object> {
  return value instanceof WeakRef;
}