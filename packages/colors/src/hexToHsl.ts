import { hexToRgb, rgbToHsl } from ".";

export default function hexToHsl(hex: string): string | null {
  const rgb = hexToRgb(hex);

  if (!rgb) return null;

  return rgbToHsl(rgb);
}