/**
 * Returns the positive modulo of dividend and divisor.
 * @param {number} dividend - The dividend.
 * @param {number} divisor - The divisor.
 * @returns {number} The positive modulo result.
 * @throws {TypeError|Error} If dividend or divisor is not a number, or divisor is zero.
 */
export default function mod(dividend: number, divisor: number): number {
  if (typeof dividend !== 'number' || typeof divisor !== 'number') {
    throw new TypeError(`Expected a number for 'dividend' and 'divisor'`);
  }
  
  if (divisor === 0) {
    throw new Error('Cannot calculate modulo with zero divisor.');
  }
  return ((dividend % divisor) + divisor) % divisor;
}