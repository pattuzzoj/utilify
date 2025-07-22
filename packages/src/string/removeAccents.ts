export default function removeAccents(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }
  
  return str
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}