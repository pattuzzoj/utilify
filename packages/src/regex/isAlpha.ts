export default function isAlpha(value: string): boolean {
  if (typeof value !== "string") {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^\p{L}+$/u.test(value);
}