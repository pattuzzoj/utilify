/**
 * Deep clones a value using structuredClone.
 * @template T
 * @param {T} value - The value to clone.
 * @returns {T} The cloned value.
 */
export default function clone<T>(value: T): T {
  return structuredClone(value);
}