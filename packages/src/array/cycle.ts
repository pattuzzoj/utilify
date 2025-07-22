import { isArray } from "../types";

export default function cycle<T>(array: T[]): () => T | undefined {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  let index = -1;
  
  return () => {
    if (array.length === 0) return undefined;
    index = (index + 1) % array.length;
    return array[index];
  };
}
