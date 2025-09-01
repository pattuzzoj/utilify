/**
 * Checks if an object is frozen.
 * @param {any} obj - The object to check.
 * @returns {boolean} True if the object is frozen, false otherwise.
 */
export default function isFrozen(obj: any): boolean {
  return Object.isFrozen(obj);
}