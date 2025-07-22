import { isArray } from "../types";

export default function unzip<T>(zip: T[][]): T[][] {
  if (!isArray(zip)) {
    throw new TypeError(`Expected an array for 'zip'`);
  }

  if (!zip.every(isArray)) {
    throw new TypeError(`Expected all elements in 'zip' to be arrays`);
  }

	if (!zip.length) {
		return [];
	};

	const length = (zip[0] as T[]).length;
  const unzipped = Array.from({ length }, () => []);

	for (const group of zip) {
		group.forEach((item, index) => (unzipped[index] as T[]).push(item));
	}

	return unzipped;
}