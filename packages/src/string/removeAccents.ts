/**
 * Removes accents from a string.
 * @param {string} str - The string to process.
 * @returns {string} The string without accents.
 * @throws {TypeError} If str is not a string.
 */
export default function removeAccents(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  return str
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}