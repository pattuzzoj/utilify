import { isArray, isString } from "../types";

/**
 * Returns elements before a given index in a string.
 * @param {string} string - The string to slice.
 * @param {number} index - The index.
 * @returns {string} The substring before the index.
 * @throws {TypeError} If input is not array-like or index is invalid.
 */
export default function before(string: string, index: number): string;
/**
 * Returns elements before a given index in an array.
 * @template T
 * @param {T[]} array - The array to slice.
 * @param {number} index - The index.
 * @returns {T[]} The elements before the index.
 * @throws {TypeError} If input is not array-like or index is invalid.
 */
export default function before<T>(array: T[], index: number): T[];
export default function before(array: any, index: number): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array-like for 'array'`);
  }

  if (typeof index !== 'number') {
    throw new TypeError(`Expected a number for 'index'`);
  }

  return array.slice(0, index);
}