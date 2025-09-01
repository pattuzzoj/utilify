import isHexColor from "./isHexColor";
import hexToRgb from "./hexToRgb";

export type ParsedColor = {
  model: "rgb" | "hsl";
  values: [number, number, number];
  alpha?: number;
} | null;

/**
 * Parses a color string (hex, rgb, rgba, hsl, hsla) into its components.
 * @param {string} color - The color string to parse.
 * @returns {ParsedColor} The parsed color object or null if invalid.
 * @throws {TypeError} If color is not a string.
 */
export default function parseColor(color: string): ParsedColor {
  if (typeof color !== 'string') {
    throw new TypeError(`Expected a string for 'color'`);
  }

  color = color.trim();

  if (isHexColor(color)) {
    color = hexToRgb(color);
  }

  const rgbMatch = color.match(
    /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*([0-1]?\.?\d+))?\)$/i
  );

  if (rgbMatch) {
    const r = parseInt(rgbMatch[1] as string);
    const g = parseInt(rgbMatch[2] as string);
    const b = parseInt(rgbMatch[3] as string);
    const a = rgbMatch[4] !== undefined ? parseFloat(rgbMatch[4]) : 1;

    if (r <= 255 && g <= 255 && b <= 255) {
      return {
        model: "rgb",
        values: [r, g, b],
        alpha: a,
      };
    }
  }

  const hslMatch = color.match(
    /^hsla?\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%(?:,\s*([0-1]?\.?\d+))?\)$/i
  );

  if (hslMatch) {
    const h = parseInt(hslMatch[1] as string);
    const s = parseInt(hslMatch[2] as string);
    const l = parseInt(hslMatch[3] as string);
    const a = hslMatch[4] !== undefined ? parseFloat(hslMatch[4]) : 1;

    if (h <= 360 && s <= 100 && l <= 100) {
      return {
        model: "hsl",
        values: [h, s, l],
        alpha: a,
      };
    }
  }

  return null;
}