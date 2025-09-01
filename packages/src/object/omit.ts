import clone from "./clone";

/**
 * Returns a copy of an object without the specified keys.
 * @template T
 * @template K
 * @param {T} obj - The source object.
 * @param {K[]} keys - The keys to omit.
 * @returns {Omit<T, K>} A new object without the omitted keys.
 */
export default function omit<T extends Record<PropertyKey, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = clone(obj);

  for (const key of keys) {
    if (Object.hasOwn(result, key)) {
      delete result[key];
    }
  }

  return result;
}