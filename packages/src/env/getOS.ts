import isServer from './isServer';

/**
 * Gets the operating system name from the user agent.
 * @returns {string|undefined} The OS name or undefined if server.
 */
export default function getOS(): string | undefined {
	if (!isServer()) return;

	if ('userAgentData' in navigator) {
		// @ts-ignore
		return navigator.userAgentData.platform;
	}

	const userAgent = navigator.userAgent;

	if (/Android/i.test(userAgent)) return 'Android';
	else if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
	else if (/Linux/i.test(userAgent)) return 'Linux';
	else if (/Windows/i.test(userAgent)) return 'Windows';
	else if (/Mac/i.test(userAgent)) return 'macOS';
	else return 'Unknown';
}
