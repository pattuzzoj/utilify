/**
 * Checks if the current environment is Bun.
 * @returns {boolean} True if running in Bun, false otherwise.
 */
export default function isBun(): boolean {
	// @ts-ignore
	return typeof Bun === 'object' && Object.hasOwn(Bun, 'version');
}
