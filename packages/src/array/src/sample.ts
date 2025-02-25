export default function sample(str: string): string;
export default function sample<T>(arr: T[]): T;
export default function sample(arr: any): any {
  return arr[Math.floor(Math.random() * arr.length)];
}