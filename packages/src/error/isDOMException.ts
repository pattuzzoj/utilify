export default function isDOMException(value: any): value is DOMException {
  return value instanceof DOMException;
}