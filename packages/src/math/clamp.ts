/**
 * Clamps a number between min and max.
 * @param {number} value - The number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The clamped value.
 * @throws {TypeError|RangeError} If arguments are invalid.
 */
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