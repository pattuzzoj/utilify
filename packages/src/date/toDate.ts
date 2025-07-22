import { isDate } from "../types";

export default function toDate(value: Date): Date;
export default function toDate(value: string): Date;
export default function toDate(value: number): Date;
export default function toDate(value: any): Date {
  if (isDate(value)) {
    return new Date(value.getTime());
  } else if (typeof value === 'string' || typeof value === 'number') {
    return new Date(value);
  }
  
  return new Date(NaN);
}