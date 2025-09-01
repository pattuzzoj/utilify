/**
 * Checks if an object is sealed.
 * @param {any} obj - The object to check.
 * @returns {boolean} True if the object is sealed, false otherwise.
 */
export default function isSealed(obj: any): boolean {
  return Object.isSealed(obj);
}