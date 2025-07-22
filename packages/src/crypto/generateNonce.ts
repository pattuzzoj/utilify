export default function generateNonce(length: number = 16): Uint8Array {
  if (length <= 0) {
    throw new Error(`Expected positive multiple of 8 for 'length'`);
  }

  const salt = new Uint8Array(length);
  crypto.getRandomValues(salt);
  return salt;
}