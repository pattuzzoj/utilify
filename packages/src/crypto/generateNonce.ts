/**
 * Generates a random nonce as a Uint8Array.
 * @param {number} [length=16] - The length of the nonce.
 * @returns {Uint8Array} The generated nonce.
 * @throws {Error} If length is not a positive multiple of 8.
 */
export default function generateNonce(length: number = 16): Uint8Array {
  if (length <= 0) {
    throw new Error(`Expected positive multiple of 8 for 'length'`);
  }

  const salt = new Uint8Array(length);
  crypto.getRandomValues(salt);
  return salt;
}