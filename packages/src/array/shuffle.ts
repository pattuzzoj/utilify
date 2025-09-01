import { isArray } from "../types";

/**
 * Shuffles the elements of an array in place.
 * @template T
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} The shuffled array.
 * @throws {TypeError} If array is not an array.
 */
export default function shuffle<T>(array: T[]): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  for (let index = array.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex] as T, array[index] as T];
  }

  return array;
}