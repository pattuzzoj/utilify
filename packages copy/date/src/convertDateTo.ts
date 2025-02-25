import isValidDate from "./isValidDate";

type DateFormat = "string" | "utc" | "iso";

export default function convertDateTo(date: Date, format: DateFormat): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  if (format === "utc") {
    return date.toUTCString();
  } else if (format === "iso") {
    return date.toISOString();
  }

  return date.toString();
}