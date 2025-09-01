import isRgbColor from "./isRgbColor";

/**
 * Converts an RGB(A) color string to a hex color string.
 * @param {string} rgb - The RGB(A) color string.
 * @returns {string} The hex color string.
 * @throws {Error} If rgb is not a valid RGB color.
 */
export default function rgbToHex(rgb: string): string {
  if (!isRgbColor(rgb)) {
    throw new Error(`Expected a valid rgb color string`);
  }

  const channels = rgb.trim().replace(/^rgba?\((.*)\)$/, '$1').split(',');
  const hex = channels.slice(0, 3).map((channel) =>
    Number(channel).toString(16).padStart(2, "0")
  );

  if (channels.length === 4) {
    hex.push(Math.ceil(Number.parseFloat(channels[3] as string) * 255).toString(16));
  }

  return `#${hex.join("")}`;
}