export default function isOdd(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return value % 2 !== 0;
}