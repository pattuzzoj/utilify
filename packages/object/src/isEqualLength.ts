export default function isEqualLength(value1: Record<string, any>, value2: Record<string, any>): boolean;
export default function isEqualLength(value1: unknown[], value2: unknown[]): boolean;
export default function isEqualLength(value1: any, value2: any): boolean {
  return Object.keys(value1).length === Object.keys(value2).length;
}