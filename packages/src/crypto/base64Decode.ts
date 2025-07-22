import isBase64 from "./isBase64";
import isBase64URL from "./isBase64URL";

export default function base64Decode(input: string, urlSafe = false): Uint8Array {
  if (urlSafe) {
    if (!isBase64URL(input)) {
      throw new Error(`Expected a valid base64url string for 'input'`);
    }
  } else {
    if (!isBase64(input)) {
      throw new Error(`Expected a valid base64 string for 'input'`);
    }
  }

  let base64 = input;

  if (urlSafe) {
    base64 = base64
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const pad = base64.length % 4;
    if (pad !== 0) base64 += '='.repeat(4 - pad);
  }

  if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
    return new Uint8Array(Buffer.from(base64, 'base64'));
  } else if (typeof atob === 'function') {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  } else {
    throw new Error('No base64 decoder available in this environment');
  }
}
