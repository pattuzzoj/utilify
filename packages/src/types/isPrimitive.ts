import isFunction from "./isFunction";
import isNull from "./isNull";

/**
 * Check if a value is a primitive.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a primitive, false otherwise.
 */
export default function isPrimitive(value: any): value is undefined | null | boolean | number | bigint | string | symbol {
  return isNull(value) || typeof value !== 'object' && !isFunction(value);
}