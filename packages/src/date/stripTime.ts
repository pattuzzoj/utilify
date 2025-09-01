import isValidDate from "./isValidDate";

/**
 * Removes the time portion from a Date object (sets time to 00:00:00.000).
 * @param {Date} date - The date to strip time from.
 * @returns {Date} The date with time set to midnight.
 * @throws {TypeError} If date is not valid.
 */
export default function stripTime(date: Date): Date {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const utcTimestamp = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    0,
    0,
    0,
    0
  );

  return new Date(utcTimestamp);
}