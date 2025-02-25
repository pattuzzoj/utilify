import getType from "./getType";

export default function isObject(value: any): boolean {
  return getType(value) === "object";
}