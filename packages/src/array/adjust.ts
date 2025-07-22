import { isArray } from "../types";

export default function adjust<T>(array: T[], index: number, fn: (value: T) => T): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (array.length === 0) {
    return [];
  }

  if (typeof index !== 'number') {
    throw new TypeError(`Expected a number for 'index'`);
  }

  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for 'fn'`);
  }

  const length = array.length;
  array[(index + length) % length] = fn(array[(index + length) % length] as T);

  return array;
}