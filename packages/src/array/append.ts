import { isArray } from "../types";

export default function append<T>(array: T[], value: T): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  return [...array, value];
}