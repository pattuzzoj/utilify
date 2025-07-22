export default function not<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => boolean {
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for 'fn'`);
  }
  
  return (...args: Parameters<T>) => !fn(...args);
}