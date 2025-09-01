/**
 * Check if a value is a Set.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a Set, false otherwise.
 */
export default function isSet(value: any): value is Set<any> {
  return value instanceof Set;
}