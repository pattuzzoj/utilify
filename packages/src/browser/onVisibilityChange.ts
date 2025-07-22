import on from './on';

export default function onVisibilityChange(listener: (visibilityState: Document['visibilityState']) => void): () => void {
  return on(document, 'visibilitychange', () => listener(document.visibilityState));
}