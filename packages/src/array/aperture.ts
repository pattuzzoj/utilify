import { isArray } from "../types";

export default function aperture<T>(array: T[], size: number = 1): T[][] {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  if (typeof size !== 'number' || size <= 0) {
    throw new TypeError(`Expected 'size' to be a number greater than 0`);
  }
  
  return Array.from({ length: array.length - size + 1 }, (_, index) => 
    array.slice(index, index + size)
  );
}