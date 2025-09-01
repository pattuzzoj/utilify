/**
 * Escapes HTML special characters in a string.
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string.
 * @throws {TypeError} If str is not a string.
 */
export default function escapeHtml(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
