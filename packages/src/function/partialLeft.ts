type DropFirst<T extends any[]> = T extends [any, ...infer R] ? R : never;

/**
 * @callback PartialLeftCallback
 * @param {...any} args
 * @returns {any}
 */

/**
 * Partially applies arguments from the left.
 * @template Args,R,P
 * @param {PartialLeftCallback} callback - The function to partially apply.
 * @param {...P} partial - Arguments to apply from the left.
 * @returns {(...args: DropFirst<Args> extends P ? [] : DropFirst<Args>) => R} The partially applied function.
 * @throws {TypeError} If callback is not a function.
 */
export default function partialLeft<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R,
  ...partial: P
): (...args: DropFirst<Args> extends P ? [] : DropFirst<Args>) => R {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  // @ts-ignore
  return (...args: any[]) => callback(...partial, ...args);
}