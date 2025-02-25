export default function defer(callback: () => void): void {
  Promise.resolve().then(callback);
}