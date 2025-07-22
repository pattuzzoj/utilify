import isValidDate from "./isValidDate";

export default function isBetween(date: Date, start: Date, end: Date, inclusive: boolean = true): boolean {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  if (!isValidDate(start)) {
    throw new TypeError(`Expected a valid Date for 'start'`);
  }

  if (!isValidDate(end)) {
    throw new TypeError(`Expected a valid Date for 'end'`);
  }

  if (inclusive) {
    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
  }
  
  return date.getTime() > start.getTime() && date.getTime() < end.getTime();
}