import { isArray } from "../types";

/**
 * Returns a function that cycles through array elements.
 * @template T
 * @param {T[]} array - The array to cycle through.
 * @returns {() => T | undefined} Function that returns the next element.
 * @throws {TypeError} If array is not an array.
 */
export default function cycle<T>(array: T[]): () => T | undefined {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  let index = -1;
  
  return () => {
    if (array.length === 0) return undefined;
    index = (index + 1) % array.length;
    return array[index];
  };
}
