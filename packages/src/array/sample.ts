import { isArray } from "../types";

export default function sample<T>(array: T[]): T | undefined {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }
  
  if (array.length === 0) {
    return undefined;
  }

  const index = Math.floor(Math.random() * array.length)
  return array[index]!;
}