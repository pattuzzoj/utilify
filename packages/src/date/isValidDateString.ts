/**
 * Checks if a string is a valid date string.
 * @param {string} date - The date string to check.
 * @returns {boolean} True if valid date string, false otherwise.
 * @throws {TypeError} If date is not a string.
 */
export default function isValidDateString(date: string): boolean {
  if (typeof date !== 'string') {
    throw new TypeError(`Expected a datestring for 'date'`);
  }
  
  return !isNaN(new Date(date).getTime());
}