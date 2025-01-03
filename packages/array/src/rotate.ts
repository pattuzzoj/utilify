export default function rotate<T>(arr: T[], count: number): T[] {
  const len = arr.length;
  const offset = ((count % len) + len) % len;
  return arr.slice(offset).concat(arr.slice(0, offset));
}