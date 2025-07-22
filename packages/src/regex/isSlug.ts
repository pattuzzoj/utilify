export default function isSlug(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
