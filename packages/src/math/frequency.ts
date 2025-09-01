/**
 * Returns a frequency map of items in an array.
 * @param {any[]} arr - The array to analyze.
 * @returns {Record<PropertyKey, number>} The frequency map.
 * @throws {TypeError} If arr is not an array.
 */
export default function frequency(arr: any[]): Record<PropertyKey, number> {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Expected an array for 'arr'`);
  }
  
  return arr.reduce((acc, item) => {
    acc[String(item)] = (acc[String(item)] || 0) + 1;
    return acc;
  }, {} as Record<PropertyKey, number>);
}