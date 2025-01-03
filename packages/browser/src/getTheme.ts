import { isServer } from '@utilify/environment';

export default function getTheme(): string | undefined {
	if (isServer()) return;

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}
