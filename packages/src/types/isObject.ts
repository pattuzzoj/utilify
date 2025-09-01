import isArray from "./isArray";
import isNull from "./isNull";

/**
 * Check if a value is a plain object (not array or null).
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
export default function isObject(value: any): value is Record<PropertyKey, any> {
  return typeof value === 'object' && !isNull(value) && !isArray(value);
}