export default function clone<T extends Record<string, any>>(value: T): T;
export default function clone<T extends any[]>(value: T): T;
export default function clone<T>(value: T): T {
	const clonedValue = Array.isArray(value) ? ([] as T) : ({} as T);

	for (const key in value) {
		clonedValue[key] = value[key];
	}

	return clonedValue;
}
