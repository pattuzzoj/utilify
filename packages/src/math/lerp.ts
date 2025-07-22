export default function lerp(start: number, end: number, amount: number): number {
  if (typeof start !== 'number') {
    throw new TypeError(`Expected a number for 'start'`);
  }

  if (typeof end !== 'number') {
    throw new TypeError(`Expected a number for 'end'`);
  }

  if (typeof amount !== 'number') {
    throw new TypeError(`Expected a number for 'amount'`);
  }

  return start + (end - start) * amount;
}