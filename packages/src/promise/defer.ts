/**
 * @callback DeferCallback
 * @returns {void}
 */

/**
 * Defers execution of a callback until the next event loop tick.
 * @param {DeferCallback} callback - The function to defer.
 * @returns {void}
 * @throws {TypeError} If callback is not a function.
 */
export default function defer(callback: () => void): void {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  setTimeout(callback, 1);
}