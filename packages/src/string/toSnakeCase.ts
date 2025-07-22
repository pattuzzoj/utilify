export default function toSnakeCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "_");
}