import on from './on';

/**
 * Registers a listener for document visibility changes.
 * @param {(visibilityState: Document['visibilityState']) => void} listener - The callback.
 * @returns {() => void} Function to remove the listener.
 */
export default function onVisibilityChange(listener: (visibilityState: Document['visibilityState']) => void): () => void {
  return on(document, 'visibilitychange', () => listener(document.visibilityState));
}