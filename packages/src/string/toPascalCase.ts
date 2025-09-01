/**
 * Converts a string to PascalCase.
 * @param {string} str - The string to convert.
 * @returns {string} The PascalCase string.
 * @throws {TypeError} If str is not a string.
 */
export default function toPascalCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  return str
  .trim()
  .split(" ")
  .map((str) => str[0]!.toUpperCase().concat(str.slice(1)))
  .join(" ")
  .replace(/\s+/g, "");
}