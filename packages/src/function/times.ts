/**
 * @callback TimesCallback
 * @param {number} index
 * @returns {*}
 */

/**
 * Calls a callback a specified number of times, passing the index.
 * @template T
 * @param {TimesCallback} callback - The callback to call.
 * @param {number} count - The number of times to call the callback.
 * @returns {T[]} Array of callback results.
 * @throws {TypeError} If callback is not a function or count is not a non-negative integer.
 */
export default function times<T>(callback: (index: number) => T, count: number): T[] {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  if (typeof count !== 'number' || !Number.isInteger(count) || count < 0) {
    throw new TypeError(`Expected a non-negative integer for 'count'`);
  }

  const results: T[] = [];

  for (let i = 0; i < count; i++) {
    results.push(callback(i));
  }

  return results;
}