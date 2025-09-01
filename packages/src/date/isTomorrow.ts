import isValidDate from "./isValidDate";
import isSameDay from "./isSameDay";

/**
 * Checks if a date is tomorrow.
 * @param {Date} date - The date to check.
 * @returns {boolean} True if the date is tomorrow, false otherwise.
 * @throws {TypeError} If date is not valid.
 */
export default function isTomorrow(date: Date): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return isSameDay(date, tomorrow);
}