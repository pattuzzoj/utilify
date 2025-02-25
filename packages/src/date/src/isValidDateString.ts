export default function isValidDateString(date: string): boolean {
  return !isNaN(new Date(date).getTime());
}