export default function isIterable(value: any): boolean {
  return value != null && typeof value?.[Symbol.iterator] === 'function';
}
