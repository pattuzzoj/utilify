export default function isPlainObject(value: any): value is Record<PropertyKey, any> {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}