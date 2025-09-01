/**
 * Checks if a number is negative.
 * @param {number} value - The number to check.
 * @returns {boolean} True if the number is negative, false otherwise.
 * @throws {TypeError} If value is not a number.
 */
export default function isNegative(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return value < 0;
}