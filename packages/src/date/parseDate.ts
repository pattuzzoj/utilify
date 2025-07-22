import toDate from "./toDate";
import isValidDate from "./isValidDate";

export default function parseDate(date: Date): Date;
export default function parseDate(date: string): Date;
export default function parseDate(date: number): Date;
export default function parseDate(date: any): Date {
  const d = toDate(date);

  if (!isValidDate(d)) {
    throw new TypeError(`Expected a valid Date for 'date'`);
  }

  return d;
}