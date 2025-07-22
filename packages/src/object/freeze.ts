import { isObject } from "../types";
import isNotNullObject from "./isNotNullObject";

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
