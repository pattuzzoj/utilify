import { isObject } from "../types";

export default function sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (isObject(obj[key])) {
      result[key] = sanitizeObj(obj[key], values, replace);
    } else if (values.includes(obj[key])) {
      if (replace !== undefined) {
        result[key] = replace;
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}