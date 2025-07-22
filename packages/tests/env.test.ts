import { afterAll, beforeAll, describe, test, vi } from 'vitest';
import {
	equalsEnv,
  getEnv,
  getOS,
  getRuntime,
  hasEnv,
  isBrowser,
  isBun,
  isDedicatedWorker,
  isDeno,
  isDev,
  isMobile,
  isNode,
  isProd,
  isServer,
  isServiceWorker,
  isSharedWorker,
  isTest,
  isWebWorker,
  requireEnv
} from '../src/env';

describe('Environment', () => {
	describe.concurrent('getRuntime', () => {
		test.concurrent('should return Bun when Bun is defined', ({ expect }) => {
			globalThis.Bun = { version: '1.0.0' };
			expect(getRuntime()).toBe('Bun');
			delete globalThis.Bun;
		});

		test.concurrent('should return Deno when Deno is defined', ({ expect }) => {
			globalThis.Deno = { version: { deno: '1.0.0' } };
			expect(getRuntime()).toBe('Deno');
			delete globalThis.Deno;
		});

		test.concurrent('should return Browser when window.document is defined', ({ expect }) => {
			// @ts-ignore
			globalThis.window = {};
			// @ts-ignore
			globalThis.document = {};
			expect(getRuntime()).toBe('Browser');
			// @ts-ignore
			delete globalThis.window;
			// @ts-ignore
			delete globalThis.document;
		});

		test.concurrent('should default to Node when no environment detected', ({ expect }) => {
			expect(getRuntime()).toBe('Node');
		});
	});

	describe.concurrent('getEnv', () => {
		test.concurrent('should return environment variable value', ({ expect }) => {
			process.env['TEST_KEY'] = 'value';
			expect(getEnv('TEST_KEY')).toBe('value');
			delete process.env['TEST_KEY'];
		});

		test.concurrent('should return fallback if environment variable is undefined', ({ expect }) => {
			expect(getEnv('UNDEFINED_KEY', 'fallback')).toBe('fallback');
		});
	});

	describe.concurrent('hasEnv', () => {
		test.concurrent('should return true if environment variable exists', ({ expect }) => {
			process.env['EXISTING_KEY'] = 'value';
			expect(hasEnv('EXISTING_KEY')).toBe(true);
			delete process.env['EXISTING_KEY'];
		});

		test.concurrent('should return false if environment variable does not exist', ({ expect }) => {
			expect(hasEnv('NON_EXISTING_KEY')).toBe(false);
		});
	});

	describe.concurrent('requireEnv', () => {
		test.concurrent('should return environment variable value if exists', ({ expect }) => {
			process.env['REQUIRED_KEY'] = 'value';
			expect(requireEnv('REQUIRED_KEY')).toBe('value');
			delete process.env['REQUIRED_KEY'];
		});

		describe.concurrent('should throw error if environment variable does not exist', () => {
			test.concurrent('throws error', ({ expect }) => {
				expect(() => requireEnv('MISSING_KEY')).toThrow(Error);
			});
		});
	});

	describe.concurrent('equalsEnv', () => {
		test.concurrent('should return true if environment variable equals expected string', ({ expect }) => {
			process.env['EQUALS_KEY'] = 'value';
			expect(equalsEnv('EQUALS_KEY', 'value')).toBe(true);
			delete process.env['EQUALS_KEY'];
		});

		test.concurrent('should return false if environment variable does not equal expected string', ({ expect }) => {
			process.env['EQUALS_KEY'] = 'value';
			expect(equalsEnv('EQUALS_KEY', 'other')).toBe(false);
			delete process.env['EQUALS_KEY'];
		});

		test.concurrent('should return true if environment variable equals one of expected strings', ({ expect }) => {
			process.env['EQUALS_KEY'] = 'value';
			expect(equalsEnv('EQUALS_KEY', ['value', 'other'])).toBe(true);
			delete process.env['EQUALS_KEY'];
		});

		test.concurrent('should return false if environment variable does not equal any of expected strings', ({ expect }) => {
			expect(equalsEnv('EQUALS_KEY', ['value', 'other'])).toBe(false);
		});
	});

// ... existing tests ...

	beforeAll(() => {
		vi.spyOn(console, 'error').mockImplementation(() => { });
	});

	afterAll(() => {
		vi.restoreAllMocks();
	});

	describe.concurrent('getOS', () => {
		test.concurrent.for([
			{
				name: 'detects Windows OS',
				userAgent: 'Windows',
				expectedOS: 'Windows'
			},
			{
				name: 'detects Mac OS',
				userAgent: 'Mac',
				expectedOS: 'macOS'
			},
			{
				name: 'detects Linux OS',
				userAgent: 'Linux',
				expectedOS: 'Linux'
			},
			{
				name: 'detects Android OS',
				userAgent: 'Android',
				expectedOS: 'Android'
			},
			{
				name: 'detects iOS',
				userAgent: 'iPhone',
				expectedOS: 'iOS'
			},
			{
				name: 'returns Unknown for unrecognized OS',
				userAgent: 'Unknown',
				expectedOS: 'Unknown'
			}
		])("$name", async ({ userAgent, expectedOS }, { expect }) => {
			Object.defineProperty(globalThis, 'navigator', {
				value: { userAgent },
				configurable: true
			});
			expect(getOS()).toBe(expectedOS);
			// @ts-ignore
			delete globalThis.navigator;
		});
	});

	describe.concurrent('isBrowser', () => {
		test.concurrent('should return true in a browser environment', ({ expect }) => {
			// Simulate browser environment
			// @ts-ignore
			globalThis.window = {};
			// @ts-ignore
			globalThis.document = {};
			expect(isBrowser()).toBe(true);
			// @ts-ignore
			delete globalThis.window;
			// @ts-ignore
			delete globalThis.document;
		});

		test.concurrent('should return false outside a browser environment', ({ expect }) => {
			expect(isBrowser()).toBe(false);
		});
	});

	describe.concurrent('isBun', () => {
		test.concurrent('should return true in a Bun environment', ({ expect }) => {
			// Simulate Bun environment
			globalThis.Bun = { version: '1.0.0' };
			expect(isBun()).toBe(true);
			delete globalThis.Bun;
		});

		test.concurrent('should return false outside a Bun environment', ({ expect }) => {
			expect(isBun()).toBe(false);
		});
	});

	describe.concurrent('isDedicatedWorker', () => {
		test.concurrent('should return true in a Dedicated Worker environment', ({ expect }) => {
			class FakeDedicatedWorkerGlobalScope { }

			// @ts-ignore
			globalThis.DedicatedWorkerGlobalScope = FakeDedicatedWorkerGlobalScope;
			// @ts-ignore
			globalThis.self = new FakeDedicatedWorkerGlobalScope();

			expect(isDedicatedWorker()).toBe(true);

			// @ts-ignore
			delete globalThis.DedicatedWorkerGlobalScope;
			// @ts-ignore
			delete globalThis.self;
		});

		test.concurrent('should return false outside a Dedicated Worker environment', ({ expect }) => {
			expect(isDedicatedWorker()).toBe(false);
		});
	});

	describe.concurrent('isDeno', () => {
		test.concurrent('should return true in a Deno environment', ({ expect }) => {
			// Simulate Deno environment
			globalThis.Deno = { version: { deno: '1.0.0' } };
			expect(isDeno()).toBe(true);
			delete globalThis.Deno;
		});

		test.concurrent('should return false outside a Deno environment', ({ expect }) => {
			expect(isDeno()).toBe(false);
		});
	});

	describe.concurrent('isDev', () => {
		test.concurrent('should return true in a development environment', ({ expect }) => {
			// Simulate development environment
			process.env['NODE_ENV'] = 'development';
			expect(isDev()).toBe(true);
			delete process.env['NODE_ENV'];
		});

		test.concurrent('should return false outside a development environment', ({ expect }) => {
			expect(isDev()).toBe(false);
		});
	});

	describe.concurrent('isMobile', () => {
		test.concurrent('returns undefined', ({ expect }) => {
			expect(isMobile()).toBeUndefined();
		});
	});

	describe.concurrent('isNode', () => {
		test.concurrent('returns true', ({ expect }) => {
			expect(isNode()).toBe(true);
		});
	});

	describe.concurrent('isProd', () => {
		test.concurrent('should return true in a production environment', ({ expect }) => {
			// Simulate production environment
			process.env['NODE_ENV'] = 'production';
			expect(isProd()).toBe(true);
			delete process.env['NODE_ENV'];
		});

		test.concurrent('should return false outside a production environment', ({ expect }) => {
			expect(isProd()).toBe(false);
		});
	});

	describe.concurrent('isServer', () => {
		test.concurrent('returns false when window and document exist', ({ expect }) => {
			// @ts-ignore
			globalThis.window = {};
			// @ts-ignore
			globalThis.document = {};
			expect(isServer()).toBe(false);
			// @ts-ignore
			delete globalThis.window;
			// @ts-ignore
			delete globalThis.document;
		});

		test.concurrent('returns true when window and document do not exist', ({ expect }) => {
			expect(isServer()).toBe(true);
		});
	});

	describe.concurrent('isServiceWorker', () => {
		test.concurrent('should return true in a Service Worker environment', ({ expect }) => {
			class FakeServiceWorkerGlobalScope { }

			// @ts-ignore
			globalThis.ServiceWorkerGlobalScope = FakeServiceWorkerGlobalScope;
			// @ts-ignore
			globalThis.self = new FakeServiceWorkerGlobalScope();

			expect(isServiceWorker()).toBe(true);

			// @ts-ignore
			delete globalThis.ServiceWorkerGlobalScope;
			// @ts-ignore
			delete globalThis.self;
		});

		test.concurrent('should return false outside a Service Worker environment', ({ expect }) => {
			expect(isServiceWorker()).toBe(false);
		});
	});

	describe.concurrent('isSharedWorker', () => {
		test.concurrent('should return true in a Shared Worker environment', ({ expect }) => {
			class FakeSharedWorkerGlobalScope { }

			// @ts-ignore
			globalThis.SharedWorkerGlobalScope = FakeSharedWorkerGlobalScope;
			// @ts-ignore
			globalThis.self = new FakeSharedWorkerGlobalScope();

			expect(isSharedWorker()).toBe(true);

			// @ts-ignore
			delete globalThis.SharedWorkerGlobalScope;
			// @ts-ignore
			delete globalThis.self;
		});

		test.concurrent('should return false outside a Shared Worker environment', ({ expect }) => {
			expect(isSharedWorker()).toBe(false);
		});
	});

	describe.concurrent('isTest', () => {
		test.concurrent('returns true', ({ expect }) => {
			process.env['NODE_ENV'] = 'test';
			expect(isTest()).toBe(true);
			delete process.env['NODE_ENV'];
		});
	});

	describe.concurrent('isWebWorker', () => {
		test.concurrent('returns false when not in web worker', ({ expect }) => {
			expect(isWebWorker()).toBe(false);
		});

		test.concurrent('returns true when in web worker', ({ expect }) => {
			class FakeSharedWorkerGlobalScope { }

			// @ts-ignore
			globalThis.SharedWorkerGlobalScope = FakeSharedWorkerGlobalScope;
			// @ts-ignore
			globalThis.self = new FakeSharedWorkerGlobalScope();

			expect(isWebWorker()).toBe(true);

			// @ts-ignore
			delete globalThis.SharedWorkerGlobalScope;
			// @ts-ignore
			delete globalThis.self;
		});
	});
});