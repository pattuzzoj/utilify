import isArray from "./isArray";
import isNull from "./isNull";

export default function isObject(value: any): value is Record<PropertyKey, any> {
  return typeof value === 'object' && !isNull(value) && !isArray(value);
}