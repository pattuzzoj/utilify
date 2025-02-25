import getType from "./getType";

export default function isEqualType(value1: any, value2: any): boolean {
  return getType(value1) === getType(value2);
}