/**
 * @callback OnceCallback
 * @param {...any} args
 * @returns {any}
 */

/**
 * Ensures a function is only called once, caching its result.
 * @template T
 * @param {OnceCallback} callback - The function to call once.
 * @returns {(...args: Parameters<T>) => ReturnType<T>} The wrapped function.
 * @throws {TypeError} If callback is not a function.
 */
export default function once<T extends (...args: any[]) => any>(callback: T): (...args: Parameters<T>) => ReturnType<T> {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }
  
  let called = false;
  let result: ReturnType<T>;

  return (...args: Parameters<T>): ReturnType<T> => {
    if (!called) {
      called = true;
  
      try {
        result = callback(...args);
      } catch (error) {
        throw error;
      }
    };

    return result;
  }
}