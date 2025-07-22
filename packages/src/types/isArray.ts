export default function isArray(value: any): value is any[] {
  return Object.prototype.toString.call(value) === '[object Array]';
}