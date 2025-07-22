export default function isDeno(): boolean {
	// @ts-expect-error
	return typeof Deno === 'object' && Object.hasOwn(Deno, 'version');
}
