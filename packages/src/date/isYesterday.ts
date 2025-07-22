import isValidDate from "./isValidDate";
import isSameDay from "./isSameDay";

export default function isYesterday(date: Date): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return isSameDay(date, yesterday);
}