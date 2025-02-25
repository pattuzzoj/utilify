import isFullscreenEnabled from './isFullscreenEnabled';

export default function toggleFullscreen(elem: HTMLElement): void {
  if (!isFullscreenEnabled()) return;

  if (document.fullscreenElement === elem) {
      document.exitFullscreen();
  } else {
      elem.requestFullscreen();
  }
}