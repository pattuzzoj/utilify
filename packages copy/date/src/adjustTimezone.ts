import isValidDate from "./isValidDate";

export default function adjustTimezone(date: Date, timezoneOffset: number): Date {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  }

  const currentTimezoneOffset = date.getTimezoneOffset();
  const offsetDifference = timezoneOffset - currentTimezoneOffset;
  return new Date(date.getTime() + offsetDifference * 60 * 1000);
}
