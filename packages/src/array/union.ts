import { isArray } from "../types";
import unique from "./unique";

/**
 * Returns the union of multiple arrays (unique values).
 * @template T
 * @param {...T[][]} arrays - Arrays to union.
 * @returns {T[]} Array of unique values from all arrays.
 * @throws {TypeError} If any argument is not an array.
 */
export default function union<T>(...arrays: T[][]): T[] {
  if (!arrays.every(isArray)) {
    throw new TypeError(`Expected all arguments to be arrays`);
  }

  const result = [] as T[];

  for (const array of arrays) {
    result.push(...array);
  }

  return unique(result);
}