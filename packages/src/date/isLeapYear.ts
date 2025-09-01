/**
 * Checks if a year is a leap year.
 * @param {string} year - The year as a string.
 * @returns {boolean} True if leap year, false otherwise.
 */
export default function isLeapYear(year: string): boolean;
/**
 * Checks if a year is a leap year.
 * @param {number} year - The year as a number.
 * @returns {boolean} True if leap year, false otherwise.
 */
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