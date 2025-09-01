/**
 * Gets a value from an object at a given path, or returns a default value.
 * @template T
 * @param {T} obj - The object to query.
 * @param {string|string[]} path - The path to get (dot/bracket notation or array).
 * @param {any} [defaultValue] - The default value if the path does not exist.
 * @returns {T} The value at the path or the default value.
 */
export default function get<T extends Record<PropertyKey, any>>(obj: T, path: string | string[], defaultValue?: any): T {
  const keys = Array.isArray(path) ? path.map(item => item.replace(/^\[(\d+)\]$/g, '$1')) : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let current = obj;
  
  for (const key of keys) {
    if (!Object.hasOwn(current, key)) {
      return defaultValue;
    }
    
    current = current[key];
  }

  return current ?? defaultValue;
}