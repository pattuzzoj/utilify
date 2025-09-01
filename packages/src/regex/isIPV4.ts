/**
 * Checks if a string is a valid IPv4 address (optionally with port).
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string is a valid IPv4 address, false otherwise.
 * @throws {TypeError} If value is not a string.
 */
export default function isIPV4(value: string): boolean {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string for 'value'`);
  }
  
  return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(value);
}