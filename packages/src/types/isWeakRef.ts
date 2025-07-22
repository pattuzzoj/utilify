export default function isWeakRef(value: any): value is WeakRef<object> {
  return value instanceof WeakRef;
}