export default function isWeakMap(value: any): value is WeakMap<object, any> {
  return value instanceof WeakMap;
}