import hexToRgb from "./hexToRgb";
import rgbToHsl from "./rgbToHsl";

export default function hexToHsl(hex: string): string {
  return rgbToHsl(hexToRgb(hex) as string);
}