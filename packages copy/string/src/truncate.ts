export default function truncate(text: string, size: number): string {
  return text.slice(0, size).concat("...");
}