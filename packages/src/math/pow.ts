export default function pow(base: number, exponent: number): number {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError(`Expected a number for 'base' and 'exponent'`);
  }

  return Math.pow(base, exponent);
}