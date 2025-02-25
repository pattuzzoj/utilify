export default function toCamelCase(str: string): string {
  return str.trim().toLowerCase().split(" ").map((str, index) => {
    if(index === 0) return str;

    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}