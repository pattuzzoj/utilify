/**
 * Returns the input value unchanged.
 * @template T
 * @param {T} value - The value to return.
 * @returns {T} The same value.
 */
export default function identity<T>(value: T): T {
  return value;
}