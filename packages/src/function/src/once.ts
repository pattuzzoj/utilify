export default function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T {
  let called = false;
  let result: T;

  return (...args: any[]): T => {
    if(!called) {
      called = true;
      result = callback(...args);
    };

    return result;
  }
}