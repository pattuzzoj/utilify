import { isArray, isString } from "../types";

export default function chunk(string: string, size: number): string;
export default function chunk<T>(array: T[], size: number): T[][];
export default function chunk(array: any, size: number = 1): any {
  if (!isArray(array) && !isString(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  } 

  if (typeof size !== 'number' || size <= 0) {
    throw new TypeError(`Expected a non-zero integer number for 'size'`);
  }
  
  const chunks: any[] = [];

  for (let index = 0; index < array.length; index += size) {
    chunks.push(array.slice(index, index + size));
  }

  return chunks;
}