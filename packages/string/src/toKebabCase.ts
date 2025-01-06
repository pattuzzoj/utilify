export default function toKebabCase(str: string): string {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");
}