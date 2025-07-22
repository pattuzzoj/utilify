export default function isIterable(value: any): value is Iterable<any> {
  return value != null && typeof value[Symbol.iterator] === 'function';
}