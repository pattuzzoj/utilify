import { isInfinity } from "../number";
import isNaN from "../number/isNaN";

export default function isNumber(value: any): value is number {
  return typeof value === 'number' && !isInfinity(value) && !isNaN(value);
}