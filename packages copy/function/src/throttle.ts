export default function throttle(callback: (...args: any[]) => void, wait: number = 300): (...args: any[]) => void {
  let timerId: number | null;

  return (...args: any[]): void => {
    if(!timerId) {
      timerId = setTimeout(() => timerId = null, wait) as any as number;
      callback(...args);
    }
  }
}