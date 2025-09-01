import isValidDate from "./isValidDate";

type DateFormat = "timestamp" | "string" | "utc" | "iso";

/**
 * Converts a Date object to a string or number in the specified format.
 * @param {Date} date - The date to convert.
 * @param {DateFormat} [format="iso"] - The format ("timestamp", "string", "utc", "iso").
 * @returns {string|number} The converted value.
 * @throws {TypeError} If date is not valid.
 */
export default function convertDateTo(date: Date, format: DateFormat = "iso"): string | number {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  if (format === "timestamp") {
    return date.getTime();
  } else if (format === "utc") {
    return date.toUTCString();
  } else if (format === "iso") {
    return date.toISOString();
  }

  return date.toString();
}