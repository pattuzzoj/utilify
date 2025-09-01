/**
 * Counts the occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to count.
 * @returns {number} The number of occurrences.
 * @throws {TypeError} If str is not a string or char is not a single character string.
 */
export default function charCount(str: string, char: string): number {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  if (typeof char !== 'string' || char.length !== 1) {
    throw new TypeError(`Expected a single character string for 'char'`);
  }

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  
  return count;
}