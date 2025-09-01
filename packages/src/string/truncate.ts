/**
 * Truncates a string to a specified length and adds ellipsis.
 * @param {string} text - The string to truncate.
 * @param {number} size - The maximum length of the truncated string.
 * @returns {string} The truncated string with ellipsis.
 * @throws {TypeError} If text is not a string.
 */
export default function truncate(text: string, size: number): string {
  if (typeof text !== 'string') {
    throw new TypeError(`Expected a string for 'text'`);
  }
  
  return text
  .slice(0, size)
  .concat("...");
}