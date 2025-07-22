import { isServer } from '../env';

export default function getTheme(): 'dark' | 'light' {
	// @ts-ignore
	if (isServer()) return;

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}