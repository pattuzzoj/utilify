import isServer from './isServer';

export default function getOS(): string | undefined {
	if (!isServer()) return;

	if ('userAgentData' in navigator) {
		// @ts-ignore
		return navigator.userAgentData.platform;
	}

	const userAgent = navigator.userAgent;

	if (/Android/i.test(userAgent)) return 'Android';
	if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
	if (/Linux/i.test(userAgent)) return 'Linux';
	if (/Windows/i.test(userAgent)) return 'Windows';
	if (/Mac/i.test(userAgent)) return 'macOS';

	return 'Unknown';
}
