import isFunction from "./isFunction";
import isNull from "./isNull";

export default function isPrimitive(value: any): value is undefined | null | boolean | number | bigint | string | symbol {
  return isNull(value) || typeof value !== 'object' && !isFunction(value);
}