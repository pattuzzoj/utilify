import { isArray, isString } from "../types";

/**
 * Returns elements after a given index in a string.
 * @param {string} string - The string to slice.
 * @param {number} index - The index.
 * @returns {string} The substring after the index.
 * @throws {TypeError} If input is not array-like or index is invalid.
 */
export default function after(string: string, index: number): string;
/**
 * Returns elements after a given index in an array.
 * @template T
 * @param {T[]} array - The array to slice.
 * @param {number} index - The index.
 * @returns {T[]} The elements after the index.
 * @throws {TypeError} If input is not array-like or index is invalid.
 */
export default function after<T>(array: T[], index: number): T[];
export default function after(array: any, index: number): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array-like for 'array'`);
  }

  if (typeof index !== 'number') {
    throw new TypeError(`Expected a number for 'index'`);
  }
  
  return array.slice(index + 1);
}