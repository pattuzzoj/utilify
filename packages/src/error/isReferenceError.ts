export default function isReferenceError(value: any): value is ReferenceError {
  return value instanceof ReferenceError;
}