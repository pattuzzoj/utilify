import isUint8Array from "./isUint8Array";

export default function base64Encode(input: Uint8Array | ArrayBuffer, urlSafe = false): string {
  const bytes = isUint8Array(input) ? input : new Uint8Array(input);
  let base64: string;

  if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
    base64 = Buffer.from(bytes).toString('base64');
  } else if (typeof btoa === 'function') {
    base64 = btoa(String.fromCharCode(...bytes));
  } else {
    throw new Error('No base64 encoder available in this environment');
  }

  if (urlSafe) {
    base64 = base64
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  return base64;
}