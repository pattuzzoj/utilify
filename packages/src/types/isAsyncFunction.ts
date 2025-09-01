import isFunction from "./isFunction";

/**
  * Check if a value is an async function.
  * @param {any} value - The value to check.
  * @returns {boolean} True if the value is an async function, false otherwise.
  */
export default function isAsyncFunction(value: any): value is (...args: any[]) => Promise<any> {
  return isFunction(value) && value.constructor.name === "AsyncFunction";
}