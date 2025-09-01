import on from './on';

/**
 * Registers a listener for the online event.
 * @param {() => void} listener - The callback.
 * @returns {() => void} Function to remove the listener.
 */
export default function onOnline(listener: () => void): () => void {
  return on(window, 'online', listener);
}