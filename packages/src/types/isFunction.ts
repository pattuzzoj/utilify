export default function isFunction(value: any): value is Function {
  return typeof value === "function";
}