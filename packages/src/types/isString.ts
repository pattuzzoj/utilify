/**
 * Check if a value is a string.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a string, false otherwise.
 */
export default function isString(value: any): value is string {
  return typeof value === 'string';
}