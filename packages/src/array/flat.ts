import { isArray } from "../types";

export default function flat<T>(array: T[], depth: number = Infinity): FlatArray<T[], number>[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof depth !== 'number' || depth < 0) {
    throw new TypeError(`Expected a non-negative number for 'depth'`);
  }

  return (array as T[]).flat(depth) as FlatArray<T[], number>[];
}