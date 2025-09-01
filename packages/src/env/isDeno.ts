/**
 * Checks if the current environment is Deno.
 * @returns {boolean} True if running in Deno, false otherwise.
 */
export default function isDeno(): boolean {
	// @ts-expect-error
	return typeof Deno === 'object' && Object.hasOwn(Deno, 'version');
}
