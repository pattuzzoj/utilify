export default function isPromise(value: object): boolean {
  return value instanceof Promise;
}