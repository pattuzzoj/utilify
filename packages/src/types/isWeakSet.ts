export default function isWeakSet(value: any): value is WeakSet<object> {
  return value instanceof WeakSet;
}