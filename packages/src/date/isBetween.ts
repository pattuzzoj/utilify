import isValidDate from "./isValidDate";

/**
 * Checks if a date is between two other dates.
 * @param {Date} date - The date to check.
 * @param {Date} start - The start date.
 * @param {Date} end - The end date.
 * @param {boolean} [inclusive=true] - Whether the range is inclusive.
 * @returns {boolean} True if date is between start and end, false otherwise.
 * @throws {TypeError} If any date is not valid.
 */
export default function isBetween(date: Date, start: Date, end: Date, inclusive: boolean = true): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  if (!isValidDate(start)) {
    throw new TypeError(`Expected a valid Date for 'start'`);
  }

  if (!isValidDate(end)) {
    throw new TypeError(`Expected a valid Date for 'end'`);
  }

  if (inclusive) {
    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
  }
  
  return date.getTime() > start.getTime() && date.getTime() < end.getTime();
}