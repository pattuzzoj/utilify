import { isFalsy } from "@utilify/types";

export default function compact<T>(arr: T[]): T[] {
  return arr.filter((value: T) => !isFalsy(value));
}