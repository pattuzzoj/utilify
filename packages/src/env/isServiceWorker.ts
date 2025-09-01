/**
 * Checks if the current environment is a Service Worker.
 * @returns {boolean} True if running in a Service Worker, false otherwise.
 */
export default function isServiceWorker(): boolean {
  // @ts-ignore
  return typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope;
}
