import { isArray } from "../types";

/**
 * Flattens an array up to a specified depth.
 * @template T
 * @param {T[]} array - The array to flatten.
 * @param {number} [depth=Infinity] - The depth to flatten.
 * @returns {FlatArray<T[], number>[]} The flattened array.
 * @throws {TypeError} If array is not an array or depth is invalid.
 */
export default function flat<T>(array: T[], depth: number = Infinity): FlatArray<T[], number>[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof depth !== 'number' || depth < 0) {
    throw new TypeError(`Expected a non-negative number for 'depth'`);
  }

  return (array as T[]).flat(depth) as FlatArray<T[], number>[];
}