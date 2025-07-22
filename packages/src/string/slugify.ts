export default function slugify(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  return str
  .trim()
  .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
  .toLowerCase()
  .replace(/\s+/g, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}