import { isObject } from "../types";
import isNotNullObject from "./isNotNullObject";

/**
 * Recursively freezes an object and its nested objects.
 * @param {Record<PropertyKey, any>} obj - The object to freeze.
 * @returns {Record<PropertyKey, any>} The frozen object.
 */
export default function freeze(obj: Record<PropertyKey, any>): Record<PropertyKey, any> {
  const freezedObj = Object.freeze(obj);

  if (!isObject(freezedObj)) {
    return freezedObj;
  }

  for (const key of Reflect.ownKeys(freezedObj)) {
    const value = freezedObj[key];

    if (isNotNullObject(value)) {
      freeze(freezedObj[key]);
    }
  }

  return freezedObj;
}
