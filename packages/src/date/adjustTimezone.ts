import isValidDate from './isValidDate';

/**
 * Adjusts a date to a target timezone offset.
 * @param {Date} date - The date to adjust.
 * @param {number} targetTimezone - The target timezone offset (in hours).
 * @returns {Date} The adjusted date.
 * @throws {TypeError} If date is not valid.
 */
export default function adjustTimezone(date: Date, targetTimezone: number): Date {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid date for 'date'`);
  }

  const utcTimestamp = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );

  const targetTimestamp = utcTimestamp + targetTimezone * 3600000;

  return new Date(targetTimestamp);
}