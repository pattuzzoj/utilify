import { isServer } from '../env';

export default function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  if (isServer()) return;

  window.scrollTo({
    top: 0,
    behavior,
  });
}