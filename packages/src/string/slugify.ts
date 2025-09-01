/**
 * Converts a string to a URL-friendly slug.
 * @param {string} str - The string to slugify.
 * @returns {string} The slugified string.
 * @throws {TypeError} If str is not a string.
 */
export default function slugify(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  return str
  .trim()
  .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
  .toLowerCase()
  .replace(/\s+/g, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}