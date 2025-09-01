import { isArray } from '../types';
import isPlainObject from './isPlainObject';

/**
 * Converts a nested object/array into a flat object with path-like keys.
 * @param {any} obj - The object or array to flatten.
 * @returns {Record<string, any>} The flattened object.
 */
export default function flattenObj(obj: any): Record<string, any> {
  const result: Record<string, any> = {};

  function flatten(current: any, path: string = '') {
    if (isArray(current)) {
      current.forEach((item, index) => {
        const newPath = path ? `${path}[${index}]` : `[${index}]`;

        if (isPlainObject(item) || isArray(item)) {
          flatten(item, newPath);
        } else {
          result[newPath] = item;
        }
      });
    } else if (isPlainObject(current)) {
      Object.entries(current).forEach(([key, value]) => {
        const formattedKey = key.includes('.') ? `[${key}]` : key;
        const newPath = path ? `${path}${'.'}${formattedKey}` : formattedKey;

        if (isPlainObject(value) || isArray(value)) {
          flatten(value, newPath);
        } else {
          result[newPath] = value;
        }
      });
    } else {
      result[path] = current;
    }
  }

  flatten(obj);
  return result;
}