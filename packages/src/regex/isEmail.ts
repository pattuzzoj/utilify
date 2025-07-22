export default function isEmail(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}