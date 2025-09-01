/**
 * Picks specified keys from an object.
 * @template T
 * @template K
 * @param {T} obj - The source object.
 * @param {K[]} keys - The keys to pick.
 * @returns {Pick<T, K>} A new object with only the picked keys.
 */
export default function pick<T extends Record<PropertyKey, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((picked, key) => {
    if (Object.hasOwn(obj, key)) {
      picked[key] = obj[key];
    }

    return picked;
  }, {} as Pick<T, K>);
}