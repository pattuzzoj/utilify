import isValidDate from "./isValidDate";

type DateFormat = "timestamp" | "string" | "utc" | "iso";

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