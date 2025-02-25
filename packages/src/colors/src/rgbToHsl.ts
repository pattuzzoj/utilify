import { isRgb } from '.';

export default function rgbToHsl(rgb: string): string | null {
	if (!isRgb(rgb)) {
		console.error('Invalid RGB color', rgb);
		return null;
	}

	let [r, g, b, a] = rgb.split(',') as unknown[] as number[];
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

	return hsl.join(', ');
}
