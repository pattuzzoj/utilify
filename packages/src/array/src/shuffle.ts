export default function shuffle<T>(arr: T[]): T[] {
  for (let index = arr.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[randomIndex]] = [arr[randomIndex] as T, arr[index] as T];
  }

  return arr;
}