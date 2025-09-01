import { isMap, isSet } from "../types";

/**
 * Checks if a value (object, array, string, map, set) is empty.
 * @template T
 * @param {T} value - The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export default function isEmpty<T extends Record<PropertyKey, any>>(value: T): boolean;
export default function isEmpty<T extends any[]>(value: T): boolean;
export default function isEmpty<T>(value: T): boolean {
  if (value === null) {
    return true;
  } else if (isMap(value) || isSet(value)) {
    return value.size === 0;
  } else if (typeof value === 'string' || typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false
}