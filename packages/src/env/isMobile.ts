import isServer from './isServer';

export default function isMobile(): boolean | undefined {
  if (isServer()) return;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}