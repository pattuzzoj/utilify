export default function isLeapYear(year: string): boolean;
export default function isLeapYear(year: number): boolean;
export default function isLeapYear(year: any): boolean {
  year = Number(year);

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    
    return true;
  }

  return false;
}