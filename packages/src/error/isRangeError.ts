export default function isRangeError(value: any): value is RangeError {
  return value instanceof RangeError;
}