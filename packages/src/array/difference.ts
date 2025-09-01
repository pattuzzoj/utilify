import { isArray } from "../types";
import includes from "./includes";

/**
 * Returns the difference between two arrays (elements in array1 not in array2).
 * @template T
 * @param {T[]} array1 - The first array.
 * @param {T[]} array2 - The second array.
 * @returns {T[]} Array of elements in array1 not in array2.
 * @throws {TypeError} If either argument is not an array.
 */
export default function difference<T>(array1: T[], array2: T[]): T[] {
  if (!isArray(array1)) {
    throw new TypeError(`Expected an array for 'array1'`);
  }

  if (!isArray(array2)) {
    throw new TypeError(`Expected an array for 'array2'`);
  }

  return array1.filter((value) => !includes(array2, value));
}