import { isServer } from '../env';

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