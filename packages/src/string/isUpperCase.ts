export default function isUpperCase(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return /^(?!.*[a-z]).*[A-Z].*$/.test(str.replace(/\s+/g, ""));
}