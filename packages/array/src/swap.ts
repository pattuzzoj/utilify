export default function swap<T>(arr: T[], pivot: number, partner: number): T[] {
  const swapedArr = Array.from(arr);
  [swapedArr[pivot], swapedArr[partner]] = [swapedArr[partner], swapedArr[pivot]];
  
  return swapedArr;
}