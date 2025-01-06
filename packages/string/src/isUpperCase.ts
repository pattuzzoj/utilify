export default function isUpperCase(str: string): boolean {
  return /^(?!.*[a-z]).*[A-Z].*$/.test(str.replace(/\s+/g, ""));
}