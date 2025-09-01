import { isArray, isString } from "../types";

/**
 * Returns the first N elements of a string.
 * @param {string} string - The string to slice.
 * @param {number} [count] - Number of elements to return.
 * @returns {string} The first N characters.
 * @throws {TypeError} If input is not array-like or count is invalid.
 */
export default function first(string: string, count?: number): string;
/**
 * Returns the first N elements of an array.
 * @template T
 * @param {T[]} array - The array to slice.
 * @param {number} [count] - Number of elements to return.
 * @returns {T[]} The first N elements.
 * @throws {TypeError} If input is not array-like or count is invalid.
 */
export default function first<T>(array: T[], count?: number): T[];
export default function first(array: any, count: number = 1): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array-like for 'array'`);
  }

  if (typeof count !== 'number' || count < 0) {
    throw new TypeError(`Expected 'count' to be a non-negative number`);
  }

  return array.slice(0, count);
}