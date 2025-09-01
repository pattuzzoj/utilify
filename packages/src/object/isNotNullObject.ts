/**
 * Checks if a value is a non-null object.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a non-null object, false otherwise.
 */
export default function isNotNullObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}