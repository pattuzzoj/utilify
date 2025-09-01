import isValidDate from "./isValidDate";
import isSameDay from "./isSameDay";

/**
 * Checks if a date is today.
 * @param {Date} date - The date to check.
 * @returns {boolean} True if the date is today, false otherwise.
 * @throws {TypeError} If date is not valid.
 */
export default function isToday(date: Date): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  return isSameDay(date, new Date());
}
