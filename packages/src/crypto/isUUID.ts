/**
 * Checks if a string is a valid UUID (version 4).
 * @param {string} value - The string to check.
 * @returns {boolean} True if valid UUID, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isUUID(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value', but received ${typeof value}`);
  }
  
  return /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/.test(value);
}