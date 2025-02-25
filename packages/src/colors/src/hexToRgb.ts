import { chunk } from '@utilify/array';
import { isHex } from '.';

export default function hexToRgb(hex: string): string | null {
	if (!isHex(hex)) {
		console.error('Invalid HEX color', hex);
		return null;
	}

	const channels: string[] = chunk(hex, (hex.length > 4 ? 2 : 1));
	const rgb = channels
		.slice(0, 3)
		.map((channel: string) => Number.parseInt(channel.padEnd(2, channel), 16));

	if (channels.length === 4) {
		rgb.push(Math.trunc((Number.parseInt(channels[3], 16) / 255) * 100) / 100);
	}

	return rgb.join(', ');
}
