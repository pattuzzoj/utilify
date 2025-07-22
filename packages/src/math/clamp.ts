export default function clamp(value: number, min: number, max: number): number {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }

  if (typeof min !== 'number') {
    throw new TypeError(`Expected a number for 'min'`);
  }

  if (typeof max !== 'number') {
    throw new TypeError(`Expected a number for 'max'`);
  }

  if (min > max) {
    throw new RangeError(`Expected 'min' to be less than or equal to 'max'`);
  }

  if (value >= max) {
    return max;
  } else if (value <= min) {
    return min;
  }

  return value;
}