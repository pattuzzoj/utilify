import { chunk } from '../array';
import isHexColor from './isHexColor';

export default function hexToRgb(hex: string): string {
	if (!isHexColor(hex)) {
		throw new Error(`Expected a valid hex color string`);
	}

	hex = hex.trim().replace('#', '');
	const channels: string[] = chunk(hex, (hex.length > 4 ? 2 : 1)) as unknown as string[];
	const rgb = channels
		.slice(0, 3)
		.map((channel: string) => Number.parseInt(channel.padEnd(2, channel), 16));

	if (channels.length === 4) {
		rgb.push(Math.trunc((Number.parseInt(channels[3] as string, 16) / 255) * 100) / 100);
	}

	return `rgb${channels.length === 4 ? 'a' : ''}(${rgb.join(', ')})`;
}