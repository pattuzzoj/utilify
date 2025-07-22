import isValidDate from "./isValidDate";

export default function stripTime(date: Date): Date {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }
  
  date.setHours(0, 0, 0, 0);

  return date;
}