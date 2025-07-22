export default function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}