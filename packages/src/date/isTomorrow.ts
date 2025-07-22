import isValidDate from "./isValidDate";
import isSameDay from "./isSameDay";

export default function isTomorrow(date: Date): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return isSameDay(date, tomorrow);
}