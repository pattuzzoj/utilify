export default function once<T extends (...args: any[]) => any>(callback: T): (...args: Parameters<T>) => ReturnType<T> {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }
  
  let called = false;
  let result: ReturnType<T>;

  return (...args: Parameters<T>): ReturnType<T> => {
    if (!called) {
      called = true;
  
      try {
        result = callback(...args);
      } catch (error) {
        throw error;
      }
    };

    return result;
  }
}