/**
 * Returns the median of an array of numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The median value.
 * @throws {TypeError|Error} If arr is not a valid array or is empty.
 */
export default function median(arr: number[]): number {
  if (!Array.isArray(arr) || !arr.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'arr'`);
  }
  
  if (arr.length === 0) {
    throw new Error('Input array cannot be empty.');
  }

  const sortedArr = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    return (sortedArr[mid - 1]! + sortedArr[mid]!) / 2;
  } else {
    return sortedArr[mid] as number;
  }
}