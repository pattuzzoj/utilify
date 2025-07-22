import add from './add';

export default function mean(values: number[]): number {
  if (!Array.isArray(values) || !values.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'values'`);
  }
  
  return values.length ? (add(...values) / values.length) : 0;
}