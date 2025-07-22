export default function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  if (!Array.isArray(callbacks) || !callbacks.every(callback => typeof callback === 'function')) {
    throw new TypeError(`Expected all arguments to be functions`);
  }

  return (value: T): T => callbacks.reduceRight((currentValue, callback) => callback(currentValue), value);
}