import { isArray } from "../types";
import includes from "./includes";

export default function difference<T>(array1: T[], array2: T[]): T[] {
  if (!isArray(array1)) {
    throw new TypeError(`Expected an array for 'array1'`);
  }

  if (!isArray(array2)) {
    throw new TypeError(`Expected an array for 'array2'`);
  }

  return array1.filter((value) => !includes(array2, value));
}