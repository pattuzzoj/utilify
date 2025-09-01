/**
 * Repeats a value a specified number of times.
 * @template T
 * @param {T} value - The value to repeat.
 * @param {number} count - The number of times to repeat.
 * @returns {T[]} Array of repeated values.
 * @throws {TypeError|RangeError} If count is invalid.
 */
export default function repeat<T>(value: T, count: number): T[];
/**
 * Repeats a string a specified number of times.
 * @param {string} value - The string to repeat.
 * @param {number} count - The number of times to repeat.
 * @returns {string} The repeated string.
 * @throws {TypeError|RangeError} If count is invalid.
 */
export default function repeat(value: string, count: number): string;
export default function repeat<T>(value: T | string, count: number): T[] | string {
  if (typeof count !== 'number') {
    throw new TypeError(`Expected a number for 'count'`);
  }

  if (count < 0) {
    throw new RangeError(`Expected a non-negative integer for 'count'`);
  }
  
  if (typeof value === 'string') {
    return value.repeat(count);
  }

  return Array(count).fill(value);
}