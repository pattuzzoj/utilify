export default function isPromise(value: any): value is Promise<any> {
  return value instanceof Promise;
}