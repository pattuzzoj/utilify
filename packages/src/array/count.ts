import { isArray } from "../types";

/**
 * Counts the number of elements matching a predicate.
 * @template T
 * @param {T[]} array - The array to count from.
 * @param {(item: T) => boolean} predicate - The predicate function.
 * @returns {number} The count of matching elements.
 * @throws {TypeError} If array is not an array or predicate is not a function.
 */
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