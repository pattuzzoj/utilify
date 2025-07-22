export default function toPascalCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  return str
  .trim()
  .split(" ")
  .map((str) => str[0]!.toUpperCase().concat(str.slice(1)))
  .join(" ")
  .replace(/\s+/g, "");
}