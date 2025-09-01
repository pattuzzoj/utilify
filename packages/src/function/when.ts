/**
 * @callback ActionCallback
 * @param {...any} args
 * @returns {any}
 */

/**
 * Executes an action if the predicate returns true.
 * @template T
 * @param {(...args: any) => boolean} predicate - The predicate function.
 * @param {ActionCallback} action - The action to execute.
 * @returns {(...args: Parameters<T>) => ReturnType<T> | undefined} The conditional function.
 * @throws {TypeError} If predicate or action is not a function.
 */
export default function when<T extends (...args: any) => any>(predicate: (...args: any) => boolean, action: T): (...args: Parameters<T>) => ReturnType<T> | undefined {
	if (typeof predicate !== 'function') {
		throw new TypeError(`Expected a function for 'predicate'`);
	}

	if (typeof action !== 'function') {
		throw new TypeError(`Expected a function for 'callback'`);
	}

	return (...args: Parameters<T>): ReturnType<T> | undefined => {
		return predicate(...args) ? action(...args) : undefined;
	}
}