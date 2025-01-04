import {
	getLanguage,
	getTheme,
	isCookieEnabled,
	isCryptoAvailable,
	isFullscreenEnabled,
	isOnline,
	isTouchDevice,
	toggleFullscreen,
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

describe('Array Utility Functions', () => {
	test('isCookieEnabled', () => {
		expect(isCookieEnabled()).toBeUndefined();
	});

	test('isCryptoAvailable', () => {
		expect(isCryptoAvailable()).toBe(undefined);
	});

	test('isFullscreenEnabled', () => {
		expect(isFullscreenEnabled()).toBeUndefined();
	});

	test('isOnline', () => {
		expect(isOnline()).toBeUndefined();
	});

	test('isTouchDevice', () => {
		expect(isTouchDevice()).toBeUndefined();
	});

	test('getLanguage', () => {
		expect(getLanguage()).toBeUndefined();
	});

	test('getTheme', () => {
		expect(getTheme()).toBeUndefined();
	});

	test('toggleFullscreen', () => {
		Object.defineProperty(document, 'fullscreenElement', {
			value: null,
		});
		
		const elem = document.createElement('div');
		document.body.appendChild(elem);
		toggleFullscreen(elem);
		expect(document.fullscreenElement).toBe(null);
	});
});
