export default function isInfinity(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return value === Infinity || value === -Infinity;
}