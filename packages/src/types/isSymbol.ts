/**
 * Check if a value is a symbol.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a symbol, false otherwise.
 */
export default function isSymbol(value: any): value is symbol {
  return typeof value === 'symbol';
}