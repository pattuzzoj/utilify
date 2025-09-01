import { isArray } from "../types";
import { not } from "../function";

/**
 * Returns a new array with elements that do NOT match the predicate.
 * @template T
 * @param {T[]} array - The array to filter.
 * @param {(value: T, index?: number, array?: T[]) => boolean} fn - The predicate function.
 * @returns {T[]} Array of rejected values.
 * @throws {TypeError} If array is not an array or fn is not a function.
 */
export default function reject<T>(array: T[], fn: (value: T, index?: number, array?: T[]) => boolean): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for 'fn'`);
  }

  return array.filter(not(fn));
}