export default function isIterable(value: unknown): boolean {
  return value != null && typeof (value as any)?.[Symbol.iterator] === 'function';
}
