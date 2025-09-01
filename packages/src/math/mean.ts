import add from './add';

/**
 * Returns the mean (average) of an array of numbers.
 * @param {number[]} values - The array of numbers.
 * @returns {number} The mean value.
 * @throws {TypeError} If values is not an array of numbers.
 */
export default function mean(values: number[]): number {
  if (!Array.isArray(values) || !values.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'values'`);
  }
  
  return values.length ? (add(...values) / values.length) : 0;
}