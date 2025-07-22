export default function times<T>(callback: (index: number) => T, count: number): T[] {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  if (typeof count !== 'number' || !Number.isInteger(count) || count < 0) {
    throw new TypeError(`Expected a non-negative integer for 'count'`);
  }

  const results: T[] = [];

  for (let i = 0; i < count; i++) {
    results.push(callback(i));
  }

  return results;
}