import { isArray } from "../types";

/**
 * Appends a value to the end of an array and returns a new array.
 * @template T
 * @param {T[]} array - The array to append to.
 * @param {T} value - The value to append.
 * @returns {T[]} The new array with the value appended.
 * @throws {TypeError} If array is not an array.
 */
export default function append<T>(array: T[], value: T): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  return [...array, value];
}