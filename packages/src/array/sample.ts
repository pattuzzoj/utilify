import { isArray } from "../types";

/**
 * Returns a random element from an array.
 * @template T
 * @param {T[]} array - The array to sample from.
 * @returns {T|undefined} A random element or undefined if empty.
 * @throws {TypeError} If array is not an array.
 */
export default function sample<T>(array: T[]): T | undefined {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }
  
  if (array.length === 0) {
    return undefined;
  }

  const index = Math.floor(Math.random() * array.length)
  return array[index]!;
}