import { isDate } from "../types";

/**
 * Converts a Date, string, or number to a Date object.
 * @param {Date} value - The value to convert.
 * @returns {Date} The Date object.
 */
export default function toDate(value: Date): Date;
/**
 * Converts a string to a Date object.
 * @param {string} value - The value to convert.
 * @returns {Date} The Date object.
 */
export default function toDate(value: string): Date;
/**
 * Converts a number to a Date object.
 * @param {number} value - The value to convert.
 * @returns {Date} The Date object.
 */
export default function toDate(value: number): Date;
export default function toDate(value: any): Date {
  if (isDate(value)) {
    return new Date(value.getTime());
  } else if (typeof value === 'string' || typeof value === 'number') {
    return new Date(value);
  }
  
  return new Date(NaN);
}