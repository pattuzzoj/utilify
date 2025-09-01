import { isServer } from '../env';
import isFullscreenEnabled from './isFullscreenEnabled';

/**
 * Exits fullscreen mode in the browser.
 * @returns {Promise<void>} Resolves when fullscreen is exited.
 * @throws {Error} If fullscreen API is not supported.
 */
export default async function exitFullscreen(): Promise<void> {
  // @ts-ignore
  if (isServer()) return;

  if (!isFullscreenEnabled()) {
    return Promise.reject(new Error('Fullscreen API is not supported.'));
  }
  
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  } else if ((document as any).mozCancelFullScreen) {
    return (document as any).mozCancelFullScreen(); // Firefox
  } else if ((document as any).webkitExitFullscreen) {
    return (document as any).webkitExitFullscreen(); // Chrome, Safari and Opera
  } else if ((document as any).msExitFullscreen) {
    return (document as any).msExitFullscreen(); // IE/Edge
  }
};