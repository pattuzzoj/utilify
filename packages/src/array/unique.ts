import { isArray } from "../types";

export default function unique<T>(array: T[]): T[] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  const result = [] as T[];

  for (const value of array) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}