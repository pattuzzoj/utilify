import isDedicatedWorker from "./isDedicatedWorker";
import isSharedWorker from "./isSharedWorker";
import isServiceWorker from "./isServiceWorker";

export default function isWebWorker(): boolean {
  return isDedicatedWorker() || isSharedWorker() || isServiceWorker();
}