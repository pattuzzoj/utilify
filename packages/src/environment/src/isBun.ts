export default function isBun(): boolean {
	// @ts-ignore
	return typeof Bun === 'object' && Object.hasOwn(Bun, 'version');
}
