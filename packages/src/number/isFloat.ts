export default function isFloat(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return !Number.isInteger(value) && Number.isFinite(value);
}