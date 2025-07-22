export default function defer(callback: () => void): void {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  setTimeout(callback, 1);
}