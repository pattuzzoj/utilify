export default function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void {
  let timerId: number;

  return (...args: any[]): void => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay) as unknown as number;
  }
}