export default function after<T>(arr: T[], index: number): T[] {
  return arr.slice(index + 1);
}