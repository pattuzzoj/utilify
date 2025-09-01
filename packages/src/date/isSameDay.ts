import isValidDate from "./isValidDate";

/**
 * Checks if two dates are on the same day.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {boolean} True if both dates are on the same day, false otherwise.
 * @throws {TypeError} If either date is not valid.
 */
export default function isSameDay(date1: Date, date2: Date): boolean {
  if (!isValidDate(date1)) {
    throw new TypeError(`Expected valid Date for 'date1'`);
  }

  if (!isValidDate(date2)) {
    throw new TypeError(`Expected valid Date for 'date2'`);
  }

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}