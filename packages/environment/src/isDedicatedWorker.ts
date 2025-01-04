export default function isDedicatedWorker(): boolean {
  // @ts-ignore
  return typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}
