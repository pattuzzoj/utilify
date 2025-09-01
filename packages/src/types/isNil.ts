/**
 * Check if a value is null or undefined.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is null or undefined, false otherwise.
 */
export default function isNil(value: any): value is undefined | null {
  return value == null;
}