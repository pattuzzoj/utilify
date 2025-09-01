import isValidDate from "./isValidDate";

function lastDayOfMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Adjusts a date by adding or subtracting years, months, days, hours, minutes, seconds, or milliseconds.
 * @param {Date} date - The date to adjust.
 * @param {Partial<{years: number, months: number, days: number, hours: number, minutes: number, seconds: number, milliseconds: number}>} adjustment - The adjustment object.
 * @returns {Date} The adjusted date.
 * @throws {TypeError} If date is not valid.
 */
export default function adjustDate(
  date: Date,
  adjustment: Partial<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  }>
): Date {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date, string, or number for 'date'`);
  }

  if (adjustment.years) {
    date.setFullYear(date.getFullYear() + adjustment.years);
  }

  if (adjustment.months) {
    const currentDate = date.getDate();
    date.setMonth(date.getMonth() + adjustment.months, 1);
    const maxDay = lastDayOfMonth(date.getFullYear(), date.getMonth());
    date.setDate(Math.min(currentDate, maxDay));
  }

  if (adjustment.days) {
    date.setDate(date.getDate() + adjustment.days);
  }

  if (adjustment.hours) {
    date.setHours(date.getHours() + adjustment.hours);
  }

  if (adjustment.minutes) {
    date.setMinutes(date.getMinutes() + adjustment.minutes);
  }

  if (adjustment.seconds) {
    date.setSeconds(date.getSeconds() + adjustment.seconds);
  }

  if (adjustment.milliseconds) {
    date.setMilliseconds(date.getMilliseconds() + adjustment.milliseconds);
  }

  return date;
}