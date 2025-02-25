export default function last(str: string, count?: number): string;
export default function last<T>(arr: T[], count?: number): T[];
export default function last(arr: any, count: number = 1): any {
  return arr.slice(-count);
}