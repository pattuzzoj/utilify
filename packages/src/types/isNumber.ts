import { isInfinity } from "../number";
import isNaN from "../number/isNaN";

/**
 * Check if a value is a finite number (not NaN or Infinity).
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a finite number, false otherwise.
 */
export default function isNumber(value: any): value is number {
  return typeof value === 'number' && !isInfinity(value) && !isNaN(value);
}