export default function isFalsy(value: any): boolean {
  return [undefined, null, false, NaN, 0, 0n, ""].includes(value);
}