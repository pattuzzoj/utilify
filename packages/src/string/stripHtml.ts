/**
 * Removes HTML tags from a string.
 * @param {string} html - The HTML string to strip.
 * @returns {string} The string without HTML tags.
 * @throws {TypeError} If html is not a string.
 */
export default function stripHtml(html: string): string {
  if (typeof html !== 'string') {
    throw new TypeError(`Expected a string for 'html'`);
  }
  
  return html
  .replace(/<[^>]*>/g, '');
}