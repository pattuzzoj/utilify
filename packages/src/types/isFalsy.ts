/**
 * Check if a value is falsy (undefined, null, false, NaN, 0, 0n, '').
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is falsy, false otherwise.
 */
export default function isFalsy(value: any): boolean {
  return [undefined, null, false, NaN, 0, 0n, ''].includes(value);
}