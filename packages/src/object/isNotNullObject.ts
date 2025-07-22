export default function isNotNullObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}