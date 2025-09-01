import { describe, test, vi } from 'vitest';
import { JSDOM } from 'jsdom';

import {
	exitFullscreen,
	getLanguage,
	getTheme,
	isCookieEnabled,
	isFullscreenEnabled,
	isOnline,
	isShareable,
	isTabActive,
	isTouchDevice,
	on,
	onOffline,
	onOnline,
	onVisibilityChange,
	requestFullscreen,
	scrollToElement,
	scrollToTop,
	share
} from '../src/browser';

describe('Browser', () => {
	const { window } = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
	// @ts-ignore
	global.window = window;
	global.document = window.document;

	describe.concurrent('isCookieEnabled', () => {
		test.concurrent('should return true when cookies are enabled', ({ expect }) => {
			Object.defineProperty(global, 'navigator', {
				value: { cookieEnabled: true },
				writable: true
			});
			expect(isCookieEnabled()).toBe(true);
		});

		test.concurrent('should return false when cookies are disabled', ({ expect }) => {
			Object.defineProperty(global, 'navigator', {
				value: { cookieEnabled: false },
				writable: true
			});
			expect(isCookieEnabled()).toBe(false);
		});
	});

	describe.concurrent('isFullscreenEnabled', () => {
		test.concurrent('should return true when fullscreen is enabled', ({ expect }) => {
			// @ts-ignore
			global.document = { fullscreenEnabled: true };
			expect(isFullscreenEnabled()).toBe(true);
		});

		test.concurrent('should return false when fullscreen is disabled', ({ expect }) => {
			// @ts-ignore
			global.document = { fullscreenEnabled: false };
			expect(isFullscreenEnabled()).toBe(false);
		});
	});

	describe.concurrent('isOnline', () => {
		test.concurrent('should return true when browser is online', ({ expect }) => {
			Object.defineProperty(global, 'navigator', {
				value: { onLine: true },
				writable: true
			});
			expect(isOnline()).toBe(true);
		});

		test.concurrent('should return false when browser is offline', ({ expect }) => {
			Object.defineProperty(global, 'navigator', {
				value: { onLine: false },
				writable: true
			});
			expect(isOnline()).toBe(false);
		});
	});

	describe.concurrent('isTouchDevice', () => {
		test.concurrent('should return true for touch device', ({ expect }) => {
			// @ts-ignore
			global.window = { ontouchstart: () => {} };
			expect(isTouchDevice()).toBe(true);
			// @ts-ignore
			global.window = {};
		});

		test.concurrent('should return false for non-touch device', ({ expect }) => {
			expect(isTouchDevice()).toBe(false);
		});
	});

	describe.concurrent('getLanguage', () => {
		test.concurrent('should return language code when available', ({ expect }) => {
			Object.defineProperty(global, 'navigator', {
				value: { language: 'en-US' },
				writable: true
			});
			expect(getLanguage()).toBe("en");
		});
	});

	describe.concurrent('getTheme', () => {
		test.concurrent('should return light theme when prefers-color-scheme is light', ({ expect }) => {
			// @ts-ignore
			global.window = {
				matchMedia: vi.fn().mockReturnValue({ matches: true })
			};
			expect(getTheme()).toBe("dark");
		});

		test.concurrent('should return dark theme when prefers-color-scheme is dark', ({ expect }) => {
			// @ts-ignore
			global.window = {
				matchMedia: vi.fn().mockReturnValue({ matches: false })
			};
			expect(getTheme()).toBe("light");
		});
	});

	describe.concurrent('requestFullscreen', () => {
		test.concurrent('should request fullscreen when not in fullscreen mode', ({ expect }) => {
			const requestFullscreenMock = vi.fn();
			Object.defineProperty(global, 'document', {
				value: {
					createElement: () => ({ requestFullscreen: requestFullscreenMock }),
					fullscreenElement: null,
					fullscreenEnabled: true
				},
				writable: true
			});

			const elem = document.createElement('div');

			requestFullscreen(elem);
			expect(requestFullscreenMock).toHaveBeenCalled();
		});
	});

	describe.concurrent('exitFullscreen', () => {
		test.concurrent('should exit fullscreen when in fullscreen mode', ({ expect }) => {
			const exitFullscreenMock = vi.fn();
			const elem = document.createElement('div');
			Object.defineProperty(global, 'document', {
				value: {
					exitFullscreen: exitFullscreenMock,
					fullscreenElement: elem,
					fullscreenEnabled: true
				},
				writable: true
			});
			
			exitFullscreen();
			expect(exitFullscreenMock).toHaveBeenCalled();
		});
	});

	describe.concurrent('isShareable', () => {
		test.concurrent('should return true when share is available', ({ expect }) => {
			// @ts-ignore
			global.navigator = { share: () => {} };
			expect(isShareable()).toBe(true);
		});

		test.concurrent('should return false when share is not available', ({ expect }) => {
			// @ts-ignore
			global.navigator = {};
			expect(isShareable()).toBe(false);
		});
	});

	describe.concurrent('isTabActive', () => {
		test.concurrent('should return true when tab is visible', ({ expect }) => {
			Object.defineProperty(document, 'visibilityState', {
				value: 'visible',
				writable: true
			});
			expect(isTabActive()).toBe(true);
		});

		test.concurrent('should return false when tab is hidden', ({ expect }) => {
			Object.defineProperty(document, 'visibilityState', {
				value: 'hidden',
				writable: true
			});
			expect(isTabActive()).toBe(false);
		});
	});

	describe.concurrent('share', () => {
		test.concurrent('should call navigator.share with correct data', async ({ expect }) => {
			const shareMock = vi.fn();
			// @ts-ignore
			global.navigator = { share: shareMock };
			
			const data = { title: 'Test', text: 'Test text', url: 'https://test.com' };
			await share(data);
			
			expect(shareMock).toHaveBeenCalledWith(data);
		});
	});

	describe.concurrent('scrollToElement', () => {
		test.concurrent('should call scrollIntoView with correct options', ({ expect }) => {
			const scrollIntoViewMock = vi.fn();
			const element = { scrollIntoView: scrollIntoViewMock };
			
			scrollToElement(element as unknown as HTMLElement);
			expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
		});
	});

	describe.concurrent('scrollToTop', () => {
		test.concurrent('should call window.scrollTo with correct options', ({ expect }) => {
			const scrollToMock = vi.fn();
			// @ts-ignore
			global.window = { scrollTo: scrollToMock };
			
			scrollToTop();
			expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
		});
	});

	describe.concurrent('on event listener', () => {
		test.concurrent('should add event listener and return cleanup function', ({ expect }) => {
			const removeEventListenerMock = vi.fn();
			const addEventListenerMock = vi.fn();
			const element = { 
				addEventListener: addEventListenerMock,
				removeEventListener: removeEventListenerMock 
			};
			const handler = () => {};
			
			const cleanup = on(element as unknown as HTMLElement, 'click', handler);
			expect(typeof cleanup).toBe('function');
		});
	});

	describe.concurrent('onOnline event listener', () => {
		test.concurrent('should add online event listener and return cleanup function', ({ expect }) => {
			const removeEventListenerMock = vi.fn();
			const addEventListenerMock = vi.fn();
			// @ts-ignore
			global.window = { 
				addEventListener: addEventListenerMock,
				removeEventListener: removeEventListenerMock 
			};
			const handler = () => {};
			
			const cleanup = onOnline(handler);
			expect(typeof cleanup).toBe('function');
		});
	});

	describe.concurrent('onOffline event listener', () => {
		test.concurrent('should add offline event listener and return cleanup function', ({ expect }) => {
			const removeEventListenerMock = vi.fn();
			const addEventListenerMock = vi.fn();
			// @ts-ignore
			global.window = { 
				addEventListener: addEventListenerMock,
				removeEventListener: removeEventListenerMock 
			};
			const handler = () => {};
			
			const cleanup = onOffline(handler);
			expect(typeof cleanup).toBe('function');
		});
	});

	describe.concurrent('onVisibilityChange event listener', () => {
		test.concurrent('should add visibilitychange event listener and return cleanup function', ({ expect }) => {
			const removeEventListenerMock = vi.fn();
			const addEventListenerMock = vi.fn();
			// @ts-ignore
			global.document = { 
				addEventListener: addEventListenerMock,
				removeEventListener: removeEventListenerMock 
			};
			const handler = () => {};
			
			const cleanup = onVisibilityChange(handler);
			expect(typeof cleanup).toBe('function');
		});
	});
});