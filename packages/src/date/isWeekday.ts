import isValidDate from "./isValidDate";

export default function isWeekday(date: Date): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const day = date.getDay();
  return day !== 0 && day !== 6;
}