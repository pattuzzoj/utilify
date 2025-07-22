import { isNotNullObject } from "../object";

export default function isArrayBuffer(input: unknown): input is ArrayBuffer {
  return isNotNullObject(input) && Object.prototype.toString.call(input) === "[object ArrayBuffer]";
}
