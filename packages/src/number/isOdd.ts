/**
 * Checks if a number is odd.
 * @param {number} value - The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 * @throws {TypeError} If value is not a number.
 */
export default function isOdd(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return value % 2 !== 0;
}