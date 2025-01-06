import isValidDateString from "./isValidDateString";

export default function parseDate(date: string): Date | undefined {
  if (!isValidDateString(date)) {
    console.error("Invalid date");
    return;
  };
  
  return new Date(date);
}