import { isArray } from "../types";

export default function flatMap<T, U>(array: T[], fn: (value: T, index: number, array: T[]) => U | U[]): U[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for 'fn'`);
  }

  return array.map(fn).flat(1) as U[];
}