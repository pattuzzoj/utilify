export default function getRandom(str: string): string;
export default function getRandom<T>(arr: T[]): T;
export default function getRandom(arr: any): any {
  return arr[Math.floor(Math.random() * arr.length)];
}