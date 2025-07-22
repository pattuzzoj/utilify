import isValidDate from "./isValidDate";

type DateFormat = "DMY" | "MDY" | "YMD";

export default function formatDate(date: Date, format: DateFormat, separator: string = '/'): string {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "DMY":
      return `${day}${separator}${month}${separator}${year}`;
    case "MDY":
      return `${month}${separator}${day}${separator}${year}`;
    case "YMD":
      return `${year}${separator}${month}${separator}${day}`;
    default:
      throw new TypeError(`Expected a string for 'format'`);
  }
}