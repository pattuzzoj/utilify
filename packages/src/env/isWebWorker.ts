import isDedicatedWorker from "./isDedicatedWorker";
import isSharedWorker from "./isSharedWorker";
import isServiceWorker from "./isServiceWorker";

/**
 * Checks if the current environment is a Web Worker.
 * @returns {boolean} True if running in a Web Worker, false otherwise.
 */
export default function isWebWorker(): boolean {
  return isDedicatedWorker() || isSharedWorker() || isServiceWorker();
}