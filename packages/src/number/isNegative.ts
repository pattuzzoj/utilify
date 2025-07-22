export default function isNegative(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return value < 0;
}