/**
 * Check if a value is undefined.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is undefined, false otherwise.
 */
export default function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}