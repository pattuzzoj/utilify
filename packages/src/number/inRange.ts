export default function inRange(value: number, min: number, max: number): boolean {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }

  if (typeof min !== 'number') {
    throw new TypeError(`Expected a number for 'min'`);
  }

  if (typeof max !== 'number') {
    throw new TypeError(`Expected a number for 'max'`);
  }
  
  return min <= value && value <= max;
}