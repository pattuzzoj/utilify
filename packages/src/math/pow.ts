/**
 * Raises a base to the exponent power.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} The result of base raised to exponent.
 * @throws {TypeError} If base or exponent is not a number.
 */
export default function pow(base: number, exponent: number): number {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError(`Expected a number for 'base' and 'exponent'`);
  }

  return Math.pow(base, exponent);
}