/**
 * Sets a value at a given path in an object, creating nested objects as needed.
 * @template T
 * @param {T} obj - The object to modify.
 * @param {string|string[]} path - The path to set (dot/bracket notation or array).
 * @param {any} value - The value to set.
 * @returns {T} The modified object.
 */
export default function set<T extends Record<PropertyKey, any>>(obj: T, path: string | string[], value: any): T {
  const keys = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let current = obj;
  const parentKeys = keys.slice(0, -1);
  const lastKey = keys[keys.length - 1];

  for (const key of parentKeys) {
    if (!Object.hasOwn(current, key)) {
      (current as any)[key] = {};
    }

    current = current[key];
  }

  (current as any)[lastKey!] = value;

  return obj;
}