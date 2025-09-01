import rgbToHex from "./rgbToHex";
import hslToRgb from "./hslToRgb";

/**
 * Converts an HSL color string to a hex color string.
 * @param {string} hsl - The HSL color string.
 * @returns {string} The hex color string.
 * @throws {Error} If hsl is not a valid HSL color.
 */
export default function hslToHex(hsl: string): string {
	return rgbToHex(hslToRgb(hsl) as string);
}
