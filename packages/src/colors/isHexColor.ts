/**
 * Checks if a string is a valid hex color.
 * @param {string} hex - The string to check.
 * @returns {boolean} True if valid hex color, false otherwise.
 */
export default function isHexColor(hex: string): boolean {
  return typeof hex === 'string' && /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex);
}