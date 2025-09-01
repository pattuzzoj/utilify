/**
 * Check if a value is a RegExp.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a RegExp, false otherwise.
 */
export default function isRegExp(value: any): value is RegExp {
  return value instanceof RegExp;
}