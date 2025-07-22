import rgbToHex from "./rgbToHex";
import hslToRgb from "./hslToRgb";


export default function hslToHex(hsl: string): string {
	return rgbToHex(hslToRgb(hsl) as string);
}
