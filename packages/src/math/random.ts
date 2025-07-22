export default function random(min: number = 0, max: number = 10): number {
  if (typeof min !== 'number') {
    throw new TypeError(`Expected a number for 'min'`);
  }

  if (typeof max !== 'number') {
    throw new TypeError(`Expected a number for 'max'`);
  }

  if (min > max) {
    throw new RangeError(`Expected 'min' (${min}) to be less than or equal to 'max' (${max})`);
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}
