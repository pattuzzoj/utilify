export default function truncate(text: string, size: number): string {
  if (typeof text !== 'string') {
    throw new TypeError(`Expected a string for 'text'`);
  }
  
  return text
  .slice(0, size)
  .concat("...");
}