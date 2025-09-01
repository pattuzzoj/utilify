import { isServer } from '../env';

/**
 * Scrolls an element into view with boolean options.
 * @param {HTMLElement} element - The element to scroll to.
 * @param {boolean} [options] - Scroll options.
 * @returns {void}
 */
export default function scrollToElement(element: HTMLElement, options?: boolean): void;
/**
 * Scrolls an element into view with ScrollIntoViewOptions.
 * @param {HTMLElement} element - The element to scroll to.
 * @param {ScrollIntoViewOptions} [options] - Scroll options.
 * @returns {void}
 */
export default function scrollToElement(element: HTMLElement, options?: ScrollIntoViewOptions): void;
export default function scrollToElement(element: HTMLElement, options: any = { behavior: 'smooth', block: 'start' }): void {
  if (isServer()) return;

  if (!element) {
    throw new Error(`Expected an element for 'element'`);
  }

  element.scrollIntoView(options);
}