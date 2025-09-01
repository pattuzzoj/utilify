/**
 * Checks if a value is a finite float (not integer).
 * @param {number} value - The value to check.
 * @returns {boolean} True if the value is a float, false otherwise.
 * @throws {TypeError} If value is not a number.
 */
export default function isFloat(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return !Number.isInteger(value) && Number.isFinite(value);
}