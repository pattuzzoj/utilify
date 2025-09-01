/**
 * Checks if an object has a value at a given path.
 * @template T
 * @param {T} obj - The object to check.
 * @param {string|string[]} path - The path to check (dot/bracket notation or array).
 * @returns {boolean} True if the path exists, false otherwise.
 */
export default function has<T extends Record<PropertyKey, any>>(obj: T, path: string | string[]): boolean {
  const keys = Array.isArray(path) ? path.map(item => item.replace(/^\[(\d+)\]$/g, '$1')) : path.replace(/\[(\d+)\]/g, '.$1').split('.');

  let current = obj;
  
  for (const key of keys) {
    if (!Object.hasOwn(current, key)) {
      return false;
    }
    
    current = current[key];
  }

  return true;
}
