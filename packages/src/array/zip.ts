import { isArray } from "../types";

export default function zip<T>(...arrays: T[][]): T[][] {
  if (!arrays.every(isArray)) {
    throw new TypeError(`Expected all arguments to be arrays`);
  }

	const length = Math.min(...arrays.map((array) => array.length));
	const zipped: T[][] = [];

  for (let i = 0; i < length; i++) {
		const group = arrays.map((array) => array[i]) as T[];
		zipped.push(group);
	}

	return zipped;
}