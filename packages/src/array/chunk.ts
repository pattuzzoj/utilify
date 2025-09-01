import { isArray, isString } from "../types";

/**
 * Splits a string into chunks of a given size.
 * @param {string} string - The string to chunk.
 * @param {number} size - The chunk size.
 * @returns {string[]} Array of string chunks.
 * @throws {TypeError} If input is not array-like or size is invalid.
 */
export default function chunk(string: string, size: number): string[];
/**
 * Splits an array into chunks of a given size.
 * @template T
 * @param {T[]} array - The array to chunk.
 * @param {number} size - The chunk size.
 * @returns {T[][]} Array of array chunks.
 * @throws {TypeError} If input is not array-like or size is invalid.
 */
export default function chunk<T>(array: T[], size: number): T[][];
export default function chunk(array: any, size: number = 1): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  } 

  if (typeof size !== 'number' || size <= 0) {
    throw new TypeError(`Expected a non-zero integer number for 'size'`);
  }
  
  const chunks: any[] = [];

  for (let index = 0; index < array.length; index += size) {
    chunks.push(array.slice(index, index + size));
  }

  return chunks;
}