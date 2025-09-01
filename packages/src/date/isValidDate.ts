import { isDate } from "../types";
import { isNaN } from "../number";

/**
 * Checks if a value is a valid Date object.
 * @param {Date} value - The value to check.
 * @returns {boolean} True if valid Date, false otherwise.
 */
export default function isValidDate(value: Date): boolean {
  return isDate(value) && !isNaN(value.getTime());
}