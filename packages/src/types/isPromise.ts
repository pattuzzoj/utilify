/**
 * Check if a value is a Promise.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a Promise, false otherwise.
 */
export default function isPromise(value: any): value is Promise<any> {
  return value instanceof Promise;
}