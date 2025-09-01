import { isNotNullObject } from "../object";

/**
 * Checks if a value is a Uint8Array.
 * @param {unknown} input - The value to check.
 * @returns {boolean} True if input is a Uint8Array, false otherwise.
 */
export default function isUint8Array(input: unknown): input is Uint8Array {
  return isNotNullObject(input) && Object.prototype.toString.call(input) === "[object Uint8Array]";
}
