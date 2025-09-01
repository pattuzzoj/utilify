/**
 * Checks if a value is an integer and not NaN or Infinity.
 * @param {number} value - The value to check.
 * @returns {boolean} True if the value is an integer, false otherwise.
 * @throws {TypeError} If value is not a number.
 */
export default function isInteger(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return Number.isInteger(value) && value === value && value !== Infinity && value !== -Infinity;
}