import { isArray } from "../types";

/**
 * Returns all subarrays of a given size (window) from an array.
 * @template T
 * @param {T[]} array - The array to window.
 * @param {number} [size=1] - The window size.
 * @returns {T[][]} Array of windows.
 * @throws {TypeError} If array is not an array or size is invalid.
 */
export default function aperture<T>(array: T[], size: number = 1): T[][] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof size !== 'number' || size <= 0) {
    throw new TypeError(`Expected 'size' to be a number greater than 0`);
  }
  
  return Array.from({ length: array.length - size + 1 }, (_, index) => 
    array.slice(index, index + size)
  );
}