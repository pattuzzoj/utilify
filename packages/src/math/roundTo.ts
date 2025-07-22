export default function roundTo(value: number, precision: number = 0): number {
  if (typeof value !== 'number') {
    throw new TypeError(`Expected a number for 'value'`);
  }

  if (typeof precision !== 'number') {
    throw new TypeError(`Expected a number for 'precision'`);
  }

  if (!Number.isInteger(precision) || precision < 0) {
    throw new TypeError(`Expected a non-negative integer for 'precision'`);
  }

  const factor = 10 ** precision;
  
  return Math.round(value * factor) / factor;
}