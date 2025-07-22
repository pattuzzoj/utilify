import { isDate } from "../types";
import { isNaN } from "../number";

export default function isValidDate(value: Date): boolean {
  return isDate(value) && !isNaN(value.getTime());
}