/**
 * Checks if a string is a valid HSL or HSLA color.
 * @param {string} hsl - The string to check.
 * @returns {boolean} True if valid HSL(A), false otherwise.
 */
export default function isHslColor(hsl: string): boolean {
  return typeof hsl === 'string' && /^hsl\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*\)$|^hsla\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/i.test(hsl);
}