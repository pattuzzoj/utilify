import isUint8Array from "./isUint8Array";

/**
 * Encodes a Uint8Array or ArrayBuffer as a hexadecimal string.
 * @param {ArrayBuffer|Uint8Array} data - The data to encode.
 * @returns {string} The hex string.
 */
export default function hexEncode(data: ArrayBuffer | Uint8Array): string {
  const bytes = isUint8Array(data) ? data : new Uint8Array(data);

  return Array.from(bytes)
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}
