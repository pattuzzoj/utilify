import { isArray } from "../types";

/**
 * Returns a new array with all falsy values removed.
 * @template T
 * @param {T[]} array - The array to compact.
 * @returns {T[]} Array with falsy values removed.
 * @throws {TypeError} If array is not an array.
 */
export default function compact<T>(array: T[]): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  return array.filter(Boolean);
}