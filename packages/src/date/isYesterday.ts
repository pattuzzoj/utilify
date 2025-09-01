import isValidDate from "./isValidDate";
import isSameDay from "./isSameDay";

/**
 * Checks if a date is yesterday.
 * @param {Date} date - The date to check.
 * @returns {boolean} True if the date is yesterday, false otherwise.
 * @throws {TypeError} If date is not valid.
 */
export default function isYesterday(date: Date): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return isSameDay(date, yesterday);
}