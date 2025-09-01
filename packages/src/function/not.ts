/**
 * @callback PredicateCallback
 * @param {...any} args
 * @returns {boolean}
 */

/**
 * Negates the result of a predicate function.
 * @template T
 * @param {PredicateCallback} fn - The predicate function.
 * @returns {(...args: Parameters<T>) => boolean} The negated function.
 * @throws {TypeError} If fn is not a function.
 */
export default function not<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => boolean {
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for 'fn'`);
  }
  
  return (...args: Parameters<T>) => !fn(...args);
}