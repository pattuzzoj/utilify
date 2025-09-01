/**
 * Checks if a string is a valid URL.
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isURL(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=-]*)?$/.test(value);
}