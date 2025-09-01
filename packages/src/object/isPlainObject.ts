/**
 * Checks if a value is a plain object (not array, not null, not custom prototype).
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
export default function isPlainObject(value: any): value is Record<PropertyKey, any> {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}