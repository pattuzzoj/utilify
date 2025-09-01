/**
  * Check if a value is an array.
  * @param {any} value - The value to check.
  * @returns {boolean} True if the value is an array, false otherwise.
  */
export default function isArray(value: any): value is any[] {
  return Object.prototype.toString.call(value) === '[object Array]';
}