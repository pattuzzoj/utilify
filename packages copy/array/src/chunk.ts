export default function chunk(arr: string, size: number): string[];
export default function chunk<T>(arr: T[], size: number): T[][];
export default function chunk(arr: any, size: number): any {
  const chunkedArray = [];

  for (let index = 0; index < arr.length; index += size) {
    chunkedArray.push(arr.slice(index, index + size));
  }

  return chunkedArray;
}