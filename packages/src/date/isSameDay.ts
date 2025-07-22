import isValidDate from "./isValidDate";

export default function isSameDay(date1: Date, date2: Date): boolean {
  if (!isValidDate(date1)) {
    throw new TypeError(`Expected valid Date for 'date1'`);
  }

  if (!isValidDate(date2)) {
    throw new TypeError(`Expected valid Date for 'date2'`);
  }

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}