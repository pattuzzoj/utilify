export default function isHex(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[A-Fa-f0-9]+$/.test(value);
}