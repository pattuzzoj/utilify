import isFalsy from "./isFalsy";

export default function isTruthy(value: unknown): boolean {
  return !isFalsy(value);
}