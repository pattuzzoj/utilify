export default function subtract(...values: number[]): number {
  if (values.length === 0 || !values.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'values'`);
  }
  
  return values
  .slice(1)
  .reduce((total, value) => total - value, values[0] as number);
}