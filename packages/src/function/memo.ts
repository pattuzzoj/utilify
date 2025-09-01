/**
 * @callback MemoCallback
 * @param {...any} args
 * @returns {any}
 */

/**
 * @callback MemoSerializer
 * @param {any[]} args
 * @returns {string}
 */

/**
 * Memoizes a function, caching results by arguments.
 * @template T
 * @param {MemoCallback} callback - The function to memoize.
 * @param {{cacheTimeout?: number, serializer?: MemoSerializer}} [options={serializer: JSON.stringify}] - Memoization options.
 * @returns {(...args: Parameters<T>) => ReturnType<T>} The memoized function.
 * @throws {TypeError} If callback or serializer is not a function, or cacheTimeout is not a number.
 */
export default function memo<T extends (...args: any[]) => any>(
  callback: T,
  {cacheTimeout, serializer}: { cacheTimeout?: number, serializer?: (args: Parameters<T>) => string } = { serializer: JSON.stringify }
): (...args: Parameters<T>) => ReturnType<T> {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }
  
  if (cacheTimeout !== undefined && typeof cacheTimeout !== 'number') {
    throw new TypeError(`Expected a number for 'cacheTimeout'`);
  }

  if (typeof serializer !== 'function') {
    throw new TypeError(`Expected a function for 'serializer'`);
  }

  const cache = new Map();

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = serializer(args);

    if(!cache.has(key)) {
      cache.set(key, callback(...args));

      if(cacheTimeout) {
        setTimeout(() => cache.delete(key), cacheTimeout);
      }
    }
    
    return cache.get(key);
  }
}