export default function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  return str
  .charAt(0)
  .toUpperCase()
  .concat(str.slice(1).toLowerCase());
}