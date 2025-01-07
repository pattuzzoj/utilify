export default function guard<T, U = T>(
	validator: (...args: T[]) => boolean,
	callback: (...args: T[]) => U,
	fallback: (...args: T[]) => U
): (...args: T[]) => U {
	return (...args: T[]): U => validator(...args) ? callback(...args) : fallback(...args);
}  