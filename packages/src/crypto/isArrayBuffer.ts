import { isNotNullObject } from "../object";

/**
 * Checks if a value is an ArrayBuffer.
 * @param {unknown} input - The value to check.
 * @returns {boolean} True if input is an ArrayBuffer, false otherwise.
 */
export default function isArrayBuffer(input: unknown): input is ArrayBuffer {
  return isNotNullObject(input) && Object.prototype.toString.call(input) === "[object ArrayBuffer]";
}
