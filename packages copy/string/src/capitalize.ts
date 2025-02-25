export default function capitalize(str: string): string {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}