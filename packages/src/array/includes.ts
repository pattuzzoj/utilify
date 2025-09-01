import { isArray } from '../types';
import { isEqual } from '../object';

/**
 * Checks if an array includes a value using deep equality.
 * @template T
 * @param {T[]} array - The array to search.
 * @param {T} value - The value to find.
 * @returns {boolean} True if value is found, false otherwise.
 * @throws {TypeError} If array is not an array.
 */
export default function includes<T>(array: T[], value: T): boolean {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  for (const item of array) {
    if (isEqual(item, value)) {
      return true;
    }
  }
  
  return false;
}