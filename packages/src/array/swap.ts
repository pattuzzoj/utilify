import { isArray } from "../types";

export default function swap<T>(array: T[], fromIndex: number, toIndex: number): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof fromIndex !== 'number') {
    throw new TypeError(`Expected 'fromIndex' to be a number`);
  }

  if (fromIndex < 0 || fromIndex >= array.length) {
    throw new RangeError(`'fromIndex' is out of bounds`);
  }

  if (typeof toIndex !== 'number') {
    throw new TypeError(`Expected 'toIndex' to be a number`);
  }

  if (toIndex < 0 || toIndex >= array.length) {
    throw new RangeError(`'toIndex' is out of bounds`);
  }

  [array[fromIndex], array[toIndex]] = [array[toIndex] as T, array[fromIndex] as T];

  return array;
}
