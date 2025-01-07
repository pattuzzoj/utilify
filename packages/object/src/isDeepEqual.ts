import { isEqualType } from "../types";

export default function isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
export default function isDeepEqual(value1: unknown[], value2: unknown[]): boolean;
export default function isDeepEqual(value1: any, value2: any): boolean {
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!isEqualType(value1[key], value2[key])) return false;

    if (value1[key] !== null && typeof value1[key] === "object") {
      if(!isDeepEqual(value1[key], value2[key])) {
        return false;
      }
    } else if (!Object.is(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}