export default function rate(callback: (...args: any[]) => void, limit: number, interval: number): (...args: any[]) => boolean {
  let calls = 0;

  return (...args: any[]): boolean => {
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