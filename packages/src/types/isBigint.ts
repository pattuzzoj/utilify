/**
 * Check if a value is a bigint.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a bigint, false otherwise.
 */
export default function isBigint(value: any): value is bigint {
  return typeof value === "bigint";
}