export default function isDeno(): boolean {
	// @ts-ignore
	return typeof Deno === 'object' && Object.hasOwn(Deno, 'version');
}
