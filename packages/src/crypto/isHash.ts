type HashAlgorithm = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';

export default function isHash(hash: string, algorithm: HashAlgorithm = 'SHA-256'): boolean {
  if (typeof hash !== 'string') {
    throw new TypeError(`Expected a string for 'hash'`);
  }

  if (!/^[0-9a-fA-F]+$/.test(hash)) {
    return false;
  }

  switch (algorithm) {
    case 'SHA-1':
      return hash.length === 40;
    case 'SHA-256':
      return hash.length === 64;
    case 'SHA-384':
      return hash.length === 96;
    case 'SHA-512':
      return hash.length === 128;
    default:
      throw new Error(`Expected a valid hash algorithm for 'algorithm'`);
  }
}