import isUint8Array from "./isUint8Array";

export default function utf8Decode(data: ArrayBuffer | Uint8Array): string {
  const bytes = isUint8Array(data) ? data : new Uint8Array(data);

  if (typeof TextDecoder !== "undefined") {
    return new TextDecoder("utf-8").decode(bytes);
  }

  if (typeof Buffer !== "undefined") {
    return Buffer.from(bytes).toString("utf8");
  }

  throw new Error("No UTF-8 decoder available in this environment");
}
