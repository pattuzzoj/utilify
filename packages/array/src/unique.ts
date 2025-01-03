export default function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}