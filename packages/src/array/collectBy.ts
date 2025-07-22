import { isArray } from "../types";

import groupBy from "./groupBy";

export default function collectBy<T, K extends PropertyKey>(
  array: T[],
  keySelector: (value: T, index: number) => K
): T[][] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof keySelector !== 'function') {
    throw new TypeError(`Expected a function for 'keySelector'`);
  }

  const group = groupBy(array, keySelector);
  return Object.values(group);
}