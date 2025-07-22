import clone from "./clone";

export default function omit<T extends Record<PropertyKey, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = clone(obj);

  for (const key of keys) {
    if (Object.hasOwn(result, key)) {
      delete result[key];
    }
  }

  return result;
}