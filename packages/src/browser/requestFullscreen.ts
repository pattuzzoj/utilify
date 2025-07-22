import { isServer } from '../env';
import isFullscreenEnabled from './isFullscreenEnabled';

export default async function requestFullscreen(element: Element): Promise<void> {
  // @ts-ignore
  if (isServer()) return;

  if (!isFullscreenEnabled()) {
    return Promise.reject(new Error('Fullscreen API is not supported.'));
  }

  if (element.requestFullscreen) {
    return element.requestFullscreen();
  } else if ((element as any).mozRequestFullScreen) {
    return (element as any).mozRequestFullScreen(); // Firefox
  } else if ((element as any).webkitRequestFullscreen) {
    return (element as any).webkitRequestFullscreen(); // Chrome, Safari and Opera
  } else if ((element as any).msRequestFullscreen) {
    return (element as any).msRequestFullscreen(); // IE/Edge
  }
};