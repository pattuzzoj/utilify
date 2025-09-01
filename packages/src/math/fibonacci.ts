/**
 * Returns the nth Fibonacci number.
 * @param {number} num - The index (non-negative integer).
 * @returns {number} The nth Fibonacci number.
 * @throws {TypeError} If num is not a non-negative integer.
 */
export default function fibonacci(num: number): number {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    throw new TypeError(`Expected a non-negative integer for 'num'`);
  }
  
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}