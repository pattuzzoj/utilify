export default function toSnakeCase(str: string): string {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "_");
}