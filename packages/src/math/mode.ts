/**
 * Returns the mode(s) of an array of numbers.
 * @param {number[]} arr - The array of numbers.
 * @returns {number[]} The mode(s) of the array.
 * @throws {TypeError} If arr is not an array of numbers.
 */
export default function mode(arr: number[]): number[] {
  if (!Array.isArray(arr) || !arr.every(value => typeof value === 'number')) {
    throw new TypeError(`Expected an array of numbers for 'arr'`);
  }
  
  if (arr.length === 0) {
    return [];
  }

  const frequencyMap = new Map<number, number>();
  let maxFrequency = 0;

  for (const num of arr) {
    const count = (frequencyMap.get(num) || 0) + 1;
    frequencyMap.set(num, count);
    if (count > maxFrequency) {
      maxFrequency = count;
    }
  }

  const modes: number[] = [];
  for (const [num, count] of frequencyMap.entries()) {
    if (count === maxFrequency) {
      modes.push(num);
    }
  }

  return modes.sort((a, b) => a - b);
}