import { isObject } from "../types";
import isNotNullObject from "./isNotNullObject";

/**
 * Recursively seals an object and its nested objects.
 * @param {Record<PropertyKey, any>} obj - The object to seal.
 * @returns {Record<PropertyKey, any>} The sealed object.
 */
export default function seal(obj: Record<PropertyKey, any>): Record<PropertyKey, any> {
  const sealedObj = Object.seal(obj);

  if (!isObject(sealedObj)) {
    return sealedObj;
  }

  for (const key of Reflect.ownKeys(sealedObj)) {
    const value = sealedObj[key];

    if (isNotNullObject(value)) {
      seal(value);
    }
  }

  return sealedObj;
}