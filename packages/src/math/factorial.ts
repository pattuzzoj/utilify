export default function factorial(value: number): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    throw new TypeError(`Expected a non-negative integer for 'value'`);
  }

  let result = 1;

  for (let num = value; num >= 1; num--) {
    result *= num;
  }

  return result;
}