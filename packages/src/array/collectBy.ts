import { isArray } from "../types";
import groupBy from "./groupBy";

/**
 * @callback CollectByKeySelector
 * @template T,K
 * @param {T} value - The item in the array.
 * @param {number} index - The index of the item.
 * @returns {K} The key for grouping.
 */

/**
 * Collects array elements into groups by a key selector function.
 * @template T,K
 * @param {T[]} array - The array to collect from.
 * @param {CollectByKeySelector} keySelector - Function to select group key.
 * @returns {T[][]} Array of grouped arrays.
 * @throws {TypeError} If array is not an array or keySelector is not a function.
 */
export default function collectBy<T, K extends PropertyKey>(
  array: T[],
  keySelector: (value: T, index: number) => K
): T[][] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof keySelector !== 'function') {
    throw new TypeError(`Expected a function for 'keySelector'`);
  }

  const group = groupBy(array, keySelector);
  return Object.values(group);
}