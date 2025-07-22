import { isArray } from "../types";

export default function groupBy<T, K extends PropertyKey>(
  array: T[],
  keySelector: (value: T, index: number) => K = (_value: T, index: number) => index as K
): Record<K, T[]> {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof keySelector !== 'function') {
    throw new TypeError(`Expected a function for 'keySelector'`);
  }

  const result = {} as Record<K, T[]>;

  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    const key = keySelector(value as T, index);

    if (!(key in result)) {
      result[key] = [];
    }

    result[key].push(value as T);
  }

  return result;
}