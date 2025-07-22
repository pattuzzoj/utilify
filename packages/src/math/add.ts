export default function add(...values: number[]): number {
  if (!values.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'values'`);
  }

  return values.reduce((sum, current) => sum + current, 0);
}
