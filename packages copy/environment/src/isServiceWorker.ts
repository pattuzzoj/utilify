export default function isServiceWorker(): boolean {
  // @ts-ignore
  return typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope;
}
