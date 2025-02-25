export default function before(str: string, index: number): string;
export default function before<T>(arr: T[], index: number): T[];
export default function before(arr: any, index: number): any {
  return arr.slice(0, index);
}