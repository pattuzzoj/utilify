export default function fibonacci(num: number): number {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
    throw new TypeError(`Expected a non-negative integer for 'num'`);
  }
  
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}