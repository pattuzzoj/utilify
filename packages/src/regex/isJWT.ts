export default function isJWT(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(value);
}