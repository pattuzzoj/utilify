import { isServer } from '../env';

export default function scrollToElement(element: HTMLElement, options?: boolean): void;
export default function scrollToElement(element: HTMLElement, options?: ScrollIntoViewOptions): void;
export default function scrollToElement(element: HTMLElement, options: any = { behavior: 'smooth', block: 'start' }): void {
  if (isServer()) return;

  if (!element) {
    throw new Error(`Expected an element for 'element'`);
  }

  element.scrollIntoView(options);
}