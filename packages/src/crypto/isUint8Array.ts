import { isNotNullObject } from "../object";

export default function isUint8Array(input: unknown): input is Uint8Array {
  return isNotNullObject(input) && Object.prototype.toString.call(input) === "[object Uint8Array]";
}
