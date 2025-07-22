import { isString } from "../types";

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
