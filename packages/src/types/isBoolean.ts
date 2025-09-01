/**
 * Check if a value is a boolean.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a boolean, false otherwise.
 */
export default function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}