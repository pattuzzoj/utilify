/**
 * Rounds a number to a specified precision.
 * @param {number} value - The number to round.
 * @param {number} [precision=0] - The number of decimal places.
 * @returns {number} The rounded number.
 * @throws {TypeError} If value or precision is not a number, or precision is negative.
 */
export default function roundTo(value: number, precision: number = 0): number {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }

  if (typeof precision !== 'number') {
    throw new TypeError(`Expected a number for 'precision'`);
  }

  if (!Number.isInteger(precision) || precision < 0) {
    throw new TypeError(`Expected a non-negative integer for 'precision'`);
  }

  const factor = 10 ** precision;
  
  return Math.round(value * factor) / factor;
}