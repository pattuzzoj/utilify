/**
 * Converts a string to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The camelCase string.
 * @throws {TypeError} If str is not a string.
 */
export default function toCamelCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string, but received ${typeof str}`);
  }

  const words = str.trim().toLowerCase().split(" ");
  const firstWord = words.shift();
  
  return firstWord + words.map((str) => 
    str[0]!.toUpperCase().concat(str.slice(1))
  ).join("");
}