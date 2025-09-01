/**
 * Converts a string to snake_case.
 * @param {string} str - The string to convert.
 * @returns {string} The snake_case string.
 * @throws {TypeError} If str is not a string.
 */
export default function toSnakeCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "_");
}