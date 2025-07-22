export default function divide(dividend: number, divisor: number): number {
  if (typeof dividend !== 'number' || typeof divisor !== 'number') {
    throw new TypeError(`Expected a number for 'dividend' and 'divisor'`);
  }

  if (divisor === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return dividend / divisor;
}