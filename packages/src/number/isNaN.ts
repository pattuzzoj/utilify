/**
 * Checks if a value is NaN.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is NaN, false otherwise.
 */
export default function isNaN(value: any): value is number {
  return value !== value;
}