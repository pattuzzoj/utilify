export default function round(value: number, precision: number) {
  const factor = 10 ** precision;
  return Math.trunc(value * factor) / factor;
}