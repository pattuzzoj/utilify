import { isArray, isString } from "../types";

/**
 * Returns the last N elements of a string.
 * @param {string} string - The string to slice.
 * @param {number} [count] - Number of elements to return.
 * @returns {string} The last N characters.
 * @throws {TypeError} If input is not array-like or count is invalid.
 */
export default function last(string: string, count?: number): string;
/**
 * Returns the last N elements of an array.
 * @template T
 * @param {T[]} array - The array to slice.
 * @param {number} [count] - Number of elements to return.
 * @returns {T[]} The last N elements.
 * @throws {TypeError} If input is not array-like or count is invalid.
 */
export default function last<T>(array: T[], count?: number): T[];
export default function last(array: any, count: number = 1): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array-like for 'array'`);
  }

  if (typeof count !== 'number' || count < 0) {
    throw new TypeError(`Expected 'count' to be a non-negative number`);
  }

  return array.slice(-count);
}