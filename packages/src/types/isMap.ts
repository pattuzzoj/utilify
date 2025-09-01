/**
 * Check if a value is a Map.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a Map, false otherwise.
 */
export default function isMap(value: any): value is Map<any, any> {
  return value instanceof Map;
}