export default function fibonacci(num: number): number {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}