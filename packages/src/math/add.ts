/**
 * Returns the sum of all provided numbers.
 * @param {...number} values - The numbers to add.
 * @returns {number} The sum of the numbers.
 * @throws {TypeError} If any value is not a number.
 */
export default function add(...values: number[]): number {
  if (!values.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'values'`);
  }

  return values.reduce((sum, current) => sum + current, 0);
}
