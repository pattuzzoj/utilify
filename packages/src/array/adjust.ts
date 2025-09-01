import { isArray } from "../types";

/**
 * @callback AdjustCallback
 * @template T
 * @param {T} value - The value to adjust.
 * @returns {T} The adjusted value.
 */

/**
 * Applies a function to the element at the specified index of an array and returns a new array.
 * If the index is negative or out of bounds, it wraps around using modulo.
 * @template T
 * @param {T[]} array - The array to adjust.
 * @param {number} index - The index of the element to adjust.
 * @param {AdjustCallback} fn - The function to apply to the element.
 * @returns {T[]} A new array with the adjusted element.
 * @throws {TypeError} If array is not an array, index is not a number, or fn is not a function.
 */
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