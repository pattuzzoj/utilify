/**
 * Subtracts all subsequent numbers from the first number.
 * @param {...number} values - The numbers to subtract.
 * @returns {number} The result of the subtraction.
 * @throws {TypeError} If any value is not a number or no values are provided.
 */
export default function subtract(...values: number[]): number {
  if (values.length === 0 || !values.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'values'`);
  }
  
  return values
  .slice(1)
  .reduce((total, value) => total - value, values[0] as number);
}