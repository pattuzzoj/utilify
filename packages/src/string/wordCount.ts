/**
 * Counts the number of words in a string.
 * @param {string} str - The string to count words in.
 * @returns {number} The word count.
 * @throws {TypeError} If str is not a string.
 */
export default function wordCount(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return str
  .trim()
  .split(/\s+/)
  .filter(Boolean)
  .length;
}