import { isArray, isString } from "../types";

export default function first(string: string, count?: number): string;
export default function first<T>(array: T[], count?: number): T[];
export default function first(array: any, count: number = 1): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array-like for 'array'`);
  }

  if (typeof count !== 'number' || count < 0) {
    throw new TypeError(`Expected 'count' to be a non-negative number`);
  }

  return array.slice(0, count);
}