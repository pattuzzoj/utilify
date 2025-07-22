import { isArray, isString } from "../types";

export default function last(string: string, count?: number): string;
export default function last<T>(array: T[], count?: number): T[];
export default function last(array: any, count: number = 1): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array-like for 'array'`);
  }

  if (typeof count !== 'number' || count < 0) {
    throw new TypeError(`Expected 'count' to be a non-negative number`);
  }

  return array.slice(-count);
}