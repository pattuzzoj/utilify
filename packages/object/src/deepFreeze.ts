import { isObject } from "../types";
import freeze from "./freeze";

export default function deepFreeze(obj: Record<string, any>): Record<string, any> {
  const freezedObj = freeze(obj);

  for (const key in freezedObj) {
    if (isObject(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return freezedObj;
}
