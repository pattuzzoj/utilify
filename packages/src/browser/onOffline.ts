import on from './on';

export default function onOffline(listener: () => void): () => void {
  return on(window, 'offline', listener);
}