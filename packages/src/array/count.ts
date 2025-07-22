import { isArray } from "../types";

export default function count<T>(array: T[], predicate: (item: T) => boolean): number {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof predicate !== 'function') {
    throw new TypeError(`Expected a function for 'predicate'`);
  }

  let total = 0;

  for (const item of array) {
    if (predicate(item)) {
      total++;
    }
  }

  return total;
}