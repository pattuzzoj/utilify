export default function isAlphanumeric(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[a-zA-Z0-9]+$/.test(value);
}