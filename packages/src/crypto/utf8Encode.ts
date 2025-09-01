import { isString } from "../types";

/**
 * Encodes a string as UTF-8 and returns a Uint8Array.
 * @param {string} input - The string to encode.
 * @returns {Uint8Array} The UTF-8 encoded bytes.
 * @throws {TypeError|Error} If input is not a string or no encoder is available.
 */
export default function utf8Encode(input: string): Uint8Array {
  if (!isString(input)) {
    throw new TypeError(`Expected a string for 'input'`);
  }

  let string = input;

  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(string);
  }

  if (typeof Buffer !== "undefined") {
    return new Uint8Array(Buffer.from(string, "utf8"));
  }

  throw new Error("No UTF-8 encoder available in this environment");
}
