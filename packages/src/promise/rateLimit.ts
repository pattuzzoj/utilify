export default function rate<T extends (...args: any[]) => any>(callback: T, limit: number, interval: number): (...args: Parameters<T>) => boolean {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }
  let calls = 0;

  if (typeof limit !== 'number' || limit <= 0) {
    throw new TypeError(`Expected 'limit' to be a positive number`);
  }

  if (typeof interval !== 'number' || interval <= 0) {
    throw new TypeError(`Expected 'interval' to be a positive number`);
  }

  return (...args: Parameters<T>): boolean => {
    if (calls < limit) {
      if(calls === 0) {
        setTimeout(() => {
          calls = 0;
        }, interval);
      }

      calls++;
      callback(...args);
      return true;
    }

    return false;
  }
}