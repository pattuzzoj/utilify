export default function isLowerCase(str: string): boolean {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return /^(?!.*[A-Z]).*[a-z].*$/.test(str.replace(/\s+/g, ""));
}