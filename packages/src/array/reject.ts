import { isArray } from "../types";
import { not } from "../function";

export default function reject<T>(array: T[], fn: (value: T, index?: number, array?: T[]) => boolean): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for 'fn'`);
  }

  return array.filter(not(fn));
}