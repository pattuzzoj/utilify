export default function isSharedWorker(): boolean {
  // @ts-ignore
  return typeof SharedWorkerGlobalScope !== 'undefined' && self instanceof SharedWorkerGlobalScope;
}