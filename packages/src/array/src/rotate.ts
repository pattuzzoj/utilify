export default function rotate<T>(arr: T[], offset: number): T[] {
  const arrLength = arr.length;
  offset = ((offset % arrLength) + arrLength) % arrLength;
  return arr.slice(offset).concat(arr.slice(0, offset));
}