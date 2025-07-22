// Remove os últimos N elementos da tupla T
type DropLast<T extends any[], N extends any[]> = 
  T extends [...infer R, ...N] ? R : never;

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