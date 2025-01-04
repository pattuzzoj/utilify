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
	toggleFullscreen,
	hash,
	randomUUID
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

describe('Array Utility Functions', () => {
	beforeEach(() => {
		require('@utilify/environment').isServer.mockReturnValue(true);
	});

	test('isCookieEnabled', () => {
		expect(isCookieEnabled()).toBeUndefined();
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

	describe('hash function', () => {
		beforeEach(() => {
			require('@utilify/environment').isServer.mockReturnValue(false);
		});

		const data = 'Hello, world!';
		const arrayBuffer = new TextEncoder().encode(data);

		test('should hash data using SHA-256 and return hex output', async () => {
			const result = await hash(data, 'SHA-256', 'hex');
			expect(result).toMatch(/^[a-f0-9]{64}$/);
		});

		test('should hash data using SHA-256 and return base64 output', async () => {
			const result = await hash(data, 'SHA-256', 'base64');
			expect(result).toMatch(/^[A-Za-z0-9+/]+={0,2}$/);
		});

		test('should hash data using SHA-256 and return buffer output', async () => {
			const result = await hash(data, 'SHA-256', 'buffer');
			expect(result).toBeInstanceOf(ArrayBuffer);
		});

		test('should hash ArrayBuffer data using SHA-256 and return hex output', async () => {
			const result = await hash(arrayBuffer, 'SHA-256', 'hex');
			expect(result).toMatch(/^[a-f0-9]{64}$/);
		});

		test('should hash ArrayBuffer data using SHA-256 and return base64 output', async () => {
			const result = await hash(arrayBuffer, 'SHA-256', 'base64');
			expect(result).toMatch(/^[A-Za-z0-9+/]+={0,2}$/);
		});

		test('should hash ArrayBuffer data using SHA-256 and return buffer output', async () => {
			const result = await hash(arrayBuffer, 'SHA-256', 'buffer');
			expect(result).toBeInstanceOf(ArrayBuffer);
		});
	});

	describe('randomUUID function', () => {
		beforeEach(() => {
			require('@utilify/environment').isServer.mockReturnValue(false);
		});

		test('should return undefined if Crypto API is not available', () => {
			const result = randomUUID();
			expect(result).toMatch(
				/^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/
			);
		});

		test('should generate a valid UUID', () => {
			const uuid = randomUUID();
			expect(uuid).toMatch(
				/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
			);
		});
	});
});
