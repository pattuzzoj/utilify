/**
 * Divides dividend by divisor.
 * @param {number} dividend - The dividend.
 * @param {number} divisor - The divisor.
 * @returns {number} The result of division.
 * @throws {TypeError|Error} If dividend or divisor is not a number, or divisor is zero.
 */
export default function divide(dividend: number, divisor: number): number {
  if (typeof dividend !== 'number' || typeof divisor !== 'number') {
    throw new TypeError(`Expected a number for 'dividend' and 'divisor'`);
  }

  if (divisor === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return dividend / divisor;
}