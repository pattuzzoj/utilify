export default function slugify(str: string): string {
  return str
  .trim()
  .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
  .toLowerCase()
  .replace(/\s+/g, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}