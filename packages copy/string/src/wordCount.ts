export default function wordCount(str: string): number {
  return str
  .trim()
  .replace(/\s+/g, " ")
  .split(" ").length;
}