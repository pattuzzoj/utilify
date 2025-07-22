import { isArray } from "../types";

export default function arrayToObject<T, K extends PropertyKey>(
  array: T[],
  keyFn: (item: T, index: number, array: T[]) => K = (_item: T, index: number) => index as K,
  valueFn: (item: T, index: number, array: T[]) => T = (item: T) => item
): Record<K, any> {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof keyFn !== 'function') {
    throw new TypeError(`Expected a function for 'keyFn'`);
  }

  if (typeof valueFn !== 'function') {
    throw new TypeError(`Expected a function for 'valueFn'`);
  }

  const result = {} as Record<K, any>;

  for (let i = 0; i < array.length; i++) {
    result[keyFn(array[i] as T, i, array)] = valueFn(array[i] as T, i, array);
  }

  return result;
}