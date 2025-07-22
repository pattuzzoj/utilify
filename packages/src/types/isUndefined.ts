export default function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}