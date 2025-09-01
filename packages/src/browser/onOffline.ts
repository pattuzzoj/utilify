import on from './on';

/**
 * Registers a listener for the offline event.
 * @param {() => void} listener - The callback.
 * @returns {() => void} Function to remove the listener.
 */
export default function onOffline(listener: () => void): () => void {
  return on(window, 'offline', listener);
}