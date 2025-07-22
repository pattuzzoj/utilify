import { isArray } from '../types';
import { isEqual } from '../object';

export default function includes<T>(array: T[], value: T): boolean {
  if (!isArray(array)) {
    throw new TypeError(`Expected an array for 'array'`);
  }

  for (const item of array) {
    if (isEqual(item, value)) {
      return true;
    }
  }
  
  return false;
}