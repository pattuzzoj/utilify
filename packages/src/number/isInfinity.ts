/**
 * Checks if a value is Infinity or -Infinity.
 * @param {number} value - The value to check.
 * @returns {boolean} True if the value is Infinity or -Infinity, false otherwise.
 * @throws {TypeError} If value is not a number.
 */
export default function isInfinity(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return value === Infinity || value === -Infinity;
}