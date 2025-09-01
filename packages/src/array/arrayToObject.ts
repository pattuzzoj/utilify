import { isArray } from "../types";

/**
 * @callback ArrayToObjectKeyFn
 * @template T,K
 * @param {T} item - The item in the array.
 * @param {number} index - The index of the item.
 * @param {T[]} array - The array.
 * @returns {K} The key for the object.
 */

/**
 * @callback ArrayToObjectValueFn
 * @template T
 * @param {T} item - The item in the array.
 * @param {number} index - The index of the item.
 * @param {T[]} array - The array.
 * @returns {T} The value for the object.
 */

/**
 * Converts an array to an object using key and value selector functions.
 * @template T,K
 * @param {T[]} array - The array to convert.
 * @param {ArrayToObjectKeyFn} [keyFn] - Function to select keys.
 * @param {ArrayToObjectValueFn} [valueFn] - Function to select values.
 * @returns {Record<K, any>} The resulting object.
 * @throws {TypeError} If array is not an array or selectors are not functions.
 */
export default function arrayToObject<T, K extends PropertyKey>(
  array: T[],
  keyFn: (item: T, index: number, array: T[]) => K = (_item: T, index: number) => index as K,
  valueFn: (item: T, index: number, array: T[]) => T = (item: T) => item
): Record<K, any> {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof keyFn !== 'function') {
    throw new TypeError(`Expected a function for 'keyFn'`);
  }

  if (typeof valueFn !== 'function') {
    throw new TypeError(`Expected a function for 'valueFn'`);
  }

  const result = {} as Record<K, any>;

  for (let i = 0; i < array.length; i++) {
    result[keyFn(array[i] as T, i, array)] = valueFn(array[i] as T, i, array);
  }

  return result;
}