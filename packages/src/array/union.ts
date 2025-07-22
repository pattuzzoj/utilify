import { isArray } from "../types";
import unique from './unique';

export default function union<T>(...arrays: T[][]): T[] {
  if (!arrays.every(isArray)) {
    throw new TypeError(`Expected all arguments to be arrays`);
  }

  const result = [] as T[];

  for (const array of arrays) {
    result.push(...array);
  }

  return unique(result);
}