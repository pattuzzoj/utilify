import { isCryptoAvailable } from '@utilify/browser';

export default function randomUUID(): string | undefined {
  if (!isCryptoAvailable()) {
    console.error("Crypto API is not available");
    return;
  }

  return crypto.randomUUID();
}