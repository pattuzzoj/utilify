/**
 * Check if a value is a function.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a function, false otherwise.
 */
export default function isFunction(value: any): value is Function {
  return typeof value === "function";
}