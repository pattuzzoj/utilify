export default function isAlpha(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}