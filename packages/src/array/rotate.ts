import { isArray } from "../types";

/**
 * Rotates the elements of an array by a given offset.
 * @template T
 * @param {T[]} array - The array to rotate.
 * @param {number} offset - The offset to rotate by.
 * @returns {T[]} The rotated array.
 * @throws {TypeError} If array is not an array or offset is not a number.
 */
export default function rotate<T>(array: T[], offset: number): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof offset !== 'number') {
    throw new TypeError(`Expected a number for 'offset'`);
  }

  const arrayLength = array.length;
  offset = ((offset % arrayLength) + arrayLength) % arrayLength;
  return array.slice(offset).concat(array.slice(0, offset));
}