import { isServer } from '../env';

/**
 * Gets the user's preferred color scheme ('dark' or 'light').
 * @returns {'dark' | 'light' | undefined} The theme or undefined if server.
 */
export default function getTheme(): 'dark' | 'light' {
	// @ts-ignore
	if (isServer()) return;

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}