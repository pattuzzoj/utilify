/**
 * @callback ComposeCallback
 * @param {T} value
 * @returns {T}
 */

/**
 * Composes multiple functions from right to left.
 * @template T
 * @param {...ComposeCallback} callbacks - Functions to compose.
 * @returns {(value: T) => T} The composed function.
 * @throws {TypeError} If any argument is not a function.
 */
export default function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  if (!Array.isArray(callbacks) || !callbacks.every(callback => typeof callback === 'function')) {
    throw new TypeError(`Expected all arguments to be functions`);
  }

  return (value: T): T => callbacks.reduceRight((currentValue, callback) => callback(currentValue), value);
}