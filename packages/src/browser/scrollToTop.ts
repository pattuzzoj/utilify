import { isServer } from '../env';

/**
 * Scrolls the window to the top of the page.
 * @param {ScrollBehavior} [behavior='smooth'] - The scroll behavior.
 * @returns {void}
 */
export default function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  if (isServer()) return;

  window.scrollTo({
    top: 0,
    behavior,
  });
}