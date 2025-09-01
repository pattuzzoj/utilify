/**
 * Checks if the current environment is a Shared Worker.
 * @returns {boolean} True if running in a Shared Worker, false otherwise.
 */
export default function isSharedWorker(): boolean {
  // @ts-ignore
  return typeof SharedWorkerGlobalScope !== 'undefined' && self instanceof SharedWorkerGlobalScope;
}