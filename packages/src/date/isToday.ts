import isValidDate from "./isValidDate";
import isSameDay from "./isSameDay";

export default function isToday(date: Date): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  return isSameDay(date, new Date());
}
