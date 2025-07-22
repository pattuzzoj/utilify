import { isNaN, isInfinity } from "../number";
import isArray from "./isArray";
import isNull from "./isNull";

export default function getType(value: any): string {
  const type = typeof value;

  if (type === 'number') {
    if (isNaN(value)) return 'nan';
    if (isInfinity(value)) return 'infinity';
  } else if (type === 'object') {
    if (isNull(value)) return 'null';
    if (isArray(value)) return 'array';
  }

  return type;
}