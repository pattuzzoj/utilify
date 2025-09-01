/**
 * @callback PipeCallback
 * @param {T} value
 * @returns {T}
 */

/**
 * Pipes multiple functions from left to right.
 * @template T
 * @param {...PipeCallback} callbacks - Functions to pipe.
 * @returns {(value: T) => T} The piped function.
 * @throws {TypeError} If any argument is not a function.
 */
export default function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  if (!Array.isArray(callbacks) || !callbacks.every(callback => typeof callback === 'function')) {
    throw new TypeError(`Expected 'callbacks' to be an array of functions`);
  }

  return (value: T): T => callbacks.reduce((currentValue, callback) => callback(currentValue), value);
}