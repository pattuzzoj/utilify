import isNaN from "./isNaN";

/**
 * Checks if a value is a finite number (not NaN or Infinity).
 * @param {number} value - The value to check.
 * @returns {boolean} True if the value is finite, false otherwise.
 * @throws {TypeError} If value is not a number.
 */
export default function isFinite(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return !isNaN(value) && value !== Infinity && value !== -Infinity;
}