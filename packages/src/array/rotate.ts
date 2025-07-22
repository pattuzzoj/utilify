import { isArray } from "../types";

export default function rotate<T>(array: T[], offset: number): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof offset !== 'number') {
    throw new TypeError(`Expected a number for 'offset'`);
  }

  const arrayLength = array.length;
  offset = ((offset % arrayLength) + arrayLength) % arrayLength;
  return array.slice(offset).concat(array.slice(0, offset));
}