import { isPlainObject } from '@utilify/types';

export default function interpolate<T extends Record<string, any>>(obj: T, data: Record<string, any>): T {
  const result: T = {} as T;

  for (const key in obj) {
    if (isPlainObject(obj[key])) {
      result[key] = interpolate(obj[key], data);
    } else if (typeof obj[key] === "string") {
      result[key] = obj[key].replace(/{{(\w+)}}/g, (_: string, match: string) => 
        match in data ? data[match] : `{{${match}}}`
      );
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
