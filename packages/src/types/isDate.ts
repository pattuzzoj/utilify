export default function isDate(value: any): value is Date {
  return value instanceof Date;
}