import isHex from "./isHex";

/**
 * Decodes a hexadecimal string into a Uint8Array.
 * @param {string} hex - The hex string to decode.
 * @returns {Uint8Array} The decoded bytes.
 * @throws {Error} If hex is not valid or has odd length.
 */
export default function hexDecode(hex: string): Uint8Array {
  if (!isHex(hex) || hex.length % 2 !== 0) {
    throw new Error("Invalid hex string");
  }

  const bytes = new Uint8Array(hex.length / 2);

  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }

  return bytes;
}
