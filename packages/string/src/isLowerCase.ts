export default function isLowerCase(str: string): boolean {
  return /^(?!.*[A-Z]).*[a-z].*$/.test(str.replace(/\s+/g, ""));
}