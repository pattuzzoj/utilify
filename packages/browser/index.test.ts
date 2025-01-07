jest.mock('@utilify/environment', () => ({
	isServer: jest.fn(),
}));

import {
	getLanguage,
	getTheme,
	isCookieEnabled,
	isFullscreenEnabled,
	isOnline,
	isTouchDevice,
	toggleFullscreen
} from './src';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// @ts-ignore
global.window = window;
global.document = window.document;
// @ts-ignore
global.navigator = {
	userAgent: 'node.js',
};

afterAll(() => {
	jest.clearAllMocks();
});

describe('Browser Utility Functions', () => {
	beforeEach(() => {
		require('@utilify/environment').isServer.mockReturnValue(false);
	});

	test('isCookieEnabled', () => {
		// @ts-ignore
		global.navigator = {
			cookieEnabled: true
		};
		expect(isCookieEnabled()).toBeTruthy();
	});

	test('isFullscreenEnabled', () => {
		// @ts-ignore
		global.document = {
			fullscreenEnabled: true
		}
		expect(isFullscreenEnabled()).toBeTruthy();
	});

	test('isOnline', () => {
		// @ts-ignore
		global.navigator = {
			onLine: true
		};
		expect(isOnline()).toBeTruthy();
	});

	test('isTouchDevice', () => {
		expect(isTouchDevice()).toBeFalsy();
	});

	test('getLanguage', () => {
		// @ts-ignore
		global.navigator = {
			language: "en-US"
		};
		expect(getLanguage()).toBe("en");
	});

	test('getTheme', () => {
		// @ts-ignore
		global.window.matchMedia = jest.fn(() => true);
		expect(getTheme()).toBe("light");
	});

	test('toggleFullscreen', () => {
		Object.defineProperty(document, 'fullscreenElement', {
			value: null,
		});

		Object.defineProperty(document, 'createElement', {
			value: () => {
				return {
					exitFullscreen: () => true,
					requestFullscreen: () => true
				}
			},
		});

		const elem = document.createElement('div');
		toggleFullscreen(elem);
		expect(document.fullscreenElement).toBe(null);
	});
});
