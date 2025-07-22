export default function isInteger(value: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }
  
  return Number.isInteger(value) && value === value && value !== Infinity && value !== -Infinity;
}