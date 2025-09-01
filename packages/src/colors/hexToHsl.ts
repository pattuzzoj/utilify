import hexToRgb from "./hexToRgb";
import rgbToHsl from "./rgbToHsl";

/**
 * Converts a hex color string to an HSL color string.
 * @param {string} hex - The hex color string.
 * @returns {string} The HSL color string.
 * @throws {Error} If hex is not a valid hex color.
 */
export default function hexToHsl(hex: string): string {
  return rgbToHsl(hexToRgb(hex) as string);
}