import isUint8Array from "./isUint8Array";

export default function hexEncode(data: ArrayBuffer | Uint8Array): string {
  const bytes = isUint8Array(data) ? data : new Uint8Array(data);

  return Array.from(bytes)
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}
