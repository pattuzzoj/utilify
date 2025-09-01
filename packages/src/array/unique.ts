import { isArray } from "../types";

/**
 * Returns a new array with only unique values.
 * @template T
 * @param {T[]} array - The array to filter.
 * @returns {T[]} Array of unique values.
 * @throws {TypeError} If array is not an array.
 */
export default function unique<T>(array: T[]): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  const result = [] as T[];

  for (const value of array) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}