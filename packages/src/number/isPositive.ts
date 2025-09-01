/**
 * Checks if a number is positive.
 * @param {number} value - The number to check.
 * @returns {boolean} True if the number is positive, false otherwise.
 * @throws {TypeError} If value is not a number.
 */
export default function isPositive(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return value > 0;
}