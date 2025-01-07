export default function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T {
  return (...args: any[]): T => callback(...args, ...partial);
}