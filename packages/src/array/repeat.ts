export default function repeat<T>(value: T, count: number): T[];
export default function repeat(value: string, count: number): string;
export default function repeat<T>(value: T | string, count: number): T[] | string {
  if (typeof count !== 'number') {
    throw new TypeError(`Expected a number for 'count'`);
  }

  if (count < 0) {
    throw new RangeError(`Expected a non-negative integer for 'count'`);
  }
  
  if (typeof value === 'string') {
    return value.repeat(count);
  }

  return Array(count).fill(value);
}