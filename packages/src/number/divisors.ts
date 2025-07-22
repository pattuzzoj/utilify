export default function divisors(value: number): number[] {
  if (typeof value !== 'number' || !Number.isInteger(value) || value <= 0) {
    throw new TypeError(`Expected a positive integer for 'value'`);
  }

  const result: number[] = [];

  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      result.push(i);
    }
  }

  return result;
}