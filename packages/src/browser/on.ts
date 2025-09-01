import { isServer } from '../env';

/**
 * Registers an event listener and returns a function to remove it.
 * @template T
 * @param {T} target - The event target.
 * @param {string} event - The event name.
 * @param {(this: T, ev: Event) => any} listener - The event listener.
 * @param {boolean|AddEventListenerOptions} [options] - Listener options.
 * @returns {() => void} Function to remove the listener.
 */
export default function on<T extends Window | Document | HTMLElement | EventTarget>(
  target: T,
  event: keyof WindowEventMap | keyof DocumentEventMap | keyof HTMLElementEventMap,
  listener: (this: T, ev: Event) => any,
  options?: boolean | AddEventListenerOptions
): () => void {
  // @ts-ignore
  if (isServer()) return;

  target.addEventListener(event, listener, options);

  return () => {
    target.removeEventListener(event, listener, options);
  };
}