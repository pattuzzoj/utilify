import isRgbColor from "./isRgbColor";

/**
 * Converts an RGB color string to an HSL color string.
 * @param {string} rgb - The RGB color string.
 * @returns {string} The HSL color string.
 * @throws {Error} If rgb is not a valid RGB color.
 */
export default function rgbToHsl(rgb: string): string {
  if (!isRgbColor(rgb)) {
		throw new Error(`Expected a valid rgb color string`);
  }

	let [r, g, b, a] = rgb.trim().replace(/^rgba?\((.*)\)$/, '$1').split(',') as unknown as [number, number, number, number];
	r /= 255;
	g /= 255;
	b /= 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h,
		s,
		l = (max + min) / 2;

	if (max === min) {
		h = s = 0;
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		// @ts-ignore
		h /= 6;
	}

	// @ts-ignore
	h = Math.round(h * 360 * 100) / 100;
	s = Math.round(s * 100 * 100) / 100 + '%';
	// @ts-ignore
	l = Math.round(l * 100 * 100) / 100 + '%';

	const hsl = [h, s, l];

	if (a) {
		hsl.push(a);
	}

	return `hsl${a ? 'a' : ''}(${hsl.join(', ')})`;
}
