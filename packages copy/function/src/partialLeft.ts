export default function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T {
  return (...args: any[]): T => callback(...partial, ...args);
}