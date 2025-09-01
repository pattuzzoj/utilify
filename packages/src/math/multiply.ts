/**
 * Returns the product of all provided numbers.
 * @param {...number} values - The numbers to multiply.
 * @returns {number} The product of the numbers.
 * @throws {TypeError} If any value is not a number.
 */
export default function multiply(...values: number[]): number {
  if (!values.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'values'`);
  }

  return values.reduce((product, current) => product * current, 1);
}