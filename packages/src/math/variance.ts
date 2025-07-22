export default function variance(arr: number[]): number {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Expect an array for 'arr'`);
  }
  
  if (arr.length < 2) {
    throw new Error('Input array must contain at least two values.');
  }

  const numericArr = arr.filter(value => typeof value === 'number' && !isNaN(value));

  if (numericArr.length < 2) {
    throw new Error('Input array must contain at least two numeric values.');
  }

  const n = numericArr.length;
  const meanValue = numericArr.reduce((sum, value) => sum + value, 0) / n;
  const sumOfSquaredDifferences = numericArr.reduce((sum, value) => sum + Math.pow(value - meanValue, 2), 0);

  return sumOfSquaredDifferences / (n - 1);
}