export default function first<T>(arr: T[], index: number = 1): T[] {
  return arr.slice(0, index);
}