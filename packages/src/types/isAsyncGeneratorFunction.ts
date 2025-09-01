import isFunction from "./isFunction";

/**
 * Check if a value is an async generator function.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is an async generator function, false otherwise.
 */
export default function isAsyncGeneratorFunction(value: any): value is AsyncGeneratorFunction {
  return isFunction(value) && value.constructor.name === 'AsyncGeneratorFunction';
}