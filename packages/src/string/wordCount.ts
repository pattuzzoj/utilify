export default function wordCount(str: string): number {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return str
  .trim()
  .split(/\s+/)
  .filter(Boolean)
  .length;
}