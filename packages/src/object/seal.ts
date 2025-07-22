import { isObject } from "../types";
import isNotNullObject from "./isNotNullObject";

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