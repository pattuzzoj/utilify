import isValidDate from "./isValidDate";

/**
 * Formats a Date object as a time string.
 * @param {Date} date - The date to format.
 * @param {string} [format="hh:mm"] - The format string.
 * @returns {string} The formatted time string.
 * @throws {TypeError} If date is not valid.
 */
export default function formatTime(date: Date, format: string = "hh:mm"): string {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const useAMPM = format.search("a") !== -1;
  const hours = String(useAMPM ? date.getHours() % 12 || 12 : date.getHours());
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  const period = date.getHours() >= 12 ? "PM" : "AM";

  return format
  .toLowerCase()
  .replace("hh", hours)
  .replace("mm", minutes)
  .replace("ss", seconds)
  .replace("ms", milliseconds)
  .replace("a", period);
}