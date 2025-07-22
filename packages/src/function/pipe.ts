export default function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  if (!Array.isArray(callbacks) || !callbacks.every(callback => typeof callback === 'function')) {
    throw new TypeError(`Expected 'callbacks' to be an array of functions`);
  }

  return (value: T): T => callbacks.reduce((currentValue, callback) => callback(currentValue), value);
}