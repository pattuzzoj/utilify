import isFalsy from "./isFalsy";

export default function isTruthy(value: any): boolean {
  return !isFalsy(value);
}