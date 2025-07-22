export default function multiply(...values: number[]): number {
  if (!values.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'values'`);
  }

  return values.reduce((product, current) => product * current, 1);
}