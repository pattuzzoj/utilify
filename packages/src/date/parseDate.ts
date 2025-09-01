import toDate from "./toDate";
import isValidDate from "./isValidDate";

/**
 * Parses a Date, string, or number into a valid Date object.
 * @param {Date} date - The date to parse.
 * @returns {Date} The parsed Date object.
 * @throws {TypeError} If date is not valid.
 */
export default function parseDate(date: Date): Date;
/**
 * Parses a string into a valid Date object.
 * @param {string} date - The date string to parse.
 * @returns {Date} The parsed Date object.
 * @throws {TypeError} If date is not valid.
 */
export default function parseDate(date: string): Date;
/**
 * Parses a number into a valid Date object.
 * @param {number} date - The date number to parse.
 * @returns {Date} The parsed Date object.
 * @throws {TypeError} If date is not valid.
 */
export default function parseDate(date: number): Date;
export default function parseDate(date: any): Date {
  const d = toDate(date);

  if (!isValidDate(d)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  return d;
}