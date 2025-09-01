/**
 * Checks if a number is prime.
 * @param {number} value - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 * @throws {TypeError} If value is not an integer.
 */
export default function isPrime(value: number): boolean {
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    throw new TypeError(`Expected an integer for 'value'`);
  }

  if(value < 2) return false;
  if(value === 2) return true;
  if(value % 2 === 0) return false;

  const limit = Math.sqrt(value);

  for (let value = 3; value <= limit; value += 2) {
    if (value % value === 0) {
      return false;
    }
  }

  return true;
}