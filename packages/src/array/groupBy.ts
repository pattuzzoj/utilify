import { isArray } from "../types";

/**
 * @callback GroupByKeySelector
 * @template T,K
 * @param {T} value - The item in the array.
 * @param {number} index - The index of the item.
 * @returns {K} The key for grouping.
 */

/**
 * Groups array elements by a key selector function.
 * @template T,K
 * @param {T[]} array - The array to group.
 * @param {GroupByKeySelector} [keySelector] - Function to select group key.
 * @returns {Record<K, T[]>} Object with grouped arrays.
 * @throws {TypeError} If array is not an array or keySelector is not a function.
 */
export default function groupBy<T, K extends PropertyKey>(
  array: T[],
  keySelector: (value: T, index: number) => K = (_value: T, index: number) => index as K
): Record<K, T[]> {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof keySelector !== 'function') {
    throw new TypeError(`Expected a function for 'keySelector'`);
  }

  const result = {} as Record<K, T[]>;

  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    const key = keySelector(value as T, index);

    if (!(key in result)) {
      result[key] = [];
    }

    result[key].push(value as T);
  }

  return result;
}