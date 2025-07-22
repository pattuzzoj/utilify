import { isArray, isString } from "../types";

export default function after(string: string, index: number): string;
export default function after<T>(array: T[], index: number): T[];
export default function after(array: any, index: number): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array-like for 'array'`);
  }

  if (typeof index !== 'number') {
    throw new TypeError(`Expected a number for 'index'`);
  }
  
  return array.slice(index + 1);
}