export default function isValidDateString(date: string) {
  return !isNaN(new Date(date).getTime());
}