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