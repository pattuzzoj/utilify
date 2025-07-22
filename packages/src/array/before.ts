import { isArray, isString } from "../types";

export default function before(string: string, index: number): string;
export default function before<T>(array: T[], index: number): T[];
export default function before(array: any, index: number): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array-like for 'array'`);
  }

  if (typeof index !== 'number') {
    throw new TypeError(`Expected a number for 'index'`);
  }

  return array.slice(0, index);
}