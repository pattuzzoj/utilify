export default function isNaN(value: any): value is number {
  return value !== value;
}