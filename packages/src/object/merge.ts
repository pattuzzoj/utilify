import { isArray } from "../types";
import isPlainObject from "./isPlainObject";

export default function merge(target: any, source: any): any {
  if (typeof target !== 'object' || target === null) return source;

  const targetIsArray = isArray(target);
  const sourceIsArray = isArray(source);

  if (targetIsArray !== sourceIsArray) {
    return source;
  }

  const result: any = targetIsArray ? [...target] : { ...target };

  for (const key of Reflect.ownKeys(source)) {
    const targetValue = result[key];
    const sourceValue = source[key];

    if (
      (isPlainObject(targetValue) && isPlainObject(sourceValue)) ||
      (isArray(targetValue) && isArray(sourceValue))
    ) {
      result[key] = merge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue;
    }
  }

  return result;
}