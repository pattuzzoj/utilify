/**
 * Performs linear interpolation between two numbers.
 * @param {number} start - The start value.
 * @param {number} end - The end value.
 * @param {number} amount - The interpolation factor (0 to 1).
 * @returns {number} The interpolated value.
 * @throws {TypeError} If any argument is not a number.
 */
export default function lerp(start: number, end: number, amount: number): number {
  if (typeof start !== 'number') {
    throw new TypeError(`Expected a number for 'start'`);
  }

  if (typeof end !== 'number') {
    throw new TypeError(`Expected a number for 'end'`);
  }

  if (typeof amount !== 'number') {
    throw new TypeError(`Expected a number for 'amount'`);
  }

  return start + (end - start) * amount;
}