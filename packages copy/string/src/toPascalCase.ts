export default function toPascalCase(str: string): string {
  return str.trim().split(" ").map((str) => {
    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}