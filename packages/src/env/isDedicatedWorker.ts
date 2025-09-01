/**
 * Checks if the current environment is a Dedicated Worker.
 * @returns {boolean} True if running in a Dedicated Worker, false otherwise.
 */
export default function isDedicatedWorker(): boolean {
  // @ts-ignore
  return typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}
