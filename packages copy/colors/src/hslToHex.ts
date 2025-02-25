import { hslToRgb, rgbToHex } from '.';

export default function hslToHex(hsl: string): string | null {
	const rgb = hslToRgb(hsl);
	
	if (!rgb) return null;

	return rgbToHex(rgb);
}
