export default function stripHtml(html: string): string {
  if (typeof html !== 'string') {
    throw new TypeError(`Expected a string for 'html'`);
  }
  
  return html
  .replace(/<[^>]*>/g, '');
}