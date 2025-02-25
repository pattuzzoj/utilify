export default function after(str: string, index: number): string;
export default function after<T>(arr: T[], index: number): T[];
export default function after(arr: any, index: number): any {
  return arr.slice(index + 1);
}