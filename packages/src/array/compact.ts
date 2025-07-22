import { isArray } from "../types";

export default function compact<T>(array: T[]): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  return array.filter(Boolean);
}