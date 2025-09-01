/**
 * Checks if a string is a valid RGB or RGBA color.
 * @param {string} rgb - The string to check.
 * @returns {boolean} True if valid RGB(A), false otherwise.
 */
export default function isRgbColor(rgb: string): boolean {
  return typeof rgb === 'string' && /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$|^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/i.test(rgb);
}