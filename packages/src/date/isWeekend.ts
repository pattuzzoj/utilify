import isValidDate from "./isValidDate";

/**
 * Checks if a date falls on a weekend (Saturday or Sunday).
 * @param {Date} date - The date to check.
 * @returns {boolean} True if weekend, false otherwise.
 * @throws {TypeError} If date is not valid.
 */
export default function isWeekend(date: Date): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const day = date.getDay();
  return day === 0 || day === 6;
}