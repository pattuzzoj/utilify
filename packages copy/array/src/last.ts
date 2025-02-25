export default function last<T>(arr: T[], index: number = 1): T[] {
  return arr.slice(-index);
}