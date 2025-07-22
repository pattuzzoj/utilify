export default function isValidDateString(date: string): boolean {
  if (typeof date !== 'string') {
    throw new TypeError(`Expected a datestring for 'date'`);
  }
  
  return !isNaN(new Date(date).getTime());
}