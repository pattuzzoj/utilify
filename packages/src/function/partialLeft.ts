type DropFirst<T extends any[]> = T extends [any, ...infer R] ? R : never;

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