export default function first(str: string, count?: number): string;
export default function first<T>(arr: T[], count?: number): T[];
export default function first(arr: any, count: number = 1): any {
  return arr.slice(0, count);
}