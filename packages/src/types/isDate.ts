/**
 * Check if a value is a Date.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a Date, false otherwise.
 */
export default function isDate(value: any): value is Date {
  return value instanceof Date;
}