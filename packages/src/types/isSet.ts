export default function isSet(value: any): value is Set<any> {
  return value instanceof Set;
}