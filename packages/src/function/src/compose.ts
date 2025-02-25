export default function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  return (value: T): T => callbacks.reduceRight((currentValue, callback) => callback(currentValue), value);
}