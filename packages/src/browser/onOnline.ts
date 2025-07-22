import on from './on';

export default function onOnline(listener: () => void): () => void {
  return on(window, 'online', listener);
}