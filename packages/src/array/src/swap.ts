export default function swap<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
  [arr[fromIndex], arr[toIndex]] = [arr[toIndex] as T, arr[fromIndex] as T];

  return arr;
}
