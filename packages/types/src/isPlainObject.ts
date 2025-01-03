export default function isPlainObject(value: any): boolean {
  return value !== null && typeof value === 'object' && value.constructor === Object;
}