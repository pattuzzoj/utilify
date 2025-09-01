// Remove os últimos N elementos da tupla T
type DropLast<T extends any[], N extends any[]> = 
  T extends [...infer R, ...N] ? R : never;

/**
 * @callback PartialRightCallback
 * @param {...any} args
 * @returns {any|Promise<any>}
 */

/**
 * Partially applies arguments from the right.
 * @template Args,R,P
 * @param {PartialRightCallback} callback - The function to partially apply.
 * @param {...P} partial - Arguments to apply from the right.
 * @returns {(...args: DropLast<Args, P>) => R | Promise<R>} The partially applied function.
 * @throws {TypeError} If callback is not a function.
 */
export default function partialRight<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R | Promise<R>,
  ...partial: P
): (...args: DropLast<Args, P>) => R | Promise<R> {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  // @ts-ignore
  return (...args: any[]) => callback(...args, ...partial);
}