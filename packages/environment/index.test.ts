import {
	getOS,
	isBrowser,
	isBun,
	isDeno,
	isMobile,
	isNode,
	isServer,
	isWebWorker,
	isDedicatedWorker,
	isSharedWorker,
	isServiceWorker,
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

describe('Environment Utility Functions', () => {
	test('isNode', () => {
		expect(isNode()).toBe(true);
	});

	test('isDeno', () => {
		expect(isDeno()).toBe(false);
	});

	test('isBun', () => {
		expect(isBun()).toBe(false);
	});

	test('isServer', () => {
		expect(isServer()).toBe(true);
	});

	test('isBrowser', () => {
		expect(isBrowser()).toBe(true);
	});

	test('isWebWorker', () => {
		expect(isWebWorker()).toBe(false);
	});

	test('isDedicatedWorker', () => {
		expect(isDedicatedWorker()).toBe(false);
	});

	test('isSharedWorker', () => {
		expect(isSharedWorker()).toBe(false);
	});

	test('isServiceWorker', () => {
		expect(isServiceWorker()).toBe(false);
	});

	test('isMobile', () => {
		expect(isMobile()).toBeUndefined();
	});

	test('getOS', () => {
		expect(getOS()).toBe('Unknown');
	});
});
