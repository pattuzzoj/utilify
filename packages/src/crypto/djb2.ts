/**
 * Computes the djb2 hash of a string.
 * @param {string} str - The string to hash.
 * @returns {number} The hash value.
 * @throws {TypeError} If str is not a string.
 */
export default function djb2(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  let hash = 5381;
  
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }

  return hash >>> 0;
}