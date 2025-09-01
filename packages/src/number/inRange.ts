/**
 * Checks if a number is within a given range (inclusive).
 * @param {number} value - The number to check.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {boolean} True if value is in range, false otherwise.
 * @throws {TypeError} If any argument is not a number.
 */
export default function inRange(value: number, min: number, max: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }

  if (typeof min !== 'number') {
    throw new TypeError(`Expected a number for 'min'`);
  }

  if (typeof max !== 'number') {
    throw new TypeError(`Expected a number for 'max'`);
  }
  
  return min <= value && value <= max;
}