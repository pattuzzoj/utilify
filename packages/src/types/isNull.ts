/**
 * Check if a value is null.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is null, false otherwise.
 */
export default function isNull(value: any): value is null {
  return value === null;
}