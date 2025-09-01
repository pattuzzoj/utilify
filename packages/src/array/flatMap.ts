import { isArray } from "../types";

/**
 * Maps each array element and flattens the result one level.
 * @template T,U
 * @param {T[]} array - The array to map.
 * @param {(value: T, index: number, array: T[]) => U | U[]} fn - The mapping function.
 * @returns {U[]} The mapped and flattened array.
 * @throws {TypeError} If array is not an array or fn is not a function.
 */
export default function flatMap<T, U>(array: T[], fn: (value: T, index: number, array: T[]) => U | U[]): U[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for 'fn'`);
  }

  return array.map(fn).flat(1) as U[];
}